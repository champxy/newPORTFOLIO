'use client'
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Stairs from "./Stairs"
import { motion } from "framer-motion"


const StairTransition = () => {
    const pathname = usePathname()
    return (
        <>
            <AnimatePresence mode="wait">
                <div key={pathname}>
                    <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
                        <Stairs />
                    </div>

                    {/* การหน่วงรอ Stairs ขึ้นบันใด */}
                   
                    <motion.div className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ duration: 0.4, delay: 1, ease: "easeInOut" }}
                    />



                </div>
            </AnimatePresence>
        </>

    )
}
export default StairTransition