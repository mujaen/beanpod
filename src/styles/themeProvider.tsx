import { Global, ThemeProvider } from "@emotion/react";

import React, { useState, useEffect, useCallback, ReactNode } from "react";

import base from "#styles/base";
import reset from "#styles/reset";
import { mode } from "#styles/theme";

interface Props {
  children: ReactNode;
}

export const CustomThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(mode.light);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("mode", `${isDark ? "dark" : "light"}`);
    if (window.localStorage.getItem("mode") === "dark") {
      setTheme(mode.dark);
    }
    if (window.localStorage.getItem("mode") === "light") {
      setTheme(mode.light);
    }
  }, [isDark]);

  const toggleButtonClick = useCallback(() => {
    setIsDark((current) => !current);
  }, [isDark]);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <Global styles={base(theme)} />
      <button
        style={{ display: "none" }}
        type="button"
        onClick={toggleButtonClick}
      >
        {isDark ? "라이트모드로 보기" : "다크모드로 보기"}
      </button>
      {children}
    </ThemeProvider>
  );
};
