"use client";

import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<"dark" | "lofi">(() => {
    if (typeof window === "undefined") {
      return "lofi";
    }
    const storedTheme = window.localStorage.getItem("theme");
    return storedTheme === "dark" || storedTheme === "lofi" ? storedTheme : "lofi";
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme] as const;
};
