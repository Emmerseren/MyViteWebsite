import React, { useState } from "react";
import "./react.scss";
import { motion, useMotionValue, useTransform } from "framer-motion";
const ReactSkill = () => {
  const x = useMotionValue(500);
  const y = useMotionValue(500);

  const rotateX = useTransform(
    x,
    [-window.innerWidth, window.outerWidth],
    [-70, 100]
  );
  const rotateY = useTransform(
    y,
    [-window.innerHeight, window.outerHeight],
    [-70, 115]
  );

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }
  return (
    <motion.div
      className="react"
      onMouseMove={handleMouse}
      initial={{ x: "100%", scale: 0.8 }}
      animate={{ x: 0, scale: 1 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="eyeContainer">
        <div className="eye one">
          <motion.div
            className="boxReact "
            style={{
              translateX: rotateX,
              translateY: rotateY,
            }}
          />
        </div>
        <div className="eye two">
          <motion.div
            className="boxReact two"
            style={{
              translateX: rotateX,
              translateY: rotateY,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ReactSkill;
