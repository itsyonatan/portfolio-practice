import { FaGithub, FaInstagram, FaLinkedin, FaLinkedinIn } from "react-icons/fa"
import "./nav.css"
import { FaSquareXTwitter, FaX } from "react-icons/fa6"



export default function Nav() {


  return (
    <div className="nav">
      <div className="nav-content flexBetween">
        <img src="src\assets\ya-high-resolution-logo-transparent.png" alt="logo" />
        <div className="right-content flexCenter">
          <FaLinkedin size={23}/>
          <FaGithub size={23}/>
          <FaInstagram size={23}/>
          <FaSquareXTwitter size={23}/>
        </div>
      </div>
    </div>
  )
}