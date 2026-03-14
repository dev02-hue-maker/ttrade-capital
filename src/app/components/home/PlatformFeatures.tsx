/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
 import {
  HiOutlineDeviceTablet,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineBanknotes,
  HiOutlineBellAlert,
  HiOutlinePresentationChartLine,
  HiOutlineDocumentText,
   HiOutlineLockClosed,
   HiOutlineFingerPrint,
  HiOutlineServer,
   HiOutlineGlobeAlt,
 
  HiOutlineCheckCircle,
  
  HiOutlineCpuChip,
  HiOutlineRocketLaunch,
  
  HiOutlineCreditCard,
 
  HiOutlineComputerDesktop,
 
} from "react-icons/hi2";
import {
 
  BsShieldShaded,
  BsSafe,
 
  BsLock,
 
  BsBell,
 
} from "react-icons/bs";
 
import {
  GiTakeMyMoney,
  GiGoldBar,
  
  
} from "react-icons/gi";
import { TbAuth2Fa } from "react-icons/tb";
import { FaVault } from "react-icons/fa6";

const PlatformFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState<"features" | "security">("features");
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [activeSecurity, setActiveSecurity] = useState<string | null>(null);
  const [showDemo, setShowDemo] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  // Features Data
  const features = [
    {
      id: "dashboard",
      title: "Real-Time Dashboard",
      shortTitle: "Dashboard",
      icon: <HiOutlineComputerDesktop className="w-8 h-8" />,
      color: "teal",
      gradient: "from-teal-500 to-teal-600",
      description: "Comprehensive overview of your investments with live updates and performance metrics.",
      longDescription: "Access your complete investment portfolio from a single, intuitive dashboard. Monitor balances, track performance, and make informed decisions with real-time data visualization.",
      stats: {
        updates: "Real-time",
        metrics: "15+",
        availability: "99.9%"
      },
      features: [
        "Live balance updates",
        "Portfolio performance charts",
        "Investment history log",
        "Profit/loss tracking",
        "Asset allocation view"
      ],
      screenshot: "/images/dashboard-preview.jpg"
    },
    {
      id: "analytics",
      title: "Advanced Analytics",
      shortTitle: "Analytics",
      icon: <HiOutlinePresentationChartLine className="w-8 h-8" />,
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      description: "Deep insights into your investment performance with predictive analytics and trends.",
      longDescription: "Leverage AI-powered analytics to understand market trends, predict opportunities, and optimize your investment strategy with detailed performance metrics.",
      stats: {
        indicators: "25+",
        accuracy: "94%",
        predictions: "AI-powered"
      },
      features: [
        "Performance trends",
        "Risk analysis",
        "Return projections",
        "Market comparisons",
        "Custom reports"
      ]
    },
    {
      id: "monitoring",
      title: "24/7 Portfolio Monitoring",
      shortTitle: "Monitoring",
      icon: <HiOutlineBellAlert className="w-8 h-8" />,
      color: "rose",
      gradient: "from-rose-500 to-rose-600",
      description: "Continuous monitoring of your investments with instant alerts and notifications.",
      longDescription: "Our system monitors your portfolio around the clock, alerting you to important events, opportunities, and potential risks so you never miss a beat.",
      stats: {
        monitoring: "24/7",
        alerts: "Instant",
        coverage: "Global"
      },
      features: [
        "Price alerts",
        "Milestone notifications",
        "Risk warnings",
        "Opportunity alerts",
        "Daily summaries"
      ]
    },
    {
      id: "withdrawals",
      title: "Instant Withdrawals",
      shortTitle: "Withdrawals",
      icon: <HiOutlineBanknotes className="w-8 h-8" />,
      color: "amber",
      gradient: "from-amber-500 to-amber-600",
      description: "Fast and flexible withdrawal options with multiple payment methods.",
      longDescription: "Access your funds quickly with our streamlined withdrawal process. Choose from various payout methods and receive your money when you need it.",
      stats: {
        speed: "Instant-24h",
        methods: "6+",
        limits: "Flexible"
      },
      features: [
        "Instant withdrawals (Enterprise)",
        "24-hour processing (Professional)",
        "Multiple payout methods",
        "No hidden fees",
        "Withdrawal history"
      ]
    },
    {
      id: "mobile",
      title: "Mobile App Access",
      shortTitle: "Mobile",
      icon: <HiOutlineDeviceTablet className="w-8 h-8" />,
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      description: "Manage your investments on the go with our fully-featured mobile app.",
      longDescription: "Take control of your investments anywhere, anytime. Our mobile app provides full access to your portfolio, analytics, and trading features from your smartphone.",
      stats: {
        platforms: "iOS/Android",
        rating: "4.8",
        users: "25k+"
      },
      features: [
        "Biometric login",
        "Push notifications",
        "Mobile check deposit",
        "Quick trade",
        "Portfolio snapshots"
      ]
    },
    {
      id: "reports",
      title: "Automated Reports",
      shortTitle: "Reports",
      icon: <HiOutlineDocumentText className="w-8 h-8" />,
      color: "indigo",
      gradient: "from-indigo-500 to-indigo-600",
      description: "Detailed investment reports and tax documents automatically generated.",
      longDescription: "Never worry about paperwork again. Our system automatically generates comprehensive reports for your records, tax filing, and investment analysis.",
      stats: {
        formats: "PDF/CSV/Excel",
        frequency: "Daily/Monthly",
        storage: "Cloud"
      },
      features: [
        "Monthly statements",
        "Tax documents",
        "Performance summaries",
        "Export capabilities",
        "Historical archives"
      ]
    }
  ];

  // Security Features Data
  const securityFeatures = [
    {
      id: "encryption",
      title: "Bank-Grade Encryption",
      shortTitle: "Encryption",
      icon: <HiOutlineLockClosed className="w-8 h-8" />,
      color: "teal",
      gradient: "from-teal-500 to-teal-600",
      description: "256-bit SSL encryption protecting all data and transactions.",
      longDescription: "All data transmitted through our platform is secured with military-grade 256-bit encryption, the same standard used by leading financial institutions worldwide.",
      level: "Maximum",
      standard: "AES-256",
      features: [
        "End-to-end encryption",
        "Secure data transmission",
        "Encrypted storage",
        "Private key protection",
        "Perfect forward secrecy"
      ],
      certifications: ["ISO 27001", "PCI DSS", "GDPR"],
      icon2: <BsLock className="w-5 h-5" />
    },
    {
      id: "2fa",
      title: "Two-Factor Authentication",
      shortTitle: "2FA",
      icon: <HiOutlineFingerPrint className="w-8 h-8" />,
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      description: "Multi-layer security with biometric and authenticator options.",
      longDescription: "Add an extra layer of security to your account with two-factor authentication. Choose from authenticator apps, SMS codes, or biometric verification.",
      level: "Advanced",
      standard: "TOTP/HOTP",
      features: [
        "Authenticator app support",
        "SMS verification",
        "Biometric login (mobile)",
        "Recovery codes",
        "Remember device option"
      ],
      certifications: ["FIDO2", "WebAuthn"],
      icon2: <TbAuth2Fa className="w-5 h-5" />
    },
    {
      id: "vault",
      title: "Physical Asset Vaulting",
      shortTitle: "Vaulting",
      icon: <FaVault className="w-8 h-8" />,
      color: "rose",
      gradient: "from-rose-500 to-rose-600",
      description: "Physical gold and diamonds stored in secured, insured vaults.",
      longDescription: "Physical assets are stored in professionally secured vaults with 24/7 monitoring, full insurance coverage, and regular third-party audits.",
      level: "Institutional",
      standard: "Class III Vault",
      features: [
        "Brinks security",
        "Insurance coverage",
        "Regular audits",
        "Climate controlled",
        "24/7 monitoring"
      ],
      certifications: ["UL Certified", "ISO 9001"],
      icon2: <GiGoldBar className="w-5 h-5" />
    },
    {
      id: "monitoring247",
      title: "24/7 Security Monitoring",
      shortTitle: "Monitoring",
      icon: <HiOutlineShieldCheck className="w-8 h-8" />,
      color: "amber",
      gradient: "from-amber-500 to-amber-600",
      description: "Round-the-clock surveillance and threat detection systems.",
      longDescription: "Our security operations center monitors all platform activity 24/7, detecting and responding to potential threats in real-time.",
      level: "Continuous",
      standard: "SOC 2 Type II",
      features: [
        "Intrusion detection",
        "Fraud monitoring",
        "Suspicious activity alerts",
        "Real-time threat analysis",
        "Incident response team"
      ],
      certifications: ["SOC 2", "ISO 27017"],
      icon2: <BsShieldShaded className="w-5 h-5" />
    },
    {
      id: "audit",
      title: "Regular Security Audits",
      shortTitle: "Audits",
      icon: <HiOutlineDocumentText className="w-8 h-8" />,
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      description: "Third-party security audits and penetration testing.",
      longDescription: "We engage leading security firms to conduct regular audits and penetration tests, ensuring our systems remain impenetrable.",
      level: "Quarterly",
      standard: "ISO 27001",
      features: [
        "External audits",
        "Penetration testing",
        "Vulnerability scanning",
        "Compliance verification",
        "Security certifications"
      ],
      certifications: ["SOC 3", "ISO 27018"],
      icon2: <HiOutlineCheckCircle className="w-5 h-5" />
    },
    {
      id: "insurance",
      title: "Asset Insurance",
      shortTitle: "Insurance",
      icon: <BsSafe className="w-8 h-8" />,
      color: "indigo",
      gradient: "from-indigo-500 to-indigo-600",
      description: "Comprehensive insurance coverage for all assets under management.",
      longDescription: "All assets held on our platform are covered by comprehensive insurance policies, providing an additional layer of protection for your investments.",
      level: "100% Coverage",
      standard: "Lloyd's of London",
      features: [
        "Theft protection",
        "Cyber liability",
        "Asset loss coverage",
        "Fraud protection",
        "Errors & omissions"
      ],
      certifications: ["A+ Rated", "Global Coverage"],
      icon2: <GiTakeMyMoney className="w-5 h-5" />
    }
  ];

  // Security Stats
  const securityStats = [
    { label: "Data Encryption", value: "256-bit AES", color: "teal" },
    { label: "Security Audits", value: "Quarterly", color: "purple" },
    { label: "Certifications", value: "12+", color: "rose" },
    { label: "Uptime SLA", value: "99.99%", color: "amber" },
    { label: "Insurance Coverage", value: "$500M", color: "blue" },
    { label: "Security Team", value: "24/7", color: "indigo" }
  ];

  // Compliance Badges
  const complianceBadges = [
    { name: "SEC Registered", icon: <HiOutlineShieldCheck className="w-5 h-5" />, color: "teal" },
    { name: "FINRA Member", icon: <HiOutlineShieldCheck className="w-5 h-5" />, color: "purple" },
    { name: "GDPR Compliant", icon: <HiOutlineGlobeAlt className="w-5 h-5" />, color: "rose" },
    { name: "PCI DSS Level 1", icon: <HiOutlineCreditCard className="w-5 h-5" />, color: "amber" },
    { name: "ISO 27001", icon: <HiOutlineLockClosed className="w-5 h-5" />, color: "blue" },
    { name: "SOC 2 Type II", icon: <HiOutlineServer className="w-5 h-5" />, color: "indigo" }
  ];

  // Interactive Demo State
  const [demoBalance, setDemoBalance] = useState(15420.50);
  const [demoProfit, setDemoProfit] = useState(2340.75);
  const [demoPrice, setDemoPrice] = useState(243.50);

  const colorClasses: any = {
    teal: {
      bg: 'bg-teal-50',
      text: 'text-teal-600',
      border: 'border-teal-200',
      light: 'bg-teal-100',
      gradient: 'from-teal-500 to-teal-600',
      dark: 'bg-teal-600',
      hover: 'hover:bg-teal-50'
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-200',
      light: 'bg-purple-100',
      gradient: 'from-purple-500 to-purple-600',
      dark: 'bg-purple-600'
    },
    rose: {
      bg: 'bg-rose-50',
      text: 'text-rose-600',
      border: 'border-rose-200',
      light: 'bg-rose-100',
      gradient: 'from-rose-500 to-rose-600',
      dark: 'bg-rose-600'
    },
    amber: {
      bg: 'bg-amber-50',
      text: 'text-amber-600',
      border: 'border-amber-200',
      light: 'bg-amber-100',
      gradient: 'from-amber-500 to-amber-600',
      dark: 'bg-amber-600'
    },
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200',
      light: 'bg-blue-100',
      gradient: 'from-blue-500 to-blue-600',
      dark: 'bg-blue-600'
    },
    indigo: {
      bg: 'bg-indigo-50',
      text: 'text-indigo-600',
      border: 'border-indigo-200',
      light: 'bg-indigo-100',
      gradient: 'from-indigo-500 to-indigo-600',
      dark: 'bg-indigo-600'
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
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-teal-50 rounded-full px-4 py-2 mb-4">
            <HiOutlineCpuChip className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-semibold text-teal-700">Platform Features & Security</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Powerful Tools,<br />
            <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
              Enterprise-Grade Security
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Experience a professional trading platform with advanced features and military-grade security
            protecting your investments 24/7.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white p-1 rounded-xl shadow-sm border border-slate-200">
            <button
              onClick={() => setActiveTab("features")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === "features"
                  ? 'bg-gradient-to-r from-teal-600 to-purple-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <HiOutlineChartBar className="w-5 h-5" />
              <span>Platform Features</span>
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === "security"
                  ? 'bg-gradient-to-r from-teal-600 to-purple-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <HiOutlineShieldCheck className="w-5 h-5" />
              <span>Security Center</span>
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Features Tab */}
          {activeTab === "features" && (
            <motion.div
              key="features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Interactive Demo Dashboard */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-4 text-white flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <HiOutlineComputerDesktop className="w-5 h-5 text-teal-400" />
                    <span className="font-semibold">Live Dashboard Demo</span>
                  </div>
                  <button
                    onClick={() => setShowDemo(!showDemo)}
                    className="text-xs bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition-colors"
                  >
                    {showDemo ? "Hide Demo" : "Show Demo"}
                  </button>
                </div>

                <AnimatePresence>
                  {showDemo && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-gradient-to-br from-slate-50 to-white">
                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                            <div className="text-xs text-slate-500 mb-1">Total Balance</div>
                            <div className="text-2xl font-bold text-slate-900">
                              ${demoBalance.toLocaleString()}
                            </div>
                            <div className="text-xs text-teal-600 mt-1">+12.4%</div>
                          </div>
                          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                            <div className="text-xs text-slate-500 mb-1">Today&apos;s Profit</div>
                            <div className="text-2xl font-bold text-teal-600">
                              +${demoProfit.toLocaleString()}
                            </div>
                            <div className="text-xs text-slate-500 mt-1">Updated live</div>
                          </div>
                          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                            <div className="text-xs text-slate-500 mb-1">Tesla Portfolio</div>
                            <div className="text-2xl font-bold text-slate-900">
                              ${demoPrice.toLocaleString()}
                            </div>
                            <div className="text-xs text-green-600 mt-1">+8.2%</div>
                          </div>
                        </div>

                        {/* Simulated Chart */}
                        <div className="h-32 bg-gradient-to-r from-teal-100 to-purple-100 rounded-xl flex items-end p-2">
                          {[40, 60, 45, 70, 55, 80, 65, 90, 75, 95, 85, 100].map((height, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{ delay: i * 0.05 }}
                              className="flex-1 mx-0.5 bg-gradient-to-t from-teal-500 to-purple-500 rounded-t-lg"
                            />
                          ))}
                        </div>

                        <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                          <span>9:30</span>
                          <span>11:00</span>
                          <span>12:30</span>
                          <span>14:00</span>
                          <span>15:30</span>
                          <span>16:00</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    onHoverStart={() => setActiveFeature(feature.id)}
                    onHoverEnd={() => setActiveFeature(null)}
                    className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all cursor-pointer"
                  >
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl ${colorClasses[feature.color].bg} ${colorClasses[feature.color].text} flex items-center justify-center mb-4`}>
                      {feature.icon}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-600 mb-4">{feature.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {Object.entries(feature.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-xs text-slate-400 capitalize">{key}</div>
                          <div className={`text-sm font-bold ${colorClasses[feature.color].text}`}>{value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Expandable Features */}
                    <AnimatePresence>
                      {activeFeature === feature.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-slate-100">
                            <p className="text-sm text-slate-600 mb-3">{feature.longDescription}</p>
                            <div className="space-y-2">
                              {feature.features.map((item, i) => (
                                <div key={i} className="flex items-start space-x-2">
                                  <HiOutlineCheckCircle className={`w-4 h-4 ${colorClasses[feature.color].text} flex-shrink-0 mt-0.5`} />
                                  <span className="text-xs text-slate-600">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Indicator Dot */}
                    <div className="mt-4 flex items-center justify-end">
                      <div className={`w-2 h-2 rounded-full ${colorClasses[feature.color].bg} ${colorClasses[feature.color].text}`} />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Feature Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-to-r from-teal-600 to-purple-600 rounded-2xl p-8 text-white"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">15+</div>
                    <div className="text-white/80">Advanced Metrics</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-white/80">Live Monitoring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">99.9%</div>
                    <div className="text-white/80">Platform Uptime</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
            <motion.div
              key="security"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Security Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
              >
                {securityStats.map((stat, index) => (
                  <div key={index} className={`bg-white rounded-xl p-4 text-center border border-${stat.color}-200 shadow-sm`}>
                    <div className={`text-xs text-${stat.color}-600 mb-1`}>{stat.label}</div>
                    <div className={`text-lg font-bold text-${stat.color}-700`}>{stat.value}</div>
                  </div>
                ))}
              </motion.div>

              {/* Security Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {securityFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    onHoverStart={() => setActiveSecurity(feature.id)}
                    onHoverEnd={() => setActiveSecurity(null)}
                    className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all cursor-pointer"
                  >
                    {/* Header with Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-xl ${colorClasses[feature.color].bg} ${colorClasses[feature.color].text} flex items-center justify-center`}>
                        {feature.icon}
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full ${colorClasses[feature.color].bg} ${colorClasses[feature.color].text}`}>
                        {feature.level}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-600 mb-4">{feature.description}</p>

                    {/* Standard Badge */}
                    <div className="flex items-center space-x-2 mb-4">
                      <HiOutlineShieldCheck className={`w-4 h-4 ${colorClasses[feature.color].text}`} />
                      <span className="text-xs font-medium text-slate-700">{feature.standard}</span>
                    </div>

                    {/* Expandable Features */}
                    <AnimatePresence>
                      {activeSecurity === feature.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-slate-100">
                            <p className="text-sm text-slate-600 mb-3">{feature.longDescription}</p>
                            <div className="space-y-2 mb-3">
                              {feature.features.map((item, i) => (
                                <div key={i} className="flex items-start space-x-2">
                                  <HiOutlineCheckCircle className={`w-4 h-4 ${colorClasses[feature.color].text} flex-shrink-0 mt-0.5`} />
                                  <span className="text-xs text-slate-600">{item}</span>
                                </div>
                              ))}
                            </div>

                            {/* Certifications */}
                            <div className="flex flex-wrap gap-2">
                              {feature.certifications.map((cert, i) => (
                                <span key={i} className={`text-xs px-2 py-1 ${colorClasses[feature.color].bg} ${colorClasses[feature.color].text} rounded-full`}>
                                  {cert}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Interactive Security Demo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white rounded-2xl p-6 border border-slate-200"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">Security Settings Demo</h3>
                <div className="space-y-4">
                  {/* 2FA Toggle */}
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <TbAuth2Fa className="w-6 h-6 text-purple-600" />
                      <div>
                        <div className="font-semibold text-slate-900">Two-Factor Authentication</div>
                        <div className="text-xs text-slate-500">Protect your account with 2FA</div>
                      </div>
                    </div>
                    <button
                      onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        twoFactorEnabled ? 'bg-teal-600' : 'bg-slate-300'
                      }`}
                    >
                      <motion.div
                        animate={{ x: twoFactorEnabled ? 24 : 0 }}
                        className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"
                      />
                    </button>
                  </div>

                  {/* Notifications Toggle */}
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <BsBell className="w-6 h-6 text-amber-600" />
                      <div>
                        <div className="font-semibold text-slate-900">Security Notifications</div>
                        <div className="text-xs text-slate-500">Get alerts for suspicious activity</div>
                      </div>
                    </div>
                    <button
                      onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        notificationsEnabled ? 'bg-teal-600' : 'bg-slate-300'
                      }`}
                    >
                      <motion.div
                        animate={{ x: notificationsEnabled ? 24 : 0 }}
                        className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"
                      />
                    </button>
                  </div>

                  {/* Session Info */}
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center space-x-3 mb-3">
                      <HiOutlineComputerDesktop className="w-5 h-5 text-slate-600" />
                      <span className="text-sm font-medium text-slate-700">Active Sessions</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-slate-600">Current Device • Chrome on Windows</span>
                      </div>
                      <span className="text-xs text-slate-400">IP: 192.168.1.1</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Compliance Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-white rounded-2xl p-6 border border-slate-200"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-4 text-center">Regulatory Compliance & Certifications</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {complianceBadges.map((badge, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-2 px-4 py-2 bg-${badge.color}-50 rounded-full`}
                    >
                      <span className={`text-${badge.color}-600`}>{badge.icon}</span>
                      <span className={`text-sm font-medium text-${badge.color}-700`}>{badge.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Zero Loss Guarantee Banner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white text-center"
              >
                <HiOutlineShieldCheck className="w-16 h-16 mx-auto mb-4 text-teal-400" />
                <h3 className="text-2xl font-bold mb-2">Zero Loss Guarantee</h3>
                <p className="text-slate-400 max-w-2xl mx-auto mb-6">
                  Your principal is always protected. We utilize a unique blend of arbitrage trading,
                  AI-driven market prediction, and physical asset backing to ensure your investment is secure.
                </p>
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-400">100%</div>
                    <div className="text-xs text-slate-400">Principal Protected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">$500M+</div>
                    <div className="text-xs text-slate-400">Assets Insured</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-rose-400">24/7</div>
                    <div className="text-xs text-slate-400">Security Monitoring</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-12 text-center"
        >
          <button className="inline-flex items-center space-x-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors shadow-lg">
            <HiOutlineRocketLaunch className="w-5 h-5" />
            <span>Start Secured Investing</span>
          </button>
          <p className="text-sm text-slate-500 mt-4">
            Join 50,000+ investors trusting us with their wealth
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformFeatures;