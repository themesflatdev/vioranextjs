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
};

// Replaces the original jQuery "nice-select" plugin — keeps the same
// .nice-select/.current/.list/.option/.selected markup so the theme's CSS
// (open/close transition, selected highlight) keeps working unmodified.
export default function NiceSelect({ options, value, onChange, className }: NiceSelectProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const selected = options.find((option) => option.value === value) ?? options[0];

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
      <span className="current">{selected?.label}</span>
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
