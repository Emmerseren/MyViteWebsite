import { Route, Routes, useLocation} from "react-router-dom"
import Adobe from '../pages/Adobe'
import Home from '../pages/Home'

import {AnimatePresence  } from "framer-motion"
import ReactSkill from '../pages/ReactSkill'
import AdobexD from '../pages/AdobexD'
import AdobeAl from '../pages/AdobeAI'
const AnimatedRoutes = () => {
    const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
      <Route path='/'element={<Home/>}/>
      <Route path='adobe' element={<Adobe/>}/>
      <Route path='adobe/xd' element={<AdobexD/>}/>
      <Route path='adobe/ai' element={<AdobeAl/>}/>
      <Route path='react' element={<ReactSkill/>}/>
  </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes