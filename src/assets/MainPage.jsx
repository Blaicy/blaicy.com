import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { FaMapPin } from "react-icons/fa";

const bodyVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.5, duration: 0.8 } }
};

const sentenceVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delay: 5, staggerChildren: 0.1 },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const buttonVariant = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: { duration: 0.8, repeat: Infinity, repeatType: "reverse" }
  }
};

const MainPage = () => {
  return (
    <div className="p-2 sm:p-3 lg:p-3">
      <motion.div className="flex flex-col sm:flex-row items-center sm:space-x-4 m:space-y-0">
        <motion.img 
          src="./1.png"
          className="w-16 sm:w-20 lg:w-28"
          initial={{ x: "-100vw", rotate: 0 }}
          animate={{ x: 0, rotate: [0, 90, 0, -90, 0] }}
          transition={{
            x: { delay: 0.3, duration: 1.5, ease: "easeOut" },
            rotate: { delay: 4, duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }
          }}/>
        <motion.h1 
          className="font-semibold text-xl sm:text-2xl lg:text-3xl text-center sm:text-left"
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3, duration: 1.5 }}>
          Blaicy Mokaya
        </motion.h1>
      </motion.div>
      <motion.div 
        className="min-h-screen flex flex-col items-center sm:space-y-3"
        variants={bodyVariant}
        initial="hidden"
        animate="visible">
        <div className="text-center">
          <motion.h1
            className="font-bold text-lg sm:text-2xl lg:text-4xl text-indigo-900 leading-snug tracking-tight"
            variants={sentenceVariant}
            initial="hidden"
            animate="visible">
            {"Full-Stack Developer".split("").map((char, index) => (
              <motion.span key={index} variants={letterVariant}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h1
            className="font-bold text-lg sm:text-2xl lg:text-4xl text-indigo-900 leading-snug tracking-tight"
            variants={sentenceVariant}
            initial="hidden"
            animate="visible">
            {"& UI/UX Designer".split("").map((char, index) => (
              <motion.span key={index} variants={letterVariant}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
        <motion.ul className="flex flex-wrap justify-center gap-3 text-sm sm:text-lg text-gray-800">
          <motion.li whileHover={{ scale: 1.1 }}>Developer</motion.li> |
          <motion.li whileHover={{ scale: 1.1 }}>UI/UX Designer</motion.li> |
          <motion.li whileHover={{ scale: 1.1 }}>Freelancer</motion.li>
        </motion.ul>
        <motion.div className="flex items-center space-x-2">
          <FaMapPin className="animate-bounce text-indigo-700" />
          <motion.h3 className="text-white font-mono text-xs sm:text-base lg:text-lg">
            Available for work
          </motion.h3>
        </motion.div>
        <div className="text-center leading-relaxed sm:leading-loose font-medium text-sm sm:text-base lg:text-lg">
          <p className="max-w-sm sm:max-w-md lg:max-w-2xl mx-auto">
            I am a passionate developer and UI/UX designer from Nakuru, Kenya.
          </p>
          <p className="max-w-sm sm:max-w-lg lg:max-w-2xl mx-auto">
            If you’re searching for someone who can bring ideas to life
          </p>
          <p className="max-w-sm sm:max-w-lg lg:max-w-2xl mx-auto">
            through design, code, and product strategy,
          </p>
          <p className="max-w-sm sm:max-w-lg lg:max-w-2xl mx-auto">
            I’ve got you covered.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5 mt-5">
          <Link to="/About">
            <motion.button
              className="border-2 rounded-lg bg-indigo-700 text-white px-4 py-2 font-semibold hover:bg-cyan-600 w-full sm:w-auto"
              variants={buttonVariant}
              whileHover="hover">
              About Blaicy
            </motion.button>
          </Link>
          <Link to="/Connect">
            <motion.button
              className="border-2 rounded-lg bg-indigo-700 text-white px-4 py-2 font-semibold hover:bg-cyan-600 w-full sm:w-auto"
              variants={buttonVariant}
              whileHover="hover">
              Let’s Connect
            </motion.button>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center space-x-4 mt-5">
          <a href="https://www.X.com/98_Howie" target="_blank" rel="noopener noreferrer" className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 hover:opacity-50">
            <img src="./social-media.png" />
          </a>
          <a href="https://www.instagram.com/_blaicy" target="_blank" rel="noopener noreferrer" className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 hover:opacity-50">
            <img src="./instagram.png" />
          </a>
          <a href="https://www.linkedin.com/in/blaicymokaya" target="_blank" rel="noopener noreferrer" className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 hover:opacity-50">
            <img src="./linkedin.png" />
          </a>
          <a href="https://github.com/Blaicy" target="_blank" rel="noopener noreferrer" className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 hover:opacity-50">
            <img src="./github.png" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default MainPage;
