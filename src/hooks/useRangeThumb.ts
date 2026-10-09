"use client";

import { useEffect, useRef, useState } from "react";

// Port of main.js rangeSlide(): thumb left offset = percent*(sliderWidth-40)+20,
// recomputed on input and on resize (ResizeObserver covers container resize too).
export function useRangeThumb(min: number, max: number, initial: number) {
  const [value, setValue] = useState(initial);
  const [offset, setOffset] = useState(20);
  const sliderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const update = () => {
      const sliderWidth = slider.offsetWidth;
      const percent = (value - min) / (max - min);
      setOffset(percent * (sliderWidth - 40) + 20);
    };

    update();

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(slider);
    return () => resizeObserver.disconnect();
  }, [value, min, max]);

  return { value, setValue, offset, sliderRef };
}
