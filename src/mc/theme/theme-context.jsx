import { useEffect, useState } from "react";
import { createContext,useContext } from "react";

const ThemeContext = createContext();


// creating custom hook
export const useTheme = () => {
  return useContext(ThemeContext);
}


// this will have all the logic and will wrap our app with this
export const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // function to change our theme
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const theme = isDarkMode ? "dark" : "light";

  // Html tag <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDarkMode])

  return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}