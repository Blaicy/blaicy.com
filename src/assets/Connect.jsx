import React from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect } from "react";
import { IoMail } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Connect = () => {
  const [displayedText, setDisplayedText] = useState("");
  const text = "I  would love to hear from you — whether it is about work, ideas, or just a hello.";
  const speed = 10; 

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <section className="p-10"
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.8, duration:1}}>
      <motion.h1 className='font-semibold text-2xl flex justify-center mb-5'>Get In Touch</motion.h1>
      <motion.div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
      
      <motion.div initial={{x:'-100vw'}}
      animate={{x:0, transition:{duration:0.5,delay:2}}}>
      <form action="https://formspree.io/f/mblkvjlz" method="POST"
      className='border-2 bg-purple-300 rounded-2xl p-2'>
        <span className='flex items-center bg-white rounded-md m-3 p-2'>
        <input type="text" name="name" placeholder="Full Name"
          className="rounded-md w-full border border-gray-400 p-2"/>
        </span>
        <span className='flex items-center bg-white rounded-md m-3 p-2'>
        <input type="email" name="email" placeholder="Your email"
          className="rounded-md w-full border border-gray-400 p-2"/>
        </span>
        <span className='flex items-center bg-white rounded-md m-3'>
        <textarea name="message" placeholder='Type your message here...' 
        className= 'p-2 h-20 border-none border-gray-400 rounded-md w-full'/>
        </span>
        <span className="flex justify-center">
          <button type='submit'
            className={`bg-blue-950 flex items-center text-white rounded-md p-2 gap-2
               m-2 hover:bg-gray-800
            : "bg-blue-600 hover:bg-blue-700"} `}>
           Submit <FaTelegramPlane /> </button></span>
           <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you.html" />
           </form>
      </motion.div>
           <div>
            <motion.span className='flex m-2 space-x-1 items-center'
              initial={{x:'100vw'}}
              animate={{ x: 0, transition: { type: 'spring', stiffness: 30, delay: 1, duration: 2 } }}
              whileHover={{ originX:0, scale: 1.2, transition: { duration: 0.2 } }}>
              <IoMail />
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=blaicymokaya@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white hover:underline font-semibold">
              blaicymokaya@gmail.com
            </a></motion.span>
            <motion.span className='flex m-2 space-x-1 items-center'
            initial={{x:'100vw'}}
            animate={{ x: 0, transition: { type: 'spring', stiffness: 30, delay: 1.5, duration: 1 } }}
            whileHover={{originX:0, scale: 1.2, transition: { duration: 0.2 } }}>
              <FaInstagram />
              <a
                href="https://www.instagram.com/_blaicy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline font-semibold">
                Instagram
              </a>
            </motion.span>
            <motion.span className='flex m-2 space-x-1 items-center'
            initial={{x:'100vw'}}
            animate={{ x: 0, transition: { type: 'spring', stiffness: 30, delay: 2, duration: 1 } }}
            whileHover={{originX:0, scale: 1.2, transition: { duration: 0.2 } }}>
              <FaLinkedin />
              <a 
                href="https://www.linkedin.com/in/blaicymokaya"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline font-semibold">
                Linked In
              </a></motion.span>
              <motion.span className='flex m-2 space-x-1 items-center'
            initial={{x:'100vw'}}
            animate={{ x: 0, transition: { type: 'spring', stiffness: 30, delay: 2.5, duration: 1 } }}
            whileHover={{originX:0, scale: 1.2, transition: { duration: 0.2 } }}>
              <FaGithub />
              <a
                href="https://github.com/Blaicy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline font-semibold">
                GitHub
              </a></motion.span>
              <motion.span className='flex m-2 space-x-1 items-center'
            initial={{x:'100vw'}}
            animate={{ x: 0, transition: { type: 'spring', stiffness: 30, delay: 3, duration: 1 } }}
            whileHover={{originX:0, scale: 1.2, transition: { duration: 0.2 } }}>
              <RiTwitterXFill />
              <a
                href="https://www.X.com/98_Howie"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline font-semibold">
                X
              </a></motion.span>
           </div>
           </motion.div>
            <div className="m-5 text-center">
              {displayedText}
              <span className="animate-pulse">|</span>
            </div>
           </section>
    </>
  )
}

export default Connect