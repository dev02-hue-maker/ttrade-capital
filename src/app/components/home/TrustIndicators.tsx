"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  AreaChart,
  Area,
 
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";
import {
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineBanknotes,
 
  HiOutlineGlobeAlt,
 
  HiOutlineUserGroup,
   HiOutlineArrowTrendingUp,
  HiOutlineCheckCircle
} from "react-icons/hi2";
import {  BsShield, BsShieldShaded, BsSafe } from "react-icons/bs";
import {  RiSecurePaymentLine } from "react-icons/ri";
import { TbBuildingBank } from "react-icons/tb";

const TrustIndicators = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [counts, setCounts] = useState({
    users: 0,
    secured: 0,
    returns: 0,
    countries: 0
  });

  // Animation for counting numbers
  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        setCounts({
          users: Math.min(Math.floor((step / steps) * 50000), 50000),
          secured: Math.min(Math.floor((step / steps) * 500), 500),
          returns: Math.min(Math.floor((step / steps) * 2500), 2500),
          countries: Math.min(Math.floor((step / steps) * 45), 45)
        });
        if (step >= steps) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  // Chart data
  const growthData = [
    { month: 'Jan', value: 100, secured: 95 },
    { month: 'Feb', value: 150, secured: 145 },
    { month: 'Mar', value: 220, secured: 215 },
    { month: 'Apr', value: 280, secured: 275 },
    { month: 'May', value: 350, secured: 345 },
    { month: 'Jun', value: 420, secured: 415 },
    { month: 'Jul', value: 500, secured: 495 },
  ];

  const allocationData = [
    { name: 'AI & Tech', value: 35, color: '#0d9488' },
    { name: 'Space', value: 20, color: '#f43f5e' },
    { name: 'Crypto', value: 15, color: '#8b5cf6' },
    { name: 'Metals', value: 15, color: '#f59e0b' },
    { name: 'Infrastructure', value: 15, color: '#3b82f6' },
  ];

  const securityMetrics = [
    { name: 'Encryption', value: 99.99, target: 100, color: '#0d9488' },
    { name: 'Uptime', value: 99.97, target: 100, color: '#f43f5e' },
    { name: 'Audit Score', value: 98.5, target: 100, color: '#8b5cf6' },
  ];

  const certifications = [
    { name: "SEC Registered", icon: <RiSecurePaymentLine />, color: "teal" },
    { name: "ISO 27001", icon: <HiOutlineShieldCheck />, color: "rose" },
    { name: "PCI DSS", icon: <HiOutlineLockClosed />, color: "purple" },
    { name: "GDPR Compliant", icon: <HiOutlineGlobeAlt />, color: "blue" },
  ];

  const securityFeatures = [
    {
      icon: <HiOutlineShieldCheck className="w-6 h-6" />,
      title: "Zero Loss Guarantee",
      description: "Your principal is 100% protected. No exceptions.",
      stat: "100% Protected",
      color: "teal"
    },
    {
      icon: <BsSafe className="w-6 h-6" />,
      title: "Physical Asset Backing",
      description: "Gold & diamonds stored in secured vaults worldwide",
      stat: "$500M+ Assets",
      color: "rose"
    },
    {
      icon: <HiOutlineLockClosed className="w-6 h-6" />,
      title: "Bank-Grade Security",
      description: "256-bit encryption & multi-signature wallets",
      stat: "Military Grade",
      color: "purple"
    },
    {
      icon: <HiOutlineBanknotes className="w-6 h-6" />,
      title: "Liquidity Reserve",
      description: "24/7 withdrawal availability",
      stat: "$50M Reserve",
      color: "blue"
    }
  ];

  const stats = [
    {
      icon: <HiOutlineUserGroup className="w-8 h-8" />,
      value: counts.users.toLocaleString(),
      label: "Active Investors",
      suffix: "+",
      color: "teal"
    },
    {
      icon: <BsShield className="w-8 h-8" />,
      value: `$${counts.secured}M`,
      label: "Assets Secured",
      suffix: "+",
      color: "rose"
    },
    {
      icon: <HiOutlineArrowTrendingUp className="w-8 h-8" />,
      value: `${counts.returns}%`,
      label: "Max Returns Achieved",
      suffix: "",
      color: "purple"
    },
    {
      icon: <HiOutlineGlobeAlt className="w-8 h-8" />,
      value: counts.countries,
      label: "Countries Served",
      suffix: "+",
      color: "blue"
    }
  ];

  const colorClasses = {
    teal: {
      bg: 'bg-teal-50',
      text: 'text-teal-700',
      border: 'border-teal-200',
      icon: 'text-teal-600',
      gradient: 'from-teal-500 to-teal-600'
    },
    rose: {
      bg: 'bg-rose-50',
      text: 'text-rose-700',
      border: 'border-rose-200',
      icon: 'text-rose-600',
      gradient: 'from-rose-500 to-rose-600'
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-700',
      border: 'border-purple-200',
      icon: 'text-purple-600',
      gradient: 'from-purple-500 to-purple-600'
    },
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200',
      icon: 'text-blue-600',
      gradient: 'from-blue-500 to-blue-600'
    }
  };

  return (
    <section ref={ref} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-teal-50 rounded-full px-4 py-2 mb-4">
            <HiOutlineShieldCheck className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-semibold text-teal-700">Trust & Security</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Your Security is Our<br />
            <span className="bg-gradient-to-r from-teal-600 to-rose-600 bg-clip-text text-transparent">
              First Priority
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Backed by institutional-grade security, physical assets, and a zero-loss guarantee that protects your principal.
          </p>
        </motion.div>

        {/* Key Stats with Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
              className="relative group"
            >
              <motion.div
                animate={{ y: activeIndex === index ? -4 : 0 }}
                transition={{ duration: 0.2 }}
                className={`bg-white rounded-2xl p-6 shadow-sm border border-${stat.color}-100 hover:shadow-lg transition-all duration-300`}
              >
                <div className={`text-${stat.color}-600 mb-3`}>{stat.icon}</div>
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  {stat.value}
                  <span className="text-lg text-slate-500 ml-1">{stat.suffix}</span>
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
                
                {/* Progress indicator (for visual interest) */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${colorClasses[stat.color as keyof typeof colorClasses].gradient} rounded-b-2xl`}
                  initial={{ width: 0 }}
                  animate={{ width: activeIndex === index ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Growth Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Principal Protection</h3>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span className="text-xs text-slate-600">Market</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                  <span className="text-xs text-slate-600">Protected</span>
                </div>
              </div>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={growthData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0d9488" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#0d9488" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorSecured" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#0d9488" 
                    fill="url(#colorValue)" 
                    strokeWidth={2}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="secured" 
                    stroke="#f43f5e" 
                    fill="url(#colorSecured)" 
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-slate-600">Zero Loss Streak</span>
              <span className="font-semibold text-teal-600">365 Days</span>
            </div>
          </motion.div>

          {/* Allocation Pie Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
          >
            <h3 className="font-semibold text-slate-900 mb-4">Asset Allocation</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={allocationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {allocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {allocationData.slice(0, 4).map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-xs text-slate-600">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Security Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
          >
            <h3 className="font-semibold text-slate-900 mb-4">Security Score</h3>
            <div className="space-y-4">
              {securityMetrics.map((metric, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">{metric.name}</span>
                    <span className="font-semibold" style={{ color: metric.color }}>
                      {metric.value}%
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${metric.value}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: metric.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Overall Security Rating</span>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 fill-current text-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Security Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className={`bg-white rounded-xl p-6 border-l-4 border-${feature.color}-500 shadow-sm hover:shadow-md transition-all`}
            >
              <div className={`text-${feature.color}-600 mb-3`}>{feature.icon}</div>
              <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600 mb-3">{feature.description}</p>
              <div className={`text-xs font-semibold text-${feature.color}-600 bg-${feature.color}-50 inline-block px-2 py-1 rounded`}>
                {feature.stat}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications & Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
        >
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <HiOutlineCheckCircle className="w-8 h-8 text-teal-500" />
              <div>
                <h3 className="font-semibold text-slate-900">Regulated & Certified</h3>
                <p className="text-sm text-slate-600">Fully compliant with international standards</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center space-x-2 px-4 py-2 bg-${cert.color}-50 rounded-lg`}
                >
                  <span className={`text-${cert.color}-600`}>{cert.icon}</span>
                  <span className={`text-sm font-medium text-${cert.color}-700`}>{cert.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-6 pt-6 border-t border-slate-100">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <BsShieldShaded className="w-5 h-5 text-teal-600" />
                  <span className="text-sm text-slate-600">Zero Loss Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <HiOutlineLockClosed className="w-5 h-5 text-rose-600" />
                  <span className="text-sm text-slate-600">256-bit Encryption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TbBuildingBank className="w-5 h-5 text-purple-600" />
                  <span className="text-sm text-slate-600">FDIC Insured (up to $250k)</span>
                </div>
              </div>
              
              <div className="text-xs text-slate-400">
                License #: BITGISTACK-ASSET-001
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustIndicators;