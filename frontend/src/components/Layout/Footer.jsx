import React, { useContext } from 'react'
import {Context} from "../../main"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import { RiInstagramFill} from "react-icons/ri"
function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div className='footer-class'>&copy;2025 CAREER CONNECT | All Rights Reserved</div>
{/* <div>
  <Link to={'https://github.com/exclusiveabhi'} target='github'><FaGithub></FaGithub></Link>
  <Link to={'https://leetcode.com/u/exclusiveabhi/'} target='leetcode'><SiLeetcode></SiLeetcode></Link>
  <Link to={'https://www.linkedin.com/in/abhishek-rajput-/'} target='linkedin'><FaLinkedin></FaLinkedin></Link>
  <Link to={'https://www.instagram.com/exclusiveabhi/'} target='instagram'><RiInstagramFill></RiInstagramFill></Link>
</div> */}
      
    </footer>
  )
}

export default Footer