"use client";

import { useEffect, useRef } from "react";

type TypingPlaceholderInputProps = {
  // "|"-joined list, mirrors the original's data-placeholders attribute.
  placeholders: string;
  interval?: number;
  type?: "email" | "text";
};

// Mirrors assets/js/main.js `animateInput` verbatim, including its quirk:
// the outer setInterval (every `interval`ms) keeps calling typeOut() while
// !isTyping, which stays true for the whole 800ms typing-out window, so
// typeOut() can fire several times back-to-back and queue multiple
// overlapping 800ms timeouts — not guarded against here on purpose, per
// CLAUDE.md rule 4 (keep the original's behavior, quirks included).
// Shared by aitech (type="email") and aicontentwriter (type="text") — same
// markup/logic in both originals, only the input type attribute differs.
export default function TypingPlaceholderInput({
  placeholders,
  interval = 100,
  type = "email",
}: TypingPlaceholderInputProps) {
  const placeholderRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = placeholderRef.current;
    if (!el) return;

    const list = placeholders.split("|");
    let currentIndex = 0;
    let isTyping = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    function typeIn() {
      isTyping = true;
      el!.textContent = list[currentIndex];
      el!.className = "placeholder-text typing-animation typing-in";
      timeouts.push(
        setTimeout(() => {
          isTyping = false;
        }, 2000),
      );
    }

    function typeOut() {
      if (isTyping) return;
      el!.className = "placeholder-text typing-animation typing-out";
      timeouts.push(
        setTimeout(() => {
          currentIndex = (currentIndex + 1) % list.length;
          typeIn();
        }, 800),
      );
    }

    typeIn();
    const intervalId = setInterval(() => {
      if (!isTyping) typeOut();
    }, interval);

    return () => {
      clearInterval(intervalId);
      timeouts.forEach(clearTimeout);
    };
  }, [placeholders, interval]);

  return (
    <fieldset className="position-relative">
      <input type={type} className="input-field animated-input" placeholder=" " />
      <div className="placeholder-wrapper">
        <span className="placeholder-text typing-animation" ref={placeholderRef} />
        <span className="cursor" />
      </div>
    </fieldset>
  );
}
