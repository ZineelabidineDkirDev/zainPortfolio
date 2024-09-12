import { animate, motion } from 'framer-motion'
import React from 'react'

const magicTitle = (props) => {
  return (
    <motion.div
    initial={{
      opacity:0,
    }}
    animate={{
      opacity:1,
      transition:{ delay: .4, duration: 2, ease:"easeIn"},
    }}
    className="flex mt-7 items-center justify-center xl:items-center xl:justify-center mb-12 ">
          <h1 className="text-5xl 
          xl:text-6xl text-outline text-center text-transparent
               font-black">{props.title}</h1>
      </motion.div>
  )
}

export default magicTitle