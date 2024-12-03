'use client';
import CountUp from "react-countup";
import React,{useState} from "react";
import { PROJECTS, SKILLS } from "@/app/constants/constant";

const stats = () => [
    {
        num: 0,
        title: 'Years of Experience'
    },
    {
        num: PROJECTS.length,
        title: 'Projects Completed'
    },
    {
        num: SKILLS.length,
        title: 'Technologies Used'
    },

]


const Stats = () => {

    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none ">
                    {
                        stats().map((stat, index) => {
                            return (
                                <div
                                    className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                                    key={index}>
                                    <CountUp
                                        end={stat.num}
                                        duration={3}
                                        delay={2}
                                        className="text-4xl xl:text-6xl font-extrabold" />
                                    <p className={`${stat.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80 `}
                                    >{stat.title}</p>
                                </div>
                            )
                        }

                        )
                    }
                </div>
            </div>
        </section>
    )
}
export default Stats