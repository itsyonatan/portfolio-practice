import { RiReactjsLine } from "react-icons/ri"
import "./technologies.css"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { motion } from "framer-motion"

export default function Technologies() {
  const logoVarients = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: { duration: duration, ease: "linear", repeat: Infinity, repeatType: "reverse" }
    }
  })
  return (
    <div className="technologies container paddings flexColCenter">
      <motion.h2
        initial={{y: -100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1.5}}
      >Technologies</motion.h2>
      <motion.div 
        initial={{x: -100, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: 1.5}}
      className="technologies-content flexCenter">
        <motion.div
          variants={logoVarients(2.5)}
          initial="initial"
          animate="animate"
          className="item">
          <RiReactjsLine size={35} style={{ color: "cyan" }} />
        </motion.div>
        <motion.div
          variants={logoVarients(3)}
          initial="initial"
          animate="animate"
          className="item">
          <TbBrandNextjs size={35} />
        </motion.div>
        <motion.div
          variants={logoVarients(2)}
          initial="initial"
          animate="animate"
          className="item">
          <SiMongodb size={35} style={{ color: "green" }} />
        </motion.div>
        <motion.div
          variants={logoVarients(3.5)}
          initial="initial"
          animate="animate"
          className="item">
          <DiRedis size={35} style={{ color: "red" }} />
        </motion.div>
        <motion.div
          variants={logoVarients(2)}
          initial="initial"
          animate="animate"
          className="item">
          <FaNodeJs size={35} style={{ color: "green" }} />
        </motion.div>
        <motion.div
          variants={logoVarients(4)}
          initial="initial"
          animate="animate"
          className="item">
          <BiLogoPostgresql size={35} style={{ color: "#38bdf8" }} />
        </motion.div>
      </motion.div>
    </div>
  )
}