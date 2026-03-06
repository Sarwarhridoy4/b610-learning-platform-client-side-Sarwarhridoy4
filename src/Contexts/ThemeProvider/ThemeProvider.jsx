import { createContext, useCallback, useEffect, useMemo, useState } from "react";

export const ThemeContext = createContext();

const STORAGE_KEY = "ui-theme";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  return savedTheme === "midnight" ? "midnight" : "mist";
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-ui-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "mist" ? "midnight" : "mist"));
  }, []);

  const value = useMemo(
    () => ({
      theme,
      isDarkTheme: theme === "midnight",
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
