"use client";

import { useEffect } from "react";

/**
 * Ustawia --real-vh raz przy montowaniu (innnerHeight przed pierwszym scrollem),
 * a następnie tylko przy zmianie orientacji ekranu.
 * NIE reaguje na zwykły resize – to zapobiega glitchowi na mobile, gdy przeglądarka
 * chowa/pokazuje pasek adresu podczas scrollowania.
 */
export function ViewportHeightFix() {
  useEffect(() => {
    const set = () => {
      document.documentElement.style.setProperty("--real-vh", `${window.innerHeight}px`);
    };
    set();
    window.addEventListener("orientationchange", set);
    return () => window.removeEventListener("orientationchange", set);
  }, []);

  return null;
}
