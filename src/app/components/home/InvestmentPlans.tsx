"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiOutlineSparkles,
  HiOutlineCheckCircle,
  HiOutlineBanknotes,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineCog6Tooth
} from "react-icons/hi2";
 import { RiVipCrownLine, RiVipDiamondLine } from "react-icons/ri";
 
const InvestmentPlans = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const plans = [
    {
      id: "starter",
      name: "Starter Plan",
      tagline: "Perfect for beginners",
      description: "Begin your investment journey with lower capital while gaining exposure to innovative portfolios.",
      price: "100",
      minInvestment: "$100",
      icon: <HiOutlineSparkles className="w-8 h-8" />,
      color: "teal",
      features: [
        { text: "Access to all portfolios", included: true },
        { text: "Basic portfolio management", included: true },
        { text: "Standard withdrawal (2-3 days)", included: true },
        { text: "Email support", included: true },
        { text: "Reduced fees", included: false },
        { text: "Priority withdrawals", included: false },
        { text: "VIP support", included: false },
      ],
      benefits: [
        "Ideal for new investors",
        "Learn while you earn",
        "Diversified exposure",
      ],
      stats: {
        avgReturn: "200-400%",
        minDuration: "1 Week",
        investors: "25,000+"
      }
    },
    {
      id: "professional",
      name: "Professional Plan",
      tagline: "For serious investors",
      description: "Advanced strategy with larger allocations and enhanced benefits for maximum growth potential.",
      price: "500",
      minInvestment: "$500",
      icon: <RiVipCrownLine className="w-8 h-8" />,
      color: "rose",
      popular: true,
      features: [
        { text: "Access to all portfolios", included: true },
        { text: "Advanced portfolio management", included: true },
        { text: "Priority withdrawals (24 hours)", included: true },
        { text: "Priority email & chat support", included: true },
        { text: "Reduced fees (15% discount)", included: true },
        { text: "Monthly strategy calls", included: true },
        { text: "VIP support", included: false },
      ],
      benefits: [
        "Higher allocation limits",
        "Faster withdrawals",
        "Reduced fees",
        "Personal strategy sessions"
      ],
      stats: {
        avgReturn: "500-800%",
        minDuration: "1 Week",
        investors: "15,000+"
      }
    },
    {
      id: "enterprise",
      name: "Enterprise Plan",
      tagline: "For high-capital investors",
      description: "Premium strategies with maximum diversification and white-glove service for serious wealth building.",
      price: "1000",
      minInvestment: "$1,000",
      icon: <RiVipDiamondLine className="w-8 h-8" />,
      color: "purple",
      features: [
        { text: "Access to all portfolios", included: true },
        { text: "Premium portfolio management", included: true },
        { text: "Instant withdrawals", included: true },
        { text: "24/7 VIP phone support", included: true },
        { text: "Reduced fees (30% discount)", included: true },
        { text: "Weekly strategy calls", included: true },
        { text: "Dedicated account manager", included: true },
      ],
      benefits: [
        "Maximum allocation limits",
        "Instant withdrawals",
        "Best fee structure",
        "White-glove service",
        "Exclusive opportunities"
      ],
      stats: {
        avgReturn: "800-2500%",
        minDuration: "1 Week",
        investors: "5,000+"
      }
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
    }
  };

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-teal-50 rounded-full px-4 py-2 mb-4">
            <HiOutlineChartBar className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-semibold text-teal-700">Investment Plans</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Choose Your Path to<br />
            <span className="bg-gradient-to-r from-teal-600 to-rose-600 bg-clip-text text-transparent">
              Financial Growth
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Select the plan that matches your investment goals. All plans include our zero-loss guarantee and professional portfolio management.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredPlan(plan.id)}
              onHoverEnd={() => setHoveredPlan(null)}
              className={`relative bg-white rounded-2xl shadow-sm border ${
                plan.popular ? 'border-rose-200 shadow-lg shadow-rose-100/50' : 'border-slate-200'
              } ${colorClasses[plan.color as keyof typeof colorClasses].hover} transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-gradient-to-r from-rose-500 to-rose-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* Plan Header */}
              <div className={`p-6 border-b ${plan.popular ? 'border-rose-100' : 'border-slate-100'}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${colorClasses[plan.color as keyof typeof colorClasses].bg}`}>
                    <div className={colorClasses[plan.color as keyof typeof colorClasses].icon}>
                      {plan.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-slate-900">${plan.price}</div>
                    <div className="text-sm text-slate-500">min. {plan.minInvestment}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-500 mb-3">{plan.tagline}</p>
                <p className="text-sm text-slate-600">{plan.description}</p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-100">
                  <div className="text-center">
                    <div className="text-xs text-slate-500">Avg. Return</div>
                    <div className={`text-sm font-semibold ${colorClasses[plan.color as keyof typeof colorClasses].text}`}>
                      {plan.stats.avgReturn}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-slate-500">Min. Duration</div>
                    <div className="text-sm font-semibold text-slate-700">{plan.stats.minDuration}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-slate-500">Investors</div>
                    <div className="text-sm font-semibold text-slate-700">{plan.stats.investors}</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="text-sm font-semibold text-slate-900 mb-4">What&apos;s included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      className="flex items-start space-x-2"
                    >
                      <HiOutlineCheckCircle className={`w-5 h-5 flex-shrink-0 ${
                        feature.included 
                          ? colorClasses[plan.color as keyof typeof colorClasses].text
                          : 'text-slate-300'
                      }`} />
                      <span className={`text-sm ${
                        feature.included ? 'text-slate-700' : 'text-slate-400'
                      }`}>
                        {feature.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Benefits Tags */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2">
                    {plan.benefits.map((benefit, i) => (
                      <span
                        key={i}
                        className={`text-xs px-2 py-1 ${colorClasses[plan.color as keyof typeof colorClasses].bg} ${colorClasses[plan.color as keyof typeof colorClasses].text} rounded-full`}
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full mt-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                    hoveredPlan === plan.id
                      ? `bg-gradient-to-r ${colorClasses[plan.color as keyof typeof colorClasses].gradient} text-white shadow-lg`
                      : plan.popular
                        ? 'bg-rose-600 text-white hover:bg-rose-700'
                        : `bg-slate-900 text-white hover:bg-slate-800`
                  }`}
                >
                  Select {plan.name}
                </motion.button>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className={`absolute inset-0 -z-10 rounded-2xl opacity-0 ${colorClasses[plan.color as keyof typeof colorClasses].bg}`}
                animate={{ opacity: hoveredPlan === plan.id ? 0.1 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Plan Comparison Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 text-sm text-slate-500">
            <HiOutlineCog6Tooth className="w-4 h-4" />
            <span>All plans include our </span>
            <span className="font-semibold text-teal-600">Zero Loss Guarantee</span>
            <span> and </span>
            <span className="font-semibold text-rose-600">professional portfolio management</span>
          </div>
        </motion.div>

        {/* FAQ Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 bg-slate-50 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-teal-100 rounded-lg">
                <HiOutlineBanknotes className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Flexible Investment</h4>
                <p className="text-sm text-slate-600">Add funds anytime, withdraw according to your plan terms</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-rose-100 rounded-lg">
                <HiOutlineClock className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Compound Growth</h4>
                <p className="text-sm text-slate-600">Reinvest returns for exponential wealth accumulation</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <HiOutlineShieldCheck className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Principal Protected</h4>
                <p className="text-sm text-slate-600">Your initial investment is always guaranteed</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentPlans;