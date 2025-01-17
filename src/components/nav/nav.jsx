import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import "./nav.css"
import { FaSquareXTwitter } from "react-icons/fa6"
import { pictures } from "../../constants/index"


export default function Nav() {


  return (
    <div className="nav">
      <div className="nav-content flexBetween">
        <img src={pictures.logoPic} alt="logo" />
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