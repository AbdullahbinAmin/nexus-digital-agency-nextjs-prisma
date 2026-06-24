'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter text-white">
          NEXUS<span className="text-emerald-400">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
          <a href="#work" className="hover:text-emerald-400 transition-colors">Work</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
        </div>
        <a href="#contact" className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-black bg-emerald-400 rounded-full hover:bg-emerald-300 transition-colors">
          Let&apos;s Talk
        </a>
      </div>
    </motion.nav>
  );
}
