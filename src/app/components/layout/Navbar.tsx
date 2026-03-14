"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, Variants } from "framer-motion";
import { 
  HiOutlineMenu, 
  HiOutlineX,
  HiOutlineUser,
  HiOutlineUserAdd,
  HiOutlineSparkles,
  HiOutlineChartBar,
  HiOutlineTranslate
} from "react-icons/hi";
import { BsGraphUp } from "react-icons/bs";
import { RiGovernmentLine } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";
 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTranslator, setShowTranslator] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const { scrollY } = useScroll();
  
  // Parallax effect for navbar background
  const blurIntensity = useTransform(scrollY, [0, 100], [0, 8]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.translator-dropdown')) {
        setShowTranslator(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: <HiOutlineSparkles className="w-4 h-4" /> },
    { name: "Services", href: "/services", icon: <BsGraphUp className="w-4 h-4" /> },
    { name: "About Us", href: "/about", icon: <RiGovernmentLine className="w-4 h-4" /> },
    { name: "Market Research", href: "/market-research", icon: <HiOutlineChartBar className="w-4 h-4" /> },
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
  ];

  // Animation variants with proper typing
  const logoVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  const navItemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: { 
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4 } },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const handleLanguageChange = (langCode: string) => {
    setSelectedLanguage(langCode);
    setShowTranslator(false);
    // Here you would implement actual language change logic
    console.log(`Language changed to: ${langCode}`);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="fixed w-full z-50"
      style={{
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
        backdropFilter: scrolled ? `blur(${blurIntensity}px)` : "none",
      }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-0"
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 via-transparent to-rose-600/5" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo with enhanced animation */}
          <Link href="/" className="flex items-center space-x-2 group z-10">
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="relative"
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-teal-600/20 to-rose-600/20 rounded-lg blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Main logo text */}
              <span className="relative text-xl sm:text-2xl font-bold bg-gradient-to-r from-teal-600 via-teal-500 to-rose-500 bg-clip-text text-transparent whitespace-nowrap">
                TRADECAPITAL
              </span>
              
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-teal-600 to-rose-600"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation with enhanced animations */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="relative"
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="flex items-center space-x-1 px-3 xl:px-4 py-2 text-gray-700 hover:text-teal-600 font-medium transition-colors relative group text-sm xl:text-base"
                >
                  <motion.span
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    {link.icon}
                  </motion.span>
                  <span>{link.name}</span>
                  
                  {/* Animated hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-rose-600/10 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
                
                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-teal-600 to-rose-600"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Desktop Actions with enhanced animations */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            {/* Translator Dropdown */}
            <div className="relative translator-dropdown">
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                onClick={() => setShowTranslator(!showTranslator)}
                className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-teal-600 font-medium relative group"
              >
                <IoLanguage className="w-5 h-5" />
                <span className="hidden xl:inline">
                  {languages.find(l => l.code === selectedLanguage)?.flag} {selectedLanguage.toUpperCase()}
                </span>
                
                {/* Ripple effect on hover */}
                <motion.span
                  className="absolute inset-0 rounded-lg bg-teal-600/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              {/* Translator Dropdown Menu */}
              <AnimatePresence>
                {showTranslator && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                  >
                    <div className="py-2 max-h-96 overflow-y-auto">
                      {languages.map((lang) => (
                        <motion.button
                          key={lang.code}
                          whileHover={{ backgroundColor: "rgba(13, 148, 136, 0.05)" }}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`w-full px-4 py-2 text-left flex items-center space-x-3 transition-colors ${
                            selectedLanguage === lang.code ? 'bg-teal-50 text-teal-600' : 'text-gray-700'
                          }`}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span className="flex-1">{lang.name}</span>
                          {selectedLanguage === lang.code && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-teal-600 rounded-full"
                            />
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              className="px-3 xl:px-4 py-2 text-gray-700 hover:text-teal-600 font-medium relative group text-sm xl:text-base whitespace-nowrap"
            >
              Solutions
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-600 to-rose-600"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>

            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              className="relative px-4 xl:px-6 py-2 xl:py-2.5 bg-gradient-to-r from-teal-600 via-teal-500 to-rose-500 text-white rounded-xl font-medium shadow-lg overflow-hidden group text-sm xl:text-base whitespace-nowrap"
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-rose-600 to-teal-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Button content */}
              <span className="relative flex items-center space-x-2">
                <span>Get Started</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>

            <div className="flex items-center space-x-1 border-l border-gray-200 pl-3 ml-2">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-700 hover:text-teal-600 relative group"
              >
                <HiOutlineUser className="w-5 h-5" />
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Login
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-700 hover:text-rose-600 relative group"
              >
                <HiOutlineUserAdd className="w-5 h-5" />
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Register
                </span>
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="lg:hidden z-10"
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-teal-600/10 hover:to-rose-600/10 transition-colors group"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiOutlineX className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiOutlineMenu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Animated ring */}
              <motion.span
                className="absolute inset-0 rounded-xl border-2 border-teal-600/50"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation with enhanced animations */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <motion.div
                className="pt-4 pb-3 space-y-2"
                initial="closed"
                animate="open"
                variants={{
                  open: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
              >
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -20 }
                    }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-teal-600 font-medium rounded-lg hover:bg-gradient-to-r hover:from-teal-600/5 hover:to-rose-600/5 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.span
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        {link.icon}
                      </motion.span>
                      <span>{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                  }}
                  className="border-t border-gray-200 pt-4 mt-4 space-y-3"
                >
                  {/* Mobile Translator */}
                  <div className="px-4">
                    <label className="block text-xs font-medium text-gray-500 mb-2">
                      Select Language
                    </label>
                    <select
                      value={selectedLanguage}
                      onChange={(e) => handleLanguageChange(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                    >
                      {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                          {lang.flag} {lang.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-teal-600 w-full rounded-lg hover:bg-gradient-to-r hover:from-teal-600/5 hover:to-rose-600/5"
                  >
                    <HiOutlineTranslate className="w-5 h-5" />
                    <span>Translator</span>
                  </motion.button>
                  
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-teal-600 w-full rounded-lg hover:bg-gradient-to-r hover:from-teal-600/5 hover:to-rose-600/5"
                  >
                    <HiOutlineChartBar className="w-5 h-5" />
                    <span>Solutions</span>
                  </motion.button>
                  
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 py-3 bg-gradient-to-r from-teal-600 via-teal-500 to-rose-500 text-white rounded-xl font-medium shadow-lg relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-rose-600 to-teal-600"
                      initial={{ x: "100%" }}
                      whileTap={{ x: 0 }}
                    />
                    <span className="relative">Get Started</span>
                  </motion.button>
                  
                  <motion.div
                    variants={{
                      open: { opacity: 1, scale: 1 },
                      closed: { opacity: 0, scale: 0.9 }
                    }}
                    className="flex items-center space-x-6 px-4 pt-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1, x: 2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-gray-700 hover:text-teal-600"
                    >
                      <HiOutlineUser className="w-5 h-5" />
                      <span>Login</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1, x: 2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-gray-700 hover:text-rose-600"
                    >
                      <HiOutlineUserAdd className="w-5 h-5" />
                      <span>Register</span>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Animated bottom border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent, #0d9488, #f43f5e, transparent)",
          scaleX: useTransform(scrollY, [0, 100], [0, 1]),
          opacity: useTransform(scrollY, [0, 100], [0, 0.5])
        }}
      />
    </motion.nav>
  );
};

export default Navbar;