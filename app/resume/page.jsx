'use client';
import { FaCopy } from "react-icons/fa";
import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ABOUT_TEXT, CONTACT, EDUCATION, EXPERIENCES, SKILLS } from "../constants/constant";
import { Customcopytoastify } from "@/utils/Customcopytoastify";
import Image from "next/image";



const ResumePage = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      Customcopytoastify("Copied!");
    });
  };

  const formatPhoneNumber = (phoneNumber) => {
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: 'easeIn' } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* experrendce */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">no experience yet</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">i'm sorry i very sad i have no experience yet</p>
                {/* <ScrollArea className="h-[400px]" >
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {
                        EXPERIENCES.map((experience, index) => {
                          return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent">{experience.company}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{experience.role}</h3>
                            <div className="flex items-center gap-3">
                             
                              <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                              <p className="text-white/60">{experience.year}</p>
                            </div>
                          </li>
                        })
                      }
                    </ul>
              </ScrollArea> */}
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">education :D </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"></p>
                <ScrollArea className="h-[450px]" >
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {
                      EDUCATION.map((education, index) => {
                        return <li key={index} className="relative bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 group">
                          <span className="text-accent">{education.institution}</span>
                          <h3 className="text-lg max-w-[260px] min-h-[50px] text-center lg:text-left">{education.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{education.year}</p>
                          </div>
                          <div className="absolute -top-0 right-4 lg:right-0 p-2">
                            <div className="w-[35px] h-[35px] bg-[#33333b] rounded-xl flex justify-center items-center group-hover:bg-white/10">
                              <Image src={education.image} alt={education.institution} width={30} height={30} className="rounded-full" />
                            </div>
                          </div>
                          <div className="absolute -bottom-2 right-4 lg:right-0 ">
                            <div>
                              <p className="text-white/60">GPA: {education.gpa}</p>
                            </div>
                          </div>
                        </li>
                      })
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">my skills</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> skills that i have learned and used in my projects.  </p>
                </div>
                <ScrollArea className="h-[520px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {SKILLS.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div
                                  className={`${skill.name === "express" ? "text-lg" : "text-6xl"
                                    } transition-all duration-500 ${skill.colorname
                                    } group-hover:text-opacity-70`}
                                >
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>

                </ScrollArea>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">About me</h3>
                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">
                  {ABOUT_TEXT}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-1 gap-y-2 max-w-[620px] mx-auto xl:mx-0">
                  <li className="text-white/60 flex items-center gap-2">
                    Email: {CONTACT.email}
                    <button
                      className="text-white/60 hover:text-white"
                      onClick={() => handleCopy(CONTACT.email)}
                    >
                      <FaCopy />
                    </button>
                    {copied === CONTACT.email && (
                      <span className="text-green-500 ml-2 text-sm">Copied!</span>
                    )}
                  </li>
                  <li className="text-white/60 flex items-center gap-2">
                    No.: {formatPhoneNumber(CONTACT.phoneNo)}
                    <button
                      className="text-white/60 hover:text-white"
                      onClick={() => handleCopy(CONTACT.phoneNo)}
                    >
                      <FaCopy />
                    </button>
                    {copied === CONTACT.phoneNo && (
                      <span className="text-green-500 ml-2 text-sm">Copied!</span>
                    )}
                  </li>

                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div >
    </motion.div >
  )
}
export default ResumePage 