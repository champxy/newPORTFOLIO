'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';



import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import { PROJECTS } from '../constants/constant';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';


const Workpage = () => {
  const [project, setProject] = useState(PROJECTS[0])

  const handelSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex
    //update project  
    setProject(PROJECTS[currentIndex])

  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 2.4,
          ease: 'easeIn',
        }

      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px] h-[50%]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px]'>
              {/* loutlinenum */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.id}</div>
              {/* project category */}
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.title}
              </h2>
              {/* project description */}
             <div className='h-[100px]'>
             <p className='text-white/60'>{project.description}</p>
             </div>
              {/* stack */}
              <ul className='flex gap-4 overflow-x-auto xl:w-[500px]'>
                {
                  project.technologies.map((tech, index) => (
                    <li key={index} className='text-nowrap bg-white/10 px-4 py-2 rounded-lg text-white/60
        hover:bg-white/20 hover:text-accent transition-all duration-500'>
                      {tech}
                    </li>
                  ))
                }
                
              </ul>

              {/* border */}
              <div className='border-b border-white/20 w-full'></div>
              {/* buutton */}
              <div className='flex items-center gap-4'>
               {
                  project.livehref && <Link
                    href={project.livehref} target='_blank'
                  >
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <MdOutlineKeyboardDoubleArrowRight className='text-white text-3xl group-hover:text-accent ' />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
               }
                <Link
                  href={project.github} target='_blank'
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent ' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12' onSlideChange={handelSlideChange}>
              {
                PROJECTS.map((project, index) => (
                  <SwiperSlide key={index}
                    className='w-full'
                  >
                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/5'>
                      {/* overlay */}
                      <div className='absolute top-0 bottom-0 w-full h-full
                        bg-black/10 z-10
                      '></div>
                      {/* image */}
                      <div className='relative w-full h-full'>
                        <Image
                          src={project.image} fill className='object-cover'
                          alt='project image'
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
              {/* slide bottom */}
              <WorkSliderBtns
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-accent hover:bg-accent/90 text-primary text-[22px] w-[44px] h-[44px] flex justify-center transition-all duration-500 items-center rounded-full'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
export default Workpage