/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import {
  HiOutlineCalculator,
  HiOutlineCurrencyDollar,
 
   HiOutlineSparkles,
  
  HiOutlineChevronDown,
  HiOutlineChevronUp} from "react-icons/hi2";
import {  BsGraphUp } from "react-icons/bs";
import {  TbCalculator, TbFileInvoice } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import {
 
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  
} from "recharts";
import { HiOutlineTrendingUp } from "react-icons/hi";



const ROICalculator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [investmentAmount, setInvestmentAmount] = useState<number>(1000);
  const [selectedPlan, setSelectedPlan] = useState<string>("starter");
  const [selectedPortfolio, setSelectedPortfolio] = useState<string>("tesla");
  const [selectedDuration, setSelectedDuration] = useState<string>("1month");
  const [showBreakdown, setShowBreakdown] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"calculator" | "table" | "compare">("calculator");
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  // Investment Plans Data
  const plans = [
    {
      id: "starter",
      name: "Starter Plan",
      minInvestment: 100,
      maxInvestment: 499,
      feeDiscount: "0%",
      withdrawalTime: "2-3 days",
      support: "Email",
      color: "teal",
      icon: <HiOutlineSparkles className="w-5 h-5" />
    },
    {
      id: "professional",
      name: "Professional Plan",
      minInvestment: 500,
      maxInvestment: 999,
      feeDiscount: "15%",
      withdrawalTime: "24 hours",
      support: "Priority Email & Chat",
      color: "rose",
      icon: <HiOutlineTrendingUp className="w-5 h-5" />,
      popular: true
    },
    {
      id: "enterprise",
      name: "Enterprise Plan",
      minInvestment: 1000,
      maxInvestment: 100000,
      feeDiscount: "30%",
      withdrawalTime: "Instant",
      support: "24/7 VIP Phone",
      color: "purple",
      icon: <GiTakeMyMoney className="w-5 h-5" />
    }
  ];

  // Portfolios Data with ROI percentages
  const portfolios = [
    {
      id: "tesla",
      name: "Tesla Innovation",
      icon: "🚗",
      sector: "Automotive / Renewable Energy",
      minInvestment: 150,
      returns: {
        "1week": 200,
        "2weeks": 300,
        "1month": 400,
        "2months": 800
      },
      color: "#0d9488",
      risk: "Moderate",
      popularity: 95
    },
    {
      id: "spacex",
      name: "Space Technology",
      icon: "🚀",
      sector: "Aerospace",
      minInvestment: 150,
      returns: {
        "1week": 150,
        "2weeks": 300,
        "1month": 400,
        "2months": 800
      },
      color: "#8b5cf6",
      risk: "Moderate-High",
      popularity: 92
    },
    {
      id: "xcorp",
      name: "Digital Media",
      icon: "📱",
      sector: "Social Media / Digital",
      minInvestment: 100,
      returns: {
        "1week": 100,
        "2weeks": 200,
        "1month": 300,
        "2months": 600
      },
      color: "#3b82f6",
      risk: "Moderate",
      popularity: 85
    },
    {
      id: "neuralink",
      name: "Neurotechnology",
      icon: "🧠",
      sector: "Neurotech / Biotech",
      minInvestment: 120,
      returns: {
        "1week": 50,
        "2weeks": 100,
        "1month": 200,
        "2months": 400
      },
      color: "#06b6d4",
      risk: "High",
      popularity: 78
    },
    {
      id: "boring",
      name: "Infrastructure",
      icon: "🚇",
      sector: "Urban Innovation",
      minInvestment: 200,
      returns: {
        "1week": 10,
        "2weeks": 20,
        "1month": 30,
        "2months": 60
      },
      color: "#64748b",
      risk: "Low",
      popularity: 70
    },
    {
      id: "xai",
      name: "Artificial Intelligence",
      icon: "🤖",
      sector: "AI / Machine Learning",
      minInvestment: 450,
      returns: {
        "1week": 500,
        "2weeks": 1000,
        "1month": 1100,
        "2months": 2500
      },
      color: "#f43f5e",
      risk: "High",
      popularity: 98,
      featured: true
    },
    {
      id: "crypto",
      name: "Cryptocurrency",
      icon: "₿",
      sector: "Digital Assets",
      minInvestment: 150,
      returns: {
        "1week": 100,
        "2weeks": 200,
        "1month": 300,
        "2months": 600
      },
      color: "#f59e0b",
      risk: "Very High",
      popularity: 96
    },
    {
      id: "metals",
      name: "Precious Metals",
      icon: "🥇",
      sector: "Gold & Diamond",
      minInvestment: 100,
      returns: {
        "1week": 100,
        "2weeks": 200,
        "1month": 300,
        "2months": 600
      },
      color: "#eab308",
      risk: "Low",
      popularity: 82
    }
  ];

  const durationOptions = [
    { value: "1week", label: "1 Week", days: 7 },
    { value: "2weeks", label: "2 Weeks", days: 14 },
    { value: "1month", label: "1 Month", days: 30 },
    { value: "2months", label: "2 Months", days: 60 }
  ];

  // Get current portfolio
  const currentPortfolio = portfolios.find(p => p.id === selectedPortfolio)!;
  const currentPlan = plans.find(p => p.id === selectedPlan)!;

  // Calculate ROI
  const calculateROI = () => {
    const roiPercentage = currentPortfolio.returns[selectedDuration as keyof typeof currentPortfolio.returns];
    const profit = (investmentAmount * roiPercentage) / 100;
    const totalReturn = investmentAmount + profit;
    const feeDiscount = currentPlan.feeDiscount !== "0%" ? parseInt(currentPlan.feeDiscount) / 100 : 0;
    const fees = profit * 0.1 * (1 - feeDiscount); // 10% fee with discount
    const netProfit = profit - fees;
    const netReturn = investmentAmount + netProfit;
    const dailyReturn = profit / (durationOptions.find(d => d.value === selectedDuration)?.days || 30);
    
    return {
      roiPercentage,
      profit,
      totalReturn,
      fees,
      netProfit,
      netReturn,
      dailyReturn,
      monthlyReturn: dailyReturn * 30
    };
  };

  const roi = calculateROI();

  // Generate comparison data for charts
  const comparisonData = portfolios.map(p => ({
    name: p.name.split(' ')[0],
    fullName: p.name,
    return: p.returns[selectedDuration as keyof typeof p.returns],
    investment: p.minInvestment,
    color: p.color
  })).sort((a, b) => b.return - a.return);

  // Generate growth projection data
  const growthData = [];
  for (let i = 1; i <= 12; i++) {
    growthData.push({
      month: `Month ${i}`,
      value: investmentAmount * Math.pow(1 + (roi.roiPercentage / 100 / 4), i),
      projected: investmentAmount * Math.pow(1.15, i) // 15% monthly compounding for projection
    });
  }

  // Generate table data for all portfolios
  const tableData = portfolios.map(portfolio => {
    const returns = {
      "1week": portfolio.returns["1week"],
      "2weeks": portfolio.returns["2weeks"],
      "1month": portfolio.returns["1month"],
      "2months": portfolio.returns["2months"]
    };
    return {
      ...portfolio,
      returns
    };
  });

 

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
            <HiOutlineCalculator className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-semibold text-teal-700">ROI Calculator</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Calculate Your<br />
            <span className="bg-gradient-to-r from-teal-600 to-rose-600 bg-clip-text text-transparent">
              Potential Returns
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See exactly how much your investment could grow. Adjust the amount, plan, and duration to see real-time calculations.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-slate-100 rounded-xl p-1">
            {[
              { id: "calculator", label: "Calculator", icon: <TbCalculator className="w-4 h-4" /> },
              { id: "table", label: "Returns Table", icon: <TbFileInvoice className="w-4 h-4" /> },
              { id: "compare", label: "Comparison", icon: <BsGraphUp className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Calculator Tab */}
          {activeTab === "calculator" && (
            <motion.div
              key="calculator"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {/* Input Panel */}
              <div className="lg:col-span-1 space-y-6">
                {/* Investment Amount */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <label className="block text-sm font-medium text-slate-700 mb-4">
                    Investment Amount
                  </label>
                  <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <HiOutlineCurrencyDollar className="text-slate-400" />
                    </div>
                    <input
                      type="number"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                      min={100}
                      max={100000}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <input
                    type="range"
                    min={100}
                    max={100000}
                    step={100}
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-2">
                    <span>$100</span>
                    <span>$50k</span>
                    <span>$100k</span>
                  </div>
                </div>

                {/* Plan Selection */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <label className="block text-sm font-medium text-slate-700 mb-4">
                    Select Plan
                  </label>
                  <div className="space-y-2">
                    {plans.map((plan) => (
                      <button
                        key={plan.id}
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`w-full p-3 rounded-xl border-2 transition-all ${
                          selectedPlan === plan.id
                            ? `border-${plan.color}-500 bg-${plan.color}-50`
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg bg-${plan.color}-100 text-${plan.color}-600`}>
                              {plan.icon}
                            </div>
                            <div className="text-left">
                              <div className="font-semibold text-slate-900">{plan.name}</div>
                              <div className="text-xs text-slate-500">
                                ${plan.minInvestment} - ${plan.maxInvestment.toLocaleString()}
                              </div>
                            </div>
                          </div>
                          {plan.popular && (
                            <span className="text-xs bg-rose-100 text-rose-600 px-2 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Portfolio Selection */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <label className="block text-sm font-medium text-slate-700 mb-4">
                    Select Portfolio
                  </label>
                  <select
                    value={selectedPortfolio}
                    onChange={(e) => setSelectedPortfolio(e.target.value)}
                    className="w-full p-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                    {portfolios.map((portfolio) => (
                      <option key={portfolio.id} value={portfolio.id}>
                        {portfolio.icon} {portfolio.name} - Min. ${portfolio.minInvestment}
                      </option>
                    ))}
                  </select>

                  {/* Duration Selection */}
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-slate-700 mb-3">
                      Investment Duration
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {durationOptions.map((duration) => (
                        <button
                          key={duration.value}
                          onClick={() => setSelectedDuration(duration.value)}
                          className={`p-2 text-sm rounded-lg border transition-all ${
                            selectedDuration === duration.value
                              ? `bg-${currentPortfolio.color.split('-')[0]}-500 text-white border-${currentPortfolio.color.split('-')[0]}-500`
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          {duration.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Panel */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white">
                  {/* ROI Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-white/10 rounded-xl">
                        <HiOutlineTrendingUp className="w-6 h-6 text-teal-400" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-400">Projected ROI</div>
                        <div className="text-4xl font-bold text-teal-400">{roi.roiPercentage}%</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-400">Duration</div>
                      <div className="text-xl font-semibold">
                        {durationOptions.find(d => d.value === selectedDuration)?.label}
                      </div>
                    </div>
                  </div>

                  {/* Main Results */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/5 rounded-2xl p-6">
                      <div className="text-sm text-slate-400 mb-1">Initial Investment</div>
                      <div className="text-3xl font-bold">${investmentAmount.toLocaleString()}</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6">
                      <div className="text-sm text-slate-400 mb-1">Total Return</div>
                      <div className="text-3xl font-bold text-teal-400">${roi.totalReturn.toLocaleString()}</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6">
                      <div className="text-sm text-slate-400 mb-1">Profit</div>
                      <div className="text-2xl font-bold text-rose-400">${roi.profit.toLocaleString()}</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6">
                      <div className="text-sm text-slate-400 mb-1">Net Profit (after fees)</div>
                      <div className="text-2xl font-bold text-purple-400">${roi.netProfit.toLocaleString()}</div>
                    </div>
                  </div>

                  {/* Daily/Monthly Breakdown */}
                  <button
                    onClick={() => setShowBreakdown(!showBreakdown)}
                    className="flex items-center justify-between w-full p-4 bg-white/5 rounded-xl mb-4"
                  >
                    <span className="font-medium">View Daily/Weekly Breakdown</span>
                    {showBreakdown ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
                  </button>

                  <AnimatePresence>
                    {showBreakdown && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-3 gap-4 p-4 bg-white/5 rounded-xl">
                          <div>
                            <div className="text-xs text-slate-400">Daily Average</div>
                            <div className="text-lg font-semibold text-teal-400">
                              ${roi.dailyReturn.toFixed(2)}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-slate-400">Weekly</div>
                            <div className="text-lg font-semibold">
                              ${(roi.dailyReturn * 7).toFixed(2)}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-slate-400">Monthly</div>
                            <div className="text-lg font-semibold">
                              ${roi.monthlyReturn.toFixed(2)}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Plan Benefits */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-xs text-slate-400">Fee Discount</div>
                      <div className="font-semibold text-teal-400">{currentPlan.feeDiscount}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-slate-400">Withdrawal</div>
                      <div className="font-semibold">{currentPlan.withdrawalTime}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-slate-400">Support</div>
                      <div className="font-semibold text-xs">{currentPlan.support}</div>
                    </div>
                  </div>
                </div>

                {/* Growth Chart */}
                <div className="mt-8 bg-white rounded-2xl p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-4">Growth Projection (12 Months)</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={growthData}>
                        <defs>
                          <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0d9488" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#0d9488" stopOpacity={0}/>
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
                          fill="url(#growthGradient)"
                          strokeWidth={2}
                        />
                        <Line
                          type="monotone"
                          dataKey="projected"
                          stroke="#f43f5e"
                          strokeWidth={2}
                          strokeDasharray="5 5"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Table Tab */}
          {activeTab === "table" && (
            <motion.div
              key="table"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Portfolio</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Sector</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Min. Investment</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">1 Week</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">2 Weeks</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">1 Month</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">2 Months</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Risk</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {tableData.map((portfolio, index) => (
                      <motion.tr
                        key={portfolio.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        onHoverStart={() => setHoveredRow(portfolio.id)}
                        onHoverEnd={() => setHoveredRow(null)}
                        className={`hover:bg-slate-50 transition-colors ${
                          hoveredRow === portfolio.id ? 'bg-slate-50' : ''
                        }`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{portfolio.icon}</span>
                            <div>
                              <div className="font-medium text-slate-900">{portfolio.name}</div>
                              <div className="text-xs text-slate-500">{portfolio.sector}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">{portfolio.sector.split('/')[0]}</td>
                        <td className="px-6 py-4 text-center font-medium text-slate-900">
                          ${portfolio.minInvestment}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`font-bold ${
                            portfolio.returns["1week"] >= 200 ? 'text-teal-600' :
                            portfolio.returns["1week"] >= 100 ? 'text-amber-600' :
                            'text-slate-600'
                          }`}>
                            {portfolio.returns["1week"]}%
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`font-bold ${
                            portfolio.returns["2weeks"] >= 300 ? 'text-teal-600' :
                            portfolio.returns["2weeks"] >= 200 ? 'text-amber-600' :
                            'text-slate-600'
                          }`}>
                            {portfolio.returns["2weeks"]}%
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`font-bold ${
                            portfolio.returns["1month"] >= 400 ? 'text-teal-600' :
                            portfolio.returns["1month"] >= 300 ? 'text-amber-600' :
                            'text-slate-600'
                          }`}>
                            {portfolio.returns["1month"]}%
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`font-bold ${
                            portfolio.returns["2months"] >= 800 ? 'text-teal-600' :
                            portfolio.returns["2months"] >= 600 ? 'text-amber-600' :
                            'text-slate-600'
                          }`}>
                            {portfolio.returns["2months"]}%
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            portfolio.risk === 'Low' ? 'bg-green-100 text-green-700' :
                            portfolio.risk === 'Moderate' ? 'bg-teal-100 text-teal-700' :
                            portfolio.risk === 'Moderate-High' ? 'bg-amber-100 text-amber-700' :
                            portfolio.risk === 'High' ? 'bg-rose-100 text-rose-700' :
                            'bg-purple-100 text-purple-700'
                          }`}>
                            {portfolio.risk}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* Compare Tab */}
          {activeTab === "compare" && (
            <motion.div
              key="compare"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {/* Returns Comparison Chart */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4">Returns by Portfolio</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={comparisonData}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Tooltip />
                      <Bar dataKey="return" radius={[4, 4, 0, 0]}>
                        {comparisonData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Investment Requirements */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4">Minimum Investment Required</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={comparisonData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                      <XAxis type="number" axisLine={false} tickLine={false} />
                      <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} />
                      <Tooltip />
                      <Bar dataKey="investment" radius={[0, 4, 4, 0]}>
                        {comparisonData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Risk/Reward Matrix */}
              <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
                <h3 className="font-semibold mb-4">Risk vs. Reward Analysis</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {portfolios.map((portfolio) => (
                    <div
                      key={portfolio.id}
                      className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors"
                    >
                      <div className="text-2xl mb-2">{portfolio.icon}</div>
                      <div className="font-medium text-sm mb-1">{portfolio.name}</div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Risk:</span>
                        <span className={
                          portfolio.risk === 'Low' ? 'text-green-400' :
                          portfolio.risk === 'Moderate' ? 'text-teal-400' :
                          portfolio.risk === 'Moderate-High' ? 'text-amber-400' :
                          'text-rose-400'
                        }>
                          {portfolio.risk}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs mt-1">
                        <span className="text-slate-400">Return:</span>
                        <span className="text-teal-400 font-semibold">
                          {portfolio.returns["2months"]}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
       

     
      </div>
    </section>
  );
};

export default ROICalculator;