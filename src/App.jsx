import React from 'react'
import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MainPage from './assets/MainPage'
import About from './assets/About'
import Connect from './assets/Connect'

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handlePageLoad = () => setLoading(false);
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handlePageLoad);
    }
    return () => window.removeEventListener("load", handlePageLoad);
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="w-16 h-16 border-4 border-t-transparent border-white
         rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
  <AnimatePresence mode="wait">
    <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/connect' element={<Connect />} />
      </Routes>
    </AnimatePresence>
    </>
    )
}

export default App