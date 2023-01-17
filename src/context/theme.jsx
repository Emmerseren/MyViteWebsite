import { createContext, useEffect, useState } from "react";
import text from "../text.json";

export const ThemeContext = createContext(null);

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("light");
  const [lang, setLangData] = useState(text.textDanish);

  const toggleLang = () => {
    setLangData((curr) =>
      curr === text.textDanish ? text.textEnglish : text.textDanish
    );
  };

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, toggleLang, lang }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
