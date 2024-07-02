import "./footer.css"
import { CONTACT } from "../../constants/index"
import { motion } from "framer-motion"

export default function Footer() {

  return (
    <div className="footer conatiner paddings ">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >Get in touch</motion.h2>
      <div className="footer-content secondaryText flexColCenter">
        <motion.span
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="address">{CONTACT.address}</motion.span>
        <motion.span
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="phone-no">{CONTACT.phoneNo}</motion.span>
        <span className="email">{CONTACT.email}</span>
      </div>
    </div>
  )
}