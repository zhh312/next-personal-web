"use client";
import React from 'react'
import {motion} from 'framer-motion'
const TransitionVariants = {
  initial: {
    y: "100%",
    height: "100%",
  },
  animate: {
    y: "0%",
    height: "0%",
  },
  exit: {
    y: ["0%", "100%"],
    height: ["0%", "100%"],
  },
};

const Transition = () => {
  return (
    <div>
        <motion.div className='fixed'>
            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={TransitionVariants}
                transition={{ duration: 0.5 }}
            >
                <div>
                    myskill
                </div>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Transition