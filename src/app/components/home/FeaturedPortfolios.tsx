"use client";

import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  HiOutlineSparkles,
  HiOutlineCpuChip,
  HiOutlineShieldCheck,
  HiOutlineInformationCircle,
   HiOutlineCurrencyDollar,
  HiOutlineCheckCircle
} from "react-icons/hi2";
import { BsLightningCharge, BsGearWideConnected } from "react-icons/bs";
import { TbBrandTesla } from "react-icons/tb";
import { GiGoldBar} from "react-icons/gi";
import { SiSpacex, SiX, SiOpenai } from "react-icons/si";

const FeaturedPortfolios = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activePortfolio, setActivePortfolio] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<string>("1month");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const portfolios = [
    {
      id: "tesla",
      name: "Tesla Innovation Portfolio",
      company: "Tesla, Inc.",
      icon: <TbBrandTesla className="w-8 h-8" />,
      sector: "Automotive / Renewable Energy",
      minInvestment: "$150",
      description: "Exposure to the global transition toward electric vehicles, clean energy, and AI integration. Tesla isn't just a car company—it's an energy and robotics giant.",
      longDescription: "Benefit from the surge in EV adoption, autonomous driving technology, and renewable energy solutions. Our portfolio captures Tesla's innovation across automotive, energy storage, and solar markets.",
      image: "/tesla-hero.jpg",
      color: "teal",
      features: [
        "Electric vehicle market exposure",
        "Renewable energy growth",
        "AI & automation technology",
        "Battery technology innovation"
      ],
      returns: {
        "1week": "200%",
        "2weeks": "300%", 
        "1month": "400%",
        "2months": "800%"
      },
      risk: "Moderate",
      popularity: "High Demand",
      investors: "12,500+",
      tags: ["EV", "Clean Energy", "AI", "Innovation"]
    },
    {
      id: "spacex",
      name: "Space Technology Portfolio",
      company: "SpaceX / Starlink",
      icon: <SiSpacex className="w-8 h-8" />,
      sector: "Aerospace / Satellite Internet",
      minInvestment: "$150",
      description: "The space economy is expanding through satellite internet (Starlink), global communication networks, and future space exploration initiatives.",
      longDescription: "Participate in NASA contracts, global internet coverage, and the commercial space revolution. Our portfolio captures the growth of space technology and infrastructure.",
      image: "/spacex-hero.jpg",
      color: "purple",
      features: [
        "Satellite internet technology",
        "Space exploration ventures",
        "Global communication networks",
        "Government & commercial contracts"
      ],
      returns: {
        "1week": "150%",
        "2weeks": "300%",
        "1month": "400%", 
        "2months": "800%"
      },
      risk: "Moderate-High",
      popularity: "Rapid Growth",
      investors: "10,200+",
      tags: ["Space", "Satellite", "Starlink", "Exploration"]
    },
    {
      id: "xai",
      name: "Artificial Intelligence Portfolio",
      company: "xAI / OpenAI",
      icon: <SiOpenai className="w-8 h-8" />,
      sector: "Artificial Intelligence",
      minInvestment: "$450",
      description: "One of the fastest-growing sectors in modern technology. Our AI portfolio captures the infrastructure needed to understand and advance artificial intelligence.",
      longDescription: "Access to high-growth private tech funding rounds, machine learning innovation, and the future of cognitive computing. Position yourself at the forefront of the AI revolution.",
      image: "/xai-hero.jpg",
      color: "rose",
      featured: true,
      features: [
        "Machine learning platforms",
        "Neural network development",
        "AI infrastructure",
        "Private tech funding access"
      ],
      returns: {
        "1week": "500%",
        "2weeks": "1000%",
        "1month": "1100%",
        "2months": "2500%"
      },
      risk: "High",
      popularity: "Explosive Growth",
      investors: "8,700+",
      tags: ["AI", "Machine Learning", "Deep Tech", "Future Intelligence"]
    },
    {
      id: "neuralink",
      name: "Neurotechnology Portfolio",
      company: "Neuralink",
      icon: <HiOutlineCpuChip className="w-8 h-8" />,
      sector: "Neurotechnology / Biotech",
      minInvestment: "$120",
      description: "Neurotechnology combines neuroscience with advanced computing—one of the most promising future industries poised to change humanity.",
      longDescription: "Be part of the biotech revolution through brain-computer interfaces, medical innovation, and human enhancement technologies. Early access to transformative neuroscience.",
      image: "/neuralink-hero.jpg",
      color: "blue",
      features: [
        "Brain-computer interfaces",
        "Medical technology innovation",
        "Neuroscience advancement",
        "Human enhancement tech"
      ],
      returns: {
        "1week": "50%",
        "2weeks": "100%",
        "1month": "200%",
        "2months": "400%"
      },
      risk: "High",
      popularity: "Emerging",
      investors: "6,300+",
      tags: ["Neurotech", "Biotech", "BCI", "Future Medicine"]
    }
  ];

  // Additional portfolios that can be shown in a secondary row
  const secondaryPortfolios = [
    {
      id: "crypto",
      name: "Cryptocurrency Portfolio",
      icon: <HiOutlineCurrencyDollar className="w-6 h-6" />,
      sector: "Digital Assets",
      minInvestment: "$150",
      return: "100-600%",
      color: "amber"
    },
    {
      id: "metals",
      name: "Precious Metals Portfolio",
      icon: <GiGoldBar className="w-6 h-6" />,
      sector: "Gold & Diamond",
      minInvestment: "$100",
      return: "100-600%",
      color: "yellow"
    },
    {
      id: "infrastructure",
      name: "Infrastructure Portfolio",
      icon: <BsGearWideConnected className="w-6 h-6" />,
      sector: "Urban Innovation",
      minInvestment: "$200",
      return: "10-60%",
      color: "slate"
    },
    {
      id: "xcorp",
      name: "Digital Media Portfolio",
      icon: <SiX className="w-6 h-6" />,
      sector: "Social Media / Digital",
      minInvestment: "$100",
      return: "100-600%",
      color: "gray"
    }
  ];

  const colorClasses = {
    teal: {
      bg: 'bg-teal-50',
      lightBg: 'bg-teal-50/50',
      text: 'text-teal-700',
      border: 'border-teal-200',
      icon: 'text-teal-600',
      gradient: 'from-teal-500 to-teal-600',
      hover: 'hover:border-teal-300 hover:shadow-teal-100',
      badge: 'bg-teal-100 text-teal-700'
    },
    rose: {
      bg: 'bg-rose-50',
      lightBg: 'bg-rose-50/50',
      text: 'text-rose-700',
      border: 'border-rose-200',
      icon: 'text-rose-600',
      gradient: 'from-rose-500 to-rose-600',
      hover: 'hover:border-rose-300 hover:shadow-rose-100',
      badge: 'bg-rose-100 text-rose-700'
    },
    purple: {
      bg: 'bg-purple-50',
      lightBg: 'bg-purple-50/50',
      text: 'text-purple-700',
      border: 'border-purple-200',
      icon: 'text-purple-600',
      gradient: 'from-purple-500 to-purple-600',
      hover: 'hover:border-purple-300 hover:shadow-purple-100',
      badge: 'bg-purple-100 text-purple-700'
    },
    blue: {
      bg: 'bg-blue-50',
      lightBg: 'bg-blue-50/50',
      text: 'text-blue-700',
      border: 'border-blue-200',
      icon: 'text-blue-600',
      gradient: 'from-blue-500 to-blue-600',
      hover: 'hover:border-blue-300 hover:shadow-blue-100',
      badge: 'bg-blue-100 text-blue-700'
    },
    amber: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-200',
      icon: 'text-amber-600',
    },
    yellow: {
      bg: 'bg-yellow-50',
      text: 'text-yellow-700',
      border: 'border-yellow-200',
      icon: 'text-yellow-600',
    },
    slate: {
      bg: 'bg-slate-50',
      text: 'text-slate-700',
      border: 'border-slate-200',
      icon: 'text-slate-600',
    },
    gray: {
      bg: 'bg-gray-50',
      text: 'text-gray-700',
      border: 'border-gray-200',
      icon: 'text-gray-600',
    }
  };

  const durationOptions = [
    { value: "1week", label: "1 Week" },
    { value: "2weeks", label: "2 Weeks" },
    { value: "1month", label: "1 Month" },
    { value: "2months", label: "2 Months" }
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-rose-50 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4">
            <HiOutlineSparkles className="w-4 h-4 md:w-5 md:h-5 text-rose-600" />
            <span className="text-xs md:text-sm font-semibold text-rose-700">Featured Portfolios</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4">
            Invest in Tomorrow&apos;s<br />
            <span className="bg-gradient-to-r from-teal-600 to-rose-600 bg-clip-text text-transparent">
              Game-Changing Technologies
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            Curated portfolios inspired by industry-leading companies at the forefront of innovation.
            Each portfolio is professionally managed and backed by our zero-loss guarantee.
          </p>
        </motion.div>

        {/* Duration Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-8 md:mb-12 px-4"
        >
          <div className="inline-flex bg-white rounded-lg md:rounded-xl p-1 shadow-sm border border-slate-200 flex-wrap justify-center">
            {durationOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedDuration(option.value)}
                className={`px-2 sm:px-3 md:px-4 py-1.5 md:py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                  selectedDuration === option.value
                    ? 'bg-gradient-to-r from-teal-600 to-rose-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Portfolios Grid */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 px-4 sm:px-0">
          {portfolios.map((portfolio, index) => (
            <motion.div
              key={portfolio.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              onHoverStart={() => setHoveredCard(portfolio.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`group relative bg-white rounded-xl md:rounded-2xl shadow-sm border ${
                portfolio.featured ? 'border-rose-200 shadow-lg shadow-rose-100/50' : 'border-slate-200'
              } overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl`}
              onClick={() => setActivePortfolio(activePortfolio === portfolio.id ? null : portfolio.id)}
            >
              {/* Featured Badge */}
              {portfolio.featured && (
                <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10">
                  <div className="bg-gradient-to-r from-rose-500 to-rose-600 text-white text-[10px] md:text-xs font-semibold px-2 py-1 md:px-3 md:py-1 rounded-full shadow-lg flex items-center space-x-1">
                    <BsLightningCharge className="w-2 h-2 md:w-3 md:h-3" />
                    <span>Highest Returns</span>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-5 gap-0">
                {/* Image Section */}
                <div className="md:col-span-2 relative h-40 sm:h-48 md:h-full overflow-hidden bg-slate-900">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent z-10" />
                  <motion.div
                    animate={{ scale: hoveredCard === portfolio.id ? 1.1 : 1 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={portfolio.image}
                      alt={portfolio.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 2}
                    />
                  </motion.div>

                  {/* Company Icon */}
                  <div className={`absolute bottom-2 left-2 md:bottom-4 md:left-4 z-20 p-1.5 md:p-2 bg-white/20 backdrop-blur-sm rounded-lg md:rounded-xl border border-white/30`}>
                    <div className="text-white text-sm md:text-base">
                      {portfolio.icon}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:col-span-3 p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2 gap-2">
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-slate-900 mb-1">{portfolio.name}</h3>
                      <p className="text-xs md:text-sm text-slate-500">{portfolio.company}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-xl md:text-2xl font-bold text-slate-900">{portfolio.minInvestment}</div>
                      <div className="text-[10px] md:text-xs text-slate-500">min. investment</div>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-slate-600 mb-3 md:mb-4 line-clamp-2">{portfolio.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                    {portfolio.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1 ${colorClasses[portfolio.color as keyof typeof colorClasses].bg} ${colorClasses[portfolio.color as keyof typeof colorClasses].text} rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Returns & Stats */}
                  <div className="grid grid-cols-3 gap-1 md:gap-2 mb-3 md:mb-4">
                    <div className="text-center p-1.5 md:p-2 bg-slate-50 rounded-lg">
                      <div className="text-[10px] md:text-xs text-slate-500">Return</div>
                      <div className={`text-sm md:text-lg font-bold ${colorClasses[portfolio.color as keyof typeof colorClasses].text}`}>
                        {portfolio.returns[selectedDuration as keyof typeof portfolio.returns]}
                      </div>
                      <div className="text-[8px] md:text-xs text-slate-400">
                        {durationOptions.find(d => d.value === selectedDuration)?.label}
                      </div>
                    </div>
                    <div className="text-center p-1.5 md:p-2 bg-slate-50 rounded-lg">
                      <div className="text-[10px] md:text-xs text-slate-500">Risk</div>
                      <div className="text-xs md:text-sm font-semibold text-slate-700">{portfolio.risk}</div>
                      <div className="text-[8px] md:text-xs text-slate-400">level</div>
                    </div>
                    <div className="text-center p-1.5 md:p-2 bg-slate-50 rounded-lg">
                      <div className="text-[10px] md:text-xs text-slate-500">Investors</div>
                      <div className="text-xs md:text-sm font-semibold text-slate-700">{portfolio.investors}</div>
                      <div className="text-[8px] md:text-xs text-slate-400">active</div>
                    </div>
                  </div>

                  {/* Expandable Section */}
                  <AnimatePresence>
                    {activePortfolio === portfolio.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 md:pt-4 border-t border-slate-100">
                          <p className="text-xs md:text-sm text-slate-600 mb-2 md:mb-3">{portfolio.longDescription}</p>
                          <h4 className="text-xs md:text-sm font-semibold text-slate-900 mb-1 md:mb-2">Key Features:</h4>
                          <ul className="grid grid-cols-2 gap-1 md:gap-2 mb-3 md:mb-4">
                            {portfolio.features.map((feature, i) => (
                              <li key={i} className="flex items-start space-x-1 md:space-x-2 text-[10px] md:text-sm">
                                <HiOutlineCheckCircle className={`w-3 h-3 md:w-4 md:h-4 ${colorClasses[portfolio.color as keyof typeof colorClasses].text} flex-shrink-0 mt-0.5`} />
                                <span className="text-slate-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-2 md:space-x-3 mt-2 md:mt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex-1 py-1.5 md:py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                        hoveredCard === portfolio.id
                          ? `bg-gradient-to-r ${colorClasses[portfolio.color as keyof typeof colorClasses].bg} text-white shadow-md`
                          : 'bg-slate-900 text-white hover:bg-slate-800'
                      }`}
                    >
                      Invest Now
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-1.5 md:p-2.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePortfolio(activePortfolio === portfolio.id ? null : portfolio.id);
                      }}
                    >
                      <HiOutlineInformationCircle className="w-4 h-4 md:w-5 md:h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div
                className={`absolute inset-0 -z-10 opacity-0 ${colorClasses[portfolio.color as keyof typeof colorClasses].bg}`}
                animate={{ opacity: hoveredCard === portfolio.id ? 0.1 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Secondary Portfolios Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12 px-4 sm:px-0"
        >
          {secondaryPortfolios.map((portfolio) => (
            <motion.div
              key={portfolio.id}
              whileHover={{ y: -4 }}
              className={`bg-white rounded-lg md:rounded-xl p-3 md:p-4 border border-slate-200 hover:shadow-md transition-all cursor-pointer`}
            >
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg ${colorClasses[portfolio.color as keyof typeof colorClasses].bg} flex items-center justify-center mb-2 md:mb-3`}>
                <div className={`${colorClasses[portfolio.color as keyof typeof colorClasses].icon} text-sm md:text-base`}>
                  {portfolio.icon}
                </div>
              </div>
              <h4 className="font-semibold text-slate-900 text-xs md:text-sm mb-1">{portfolio.name}</h4>
              <p className="text-[10px] md:text-xs text-slate-500 mb-1 md:mb-2">{portfolio.sector}</p>
              <div className="flex items-center justify-between">
                <span className="text-[8px] md:text-xs text-slate-500">min. {portfolio.minInvestment}</span>
                <span className={`text-[8px] md:text-xs font-semibold ${colorClasses[portfolio.color as keyof typeof colorClasses].text}`}>
                  {portfolio.return}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Portfolios CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center px-4"
        >
            
          <p className="text-xs md:text-sm text-slate-500 mt-3 md:mt-4">
            *Including Cryptocurrency, Precious Metals, Infrastructure, and Digital Media portfolios
          </p>
        </motion.div>

        {/* Portfolio Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 md:mt-12 mx-4 sm:mx-0 bg-gradient-to-r from-teal-600/5 to-rose-600/5 rounded-xl md:rounded-2xl p-4 md:p-6 border border-teal-600/10"
        >
          <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="p-1.5 md:p-2 bg-teal-100 rounded-lg">
              <HiOutlineShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-teal-600" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 text-sm md:text-base mb-1">Zero Loss Guarantee Applies to All Portfolios</h4>
              <p className="text-xs md:text-sm text-slate-600">
                Your principal is protected regardless of which portfolio you choose. Our AI-driven trading and physical asset backing ensure your investment is always secure while pursuing high-yield returns.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPortfolios;