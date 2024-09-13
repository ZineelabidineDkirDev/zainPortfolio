"use client";
import { motion } from "framer-motion";
import  Image  from "next/image";
import { FaAngular, FaCss3, FaFileExcel, FaGithub, FaHtml5, FaJs, FaLaravel, FaPhp, FaReact, FaRegIdBadge, FaSchool, FaSlack, FaTrello } from "react-icons/fa";
import { useEffect, useState } from "react";
import { DiDotnet } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { SiMysql, SiAdobeillustrator, SiAdobephotoshop, SiExpress, SiMongodb, SiPowerbi, SiRedux, SiTailwindcss, SiMicrosoftsqlserver, SiPhp, SiFigma, SiSketch, SiAdobedreamweaver, SiAdobeindesign, SiFramer, SiElementor, SiWebflow, SiApache, SiAzuredevops, SiHostinger, SiTrello, SiAsana, SiNetlify, SiOracle, SiJson, SiShopify, SiPrestashop, SiVisualstudio, SiLinkedin } from "react-icons/si";
import MagicTitle from "@/components/ui/magicTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

import { CgProfile } from "react-icons/cg";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { TfiSkype } from "react-icons/tfi";
import { HiLanguage } from "react-icons/hi2";
import { LiaFileContractSolid } from "react-icons/lia";



const profile = { 
  title:"Profile",
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit sem, porta euismod diam quis, tempor interdum sapien. Morbi blandit lacus vitae lobortis dignissim.",
  info:[
    {
      fieldName: <CgProfile />,
      fieldValue: "Zine el Abidine Elmoubtakir",
    },
    {
      fieldName: <IoIosPhonePortrait />,
      fieldValue: "(+212) 624 438 140",
    },
    {
      fieldName: <MdOutlineAttachEmail />,
      fieldValue: "zineelabidinedkir@gmail.com",
    },
    {
      fieldName: <IoHomeOutline />,
      fieldValue: "CYM Agdal2 10120 Rabat",
    },
    {
      fieldName: <BsFlagFill />,
      fieldValue: "Rabat - Morocco",
    },
    {
      fieldName: <TfiSkype />,
      fieldValue: "Zine.Dk",
    },
    {
      fieldName: <SiLinkedin />,
      fieldValue: "in/dkirzineelabidine",
    },
    {
      fieldName: <HiLanguage />,
      fieldValue: "En / Fr / Ar / Sp",
    },
    {
      fieldName: <LiaFileContractSolid />,
      fieldValue: "CDI / Freelance",
    },
    
    
  ]
}

const experience = {
  title: "My experiences",
  description: "En tant que développeur full stack spécialisé en dotNet, ReactJs & Angular,avec plus de trois ans d'expérience et une solide formation, je suis actuellement à la recherche d'une opportunité professionnelle enrichissante. Mon objectif est de renforcer mes compétences techniques et de contribuer à des projets innovants.",
  items:[
    {
      
      company: "Cairful Gmbh",
      iconexp: "/exp/cairful.png",
      location: "Rabat - Mororcco",
      duration: "Jully 2019 - Juin 2020",
      positon :"Software developper dotNet ",
      descexp:"Conception et développement d'une application web complète pour la gestion desservices de transport, y compris l'authentification sécurisée des membres.Importation et localisation des informations des transporteurs pour une gestion efficace des transports.",
      tasks:[
        "- Pendant une période de 1 an et 3 mois, j’ai eu le privilège de travailler en tant que développeur logiciel spécialisé dans la technologie dotNet, en particulier avec WPF (Windows Presentation Foundation) et XAML. Mon rôle principal était de concevoir et de développer une application dédiée à la maintenance et au suivi des personnes âgées \n",
        "- Mon rôle exigeait une collaboration étroite avec une équipe multidisciplinaire, ce qui a renforcé ma capacité à travailler efficacement en équipe et à communiquer de manière transparente avec les membres de l’équipe. \n",
        "- Ma maîtrise des technologies clés, telles que C#, WPF et XAML, ainsi que ma compréhension approfondie des architectures MVC (Modèle-Vue-Contrôleur) et MVVM (Modèle-Vue-Modèle), m’ont permis de concevoir une application robuste et modulaire \n",
      ]
    },
    {
      company: "Elly insurrance",
      iconexp: "/exp/logoelly.png",
      location: "Salé - Mororcco",
      duration: "Jully 2019 - Juin 2020",
      positon :"Web Integrator & web digital ",
      descexp:"C'est fantastique d'entendre que j’ai acquis des compétences techniques en développement web sur cette boite de communication qui appartient a un grand centre d'assurance Elly France , dont quel j'ai occupé un poste de gestion de contenu au sein d'une équipe travaillant sur des sites WordPress. Parmis les points importants à prendre en compte dans votre parcours ",
      tasks:[
        <ul className="list-item gap-8 " key="">
          
         <li>
         <h3 className="text-xl font-bold">1. Compétences techniques :</h3>
          <p> ReactJS et MERN Stack : Le fait que j'ai maîtriser ces technologies front-end et full-stack est 
           un atout majeur dans le domaine du développement web, sur des applications web interactives et
            dynamiques en utilisant ReactJS, ainsi que sur des applications MERN (MongoDB, ExpressJs, Redux,
             Node.js) qui combinent un backend robuste avec un frontend réactif.</p>
          </li> 

          <li>
          <h3 className="text-xl font-bold">2. Gestion de contenu :</h3>
          <p> Occuper un poste de gestion de contenu dans une équipe travaillant sur des sites en PHP montre 
            que vous avez de l'expérience dans la création, la gestion et la mise à jour de contenu sur des
             plateformes CMS populaires. Cela peut inclure la rédaction, la publication, la gestion des médias,
              la mise en page, etc.</p>
          </li>

          <li>
          <h3 className="text-xl font-bold">3. Mon Rôle pricipal</h3>
         <p> Il est essentiel de mettre en avant mes compétences et cette expérience sur mon CV.
           Me permet d'envisager et de mettre en avant des projets spécifiques sur lesquels j'ai travaillé,
            même que les résultats que j'ai obtenus en tant que gestionnaire de contenu.</p>
          </li>

          <li>
          <h3 className="text-xl font-bold">4. Result</h3>
         <p>En fonction de mon aspirations professionnelles, j'ai envisager de continuer à évoluer dans 
          le domaine du développement web, peut-être en tant que développeur front-end dans ReactJS,
           ou bien me permet de chercher des opportunités dans le domaine de la gestion de contenu ou du 
           marketing digital.</p>
          </li>
         </ul>
      ]
    },
    {
      company: "Cairful Gmbh",
      iconexp: "/exp/gsi.png",
      location: "Rabat - Mororcco",
      duration: "Jully 2019 - Juin 2020",
      positon :"Software developper dotNet ",
      descexp:"Conception et développement d'une application web complète pour la gestion desservices de transport, y compris l'authentification sécurisée des membres.Importation et localisation des informations des transporteurs pour une gestion efficace des transports.",
      tasks:[
        "- Pendant une période de 1 an et 3 mois, j’ai eu le privilège de travailler en tant que développeur logiciel spécialisé dans la technologie dotNet, en particulier avec WPF (Windows Presentation Foundation) et XAML. Mon rôle principal était de concevoir et de développer une application dédiée à la maintenance et au suivi des personnes âgées",
        "- Mon rôle exigeait une collaboration étroite avec une équipe multidisciplinaire, ce qui a renforcé ma capacité à travailler efficacement en équipe et à communiquer de manière transparente avec les membres de l’équipe.",
        "- Ma maîtrise des technologies clés, telles que C#, WPF et XAML, ainsi que ma compréhension approfondie des architectures MVC (Modèle-Vue-Contrôleur) et MVVM (Modèle-Vue-Modèle), m’ont permis de concevoir une application robuste et modulaire",
      ]
    },
    {
      company: "Cairful Gmbh",
      iconexp: "/exp/ettolba.png",
      location: "Rabat - Mororcco",
      duration: "Jully 2019 - Juin 2020",
      positon :"Software developper dotNet ",
      descexp:"Conception et développement d'une application web complète pour la gestion desservices de transport, y compris l'authentification sécurisée des membres.Importation et localisation des informations des transporteurs pour une gestion efficace des transports.",
      tasks:[
        "- Pendant une période de 1 an et 3 mois, j’ai eu le privilège de travailler en tant que développeur logiciel spécialisé dans la technologie dotNet, en particulier avec WPF (Windows Presentation Foundation) et XAML. Mon rôle principal était de concevoir et de développer une application dédiée à la maintenance et au suivi des personnes âgées",
        "- Mon rôle exigeait une collaboration étroite avec une équipe multidisciplinaire, ce qui a renforcé ma capacité à travailler efficacement en équipe et à communiquer de manière transparente avec les membres de l’équipe.",
        "- Ma maîtrise des technologies clés, telles que C#, WPF et XAML, ainsi que ma compréhension approfondie des architectures MVC (Modèle-Vue-Contrôleur) et MVVM (Modèle-Vue-Modèle), m’ont permis de concevoir une application robuste et modulaire",
      ]
    },
    {
      company: "Cairful Gmbh",
      iconexp: "/exp/ippf.png",
      location: "Rabat - Mororcco",
      duration: "Jully 2019 - Juin 2020",
      positon :"Software developper dotNet ",
      descexp:"Conception et développement d'une application web complète pour la gestion desservices de transport, y compris l'authentification sécurisée des membres.Importation et localisation des informations des transporteurs pour une gestion efficace des transports.",
      tasks:[
        "- Pendant une période de 1 an et 3 mois, j’ai eu le privilège de travailler en tant que développeur logiciel spécialisé dans la technologie dotNet, en particulier avec WPF (Windows Presentation Foundation) et XAML. Mon rôle principal était de concevoir et de développer une application dédiée à la maintenance et au suivi des personnes âgées",
        "- Mon rôle exigeait une collaboration étroite avec une équipe multidisciplinaire, ce qui a renforcé ma capacité à travailler efficacement en équipe et à communiquer de manière transparente avec les membres de l’équipe.",
        "- Ma maîtrise des technologies clés, telles que C#, WPF et XAML, ainsi que ma compréhension approfondie des architectures MVC (Modèle-Vue-Contrôleur) et MVVM (Modèle-Vue-Modèle), m’ont permis de concevoir une application robuste et modulaire",
      ]
    },
    {
      company: "Cairful Gmbh",
      iconexp: "/exp/chis.png",
      location: "Rabat - Mororcco",
      duration: "Jully 2019 - Juin 2020",
      positon :"Software developper dotNet ",
      descexp:"Conception et développement d'une application web complète pour la gestion desservices de transport, y compris l'authentification sécurisée des membres.Importation et localisation des informations des transporteurs pour une gestion efficace des transports.",
      tasks:[
        "- Pendant une période de 1 an et 3 mois, j’ai eu le privilège de travailler en tant que développeur logiciel spécialisé dans la technologie dotNet, en particulier avec WPF (Windows Presentation Foundation) et XAML. Mon rôle principal était de concevoir et de développer une application dédiée à la maintenance et au suivi des personnes âgées",
        "- Mon rôle exigeait une collaboration étroite avec une équipe multidisciplinaire, ce qui a renforcé ma capacité à travailler efficacement en équipe et à communiquer de manière transparente avec les membres de l’équipe.",
        "- Ma maîtrise des technologies clés, telles que C#, WPF et XAML, ainsi que ma compréhension approfondie des architectures MVC (Modèle-Vue-Contrôleur) et MVVM (Modèle-Vue-Modèle), m’ont permis de concevoir une application robuste et modulaire",
      ]
    },
  ]
}


const education = {
  icon : <FaSchool />,
  title: "My education",
  description: "",
  items:[
    {
      institution: "ISMAGI ",
      degree: "BAC+ 5",
      positon:"Business Intelligence & IT Computing",
      years: "Jully 2016- Sept 2019",
      city:'Rabat',
    },
    {
      institution: "NTIC ",
      degree: "BAC+ 2 DEUT",
      positon:"IT Computing",
      years: "2014-2016",
      city:'Rabat',
    },
    {
      institution: "Elmansour Eddahbi High School ",
      degree: "BACHELOUR",
      positon:"Physics science",
      years: "Juin 2013",
      city:'Rabat',
    },
  ]
}

const skills = {
  title: "My skills",
  description: "",
  skillsList1: [
    {
      titleskills: "Web Development",
      devskills:[
        {
          icon: <FaHtml5 />,
          name: "html5",
        },
        {
          icon: <FaCss3 />,
          name: "Css3",
        },
        {
          icon: <FaJs />,
          name: "javascript",
        },
        {
          icon: <FaReact />,
          name: "reactJs",
        },
        {
          icon: <RiNextjsFill />,
          name: "NextJs",
        },
        {
          icon: <FaAngular />,
          name: "angular",
        },
        {
          icon: <SiTailwindcss />,
          name: "tailwindCss",
        },
        {
          icon: <FaPhp />,
          name: "php",
        },
        
        {
          icon: <DiDotnet />,
          name: ".Net Core",
        },
        {
          icon: <SiJson />,
          name: "Json",
        },
        {
          icon: <BsWordpress />,
          name: "Wordpress",
        },
        {
          icon: <SiShopify />,
          name: "Shopify",
        },
        {
          icon: <SiPrestashop />,
          name: "PrestaShop",
        },

        
      ]
    },
    {
      titleskills: "Web Design",
      devskills:[
        {
          icon: <SiAdobephotoshop />,
          name: "Adobe Ps",
        },
        {
          icon: <SiAdobeillustrator />,
          name: "Adobe Ill",
        },
        {
          icon: <SiAdobeindesign />,
          name: "Adobe Id",
        },
        {
          icon: <SiFramer />,
          name: "Framer",
        },
        {
          icon: <SiFigma />,
          name: "Figma",
        },
        {
          icon: <SiSketch />,
          name: "Sketch",
        },
        {
          icon: <SiElementor />,
          name: "Elementor",
        },
        {
          icon: <SiWebflow />,
          name: "WebFlow",
        },
      ]
    },
    {
      titleskills: "Database & Web Analytics",
      devskills:[
        {
          icon: <SiPowerbi />,
          name: "PowerBi",
        },
        {
          icon: <SiVisualstudio />,
          name: "SSIS SSRS",
        },
        {
          icon: <SiMicrosoftsqlserver/>,
          name: "SQL Server",
        },
        {
          icon: <SiMysql />,
          name: "MySQL",
        },
        {
          icon: <SiOracle />,
          name: "Oracle g11",
        },
        {
          icon: <FaFileExcel />,
          name: "Excel",
        },
      ]
    }, {
      titleskills: "Web Deployment & Hosting",
      devskills:[
        {
          icon: <SiAzuredevops />,
          name: " Devops",
        },
        {
          icon: <FaGithub />,
          name: "Github",
        },
        {
          icon: <GitBranch />,
          name: "Git",
        },
        {
          icon: <SiTrello />,
          name: "Trello",
        },
        {
          icon: <FaSlack />,
          name: "Slack",
        },
        {
          icon: <SiAsana />,
          name: "Asana",
        },
        ,
        {
          icon: <SiNetlify/>,
          name: "NetLify",
        }
        ,
        {
          icon: <SiHostinger/>,
          name: "Hostinger",
        }
      ]
    }
  ]
}
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { SiHyperskill } from "react-icons/si";

