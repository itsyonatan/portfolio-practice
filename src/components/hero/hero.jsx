import "./hero.css"
import Nav from "../nav/nav"
import { HERO_CONTENT } from "../../constants/index"
import { motion } from "framer-motion"

export default function Hero() {
  const ani = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
  })

  return (
    <div className="hero container flexColCenter">
      <Nav />
      <div className="hero-content">
        <div className="left-content">
          <motion.h1
            variants={ani(0)}
            initial="hidden"
            animate="visible"
          >
            Yonatan Adera
          </motion.h1>
          <motion.h2
            variants={ani(0.5)}
            initial="hidden"
            animate="visible"
            className="primaryText"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            variants={ani(1)}
            initial="hidden"
            animate="visible"
            className="secondaryText"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: [100, 0, 5, 0] }}
          transition={{ duration: 1.5, delay: 1, ease: "linear" }}
          className="right-content">
          <img src="src\assets\yoniProfile.jpg" alt="profilePic" />
        </motion.div>
      </div>
    </div >
  )
}