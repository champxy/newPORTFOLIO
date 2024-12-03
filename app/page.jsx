'use client';
import { Button } from "@/components/ui/button";
import { HERO_CONTENT } from "./constants/constant";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { AiFillHeart } from "react-icons/ai";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between
        xl:pt-8 xl:pb-24
        ">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">SawaddeeKub <br /> i'm <span className="text-accent">champ</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">{HERO_CONTENT}<motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: 'easeIn' } }}
            ><AiFillHeart className="inline text-red-500 mb-5 rotate-45" /></motion.span>
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download Cv</span>
                <FiDownload className="text-xl" />

              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles={"flex gap-6"} iconStyles={"w-9 h-9 border border-accent rounded-full flex justify-center items-center texty-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"} />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
