import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/theme";
import { MdDarkMode, MdLightMode} from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiAdobecreativecloud, SiReact } from "react-icons/si";
import {FaUserCircle} from "react-icons/fa"
import text from "../text.json";

import "./nav.scss";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const { theme, toggleTheme, toggleLang, lang } = useContext(ThemeContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  const animate = {
    offscreen: { y: -100, opacity: 0.3 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.1 },
    },
  };

  const menuToggler = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <>
      <nav className="navBar">
        <AnimatePresence>
          <motion.div
            className="menu"
            onClick={menuToggler}
          >
            <motion.span
              className="line one"
              initial={toggleMenu ? { rotate: 0 } : { rotate: 45 }}
              animate={toggleMenu ? { rotate: 45, y: 12 } : { rotate: 0 }}
              exit={toggleMenu ? { rotate: 0 } : { rotate: 45 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
            ></motion.span>

            <motion.span
              className="line two"
              initial={toggleMenu ? { rotate: 0 } : { rotate: 45 }}
              animate={toggleMenu ? { rotate: -45 } : { rotate: 0 }}
              exit={toggleMenu ? { rotate: 0 } : { rotate: 45 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
            ></motion.span>
            <motion.span
              className="line three"
              initial={toggleMenu ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              animate={toggleMenu ? { scale: 0, opacity: 0 } : { scale: 1,opacity: 1 }}
              exit={toggleMenu ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
            >
      
            </motion.span>
         
          </motion.div>
          {toggleMenu && (
            <motion.ul
              key="nav"
              initial={{ x: "-110", scale: 0 }}
              animate={{ x: 0, scale: 1 }}
              exit={{ x: "-100%", scale: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div
                className="links"
                initial={"offscreen"}
                animate={"onscreen"}
                transition={{ staggerChildren: 0.1 }}
              >
                <motion.li variants={animate} onClick={menuToggler}>
                  <NavLink end to="/">
                  <FaUserCircle />
                  </NavLink>
                </motion.li>
                <motion.li variants={animate} onClick={menuToggler}>
                  <NavLink to="adobe">
                    <SiAdobecreativecloud />
                  </NavLink>
                </motion.li>
                <motion.li
                  variants={animate}
                  className="reactLogo"
                  onClick={menuToggler}
                >
                  <NavLink to="react">
                    <SiReact />
                  </NavLink>
                </motion.li>
                <motion.li variants={animate}>
                  <a href="https://www.linkedin.com/home?originalSubdomain=dk">
                    <BsLinkedin />
                  </a>
                </motion.li>
                <motion.li variants={animate}>
                  <a href="https://github.com/Emmerseren">
                    <BsGithub />
                  </a>
                </motion.li>
              </motion.div>
              <div className="futures">
                <li className="theme">
                  {theme == "light" ? (
                    <MdLightMode onClick={toggleTheme} />
                  ) : (
                    <MdDarkMode onClick={toggleTheme} />
                  )}
                </li>
                <li className="language">
                {lang === text.textDanish ? (
                  <p onClick={toggleLang} >En</p>
                  ) : (
                    <p onClick={toggleLang}>Dk</p>
                  )}
                </li>
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Nav;
