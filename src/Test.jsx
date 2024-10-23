import {delay, motion} from "framer-motion"
import { useState } from "react"


const Test = () => {

  const [open, setOpen] = useState(false)

  const variants = {
    visible:(i)=> ({
      opacity:1, 
      x:100, 
      //transition:{type:"spring", stiffness:100, damping:100}},
      //transition: { staggerChildren: 0.2}},
      transition: { delay:i * 0.3},
    }),
    hidden:{opacity:0},
  }

  const items = ["item1","item2","item3","item4"]


  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item,i) =>(
          <motion.li variants={variants} key={item} custom={i}>{item} </motion.li>
        ))}       
      </motion.ul>


        {/*<motion.div
        className="box"

        variants={variants}
        //initial="hidden"
        //animate="visible"
        //transition={{duration:2}}
        animate={open ? "visible" : "hidden"}

        initial={{opacity:0.5, scale:0.5}} 
        //animate={{opacity:1, scale:1, x:200, y:500}} 
        transition={{duration:2}}
        whileInView={{opacity:1, scale:2}}
        drag
        ></motion.div>
        <button onClick={()=>setOpen(prev=>!prev)}>Click</button>*/}
    </div>
  )
}

export default Test
