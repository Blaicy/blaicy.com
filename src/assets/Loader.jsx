import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = ({ onFinish }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
      onFinish();
      console.log("✅ Page fully loaded");
    };

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, [onFinish]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-indigo-950 z-50">
      <motion.img
        src="./1.png"
        alt="Logo"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="w-24 h-24"
      />
    </div>
  );
};

export default Loader;
