import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaTelegramPlane } from "react-icons/fa";

const Connect = () => {
  const [displayedText, setDisplayedText] = useState("");
  const text = "I  would love to hear from you — whether it is about work, ideas, or just a hello.";
  const speed = 50;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen m-3 md:m-5 p-5 md:p-10 bg-indigo-950 rounded-lg shadow-lg shadow-black">
      <div className="hidden md:block absolute left-1/2 top-5 bottom-5 w-[2px] bg-black"></div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}>
        <div>
          <motion.h1 className="font-bold text-2xl md:text-3xl flex justify-center md:justify-start mb-5 text-cyan-500">
            Get In Touch
          </motion.h1>
          
          <div className="flex flex-col space-y-4 font-mono text-base md:text-lg">
            {[
              { img: './email.png', label: "blaicymokaya@gmail.com", link: "https://mail.google.com/mail/?view=cm&fs=1&to=blaicymokaya@gmail.com" },
              { img: './instagram.png', label: "Instagram", link: "https://instagram.com/_blaicy" },
              { img: './linkedin.png', label: "LinkedIn", link: "https://linkedin.com/in/blaicymokaya" },
              { img: './github.png', label: "GitHub", link: "https://github.com/Blaicy" },
              { img: './social-media.png', label: "X", link: "https://X.com/98_Howie" }
            ].map((item, idx) => (
              <motion.span
                key={idx}
                className="flex items-center space-x-2"
                initial={{ x: "100vw" }}
                animate={{ x: 0, transition: { type: "spring", stiffness: 30, delay: 1 + idx * 0.5, duration: 1 } }}
                whileHover={{ originX:0, scale: 1.1, transition: { duration: 0.2 } }}>
                <img src={item.img} alt={item.label} className="w-6 h-6 md:w-7 md:h-7" />
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-amber-600 font-semibold">
                  {item.label}
                </a>
              </motion.span>
            ))}
          </div>

          <div className="mt-6 text-center md:text-left text-neutral-400 text-sm md:text-lg font-medium font-mono px-3">
            {displayedText}
            <span className="animate-pulse"></span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 2 } }}
          className="w-full">
          <motion.h1 className="font-bold text-2xl md:text-3xl flex justify-center md:justify-start mb-5 text-cyan-500">
            Reach Out
          </motion.h1>

          <form
            action="https://formspree.io/f/mblkvjlz"
            method="POST"
            className=" bg-orange-300 rounded-2xl p-4 md:p-6 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full border outline-none rounded-md p-2"
              required/>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border outline-none rounded-md p-2"
              required/>
            <textarea
              name="message"
              placeholder="Type your message here..."
              className="w-full h-28 border outline-none rounded-md p-2"
              required></textarea>
            <div className="flex justify-center items-center md:justify-start">
              <button
                type="submit"
                className="bg-blue-950 flex items-center text-white rounded-md px-4 py-2 gap-2 hover:bg-cyan-600 transition">
                Submit <FaTelegramPlane />
              </button>
            </div>
            <input type="hidden" name="_next" value="https://blaicy.github.io/#/thankyou" />
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Connect
