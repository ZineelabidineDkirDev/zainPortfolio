"use client";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMdDownload } from "react-icons/io";


const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const strings = [
    "Hello I'm ",
    "Bonjour, Je suis",
    "Hola Soy",
    "Hallo ich bin",
    "مرحبا معكم",
    "ⵣⵓⵍ ⴰⵣⵉⵎ ⴰⵣⵉⵏ"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentString = strings[index];
      const typingSpeeds = isDeleting ? 50 : 100; // Define typing speed

      if (!isDeleting && charIndex < currentString.length) {
        setText((prev) => prev + currentString[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentString.length) {
        setTimeout(() => setIsDeleting(true), 5000); // Delay before deleting
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % strings.length);
      }
    };

    const timer = setTimeout(handleTyping,30);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index, strings]);

  return (
  <section className="relative xl:h-screen xl:mx-32
   h-[900px] overflow-hidden xl:overflow-hidden rounded ">
   
  <div className="absolute inset-0 z-0 bg-overlay overflow-hidden from-primary via-transparent to-accent/30 animate-slide"></div>
  <div className="container relative z-10 mx-auto xl:screen h-screen xl:h-screen mt-[-50px] xl:mt-[-40px]">
    <div className="flex flex-col xl:flex-row mb-8 items-center justify-between pt-24 xl:pt-32 xl:pb-24 xl:gap-10">
      <motion.div initial={{opacity:0}} animate={{opacity:1, 
                transition : {delay: 2,
                   duration: 0.8,
                     ease: "easeInOut"},
            }}
       className="text-center xl:text-left order-2 xl:order-none">
        <span className="text-md mb-8">Full Stack Developer / UI UX Web Designer</span>
        <h1 className="h2 mb-2 leading-8 xl:leading-[60px]">
          <span className="h2 ">{text}</span> <br />
          <span className="name_portfolio h1 mt-32 text-accent/90 uppercase">
            Zayn <b className="font-bold">El Moubtakir</b>
          </span>
        </h1>
        <p className="text-lg xl:text-xl xl:text-justify max-w-[500px] leading-7 mb-9 text-white/80">
          I excel at crafting elegant digital experiences and I'm proficient in various programming languages and technologies.
        </p>
        <div className="flex flex-col xl:flex-row items-center gap-8">
          <Button 
          variant="outline" 
          size="lg"
          className="rounded-full border-white text-white flex items-center gap-2 transition duration-500">
            <span>Download CV</span>
            <IoMdDownload className="text-xl" />
          </Button>
          <div className="mb-8 xl:mb-0 ">
            <Social containerStyles="flex gap-4" 
            iconStyles="w-9 h-9 border border-white rounded-full flex justify-center items-center
            text-white text-base hover:bg-accent hover:text-white 
            hover: text-primary hover:border-accent hover:transition-all duration-500"/>
          </div>
        </div>
      </motion.div>
      <div className="order-1 xl:order-none mb-8 xl:mb-0">
        <Photo />
      </div>
    </div>
  </div>

  <div>
    <Stats />
  </div>
    <div className="shape">
      <Image className="shape1 animate-shape1" src="images/shape.svg" alt=""/>
      <Image className="shape2 animate-shape2" src="images/shape.svg" alt=""/>
      <Image className="shape5 animate-shape5" src="images/shape.svg" alt=""/>
    </div>
</section>
  );
};

export default Home;