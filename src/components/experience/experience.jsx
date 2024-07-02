import "./experience.css"
import { EXPERIENCES } from "../../constants/index"
import { motion } from "framer-motion"

export default function Experience() {

  return (
    <div className="experience container paddings flexColCenter">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >Experience</motion.h2>
      <div className="experience-content flexColCenter">
        {
          EXPERIENCES.map((item, index) => (
            <div className="experience-card secondaryText flexColStart" key={index}>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="experience-year">
                {item.year}
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="experience-details flexColStart">
                <span className="role">{item.role} - {item.company}</span>
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
    </div >
  )
}