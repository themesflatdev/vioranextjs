"use client";

import { useEffect, useState } from "react";

/** SSR-safe `matchMedia` subscription, e.g. `useMediaQuery("(max-width: 767px)")`. */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    // window.matchMedia is a browser-only API, unavailable during SSR/render
    // — the initial value can only be read here, not derived from props.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMatches(mql.matches);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", listener);
    return () => mql.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
