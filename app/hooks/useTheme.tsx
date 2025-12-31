"use client";

import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<"dark" | "lofi">("lofi");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, setTheme] as const;
};
