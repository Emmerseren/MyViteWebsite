import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./context/theme";
import "./variables.scss";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import Nav from "./Components/Nav";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="app" data-theme={theme}>
        <Router>
          <Nav />
          <div className="Contentwrapper">
            <AnimatedRoutes />
          </div>
        </Router>
      </div>
    </>
  );
};

export default App;
