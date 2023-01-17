import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import images from "../images";
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";

import "./Slider.scss";
import { useEffect } from "react";

const AdobeSlider = () => {



  const [switchImg, setSwitchImg] = useState(images.photoman);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onResize = () => setWidth(document.body.offsetWidth);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [setWidth]);

  useEffect(() => {
    if (document.body.offsetWidth < 1700) {
      setSwitchImg(images.mobile);
      return;
    }
    setSwitchImg(images.photoman);
  }, [document.body.offsetWidth]);
  const variants = {
    initial: (direction) => {
      return {
        x: direction > 0 ? 4000 : -4000,
        scale: 0,
      };
    },
    animate: {
      x: 0,
      y: 0, 
      scale: 1,

    },
    exit: (direction) => {
      return {
        y: direction > 0 ? -4000 : 4000,
        scale: 0,
      };
    },
  };

  const nextSlide = () => {
    setDirection(1);
    if (index === switchImg.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  const prevSlide = () => {
    setDirection(-1);
    if (index === 0) {
      setIndex(switchImg.length - 1);
      return;
    }
    setIndex(index - 1);
  };
  return (
    <div className="sliderContainer">
      <div className="slider">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={switchImg[index]}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2, }}
            variants={variants}
            custom={direction}
            src={switchImg[index]}
            className="slides"
          ></motion.img>
        </AnimatePresence>
        <div className="controls">
          <TfiArrowCircleLeft onClick={prevSlide} />
          <TfiArrowCircleRight onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default AdobeSlider;
