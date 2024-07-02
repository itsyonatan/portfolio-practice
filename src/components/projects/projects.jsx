import "./projects.css"
import { PROJECTS } from "../../constants/index"
import { motion } from "framer-motion"

export default function Projects() {

  return (
    <div className="projects container paddings flexColCenter">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >Projects</motion.h2>
      <div className="projects-content flexColCenter">
        {
          PROJECTS.map((item, index) => (
            <div className="projects-card secondaryText flexColStart" key={index}>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="projects-image">
                <img src={item.image} alt="" />
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="projects-details flexColStart">
                <span className="title">{item.title}</span>
                <span className="discription">{item.description}</span>
                <span className="technologies flexStart">
                  {
                    item.technologies.map((techno, i) => (
                      <div className="technology-item" key={i}>{techno}</div>
                    ))
                  }
                </span>
              </motion.div>
            </div>
          ))
        }
      </div>
    </div>
  )
}