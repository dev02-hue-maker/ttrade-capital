/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  HiOutlineUserPlus,
  HiOutlineWallet,
  HiOutlineShoppingBag,
  HiOutlineChartBar,
   HiOutlineClock,
   HiOutlineBanknotes,
   HiOutlineDevicePhoneMobile,
  HiOutlineEnvelope,
  HiOutlineCheckCircle,
  
  
  HiOutlineCog6Tooth
} from "react-icons/hi2";
import {
 
    BsLightningCharge,
  BsShieldShaded
} from "react-icons/bs";
 
import {  TbGiftCard, TbBuildingBank } from "react-icons/tb";
 import { FaCcVisa  } from "react-icons/fa";
import { SiBitcoin } from "react-icons/si";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [showFundingDetails, setShowFundingDetails] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

  // Main steps data
  const steps = [
    {
      id: 1,
      title: "Create Account",
      shortTitle: "Register",
      icon: <HiOutlineUserPlus className="w-8 h-8" />,
      color: "teal",
      gradient: "from-teal-500 to-teal-600",
      duration: "2-3 minutes",
      description: "Start your investment journey by creating a secure account. Basic personal information and verification required.",
      fullDescription: "Register with your email, phone number, and basic personal details. Our secure KYC process ensures your identity is protected while complying with regulations.",
      features: [
        "Email registration",
        "Phone verification",
        "Identity verification (KYC)",
        "2FA security setup",
        "Profile creation"
      ],
      stats: {
        time: "2-3 min",
        users: "50,000+",
        satisfaction: "98%"
      },
      image: "/images/register-illustration.svg"
    },
    {
      id: 2,
      title: "Fund Your Wallet",
      shortTitle: "Fund",
      icon: <HiOutlineWallet className="w-8 h-8" />,
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      duration: "Instant - 24 hours",
      description: "Add funds using multiple secure payment methods including crypto, gift cards, or bank transfers.",
      fullDescription: "Choose from various funding methods based on your preference and region. Funds are securely processed and credited to your investment wallet.",
      features: [
        "Cryptocurrency deposits",
        "Gift card deposits",
        "Bank transfers",
        "Credit/debit cards",
        "Instant confirmation"
      ],
      stats: {
        methods: "5+",
        speed: "Instant",
        security: "Bank-grade"
      }
    },
    {
      id: 3,
      title: "Select Portfolio",
      shortTitle: "Choose",
      icon: <HiOutlineShoppingBag className="w-8 h-8" />,
      color: "rose",
      gradient: "from-rose-500 to-rose-600",
      duration: "5-10 minutes",
      description: "Browse and select from our curated innovation portfolios based on your investment goals.",
      fullDescription: "Explore portfolios across Tesla, SpaceX, AI, Crypto, and more. Each portfolio includes detailed information about minimum investment, expected returns, and risk level.",
      features: [
        "10+ innovation portfolios",
        "Detailed performance data",
        "Risk level indicators",
        "Minimum investment info",
        "Return projections"
      ],
      stats: {
        portfolios: "10+",
        sectors: "8",
        options: "Flexible"
      }
    },
    {
      id: 4,
      title: "Monitor & Grow",
      shortTitle: "Grow",
      icon: <HiOutlineChartBar className="w-8 h-8" />,
      color: "amber",
      gradient: "from-amber-500 to-amber-600",
      duration: "24/7 Monitoring",
      description: "Track your investments in real-time through your dashboard and watch your wealth grow.",
      fullDescription: "Access live performance data, profit updates, and portfolio analytics. Our AI-powered system works 24/7 to maximize your returns while protecting your principal.",
      features: [
        "Real-time dashboard",
        "Live profit updates",
        "Performance analytics",
        "Withdrawal management",
        "Investment history"
      ],
      stats: {
        updates: "Real-time",
        access: "24/7",
        protection: "Zero-loss"
      }
    }
  ];

  // Funding methods data
  const fundingMethods = [
    {
      id: "crypto",
      name: "Cryptocurrency",
      icon: <SiBitcoin className="w-6 h-6" />,
      color: "orange",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      borderColor: "border-orange-200",
      methods: ["Bitcoin", "Ethereum", "Litecoin", "Dogecoin", "USDT", "BUSD"],
      time: "10-30 minutes",
      fee: "0.5%",
      min: "$50"
    },
    {
      id: "giftcard",
      name: "Gift Cards",
      icon: <TbGiftCard className="w-6 h-6" />,
      color: "green",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      borderColor: "border-green-200",
      methods: ["Amazon", "iTunes", "Google Play", "Steam", "Razer Gold", "Sephora"],
      time: "Instant",
      fee: "1%",
      min: "$25"
    },
    {
      id: "bank",
      name: "Bank Transfer",
      icon: <TbBuildingBank className="w-6 h-6" />,
      color: "blue",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
      methods: ["Wire Transfer", "ACH", "SEPA", "SWIFT", "Domestic Transfer"],
      time: "1-3 business days",
      fee: "Free",
      min: "$100"
    },
    {
      id: "card",
      name: "Credit/Debit Card",
      icon: <FaCcVisa className="w-6 h-6" />,
      color: "indigo",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      borderColor: "border-indigo-200",
      methods: ["Visa", "Mastercard", "American Express", "Discover", "JCB"],
      time: "Instant",
      fee: "2.5%",
      min: "$50"
    }
  ];

  // Benefits data
  const benefits = [
    {
      icon: <BsShieldShaded className="w-6 h-6" />,
      title: "Zero Loss Guarantee",
      description: "Your principal is always protected",
      color: "teal"
    },
    {
      icon: <BsLightningCharge className="w-6 h-6" />,
      title: "Instant Processing",
      description: "Quick deposits and withdrawals",
      color: "amber"
    },
    {
      icon: <HiOutlineDevicePhoneMobile className="w-6 h-6" />,
      title: "Mobile Dashboard",
      description: "Track investments anywhere",
      color: "purple"
    },
    {
      icon: <HiOutlineEnvelope className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Dedicated customer service",
      color: "rose"
    }
  ];

  // Success stories
  const successStories = [
    {
      name: "Sarah K.",
      amount: "$450 → $11,700",
      portfolio: "xAI Portfolio",
      time: "2 months",
      image: "/images/testimonial-1.jpg"
    },
    {
      name: "Michael R.",
      amount: "$150 → $750",
      portfolio: "SpaceX Portfolio",
      time: "1 month",
      image: "/images/testimonial-2.jpg"
    },
    {
      name: "David L.",
      amount: "$200 → $1,600",
      portfolio: "Tesla Portfolio",
      time: "2 months",
      image: "/images/testimonial-3.jpg"
    }
  ];

  const colorClasses: any = {
    teal: {
      bg: 'bg-teal-50',
      text: 'text-teal-600',
      border: 'border-teal-200',
      light: 'bg-teal-100',
      gradient: 'from-teal-500 to-teal-600'
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-200',
      light: 'bg-purple-100',
      gradient: 'from-purple-500 to-purple-600'
    },
    rose: {
      bg: 'bg-rose-50',
      text: 'text-rose-600',
      border: 'border-rose-200',
      light: 'bg-rose-100',
      gradient: 'from-rose-500 to-rose-600'
    },
    amber: {
      bg: 'bg-amber-50',
      text: 'text-amber-600',
      border: 'border-amber-200',
      light: 'bg-amber-100',
      gradient: 'from-amber-500 to-amber-600'
    },
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200'
    },
    indigo: {
      bg: 'bg-indigo-50',
      text: 'text-indigo-600',
      border: 'border-indigo-200'
    },
    green: {
      bg: 'bg-green-50',
      text: 'text-green-600',
      border: 'border-green-200'
    },
    orange: {
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      border: 'border-orange-200'
    }
  };

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-teal-50 rounded-full px-4 py-2 mb-4">
            <HiOutlineCog6Tooth className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-semibold text-teal-700">Simple Process</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            How It Works<br />
            <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
              Start Investing in Minutes
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Get started with TTradeCapital in four simple steps. Create your account, fund your wallet,
            choose your portfolio, and watch your investments grow.
          </p>
        </motion.div>

        {/* Main Steps Timeline */}
        <div className="relative mb-20">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-teal-200 via-purple-200 to-amber-200">
            <motion.div
              className="h-full bg-gradient-to-r from-teal-500 via-purple-500 to-amber-500"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid lg:grid-cols-4 gap-6 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onHoverStart={() => setActiveStep(step.id)}
                onHoverEnd={() => setActiveStep(null)}
                className="relative"
              >
                {/* Step Number Badge */}
                <div className="flex justify-center mb-4">
                  <motion.div
                    animate={{
                      scale: activeStep === step.id ? 1.1 : 1,
                      rotate: activeStep === step.id ? 5 : 0
                    }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.gradient} text-white flex items-center justify-center shadow-lg relative z-10`}
                  >
                    <span className="text-2xl font-bold">{step.id}</span>
                  </motion.div>
                </div>

                {/* Step Card */}
                <motion.div
                  animate={{
                    y: activeStep === step.id ? -8 : 0,
                    boxShadow: activeStep === step.id ? '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)' : 'none'
                  }}
                  className={`bg-white rounded-2xl p-6 border-2 transition-all ${
                    activeStep === step.id 
                      ? `border-${step.color}-300 shadow-xl` 
                      : 'border-slate-100 hover:border-slate-200'
                  }`}
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${colorClasses[step.color].bg} ${colorClasses[step.color].text} flex items-center justify-center mb-4`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{step.description}</p>

                  {/* Duration Badge */}
                  <div className="flex items-center space-x-2 mb-4">
                    <HiOutlineClock className={`w-4 h-4 ${colorClasses[step.color].text}`} />
                    <span className="text-xs text-slate-500">{step.duration}</span>
                  </div>

                  {/* Expandable Features */}
                  <AnimatePresence>
                    {activeStep === step.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-slate-100">
                          <p className="text-sm text-slate-600 mb-3">{step.fullDescription}</p>
                          <div className="space-y-2 mb-4">
                            {step.features.map((feature, i) => (
                              <div key={i} className="flex items-start space-x-2">
                                <HiOutlineCheckCircle className={`w-4 h-4 ${colorClasses[step.color].text} flex-shrink-0 mt-0.5`} />
                                <span className="text-xs text-slate-600">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-3 gap-2 bg-slate-50 rounded-lg p-3">
                            {Object.entries(step.stats).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-xs text-slate-400 capitalize">{key}</div>
                                <div className={`text-sm font-bold ${colorClasses[step.color].text}`}>{value}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Funding Methods Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <button
              onClick={() => setShowFundingDetails(!showFundingDetails)}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-teal-50 to-purple-50 rounded-xl text-slate-700 hover:from-teal-100 hover:to-purple-100 transition-colors"
            >
              <HiOutlineBanknotes className="w-5 h-5 text-teal-600" />
              <span className="font-medium">View All Funding Methods</span>
            </button>
          </div>

          <AnimatePresence>
            {showFundingDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="bg-slate-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                    Multiple Ways to Fund Your Account
                  </h3>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {fundingMethods.map((method) => (
                      <motion.div
                        key={method.id}
                        whileHover={{ y: -4 }}
                        onClick={() => setSelectedPaymentMethod(selectedPaymentMethod === method.id ? null : method.id)}
                        className={`bg-white rounded-xl p-4 border-2 cursor-pointer transition-all ${
                          selectedPaymentMethod === method.id
                            ? `border-${method.color}-300 shadow-md`
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-lg ${method.bgColor} ${method.textColor} flex items-center justify-center mb-3`}>
                          {method.icon}
                        </div>
                        <h4 className="font-semibold text-slate-900 mb-2">{method.name}</h4>
                        <div className="flex items-center justify-between text-xs mb-2">
                          <span className="text-slate-500">Time:</span>
                          <span className="font-medium text-slate-700">{method.time}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs mb-2">
                          <span className="text-slate-500">Fee:</span>
                          <span className="font-medium text-slate-700">{method.fee}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-500">Min:</span>
                          <span className="font-medium text-slate-700">{method.min}</span>
                        </div>

                        {/* Expanded Methods */}
                        <AnimatePresence>
                          {selectedPaymentMethod === method.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-4 pt-4 border-t border-slate-100"
                            >
                              <p className="text-xs font-medium text-slate-700 mb-2">Accepted:</p>
                              <div className="flex flex-wrap gap-1">
                                {method.methods.map((m, i) => (
                                  <span key={i} className={`text-xs px-2 py-1 ${method.bgColor} ${method.textColor} rounded-full`}>
                                    {m}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>

                  {/* Security Note */}
                  <div className="flex items-center justify-center space-x-2 text-sm text-slate-500">
                    <BsShieldShaded className="w-4 h-4 text-teal-600" />
                    <span>All transactions are secured with 256-bit encryption</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`bg-${benefit.color}-50 rounded-xl p-4 text-center`}
            >
              <div className={`text-${benefit.color}-600 flex justify-center mb-2`}>
                {benefit.icon}
              </div>
              <h4 className="font-semibold text-slate-900 text-sm mb-1">{benefit.title}</h4>
              <p className="text-xs text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Stories / Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Real Investors, Real Results</h3>
            <p className="text-slate-400">Join thousands of successful investors growing their wealth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="bg-white/5 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{story.name}</div>
                    <div className="text-xs text-slate-400">{story.portfolio}</div>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="text-2xl font-bold text-teal-400">{story.amount}</div>
                  <div className="text-xs text-slate-400">in {story.time}</div>
                </div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 fill-current text-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

       

      
      </div>
    </section>
  );
};

export default HowItWorks;