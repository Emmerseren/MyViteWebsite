import React from 'react'
import TextBubble from '../Components/TextBubble'
import { useContext } from "react";
import { ThemeContext } from "../context/theme";

const AdobexD = () => {
  const { lang } = useContext(ThemeContext);
  const description = lang.AdobexD
  return (
    <TextBubble description={description}/>
  )
}

export default AdobexD
