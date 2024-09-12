"use client";

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { FaDesktop, FaBullhorn, FaChartPie } from "react-icons/fa";
import { FaPaintBrush, FaPalette, FaPenNib } from 'react-icons/fa';



const service =[
  {
    num:'01',
    icon:<FaDesktop />,
    title:'Web Development',
    descripton:'Crafting robust, scalable, and high-performance websites and web applications tailored to your specific needs. From front-end interfaces to back-end systems, ensuring seamless functionality and user experience.',
  },
  {
    num:'02',
    icon:<FaPalette />,
    title:'UI UX Designer',
    descripton:'Designing intuitive and aesthetically pleasing user interfaces with a focus on enhancing user experience. Balancing creativity and usability to create designs that are both beautiful and functional.',
  },
  {
    num:'03',
    icon:<FaChartPie />,
    title:'Business Analyst',
    descripton:'Analyzing business processes and requirements to provide strategic solutions that drive growth and efficiency. Helping organizations make informed decisions by bridging the gap between IT and business objectives.',
  },
  {
    num:'04',
    icon:<FaBullhorn />,
    title:'Digital Marketing',
    descripton:'Implementing effective digital marketing strategies to boost online presence and drive sales. Expertise in SEO, social media marketing, and e-commerce solutions that convert visitors into customers.',
  },
]
const services = () => {
  return (
    <section className="xl:min-w-[30px] xl:min-h-auto mt-[10vw]">
      <div className="xl:flex px-32 gap-8 items-center justify-center">
        {service.map((item,index)=>{
          return <div className="p-4 bg-accent hover:bg-indigo-900 cursor-pointer transition-all
           duration-500 ease-in-out h-auto xl:w-[300px] xl:h-auto rounded-lg
           text-white xl:my-0 xl:mx-0 my-5 mx-16" key={index}>
            <span className="text-xl ">{item.num}</span>
            <span className="flex flex-col-reverse font-light -mt-4 items-end text-4xl my-3">{item.icon}</span>
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="text-justify leading-6">{item.descripton}</p>
            </div>
        })}
      </div>
    </section>
  )
}

export default services