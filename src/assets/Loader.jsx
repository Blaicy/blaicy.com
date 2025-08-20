import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onFinish }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let loadDone = false;
    let minTimeDone = false;

    const tryFinish = () => {
      if (loadDone && minTimeDone) {
        setLoading(false);
        onFinish();
        console.log("✅ Preloader finished with fade-out");
      }
    };
    const handleLoad = () => {
      loadDone = true;
      tryFinish();
    };
    window.addEventListener("load", handleLoad);
    const timer = setTimeout(() => {
      minTimeDone = true;
      tryFinish();
    }, 3000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-indigo-900 z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}>
          <motion.img
            src="./1.png"
            alt="Logo"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="w-24 h-24"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