import { ScrollArea } from "@/components/ui/scroll-area";
import { BsArrowRightSquare, BsFlagFill, BsGitlab, BsWordpress } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { AiTwotoneExperiment } from "react-icons/ai";
import TaskModal from "@/components/ui/TaskModal";
import { GitBranch } from "lucide-react";

export function Tasking({ task }) {
  const [isReadMore, setIsReadMore] = useState(false); // Initialize state for each task

  const toggleState = () => {
    setIsReadMore(!isReadMore); // Toggle between true and false for each task
  };

  return (
    <div>
      <p>
        {isReadMore ? task : `${task.substring(0, 50)}...`} {/* Display 50 characters initially */}
      </p>
      <button onClick={toggleState} className="text-blue-500">
        {isReadMore ? "Lire moins" : "Lire plus"}
      </button>
    </div>
  );
}


const Resume = () => {

  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility
  const [selectedTasks, setSelectedTasks] = useState([]); // Hold tasks for the selected experience

  const openModal = (tasks) => {
    setSelectedTasks(tasks);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (

    <section>
            <MagicTitle title="My Resume"/>

    
    <motion.div
    initial={{opacity: 0}}
    animate={{
      opacity:1,
      transition:{delay:2.5, duration:.5, ease:'easeInOut'},
    }}
    className="min-h-[80vh] flex items-center 
    justify-center py-14 xl:py-0 mt-2 "
    >
      <div className="xl:mx-auto mx-[30px]">

        <Tabs defaultValue="experince"
              className="grid grid-cols-1 p-3 mx-10 w-[400px] 
              xl:w-[900px] gap-[40px] xl:-ml-[400px] ">
          <TabsList className="grid grid-cols-2 xl:grid-cols-1
            grid-rows-1 xl:justify-start xs:items-center
           xl:w-full mx-0 xl:mx-0 gap-3 xl:gap-10">
            <TabsTrigger value="experience"> <AiTwotoneExperiment className="text-xl" /> Experience</TabsTrigger>
            <TabsTrigger value="education"> <IoMdSchool className="text-xl" />  Education</TabsTrigger>
            <TabsTrigger value="skills"> <SiHyperskill className="text-xl" /> Skills</TabsTrigger>
            <TabsTrigger value="about"><CgProfile className="text-xl" /> Profile </TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-[400px] xl:mx-0 xl:w-full xl:-mt-[350px] xl:ml-96 mb-16">
            <TabsContent value="experience" 
            className="xl:w-full mx-[30px] w-[300px] xl:mx-auto">
               <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-full text-justify font-medium space-x-2 leading-8 text-white/60 mx-auto xl:mx-0">
                {experience.description}
                </p>
                <ScrollArea className="h-[450px] leading-8" orientation="vertical">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] text-left">{
                  experience.items.map((item,index)=>{
                    return(
                      <div key={index}>
                    <li  className="bg-white/5 px-5 py-4 shadow-lg rounded-lg ">
                      <Image src={item.iconexp}
                             alt={item.company}
                             width={100} 
                             height={100}
                             className="object-contain fit xl:ml-0 "/>
                       <span className="text-xl font-semibold">{item.company} / {item.location}</span>
                       <h3>{item.positon}</h3>
                       <p className="text-yellow-500">{item.duration.replace('-',' to ')}</p>
                       <p className="max-full text-justify
                        font-medium space-x-2 leading-6 text-white/80 mx-auto xl:mx-0">
                       <Tasking task={item.descexp}/>
                       </p>
                       <div >
                       <h4 className="text-lg my-5">Pour voir les taches detailées</h4>
                        {/* {experience.items.map((item, index) => (
                          <div key={index}>
                            {item.tasks}
                          </div>
                        ))} */}
                        <button onClick={() => openModal(item.tasks)} className="mt-4 bg-accent/50 hover:bg-accent duration-200 hover:transition-all hover:ease-in-out rounded-3xl text-white px-4 py-2 ">
                              Voir plus
                        </button>
                        {/* Modal */}
                        <TaskModal tasks={selectedTasks} isOpen={isModalOpen} onClose={closeModal} />
                       </div>
                    </li>
                    </div>
                    )
                  })
                }</ul>
                </ScrollArea>
               </div>
            </TabsContent>
            <TabsContent value="education" className="xl:w-full mx-[30px] w-[300px] xl:mx-auto">
               <div className="flex flex-col gap-[30px] text-center xl:text-left">
               <h3 className="text-4xl font-bold">{education.title}</h3>
               <p className="max-full text-justify font-medium space-x-2 leading-8 text-white/60 mx-auto xl:mx-0">
                {education.description}
                </p>

                <ScrollArea className="h-[600px] leading-8">
                <ul className="grid grid-cols-1 lg:grid-cols-3
                 gap-[30px] text-left">{
                  education.items.map((item,index)=>{
                    return(
                    <li key={index} className="gradient-border bg-white/5 px-5 py-4 shadow-lg rounded-lg ">
                       <span className="text-xl font-semibold">{item.degree}</span>
                       <h3>{item.institution} - {item.city}</h3>
                       <p className="text-yellow-500">{item.years.replace('-',' to ')}</p>
                      <p>{item.positon}</p>
                       
                    </li>)
                  })
                }</ul>
                </ScrollArea>
               </div>
            </TabsContent>
            <TabsContent value="skills" className="xl:w-full mx-[5px] w-[350px] xl:mx-auto">
               <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
               <p className="max-full text-justify font-medium space-x-2 leading-8 text-white/60 mx-auto xl:mx-0">
                {skills.description}
                </p>
              </div>
              <ul className="mb-16">
                 {skills.skillsList1.map((skill,index)=>{
                  return (<div key={index}>
                      <div className="text-2xl font-medium 
                      flex gap-4 items-center my-4">
                       <BsArrowRightSquare />{skill.titleskills}</div>
                      <ul className="grid grid-cols-2 
                      sm:grid-cols-1 
                      xl:grid-cols-4 gap-4 mb-12 ">
                        {
                          skill.devskills.map((skilogo,index)=>{
                            return(
                              <div key={index}>
                                <li className="xl:h-[100px] h-[180px] pointer-events-auto bg-white/5 hover:text-yellow-200 hover:transition-all hover:duration-200 hover:bg-accent/45 py-6 my-3 flex flex-col xl:flex-row justify-center items-center gap-5" 
                              >
                                
                                  <p className="text-5xl xl:text-4xl">{skilogo.icon}</p>
                                  <h3 className="text-2xl">{skilogo.name}</h3>

                              </li>
                              </div>
                            )
                          })
                        }
                      </ul>
                  </div>)
                 })}
              </ul>
               </div>
            </TabsContent>
            <TabsContent value="certif" className="xl:w-full mx-[30px] w-[300px] xl:mx-auto">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
               <p className="max-full text-justify font-medium space-x-2 leading-8 text-white/60 mx-auto xl:mx-0">
                {skills.description}
                </p>
              </div>
              <ul className="mb-16">
                 {skills.skillsList1.map((skill,index)=>{
                  return (<div key={index}>
                    <ScrollArea className="h-[600px]" orientation="vertical">
                      <div className="text-2xl font-medium 
                      flex gap-4 items-center my-4">
                       <BsArrowRightSquare />{skill.titleskills}</div>
                       </ScrollArea>
                      <ul className="grid grid-cols-2 
                      sm:grid-cols-1 
                      xl:grid-cols-4 gap-4 mb-12 ">
                        {
                          skill.devskills.map((skilogo,index)=>{
                            return(
                              <div key={index} >
                              <li  className="xl:h-[100px] h-[180px] pointer-events-auto bg-white/5 hover:text-yellow-200 hover:transition-all hover:duration-200 hover:bg-accent/45 py-6 my-3 flex flex-col xl:flex-row justify-center items-center gap-5" >
                                
                                  <p className="text-5xl xl:text-4xl">{skilogo.icon}</p>
                                  <h3 className="text-2xl">{skilogo.name}</h3>
                                  
                              </li>
                              </div>
                            )
                          })
                        }
                      </ul>
                  </div>)
                  
                 })}
              </ul>
               </div>
            </TabsContent>
            <TabsContent value="about" className="xl:w-full mx-[30px] w-[300px] xl:mx-auto">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{profile.title}</h3>
               <p className="max-full text-justify font-medium space-x-2 leading-8 text-white/60 mx-auto xl:mx-0">
                {profile.description}
                </p>
              </div>
              <ul className="mb-16 grid grid-cols-1 items-center leading-10 xl:leading-7 text-center xl:text-left xl:items-start xl:grid-cols-3 gap-9">
                {profile.info.map((pro,index)=>{

                  return(
                    <div  key={index} className=" border-l-accent border-r-transparent border-4 border-y-transparent bg-white/5  xl:px-3 xl:py-4 py-2">
                      <li className="text-4xl flex justify-center xl:justify-start mb-4 text-yellow-500">{pro.fieldName}</li>
                      <li>{pro.fieldValue}</li>
                    </div>
                  )

                })}
              </ul>
               </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
    </section>
  )
}

export default Resume