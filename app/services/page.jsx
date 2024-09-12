"use client";

import MagicTitle from "@/components/ui/magicTitle";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { FaDesktop, FaPalette, FaBullhorn, FaChartPie } from "react-icons/fa";


const service =[
  {
    num:'01',
    icon:<FaDesktop />,
    href:"",
    title:'Web Development',
    descripton:'Crafting robust, scalable, and high-performance websites and web applications tailored to your specific needs. From front-end interfaces to back-end systems, ensuring seamless functionality and user experience.',
  },
  {
    num:'02',
    icon:<FaPalette />,
    href:"",
    title:'UI UX Designer',
    descripton:'Designing intuitive and aesthetically pleasing user interfaces with a focus on enhancing user experience. Balancing creativity and usability to create designs that are both beautiful and functional.',
  },
  {
    num:'03',
    icon:<FaChartPie />,
    href:"",
    title:'Business Analyst',
    descripton:'Analyzing business processes and requirements to provide strategic solutions that drive growth and efficiency. Helping organizations make informed decisions by bridging the gap between IT and business objectives.',
  },
  {
    num:'04',
    icon:<FaBullhorn />,
    href:"",
    title:'Digital Marketing',
    descripton:'Implementing effective digital marketing strategies to boost online presence and drive sales. Expertise in SEO, social media marketing, and e-commerce solutions that convert visitors into customers.',
  },
]
const services = () => {
  return (
    <motion.section
    initial={{opacity:0}}
       animate={{
        opacity:1,
        transiton: { delay: .4, duration: 6, ease:"easeIn"},
       }}
    className="flex flex-col 
    xl:mx-32 xl:p-10
     xl:min-h-[80vh] justify-center py-12 ">
      <div className="container mx-auto">
      <MagicTitle title="Our Services"/>
       <div
       
       className="grid grid-cols-1 md:grid-cols-2 gap-[30px]"
       >
       
        {service.map((item,index)=>{
          return <div key={index}
          className="flx-1 flex flex-col justify-center gap-6 group">
            <section
           
            className="p-5 w-full flex justify-between items-center">
              <div
              
        className="text-7xl text-outline text-transparent
               font-extrabold group-hover:text-outline-hover
               transition-all duration-500 ease-in-out">{item.num}</div>
              {/* <span className="flex 
              items-start justify-start text-4xl group-hover:text-accent">
                {item.icon}</span> */}
              <Link href={item.href} className="w-[70px] h-[70px] 
              rounded-full bg-white text-accent text-xl
               group-hover:bg-accent group-hover:text-white 
               transition-all duration-500 
               flex justify-center items-center hover:rotate-45">
                <BsArrowDownRight />
              </Link>
            </section>
            <h2
            className="text-[40px] w-auto font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ease-in-out">{item.title}</h2>
            <p
            className="text-justify text-white/80 leading-8">{item.descripton}</p>
            <div className="border-b border-white/20 w-full"></div>
          </div>
        })}
       </div>
      </div>
    </motion.section>
  )
}

export default services