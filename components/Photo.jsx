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
             className="w-[200px] h-[200px] mt-0
            xl:w-[470px] xl:mt-[-50px] xl:h-[470px] mix-blend-hue">
                <Image src="/images/homebn.png" fill priority 
                quality={100}
                className="object-contain shadow-md xl:rounded-bl-[200px] xl:rounded-br-[60px]"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Photo