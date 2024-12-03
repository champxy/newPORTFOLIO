'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FaPhone, FaEnvelope, FaMapMarked } from 'react-icons/fa'
import { AiFillHeart } from "react-icons/ai";

import { HiHomeModern } from "react-icons/hi2";

import { motion } from 'framer-motion'
const infome = [
  {
    icon: <FaPhone />,
    title: 'Phone',
    text: '061-061-3692'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    text: 'champxyy@gmail.com'
  },
  {
    icon: <HiHomeModern />,
    title: 'Address',
    text: 'Thailand'
  }
]

const ContactPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: 'easeIn' } }}
      className="py-6 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Contact me !</h3>
              <p className="text-white/60">
                luv me or hate me, i'm here to help you <AiFillHeart className="inline text-red-500" />
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="Name"
                  placeholder="Name" />
                <Input
                  type="email"
                  placeholder="Email" />
                <Input
                  type="phone"
                  placeholder="Phone" />
    
              </div>
            {/* selct */}
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select a service'/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Service</SelectLabel>
                  <SelectItem value="Web Development">Web Development</SelectItem>
                  <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Textarea
            className="h-[200px]"
            placeholder="type your message here" 
             />
             <Button
             size='md'
             className="max-w-40"
             >Send</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {
                infome.map((item, index) => (
                  <li key={index} className="flex gap-6 items-center group">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px] ">{item.icon}</div>
                    </div>
                    <div className="flex-1 group-hover:text-accent">
                      <p className="text-white/60">{item.title}</p>
                      <h3>{item.text}</h3>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>

        </div>
      </div>
    </motion.section>
  )
}
export default ContactPage