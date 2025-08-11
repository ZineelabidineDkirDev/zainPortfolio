"use client";

import { delay, motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div
         initial={{opacity:0}} animate={{opacity:1, 
            transition : {delay: 2, duration: 0.9,
                 ease: "easeIn"},
        }}>
            <motion.div
            initial={{opacity:0}} animate={{opacity:1, 
                transition : {delay: 2, duration: 0.4,
                     ease: "easeIn"},
            }}
             className="w-[300px] h-[300px] mt-0
            xl:w-[500px] xl:mt-[-50px] xl:h-[500px] mix-blend-hue">
                <Image src="/images/blender.png" fill priority 
                quality={100} 
                className="object-contain shadow-md xl:rounded-bl-[200px] xl:rounded-br-[60px]" alt=""/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Photo