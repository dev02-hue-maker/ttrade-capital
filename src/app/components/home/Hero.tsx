"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  HiOutlineShieldCheck, 
  HiOutlineArrowRight,
  HiOutlineCube,
  HiOutlineChip,
  HiOutlineCurrencyDollar,
  HiOutlineTrendingUp
} from "react-icons/hi";
import { BsGraphUp, BsLightningCharge, BsShieldShaded } from "react-icons/bs";
import { RiVipCrownLine } from "react-icons/ri";
import { TbWorld, TbDeviceAnalytics } from "react-icons/tb";

interface HeroProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const Hero = ({ images }: HeroProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeStat, setActiveStat] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // Auto-rotate images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  // Mouse move effect for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    { 
      icon: <HiOutlineShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />, 
      value: "Zero Loss", 
      label: "Principal Protected",
      color: "from-teal-500 to-teal-600"
    },
    { 
      icon: <BsGraphUp className="w-5 h-5 sm:w-6 sm:h-6" />, 
      value: "2500%", 
      label: "Max ROI",
      color: "from-rose-500 to-rose-600"
    },
    { 
      icon: <HiOutlineCube className="w-5 h-5 sm:w-6 sm:h-6" />, 
      value: "8+", 
      label: "Innovation Portfolios",
      color: "from-teal-500 to-rose-500"
    },
    { 
      icon: <TbWorld className="w-5 h-5 sm:w-6 sm:h-6" />, 
      value: "24/7", 
      label: "AI-Powered Trading",
      color: "from-teal-600 to-teal-500"
    }
  ];

  const floatingIcons = [
    { Icon: HiOutlineChip, delay: 0, duration: 20, x: 10, y: 20 },
    { Icon: BsLightningCharge, delay: 2, duration: 18, x: -15, y: -10 },
    { Icon: HiOutlineCurrencyDollar, delay: 4, duration: 22, x: 20, y: -15 },
    { Icon: TbDeviceAnalytics, delay: 1, duration: 25, x: -20, y: 15 },
    { Icon: RiVipCrownLine, delay: 3, duration: 19, x: 15, y: -20 },
    { Icon: BsShieldShaded, delay: 5, duration: 21, x: -10, y: 10 },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900/20 to-slate-900"
    >
      {/* Animated background grid - responsive sizing */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d9488_1px,transparent_1px),linear-gradient(to_bottom,#0d9488_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px] opacity-5" />
      
      {/* Floating orbs - responsive positioning */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-teal-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-rose-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating icons - responsive display */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block text-teal-500/20"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            x: [0, item.x, 0],
            y: [0, item.y, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <item.Icon className="w-8 h-8 xl:w-12 xl:h-12" />
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-40 pb-20"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-start lg:items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            {/* Trust badge - responsive text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-teal-500/20 mb-4 sm:mb-6 lg:mb-8"
            >
              <HiOutlineShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
              <span className="text-xs sm:text-sm font-medium text-white truncate max-w-[200px] sm:max-w-none">
                Zero Loss Guarantee • SEC Compliant
              </span>
            </motion.div>

            {/* Main headline - responsive text sizes */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 lg:mb-6"
            >
              <span className="text-white">Where </span>
              <span className="bg-gradient-to-r from-teal-400 via-teal-300 to-rose-400 bg-clip-text text-transparent">
                Innovation
              </span>
              <br className="hidden sm:block" />
              <span className="text-white">Meets </span>
              <span className="bg-gradient-to-r from-rose-400 via-teal-300 to-teal-400 bg-clip-text text-transparent">
                Investment
              </span>
            </motion.h1>

            {/* Subheadline - responsive text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-lg"
            >
              Access curated portfolios in Tesla, SpaceX, AI, and more.{" "}
              <span className="text-teal-400 font-semibold">
                Your principal is protected. Your growth is exponential.
              </span>
            </motion.p>

            {/* CTA Buttons - responsive sizing and stacking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-rose-600 text-white rounded-xl font-semibold text-sm sm:text-base lg:text-lg overflow-hidden shadow-2xl shadow-teal-600/25 w-full sm:w-auto"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-rose-600 to-teal-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center justify-center space-x-2">
                  <span>Start Investing</span>
                  <HiOutlineArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-teal-500/30 text-white rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:bg-white/20 transition-all w-full sm:w-auto"
              >
                View Portfolios
              </motion.button>
            </motion.div>

            {/* Stats - responsive grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 lg:gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  onHoverStart={() => setActiveStat(index)}
                  onHoverEnd={() => setActiveStat(null)}
                  className="relative group cursor-pointer"
                >
                  <motion.div
                    animate={{
                      scale: activeStat === index ? 1.05 : 1,
                      y: activeStat === index ? -5 : 0,
                    }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 border border-teal-500/20 hover:border-teal-500/40 transition-colors"
                  >
                    <div className={`text-${stat.color.split(' ')[0]} mb-1 sm:mb-2`}>
                      {stat.icon}
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white truncate">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 truncate">
                      {stat.label}
                    </div>
                    
                    {/* Animated gradient background on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 rounded-lg sm:rounded-xl -z-10`}
                      animate={{
                        opacity: activeStat === index ? 0.1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content - Image carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2 h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px] mb-8 lg:mb-0"
          >
            {/* 3D Perspective container */}
            <motion.div
              className="relative w-full h-full"
              animate={{
                rotateX: mousePosition.y * 5,
                rotateY: mousePosition.x * 5,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Image carousel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 1.2, rotateY: 30 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    transform: `translateZ(${typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 50}px)`,
                  }}
                >
                  <Image
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                    priority
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  
                  {/* Image caption - responsive positioning and sizing */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6"
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-white/20">
                      <p className="text-white font-semibold text-sm sm:text-base md:text-lg truncate">
                        {images[currentImageIndex].alt}
                      </p>
                      <div className="flex items-center space-x-2 mt-1 sm:mt-2">
                        <HiOutlineTrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-teal-400" />
                        <span className="text-xs sm:text-sm text-teal-400">Live ROI: +400%</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Floating cards - hidden on mobile/tablet */}
              <motion.div
                className="absolute -top-5 sm:-top-8 lg:-top-10 -right-5 sm:-right-8 lg:-right-10 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-teal-600 to-rose-600 rounded-xl sm:rounded-2xl shadow-2xl hidden md:block"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  transform: `translateZ(20px)`,
                }}
              >
                <div className="p-2 sm:p-3 lg:p-4 text-white">
                  <HiOutlineChip className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mb-1 sm:mb-2" />
                  <div className="text-[10px] sm:text-xs lg:text-xs font-semibold">AI Portfolio</div>
                  <div className="text-xs sm:text-sm lg:text-lg font-bold">+1100%</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-5 sm:-bottom-8 lg:-bottom-10 -left-5 sm:-left-8 lg:-left-10 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-rose-600 to-teal-600 rounded-xl sm:rounded-2xl shadow-2xl hidden md:block"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  transform: `translateZ(20px)`,
                }}
              >
                <div className="p-2 sm:p-3 lg:p-4 text-white">
                  <BsShieldShaded className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mb-1 sm:mb-2" />
                  <div className="text-[10px] sm:text-xs lg:text-xs font-semibold">Zero Loss</div>
                  <div className="text-xs sm:text-sm lg:text-lg font-bold">Guarantee</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Image navigation dots */}
            <div className="absolute -bottom-6 sm:bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-20">
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "w-6 sm:w-8 bg-teal-500"
                      : "w-1.5 sm:w-2 bg-white/50 hover:bg-white/80"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - responsive positioning */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center space-y-1 sm:space-y-2 text-white/60"
          >
            <span className="text-xs sm:text-sm">Scroll to Explore</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/20 rounded-full flex justify-center">
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-1 h-1.5 sm:h-2 bg-teal-500 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;