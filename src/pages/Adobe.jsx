import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";
import "./adobe.scss";
import AdobeSlider from "./AdobeSlider";
import TextBubble from "../Components/TextBubble";

const Adobe = () => {
  const { lang } = useContext(ThemeContext);
  const description = lang.adobePhotoShop
  return (
    <>
      <AdobeSlider />
      <TextBubble description={description} />
    </>
  );
};

export default Adobe;
