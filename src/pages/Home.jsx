import React, { useContext, useState } from "react";
import "./home.scss";
import profileImage from "../assets/profil2.png";
import { ThemeContext } from "../context/theme";
import { motion } from "framer-motion";
import {IoMdConstruct} from "react-icons/io"
import { GrFormClose } from "react-icons/gr";

const Home = () => {
  const { lang } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="homeContainer">
        <motion.div className="box">
          <motion.img
            initial={{ rotate: 180, opacity: 0, scale: 0 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 180, opacity: 0, scale: 0 }}
            transition={{
              duration: 0.8,
            }}
            className="profileImage"
            src={profileImage}
            alt=""
          />
        </motion.div>
        <motion.div
          key="pop"
          className="popup"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="name">Marcus Fyrstenberg</h1>
        </motion.div>
      </div>
      {toggle &&
      <div className="construct"><IoMdConstruct />    <GrFormClose
      className="ClosePopUp"
      onClick={() => setToggle(!toggle)}
      /> <h2 className="langConstruct">{lang.construct}</h2></div>
    }
    </>
  );
};

export default Home;
