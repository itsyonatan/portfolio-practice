import "./about.css"
import { ABOUT_TEXT } from "../../constants/index.js"
import { motion } from "framer-motion"
export default function About() {

  return (
    <div className="about container paddings flexColCenter">
      <h2>About Me</h2>
      <div className="about-content">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="left-content">
          <img src="src\assets\about.jpg" alt="about" />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="right-content secondaryText">
          <p>{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </div>
  )
}