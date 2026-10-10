"use client";

import { useEffect, useRef, useState } from "react";

export type NiceSelectOption = {
  value: string;
  label: string;
};

type NiceSelectProps = {
  options: NiceSelectOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  // Initial label shown when `value` matches no option (e.g. "" before the
  // user picks anything) — some theme forms (logistics book-move) show a
  // label like "Choose Services" that isn't one of the real options.
  placeholder?: string;
};

// Replaces the original jQuery "nice-select" plugin — keeps the same
// .nice-select/.current/.list/.option/.selected markup so the theme's CSS
// (open/close transition, selected highlight) keeps working unmodified.
export default function NiceSelect({ options, value, onChange, className, placeholder }: NiceSelectProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const selected = options.find((option) => option.value === value) ?? (placeholder ? undefined : options[0]);
  const currentLabel = selected ? selected.label : placeholder;

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  return (
    <div
      className={`nice-select${open ? " open" : ""}${className ? ` ${className}` : ""}`}
      tabIndex={0}
      ref={wrapperRef}
      onClick={() => setOpen((v) => !v)}
    >
      <span className="current">{currentLabel}</span>
      <ul className="list">
        {options.map((option) => (
          <li
            key={option.value}
            data-value={option.value || undefined}
            className={`option${option.value === value ? " selected" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              onChange(option.value);
              setOpen(false);
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
