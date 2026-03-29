"use client";

import { useEffect } from "react";

/**
 * Ustawia --real-vh = window.innerHeight (aktualizacja przy resize / orientacji),
 * żeby hero mógł dokładnie wypełniać widoczny obszar pod nagłówkiem.
 */
export function ViewportHeightFix() {
  useEffect(() => {
    const set = () => {
      document.documentElement.style.setProperty("--real-vh", `${window.innerHeight}px`);
    };
    set();
    window.addEventListener("resize", set);
    window.addEventListener("orientationchange", set);
    return () => {
      window.removeEventListener("resize", set);
      window.removeEventListener("orientationchange", set);
    };
  }, []);

  return null;
}
