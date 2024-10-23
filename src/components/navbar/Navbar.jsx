import Sidebar from "../Sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* slidbar */}
        <Sidebar/>


        <div className="wrapper">

        <div className="social">
                <a href="#"><img src="/pradarlogo.png" alt="" /></a>
                {/*<a href="#"><img src="/instagram.png" alt="" /></a>
                <a href="#"><img src="/youtube.png" alt="" /></a>
                <a href="#"><img src="/dribbble.png" alt="" /></a>*/}
            </div>


            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration: 0.5}}>HOME</motion.span>
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration: 0.5}}>ALEX S VISION</motion.span>
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration: 0.5}}>1 EVER PANORAMIC LANDSCAPES TUTORIAL</motion.span>
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration: 0.5}}>COLLECTION</motion.span>
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration: 0.5}}>PHOTOTOURS</motion.span>
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration: 0.5}}>EDITING LESSONS</motion.span>
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration: 0.5}}>BLOG</motion.span>
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration: 0.5}}>CONTACT</motion.span>

        </div>

        <div className="bgimg">
            <a href="#"><img src="/a1.jpg" alt="" />
            <div className="content">
              <h1>sineth</h1>
              <h4>hhhhh</h4>
            </div>

            </a>
            
        </div>
            
            
    </div>
  )
}


export default Navbar