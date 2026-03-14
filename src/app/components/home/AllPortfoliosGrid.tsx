/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  HiOutlineChartBar,
  HiOutlineInformationCircle,
  HiOutlineMagnifyingGlass,
  HiOutlineFunnel,
  HiOutlineXMark,
  HiOutlineFire,
  HiOutlineCheckCircle
} from "react-icons/hi2";
import { BsGrid3X3Gap } from "react-icons/bs";
import { GiGoldBar, GiArtificialIntelligence, GiMining, GiChipsBag } from "react-icons/gi";
import { FaBitcoin, FaBrain } from "react-icons/fa";
import { SiSpacex, SiX, SiOpenai, SiTesla } from "react-icons/si";

const AllPortfoliosGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterRisk, setFilterRisk] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("popular");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedPortfolio, setSelectedPortfolio] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Complete Portfolios Data
  const portfolios = [
    {
      id: "tesla",
      name: "Tesla Innovation Portfolio",
      shortName: "Tesla",
      company: "Tesla, Inc.",
      icon: <SiTesla className="w-6 h-6" />,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      sector: "Automotive / Renewable Energy",
      category: "technology",
      description: "Exposure to the global transition toward electric vehicles, clean energy, and AI integration. Tesla isn't just a car company—it's an energy and robotics giant.",
      longDescription: "Benefit from the surge in EV adoption, autonomous driving technology, and renewable energy solutions. Our portfolio captures Tesla's innovation across automotive, energy storage, and solar markets.",
      image: "/tesla-hero.jpg",
      color: "teal",
      gradient: "from-teal-500 to-teal-600",
      minInvestment: 150,
      features: [
        "Electric vehicle market exposure",
        "Renewable energy growth",
        "AI & automation technology",
        "Battery technology innovation",
        "Solar energy integration",
        "Autonomous driving tech"
      ],
      returns: {
        "1week": 200,
        "2weeks": 300,
        "1month": 400,
        "2months": 800
      },
      risk: "Moderate",
      riskLevel: 2,
      popularity: 95,
      liquidity: "High",
      investors: 12500,
      tags: ["EV", "Clean Energy", "AI", "Innovation"],
      founded: 2003,
      marketCap: "Large Cap",
      volatility: "Medium"
    },
    {
      id: "spacex",
      name: "Space Technology Portfolio",
      shortName: "SpaceX",
      company: "SpaceX / Starlink",
      icon: <SiSpacex className="w-6 h-6" />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      sector: "Aerospace / Satellite Internet",
      category: "aerospace",
      description: "The space economy is expanding through satellite internet (Starlink), global communication networks, and future space exploration initiatives.",
      longDescription: "Participate in NASA contracts, global internet coverage, and the commercial space revolution. Our portfolio captures the growth of space technology and infrastructure.",
      image: "/spacex-hero.jpg",
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      minInvestment: 150,
      features: [
        "Satellite internet technology",
        "Space exploration ventures",
        "Global communication networks",
        "Government & commercial contracts",
        "Mars colonization projects",
        "Reusable rocket technology"
      ],
      returns: {
        "1week": 150,
        "2weeks": 300,
        "1month": 400,
        "2months": 800
      },
      risk: "Moderate-High",
      riskLevel: 3,
      popularity: 92,
      liquidity: "High",
      investors: 10200,
      tags: ["Space", "Satellite", "Starlink", "Exploration"],
      founded: 2002,
      marketCap: "Large Cap",
      volatility: "High"
    },
    {
      id: "xai",
      name: "Artificial Intelligence Portfolio",
      shortName: "xAI",
      company: "xAI / OpenAI",
      icon: <SiOpenai className="w-6 h-6" />,
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
      sector: "Artificial Intelligence",
      category: "technology",
      description: "One of the fastest-growing sectors in modern technology. Our AI portfolio captures the infrastructure needed to understand and advance artificial intelligence.",
      longDescription: "Access to high-growth private tech funding rounds, machine learning innovation, and the future of cognitive computing. Position yourself at the forefront of the AI revolution.",
      image: "/xai-hero.jpg",
      color: "rose",
      gradient: "from-rose-500 to-rose-600",
      minInvestment: 450,
      featured: true,
      features: [
        "Machine learning platforms",
        "Neural network development",
        "AI infrastructure",
        "Private tech funding access",
        "Large language models",
        "Computer vision technology"
      ],
      returns: {
        "1week": 500,
        "2weeks": 1000,
        "1month": 1100,
        "2months": 2500
      },
      risk: "High",
      riskLevel: 4,
      popularity: 98,
      liquidity: "Medium",
      investors: 8700,
      tags: ["AI", "Machine Learning", "Deep Tech", "Future Intelligence"],
      founded: 2015,
      marketCap: "Growth Cap",
      volatility: "Very High"
    },
    {
      id: "neuralink",
      name: "Neurotechnology Portfolio",
      shortName: "Neuralink",
      company: "Neuralink",
      icon: <FaBrain className="w-6 h-6" />,
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      sector: "Neurotechnology / Biotech",
      category: "biotech",
      description: "Neurotechnology combines neuroscience with advanced computing—one of the most promising future industries poised to change humanity.",
      longDescription: "Be part of the biotech revolution through brain-computer interfaces, medical innovation, and human enhancement technologies. Early access to transformative neuroscience.",
      image: "/neuralink-hero.jpg",
      color: "cyan",
      gradient: "from-cyan-500 to-cyan-600",
      minInvestment: 120,
      features: [
        "Brain-computer interfaces",
        "Medical technology innovation",
        "Neuroscience advancement",
        "Human enhancement tech",
        "Paralysis treatment solutions",
        "Cognitive enhancement"
      ],
      returns: {
        "1week": 50,
        "2weeks": 100,
        "1month": 200,
        "2months": 400
      },
      risk: "High",
      riskLevel: 4,
      popularity: 78,
      liquidity: "Low",
      investors: 6300,
      tags: ["Neurotech", "Biotech", "BCI", "Future Medicine"],
      founded: 2016,
      marketCap: "Small Cap",
      volatility: "High"
    },
    {
      id: "boring",
      name: "Infrastructure Innovation Portfolio",
      shortName: "Boring Co.",
      company: "The Boring Company",
      icon: <GiMining className="w-6 h-6" />,
      iconBg: "bg-slate-100",
      iconColor: "text-slate-600",
      sector: "Infrastructure / Tunneling",
      category: "infrastructure",
      description: "Urban transportation infrastructure is evolving to address congestion and modern city development through innovative tunneling solutions.",
      longDescription: "Investment in next-generation infrastructure projects, tunnel boring technology, and urban transportation systems that are reshaping city development.",
      image: "/boring-portfolio.jpg",
      color: "slate",
      gradient: "from-slate-500 to-slate-600",
      minInvestment: 200,
      features: [
        "Tunnel boring technology",
        "Urban transportation systems",
        "Infrastructure development",
        "City congestion solutions",
        "High-speed transit",
        "Underground logistics"
      ],
      returns: {
        "1week": 10,
        "2weeks": 20,
        "1month": 30,
        "2months": 60
      },
      risk: "Low",
      riskLevel: 1,
      popularity: 70,
      liquidity: "High",
      investors: 4100,
      tags: ["Infrastructure", "Tunneling", "Urban", "Transportation"],
      founded: 2016,
      marketCap: "Mid Cap",
      volatility: "Low"
    },
    {
      id: "crypto",
      name: "Cryptocurrency Portfolio",
      shortName: "Crypto",
      company: "Digital Assets",
      icon: <FaBitcoin className="w-6 h-6" />,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      sector: "Digital Assets",
      category: "crypto",
      description: "Cryptocurrencies have become a major component of the modern financial ecosystem. Our AI bots capitalize on market dips and spikes instantly.",
      longDescription: "Diversified exposure to Bitcoin, Ethereum, and emerging altcoins with active trading strategies. 24/7 market monitoring and automated trading for optimal entry and exit points.",
      image: "/crypto-portfolio.jpg",
      color: "amber",
      gradient: "from-amber-500 to-amber-600",
      minInvestment: 150,
      features: [
        "AI-powered trading bots",
        "24/7 market monitoring",
        "Diversified crypto basket",
        "Automated profit taking",
        "Stop-loss protection",
        "Multi-exchange access"
      ],
      returns: {
        "1week": 100,
        "2weeks": 200,
        "1month": 300,
        "2months": 600
      },
      risk: "Very High",
      riskLevel: 5,
      popularity: 96,
      liquidity: "Very High",
      investors: 15800,
      tags: ["Crypto", "Blockchain", "DeFi", "Trading"],
      founded: 2009,
      marketCap: "Large Cap",
      volatility: "Extreme"
    },
    {
      id: "metals",
      name: "Precious Metals Portfolio",
      shortName: "Gold & Diamond",
      company: "Physical Assets",
      icon: <GiGoldBar className="w-6 h-6" />,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      sector: "Commodities",
      category: "commodities",
      description: "Precious metals have historically served as stores of value and are widely used as portfolio diversification assets.",
      longDescription: "We purchase physical, certified gold bars and diamonds stored in secure vaults. Perfect for portfolio stability during market uncertainty and long-term asset preservation.",
      image: "/metals-portfolio.jpg",
      color: "yellow",
      gradient: "from-yellow-500 to-yellow-600",
      minInvestment: 100,
      features: [
        "Physical gold backing",
        "Certified diamonds",
        "Secure vault storage",
        "Inflation hedge",
        "Portfolio diversification",
        "Insurance coverage"
      ],
      returns: {
        "1week": 100,
        "2weeks": 200,
        "1month": 300,
        "2months": 600
      },
      risk: "Low",
      riskLevel: 1,
      popularity: 82,
      liquidity: "High",
      investors: 7200,
      tags: ["Gold", "Diamonds", "Commodities", "Safe Haven"],
      founded: 2020,
      marketCap: "N/A",
      volatility: "Low"
    },
    {
      id: "xcorp",
      name: "Digital Media Technology Portfolio",
      shortName: "X Corp.",
      company: "X Corporation",
      icon: <SiX className="w-6 h-6" />,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600",
      sector: "Social Media / Digital",
      category: "technology",
      description: "Digital platforms play a critical role in modern communication, content distribution, and social connectivity.",
      longDescription: "Investment in the evolution of digital communication, content platforms, and social media infrastructure. Capture the growth of the creator economy and digital advertising.",
      image: "/xcorp-portfolio.jpg",
      color: "gray",
      gradient: "from-gray-500 to-gray-600",
      minInvestment: 100,
      features: [
        "Digital platform growth",
        "Advertising technology",
        "Content distribution",
        "Creator economy",
        "Social connectivity",
        "Data analytics"
      ],
      returns: {
        "1week": 100,
        "2weeks": 200,
        "1month": 300,
        "2months": 600
      },
      risk: "Moderate",
      riskLevel: 2,
      popularity: 85,
      liquidity: "High",
      investors: 5600,
      tags: ["Social Media", "Digital", "Content", "Advertising"],
      founded: 2006,
      marketCap: "Large Cap",
      volatility: "Medium"
    },
    {
      id: "quantum",
      name: "Quantum Computing Portfolio",
      shortName: "Quantum",
      company: "Quantum Tech",
      icon: <GiChipsBag className="w-6 h-6" />,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      sector: "Quantum Computing",
      category: "technology",
      description: "Quantum computing represents the next frontier in computational power, with applications in cryptography, drug discovery, and complex problem-solving.",
      longDescription: "Early-stage exposure to quantum computing companies developing revolutionary hardware and algorithms. Position yourself for the quantum leap in computing.",
      image: "/quantum-portfolio.jpg",
      color: "indigo",
      gradient: "from-indigo-500 to-indigo-600",
      minInvestment: 300,
      features: [
        "Quantum hardware development",
        "Quantum algorithms",
        "Cryptography solutions",
        "Drug discovery platforms",
        "Optimization problems",
        "Research partnerships"
      ],
      returns: {
        "1week": 75,
        "2weeks": 150,
        "1month": 250,
        "2months": 500
      },
      risk: "Very High",
      riskLevel: 5,
      popularity: 65,
      liquidity: "Low",
      investors: 2100,
      tags: ["Quantum", "Computing", "Cryptography", "Future Tech"],
      founded: 2021,
      marketCap: "Small Cap",
      volatility: "Very High"
    },
    {
      id: "robotics",
      name: "Robotics & Automation Portfolio",
      shortName: "Robotics",
      company: "Automation Tech",
      icon: <GiArtificialIntelligence className="w-6 h-6" />,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      sector: "Robotics / Automation",
      category: "technology",
      description: "Robotics and automation are transforming manufacturing, logistics, and everyday life through intelligent machines.",
      longDescription: "Investment in industrial robotics, service robots, and automation systems that are reshaping industries and creating new efficiencies.",
      image: "/robotics-portfolio.jpg",
      color: "emerald",
      gradient: "from-emerald-500 to-emerald-600",
      minInvestment: 200,
      features: [
        "Industrial robotics",
        "Service robots",
        "Automation systems",
        "Manufacturing tech",
        "Logistics automation",
        "AI integration"
      ],
      returns: {
        "1week": 80,
        "2weeks": 160,
        "1month": 280,
        "2months": 520
      },
      risk: "Moderate",
      riskLevel: 2,
      popularity: 75,
      liquidity: "Medium",
      investors: 3800,
      tags: ["Robotics", "Automation", "Manufacturing", "Industry 4.0"],
      founded: 2018,
      marketCap: "Mid Cap",
      volatility: "Medium"
    }
  ];

  // Filter categories
  const categories = [
    { value: "all", label: "All Portfolios", count: portfolios.length },
    { value: "technology", label: "Technology", count: portfolios.filter(p => p.category === "technology").length },
    { value: "aerospace", label: "Aerospace", count: portfolios.filter(p => p.category === "aerospace").length },
    { value: "biotech", label: "Biotech", count: portfolios.filter(p => p.category === "biotech").length },
    { value: "infrastructure", label: "Infrastructure", count: portfolios.filter(p => p.category === "infrastructure").length },
    { value: "crypto", label: "Cryptocurrency", count: portfolios.filter(p => p.category === "crypto").length },
    { value: "commodities", label: "Commodities", count: portfolios.filter(p => p.category === "commodities").length }
  ];

  // Risk levels
  const riskLevels = [
    { value: "all", label: "All Risks" },
    { value: "1", label: "Low Risk", color: "green" },
    { value: "2", label: "Moderate", color: "teal" },
    { value: "3", label: "Moderate-High", color: "amber" },
    { value: "4", label: "High", color: "rose" },
    { value: "5", label: "Very High", color: "purple" }
  ];

  // Sort options
  const sortOptions = [
    { value: "popular", label: "Most Popular" },
    { value: "return", label: "Highest Return" },
    { value: "minInvestment", label: "Lowest Minimum" },
    { value: "risk", label: "Risk Level" },
    { value: "name", label: "Name" }
  ];

  // Filter and sort portfolios
  const filteredPortfolios = useMemo(() => {
    let filtered = [...portfolios];

    // Apply category filter
    if (filterCategory !== "all") {
      filtered = filtered.filter(p => p.category === filterCategory);
    }

    // Apply risk filter
    if (filterRisk !== "all") {
      filtered = filtered.filter(p => p.riskLevel === parseInt(filterRisk));
    }

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.company.toLowerCase().includes(query) ||
        p.sector.toLowerCase().includes(query) ||
        p.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "popular":
        filtered.sort((a, b) => b.popularity - a.popularity);
        break;
      case "return":
        filtered.sort((a, b) => b.returns["2months"] - a.returns["2months"]);
        break;
      case "minInvestment":
        filtered.sort((a, b) => a.minInvestment - b.minInvestment);
        break;
      case "risk":
        filtered.sort((a, b) => a.riskLevel - b.riskLevel);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }, [filterCategory, filterRisk, searchQuery, sortBy, portfolios]);

  const textColorClasses: any = {
    teal: 'text-teal-600',
    purple: 'text-purple-600',
    rose: 'text-rose-600',
    cyan: 'text-cyan-600',
    slate: 'text-slate-600',
    amber: 'text-amber-600',
    yellow: 'text-yellow-600',
    gray: 'text-gray-600',
    indigo: 'text-indigo-600',
    emerald: 'text-emerald-600'
  };

  const bgColorClasses: any = {
    teal: 'bg-teal-50',
    purple: 'bg-purple-50',
    rose: 'bg-rose-50',
    cyan: 'bg-cyan-50',
    slate: 'bg-slate-50',
    amber: 'bg-amber-50',
    yellow: 'bg-yellow-50',
    gray: 'bg-gray-50',
    indigo: 'bg-indigo-50',
    emerald: 'bg-emerald-50'
  };

  return (
    <section ref={ref} className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-purple-50 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4">
            <BsGrid3X3Gap className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
            <span className="text-xs md:text-sm font-semibold text-purple-700">All Investment Portfolios</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4">
            Complete Portfolio<br />
            <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            Explore our full range of curated investment opportunities across innovative sectors and technologies.
          </p>
        </motion.div>

        {/* Filters Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-slate-200 p-3 md:p-4 mb-6 md:mb-8"
        >
          {/* Search and View Toggle */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-3 md:mb-4">
            <div className="flex-1 min-w-[200px] md:min-w-[240px] relative">
              <HiOutlineMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 md:w-5 md:h-5" />
              <input
                type="text"
                placeholder="Search portfolios..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 md:pl-10 pr-3 md:pr-4 py-1.5 md:py-2 text-sm md:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-1 md:space-x-2 px-3 md:px-4 py-1.5 md:py-2 border border-slate-300 rounded-lg text-sm md:text-base text-slate-700 hover:bg-slate-50"
              >
                <HiOutlineFunnel className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline">Filters</span>
              </button>
              
              <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 md:p-2 ${viewMode === "grid" ? 'bg-teal-50 text-teal-600' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  <BsGrid3X3Gap className="w-4 h-4 md:w-5 md:h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 md:p-2 ${viewMode === "list" ? 'bg-teal-50 text-teal-600' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  <HiOutlineChartBar className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Expandable Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-3 md:pt-4 border-t border-slate-200">
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {/* Category Filter */}
                    <div>
                      <label className="block text-xs md:text-sm font-medium text-slate-700 mb-1 md:mb-2">Category</label>
                      <select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="w-full p-1.5 md:p-2 text-sm md:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                      >
                        {categories.map(cat => (
                          <option key={cat.value} value={cat.value}>
                            {cat.label} ({cat.count})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Risk Filter */}
                    <div>
                      <label className="block text-xs md:text-sm font-medium text-slate-700 mb-1 md:mb-2">Risk Level</label>
                      <select
                        value={filterRisk}
                        onChange={(e) => setFilterRisk(e.target.value)}
                        className="w-full p-1.5 md:p-2 text-sm md:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                      >
                        {riskLevels.map(risk => (
                          <option key={risk.value} value={risk.value}>
                            {risk.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Sort By */}
                    <div>
                      <label className="block text-xs md:text-sm font-medium text-slate-700 mb-1 md:mb-2">Sort By</label>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full p-1.5 md:p-2 text-sm md:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                      >
                        {sortOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Active Filters */}
                  {(filterCategory !== "all" || filterRisk !== "all" || searchQuery) && (
                    <div className="mt-3 md:mt-4 flex flex-wrap items-center gap-2">
                      <span className="text-xs md:text-sm text-slate-500">Active filters:</span>
                      {filterCategory !== "all" && (
                        <span className="inline-flex items-center space-x-1 px-2 py-0.5 md:px-3 md:py-1 bg-teal-50 text-teal-700 rounded-full text-xs md:text-sm">
                          <span>{categories.find(c => c.value === filterCategory)?.label}</span>
                          <button onClick={() => setFilterCategory("all")}>
                            <HiOutlineXMark className="w-3 h-3 md:w-4 md:h-4" />
                          </button>
                        </span>
                      )}
                      {filterRisk !== "all" && (
                        <span className="inline-flex items-center space-x-1 px-2 py-0.5 md:px-3 md:py-1 bg-rose-50 text-rose-700 rounded-full text-xs md:text-sm">
                          <span>{riskLevels.find(r => r.value === filterRisk)?.label}</span>
                          <button onClick={() => setFilterRisk("all")}>
                            <HiOutlineXMark className="w-3 h-3 md:w-4 md:h-4" />
                          </button>
                        </span>
                      )}
                      {searchQuery && (
                        <span className="inline-flex items-center space-x-1 px-2 py-0.5 md:px-3 md:py-1 bg-purple-50 text-purple-700 rounded-full text-xs md:text-sm">
                          <span>Search: &apos;{searchQuery}&apos;</span>
                          <button onClick={() => setSearchQuery("")}>
                            <HiOutlineXMark className="w-3 h-3 md:w-4 md:h-4" />
                          </button>
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results Count */}
          <div className="mt-3 md:mt-4 text-xs md:text-sm text-slate-500">
            Showing {filteredPortfolios.length} of {portfolios.length} portfolios
          </div>
        </motion.div>

        {/* Portfolios Grid/List View */}
        <AnimatePresence mode="wait">
          {viewMode === "grid" ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
              {filteredPortfolios.map((portfolio, index) => (
                <motion.div
                  key={portfolio.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                  onClick={() => setSelectedPortfolio(selectedPortfolio === portfolio.id ? null : portfolio.id)}
                >
                  {/* Portfolio Header with Gradient */}
                  <div className={`h-24 sm:h-28 md:h-32 bg-gradient-to-r ${portfolio.gradient} relative overflow-hidden`}>
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '20px 20px'
                      }} />
                    </div>
                    
                    {/* Portfolio Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={portfolio.image}
                        alt={portfolio.name}
                        fill
                        className="object-cover opacity-30"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    
                    {/* Portfolio Icon */}
                    <div className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 left-3 sm:left-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl ${portfolio.iconBg} flex items-center justify-center border-2 md:border-4 border-white shadow-lg`}>
                        <div className={`${portfolio.iconColor} text-sm sm:text-base md:text-lg`}>{portfolio.icon}</div>
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {portfolio.featured && (
                      <div className="absolute top-2 right-2 md:top-3 md:right-3">
                        <div className="bg-rose-500 text-white text-[10px] md:text-xs font-semibold px-1.5 py-0.5 md:px-2 md:py-1 rounded-full flex items-center space-x-0.5 md:space-x-1">
                          <HiOutlineFire className="w-2 h-2 md:w-3 md:h-3" />
                          <span>Featured</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Portfolio Content */}
                  <div className="p-3 sm:p-4 pt-6 sm:pt-7 md:pt-8">
                    <div className="flex items-start justify-between mb-1 md:mb-2">
                      <div>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 line-clamp-1">{portfolio.name}</h3>
                        <p className="text-xs text-slate-500">{portfolio.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-base sm:text-lg md:text-xl font-bold text-slate-900">${portfolio.minInvestment}</div>
                        <div className="text-[10px] md:text-xs text-slate-500">min.</div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-0.5 md:gap-1 mb-2 md:mb-3">
                      {portfolio.tags.slice(0, 3).map(tag => (
                        <span key={tag} className={`text-[10px] md:text-xs px-1 md:px-2 py-0.5 ${bgColorClasses[portfolio.color]} ${textColorClasses[portfolio.color]} rounded-full`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Returns Quick View */}
                    <div className="grid grid-cols-4 gap-0.5 md:gap-1 mb-2 md:mb-3">
                      {Object.entries(portfolio.returns).map(([period, value]) => (
                        <div key={period} className="text-center">
                          <div className="text-[8px] md:text-xs text-slate-400">
                            {period === "1week" ? "1W" : period === "2weeks" ? "2W" : period === "1month" ? "1M" : "2M"}
                          </div>
                          <div className={`text-xs sm:text-sm md:text-base font-bold ${textColorClasses[portfolio.color]}`}>
                            {value}%
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Expandable Details */}
                    <AnimatePresence>
                      {selectedPortfolio === portfolio.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2 md:pt-3 border-t border-slate-100">
                            <p className="text-xs md:text-sm text-slate-600 mb-1 md:mb-2 line-clamp-2">{portfolio.longDescription}</p>
                            
                            {/* Features */}
                            <div className="mb-2 md:mb-3">
                              <h4 className="text-[10px] md:text-xs font-semibold text-slate-700 mb-1 md:mb-2">Key Features:</h4>
                              <div className="grid grid-cols-2 gap-0.5 md:gap-1">
                                {portfolio.features.slice(0, 4).map(feature => (
                                  <div key={feature} className="flex items-start space-x-0.5 md:space-x-1">
                                    <HiOutlineCheckCircle className={`w-2 h-2 md:w-3 md:h-3 ${textColorClasses[portfolio.color]} flex-shrink-0 mt-0.5`} />
                                    <span className="text-[8px] md:text-xs text-slate-600 line-clamp-1">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-1 md:gap-2 text-center text-[8px] md:text-xs">
                              <div>
                                <div className="text-slate-400">Risk</div>
                                <div className={`font-semibold ${
                                  portfolio.riskLevel <= 2 ? 'text-green-600' :
                                  portfolio.riskLevel <= 3 ? 'text-amber-600' :
                                  'text-rose-600'
                                }`}>
                                  {portfolio.risk}
                                </div>
                              </div>
                              <div>
                                <div className="text-slate-400">Investors</div>
                                <div className="font-semibold text-slate-700">
                                  {(portfolio.investors / 1000).toFixed(1)}k+
                                </div>
                              </div>
                              <div>
                                <div className="text-slate-400">Liquidity</div>
                                <div className="font-semibold text-slate-700">{portfolio.liquidity}</div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-1 md:space-x-2 mt-2 md:mt-4">
                      <button className={`flex-1 py-1 md:py-2 text-xs md:text-sm font-semibold rounded-lg transition-all ${
                        selectedPortfolio === portfolio.id
                          ? `bg-gradient-to-r ${portfolio.gradient} text-white`
                          : 'bg-slate-900 text-white hover:bg-slate-800'
                      }`}>
                        Invest Now
                      </button>
                      <button
                        className="p-1 md:p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPortfolio(selectedPortfolio === portfolio.id ? null : portfolio.id);
                        }}
                      >
                        <HiOutlineInformationCircle className="w-3 h-3 md:w-4 md:h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-xl md:rounded-2xl border border-slate-200 overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px] md:min-w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-3 md:px-6 py-2 md:py-4 text-left text-xs md:text-sm font-semibold text-slate-900">Portfolio</th>
                      <th className="px-3 md:px-6 py-2 md:py-4 text-left text-xs md:text-sm font-semibold text-slate-900">Category</th>
                      <th className="px-3 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm font-semibold text-slate-900">Min.</th>
                      <th className="px-3 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm font-semibold text-slate-900">1W</th>
                      <th className="px-3 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm font-semibold text-slate-900">1M</th>
                      <th className="px-3 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm font-semibold text-slate-900">2M</th>
                      <th className="px-3 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm font-semibold text-slate-900">Risk</th>
                      <th className="px-3 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm font-semibold text-slate-900">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {filteredPortfolios.map((portfolio, index) => (
                      <motion.tr
                        key={portfolio.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.03 }}
                        className="hover:bg-slate-50 transition-colors"
                      >
                        <td className="px-3 md:px-6 py-2 md:py-4">
                          <div className="flex items-center space-x-2 md:space-x-3">
                            <div className={`w-6 h-6 md:w-8 md:h-8 rounded-lg ${portfolio.iconBg} flex items-center justify-center`}>
                              <div className={`${portfolio.iconColor} text-xs md:text-sm`}>{portfolio.icon}</div>
                            </div>
                            <div>
                              <div className="text-xs md:text-sm font-medium text-slate-900">{portfolio.shortName}</div>
                              <div className="text-[8px] md:text-xs text-slate-500 hidden sm:block">{portfolio.sector}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 md:px-6 py-2 md:py-4">
                          <span className="text-[10px] md:text-sm text-slate-600 capitalize">{portfolio.category}</span>
                        </td>
                        <td className="px-3 md:px-6 py-2 md:py-4 text-center text-[10px] md:text-sm font-medium">
                          ${portfolio.minInvestment}
                        </td>
                        <td className="px-3 md:px-6 py-2 md:py-4 text-center">
                          <span className={`text-[10px] md:text-sm font-bold ${textColorClasses[portfolio.color]}`}>
                            {portfolio.returns["1week"]}%
                          </span>
                        </td>
                        <td className="px-3 md:px-6 py-2 md:py-4 text-center">
                          <span className={`text-[10px] md:text-sm font-bold ${textColorClasses[portfolio.color]}`}>
                            {portfolio.returns["1month"]}%
                          </span>
                        </td>
                        <td className="px-3 md:px-6 py-2 md:py-4 text-center">
                          <span className={`text-[10px] md:text-sm font-bold ${textColorClasses[portfolio.color]}`}>
                            {portfolio.returns["2months"]}%
                          </span>
                        </td>
                        <td className="px-3 md:px-6 py-2 md:py-4 text-center">
                          <span className={`text-[8px] md:text-xs px-1 md:px-2 py-0.5 md:py-1 rounded-full ${
                            portfolio.riskLevel <= 2 ? 'bg-green-100 text-green-700' :
                            portfolio.riskLevel <= 3 ? 'bg-amber-100 text-amber-700' :
                            'bg-rose-100 text-rose-700'
                          }`}>
                            {portfolio.risk}
                          </span>
                        </td>
                        <td className="px-3 md:px-6 py-2 md:py-4 text-center">
                          <button className="px-2 md:px-3 py-0.5 md:py-1 bg-teal-600 text-white text-[10px] md:text-sm rounded-lg hover:bg-teal-700">
                            Invest
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* No Results */}
        {filteredPortfolios.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8 md:py-12"
          >
            <div className="text-4xl md:text-6xl mb-3 md:mb-4">🔍</div>
            <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-1 md:mb-2">No Portfolios Found</h3>
            <p className="text-sm md:text-base text-slate-600 mb-3 md:mb-4">Try adjusting your filters or search query</p>
            <button
              onClick={() => {
                setFilterCategory("all");
                setFilterRisk("all");
                setSearchQuery("");
              }}
              className="px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base bg-teal-600 text-white rounded-lg hover:bg-teal-700"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AllPortfoliosGrid;