'use client'
import {useScroll, motion, useTransform, useSpring} from 'framer-motion'

const ScrollBottom = () => {
  const {scrollYProgress} = useScroll()
  const scaleX = useSpring(scrollYProgress)

  const background = useTransform(
    scrollYProgress,
    [0,1],
    ['rgb(214,208,169)','rgb(242,7,78)']
  )
  return ( 
  <motion.div style={{
    scaleX,
    transformOrigin:'left',
    background,
    position:'sticky',
    bottom:0,
    width:'100%',
    height:'5px'
  }}/>
   );
}
 
export default ScrollBottom;