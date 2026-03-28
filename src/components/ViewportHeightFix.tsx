"use client";

import { useEffect } from "react";

/**
 * Ustawia CSS custom property --real-vh raz przy pierwszym renderze,
 * zanim przeglądarka zacznie chować/pokazywać paski UI.
 * Dzięki temu hero i inne elementy oparte na tej wartości nie "skaczą"
 * gdy pojawia się dolny/górny pasek przeglądarki podczas scrollu.
 */
export function ViewportHeightFix() {
  useEffect(() => {
    const px = window.innerHeight;
    document.documentElement.style.setProperty("--real-vh", `${px}px`);
  }, []);

  return null;
}
