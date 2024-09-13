// Work.js
"use client";

import MagicTitle from "@/components/ui/magicTitle";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import 'swiper/css';
import useFetchData from "@/app/works/data";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";
import Image from "next/image";

const Work = () => {
  const { projects, getProjectTags, error } = useFetchData();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex); // Update the active project index
  };

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      {/* <MagicTitle title="Portfolio" /> */}

      <div className="container mx-auto mt-5">
        <div className="flex flex-col xl:flex-row justify-center xl:gap-[30px]">
          
          <div className="w-full xl:w-[30%] gap-[200px] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            {/* Active Project details */}
            {projects.length > 0 && (
              <div className="flex flex-col h-[50%]">
                <div className="text-7xl xl:text-9xl leading-none font-extrabold text-transparent text-outline">
                  {projects[activeIndex].num}
                </div>
                <h2 className="text-[32px] font-bold text-white group-hover:text-accent leading-[70px] transition-all duration-500 capitalize">
                  {projects[activeIndex].title}
                </h2>
                <p className="text-xl text-yellow-400
                 font-semibold ml-10">
                  <hr className="top-5 -left-10 relative w-[30px] h-1.5 border-yellow-400"/>
                  {projects[activeIndex].Ctg}
                  <hr className="-top-3 left-48 relative w-[30px] h-1.5 border-yellow-400"/>
                </p>
                <p className="text-white/60 leading-7 text-justify text-lg">
                  {projects[activeIndex].description.length > 30
                    ? projects[activeIndex].description.slice(0, 190) + "..."
                    : projects[activeIndex].description}
                </p>

                {/* Display project tags */}
                <ul className="flex gap-4">
                  {getProjectTags(projects[activeIndex].id).length > 0 ? (
                    getProjectTags(projects[activeIndex].id).map((tag, index) => (
                      <li
                        key={index}
                        className="bg-accent hover:bg-accent-hover text-white px-3 my-4 flex-nowrap 
                        flex gap-4 py-2 rounded-2xl font-light">
                        {tag.TagName}
                      </li>
                    ))
                  ) : (
                    <li className="text-white/60">No tags available</li>
                  )}
                </ul>

                <div className="border border-white/30"></div>

                <div className="flex items-center gap-4 mt-4">
                  <a href={projects[activeIndex].link}>
                    <TooltipProvider delayDuration={200}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                        bg-white/5 hover:bg-accent hover:text-white flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl "/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>

                  <a href={projects[activeIndex].github}>
                    <TooltipProvider delayDuration={200}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                        bg-white/5 hover:bg-accent hover:text-white flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl "/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>
                </div>
              </div>
            )}
          </div>

          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((im, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[260px] xl:h-[460px] relative
                   flex justify-center items-center bg-pink-50">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <img src={im.Cover} alt={im.title} 
                       className="h-full"/>
                  </div>
                </SwiperSlide>
              ))}
               <WorkSliderBtns 
            containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)} 
            xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center
            items-center transition-all"/>
            </Swiper>
           

          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
