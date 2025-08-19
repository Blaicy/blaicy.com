import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { easeOut,easeIn,easeInOut } from 'framer-motion';
import { IoDiamondOutline } from "react-icons/io5";

const bodyVariant ={
  hidden:{opacity:0},
  visible:{opacity:1,
    transition:{delay:0.5, duration:0.8}}
  }
const sentenceVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 5,
      staggerChildren: 0.1
    },},
};
const letterVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
const text = "Full-Stack Developer & UI/UX Designer";
const buttonVariant = {
  hover:{scale:1.1,
    boxShadow:"0px 0px 8px rgb(255,255,255)", 
    transition:{
      duration:0.8,
      repeat:Infinity,
      repeatType:"reverse"
    }}};
const workVariant = {
  hidden: {scale: 1.0, opacity: 0.8 },
  visible: { scale: 1.2, opacity: 1,
        transition:{
          duration: 2,
          ease: easeOut,
          repeat: Infinity,
          repeatType: "reverse" }}
        };
const MainPage = () => {
  return (
    <>
    <motion.div className='p-10 grid place-items-center min-h-screen'
    variants={bodyVariant}
    initial='hidden'
    animate='visible'>
    <motion.div className='flex items-center space-x-5'>
      <motion.img src='/B-logo.png'
      className='w-20 aspect-square rounded-md'
      initial={{ x: "-100vw", rotate: 0 }}
      animate={{ x: 0, rotate: [0, 90, 180, 270,360] }}
      transition={{
        x: { delay: 0.3, duration: 1.5, ease: "easeOut" },
        rotate: { delay:4, duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}}/>
      <motion.h1 
      className='font-semibold text-2xl'
      initial={{x:'100vw'}}
      animate={{x:0}}
       transition={{delay:0.3, duration:1.5}}>Blaicy Mokaya</motion.h1>
    </motion.div>
     <motion.h1
      className='font-bold text-3xl'
        variants={sentenceVariant}
        initial="hidden"
        animate="visible">
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariant}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    <h1 className='font-bold text-3xl'></h1>
    <motion.ul className='flex space-x-2 list-disc list-inside text-lg'>
      <motion.li whileHover={{scale:1.1}}>Developer</motion.li>
      <motion.li whileHover={{scale:1.1}}>UI/UX Designer</motion.li>
      <motion.li whileHover={{scale:1.1}}>Freelancer</motion.li></motion.ul>
      <motion.h3 className='text-white'
      variants={workVariant}
      initial='hidden'
      animate='visible'
        > Available for work
        </motion.h3>

      <p>Hi, I’m Blaicy.
         I love turning ideas into interactive experiences. With a mix of software 
         development and UI/UX design,<br /> I bridge the gap between functionality and beauty — 
         making websites and apps that not only work, but feel right to use.</p>
         <Link to='/About'>
          <motion.button className='border-2 rounded-lg bg-gray-900 text-white p-2 font-semibold'
          variants={buttonVariant}
          whileHover='hover' 
          >About Blaicy</motion.button></Link>
          <Link to='/Connect'>
      <motion.button className='border-2 rounded-lg bg-gray-900 text-white p-2 font-semibold'
        variants={buttonVariant}
        whileHover='hover'
        >Let’s Connect</motion.button></Link>
      <div className='flex space-x-5 mt-3'>
        <a href="https://www.X.com/98_Howie"
        target="_blank"
        rel="noopener noreferrer"
        className=" w-7 h-7 hover:opacity-50">
        <img src='/twitter.png'/>
      </a>
         <a href="https://www.instagram.com/_blaicy"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 hover:opacity-50">
        <img src='/instagram.png' />
      </a>
      <a href="https://www.linkedin.com/in/blaicymokaya"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 hover:opacity-50">
        <img src='/linkedin.png'/>
      </a>
      <a href="https://github.com/Blaicy"
        target="_blank"
        rel="noopener noreferrer"
        className=" w-8 h-8 hover:opacity-50">
        <img src='/github.png'/>
      </a>
      </div>
    </motion.div>
    </>
  )
}

export default MainPage