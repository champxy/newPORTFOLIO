'use client';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


import Link from 'next/link';

const services = [
  {
    num : '01',
    title : 'Web Development',
    description : 'I can develop a website that will help you every thing you want .',
    href : ""
  },
  {
    num : '02',
    title : 'App Development',
    description : 'I can develop a mobile app with flutter framework a bit .',
    href : ""
  },
  {
    num : '03',
    title : 'Linux Server',
    description : 'I can manage a linux server for you with autehntication network .',
    href : "https://www.facebook.com/share/p/1PD1pqXpKf/"
  },
]

import {motion} from 'framer-motion';


const ServicesPage = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
            <div className='container mx-auto'>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1, transition:{duration:0.4,delay:2.4,ease:'easeIn'}}}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
            >
              {
                services.map((service , index)=>{
                  return <div key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group"
                  >
                    <div className=" w-full flex justify-between items-center">
                      <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                      <Link href={service.href} target="_blank"
                      className="w-[50px] h-[50px] rounded-full bg-white
                       group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                        <MdOutlineKeyboardDoubleArrowRight className="text-primary text-3xl rotate-45"/>
                      </Link>
                    </div>
                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                    <p className="text-white/60 ">{service.description}</p>
                    <div className="border-b border-white/20 w-full"></div>
                  </div>
                })
              }
            </motion.div>
            </div>
    </section>
  )
}

export default ServicesPage