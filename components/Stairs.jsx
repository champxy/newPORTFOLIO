
import { motion } from "framer-motion"


//variant for the stairs
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
}

const reverseIndex = (index) => {
    const total = 6
    return total - index - 1
}

const Stairs = () => {
    return (
        <>

            {/* 6 stairs สร้างโหลดดิ่ง 6คั่นบันได สวยๆ */}
            {
                [...Array(6)].map((_, index) => {
                    return (
                        <motion.div
                            key={index}
                            className="h-full w-full bg-white relative"
                            variants={stairAnimation}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{
                                duration: 0.4,
                                delay: reverseIndex(index) * 0.1,
                                ease: "easeInOut",
                            }}
                        />
                    );
                })
            }
        </>
    )
}
export default Stairs