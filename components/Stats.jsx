"use client";
import { motion } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'],
   weight: ['200','300','400','500','600','700'],
   variable: '--font-JetBrainsMono'
  });
  
import CountUp from "react-countup";

const stats = [
    {
        num: 4,
        text: "Years of experience",
    },
    {
        num: 43,
        text: "Projects completed",
    },
    {
        num: 8,
        text: "Technologies used",
    },
    {
        num: 500,
        text: "Code commits",
    },
]
const Stats = () => {
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1, 
        transition : {delay: 2, duration: 3,
             ease: "easeIn"},
    }}
    className={jetBrainsMono.variable}>
    <div className=" container mx-auto xl:mt-[-140px]">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index)=>{
                   return <div key={index} 
                   className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                        <CountUp 
                           end={item.num} 
                           duration={5} 
                           delay={2} 
                           className="counterup text-4xl text-indingo/95 xl:text-6xl font-extrabold"/>
                           <p className={`${item.text.length < 15 ? "max-w-[160px]" :"max-w-[150px]"}` }>{item.text}</p>
                    </div>
                    
                })}
            </div>
        </div>
    </motion.section>
  )
}

export default Stats