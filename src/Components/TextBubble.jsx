import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import "./textbubble.scss";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import Parser from "html-react-parser"
import { ReactComponent as AdobeLogo } from "../assets/adobelogo.svg";
import { NavLink } from "react-router-dom";


const TextBubble = ({description}) => {
  const [toggle, setToggle] = useState(true);
  

  return (
    <>
      <motion.div
          onClick={() => setToggle(!toggle)}
          animate={{ scale: 1.3 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatType: "reverse",
          }}
          className="textBubble"
        >
               <AdobeLogo className="AdobeLogo" />
        </motion.div>
      <AnimatePresence initial={false}>
        {toggle && (
          <motion.div
            key="pop"
            className="popupAdobe"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <GrFormClose
              className="ClosePopUp"
              onClick={() => setToggle(!toggle)}
            />
            <div className="folder">
              <NavLink end to="/adobe">
                <span>
                  <AiOutlineFolderOpen />
                  <p>Photomanipulation</p>
                </span>
              </NavLink>
              <NavLink to="/adobe/ai">
                <span>
                  <AiOutlineFolderOpen />
                  <p> Illustrator</p>
                </span>
              </NavLink>
              <NavLink to="/adobe/xd">
                <span>
                  <AiOutlineFolderOpen />
                  <p>Adobe Xd</p>
                </span>
              </NavLink>
            </div>
            <p className="photoShopDes">{Parser(description)}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TextBubble;
