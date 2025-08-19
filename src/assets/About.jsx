import React from 'react'
import { easeIn, motion, spring } from 'framer-motion'
import { Link } from 'react-router-dom'

const lineVariant = {
    hidden:{
      scaleX: 0
    },visible:{
      scaleX: 1,opacity:0.5,
      transition:{
      duration: 2, delay: 2, ease: 'easeOut'
    }}}
const About = () => {
  return (
    <>
    <motion.div className='p-10 grid place-items-center'
      initial={{opacity:0,}}
      animate={{opacity:1}}
      transition={{delay:0.5,duration:1.5, ease:easeIn}}>
    <h1 className='text-2xl font-semibold '>About Blaicy :)</h1>
    <p className='text-white'> Hi, I’m Blaicy.
    I’m a Full-Stack Developer & UI/UX Designer passionate about creating digital experiences 
    that are functional, intuitive, and visually engaging. I enjoy combining code and design to
    bring ideas to life — turning concepts into applications that people actually love to use.
    I believe technology should be simple, accessible, and delightful. My process is
    built on empathy for users, attention to detail, and writing clean, maintainable code.
    </p>
    <motion.hr className="my-3 w-full border-gray-300" 
      variants={lineVariant}
      initial='hidden'
      animate='visible'/>

    <h1 className='text-2xl font-semibold'>What I Do</h1>
    <p className='text-white'>
      I specialize in bridging the gap between design and development — ensuring that my projects
      are not just well-built, but also user-centered.<br />
      <ul className='grid place-items-center'>
      <li>Frontend Development: HTML  |  CSS | JavaScript </li>
      <li>Backend Development: Python(Django) |  Mongo DB  | MySQL </li>
      <li>Other Skills: TailwindCSS  |  Framer Motion | Canva</li>
      <li>My Tech Stack: Vs Code | Git & GitHub</li>
      </ul>
    </p>
    <motion.hr className="my-3 w-full border-gray-300"
      variants={lineVariant}
      initial='hidden'
      animate='visible' />

    <h1 className='text-2xl font-semibold'> Beyond Work</h1>
    <p className='text-white'>When I’m not designing or coding, I love baking (croissants are my favorite),
        exploring new ideas, and learning something new every day.<br />
        I’m always open to collaborations, opportunities, or just sharing ideas about design and
        development.
    </p>
    <motion.hr className="my-3 w-full border-gray-300"
      variants={lineVariant}
      initial='hidden'
      animate='visible'/>
      
      <motion.button className='p-2 mt-3 border-2 rounded-full bg-gray-900 text-white '
        initial={{x:'-100vw'}}
        animate={{x:0, transition:{type:spring, stiffness:100, delay:4, duration:4}}}
        whileHover={{scale:1.1,transition:{repeat:Infinity,repeatType:'reverse', duration:1.5}}}>
          <a href="https://github.com/Blaicy"
        target="_blank"
        rel="noopener noreferrer"
        className=" w-8 h-8 hover:opacity-50">
          Check out my Work </a></motion.button>
   </motion.div>
    </>
  )
}

export default About