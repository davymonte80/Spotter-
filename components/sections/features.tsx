"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Shield, BarChart3, Zap } from "lucide-react"

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-sm font-medium text-blue-600 mb-4"
              >
                Why Spotter.ai
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              >
                The market&apos;s most <span className="gradient-text">intelligent</span> analytics platform
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-6 text-lg text-gray-600 leading-relaxed"
              >
                Industry-leading AI accuracy that improves over time, delivering insights that get smarter with every
                data point.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                Learn More
              </Button>
            </motion.div>

            {/* Chart Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">PREDICTION ACCURACY</h3>
                <div className="flex items-center space-x-4 text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-0.5 gradient-bg"></div>
                    <span className="text-gray-600">Spotter.ai</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-0.5 bg-purple-400"></div>
                    <span className="text-gray-600">Traditional Analytics</span>
                  </div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="relative h-48 bg-gray-50 rounded-lg p-4">
                <motion.svg
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full h-full"
                  viewBox="0 0 400 160"
                >
                  {/* Grid lines */}
                  <defs>
                    <pattern id="grid" width="40" height="32" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 32" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                    </pattern>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Spotter.ai line (stays high) */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                    viewport={{ once: true }}
                    d="M 0 40 Q 100 35 200 30 T 400 25"
                    fill="none"
                    stroke="url(#gradient1)"
                    strokeWidth="3"
                    className="drop-shadow-sm"
                  />

                  {/* Traditional analytics line (drops off) */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.2 }}
                    viewport={{ once: true }}
                    d="M 0 40 Q 100 50 200 80 T 400 120"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="3"
                    className="drop-shadow-sm"
                  />
                </motion.svg>

                {/* Chart labels */}
                <div className="absolute bottom-2 left-4 text-xs text-gray-500">0</div>
                <div className="absolute bottom-2 left-1/4 text-xs text-gray-500">30</div>
                <div className="absolute bottom-2 left-1/2 text-xs text-gray-500">60</div>
                <div className="absolute bottom-2 left-3/4 text-xs text-gray-500">90</div>
                <div className="absolute bottom-2 right-4 text-xs text-gray-500">120</div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
                  DAYS AFTER INITIAL ANALYSIS
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs text-gray-400">
                  ACCURACY RETENTION
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* AI Detection Status Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center"
                  >
                    <Shield className="w-4 h-4 text-red-600" />
                  </motion.div>
                  <span className="font-medium text-gray-900">Anomaly Detection</span>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
                  Active
                </Badge>
              </div>
              <div className="text-right">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-green-600"
                >
                  Clean
                </motion.div>
                <div className="text-sm text-gray-500">No anomalies detected</div>
              </div>
            </motion.div>

            {/* Feature Highlights */}
            <div className="space-y-6">
{[
  {
    icon: Search,
    title: "Any data source, any format.",
    description:
      "Connect and analyze data from web, mobile, IoT, and enterprise systems with exceptional accuracy across all platforms.",
    color: "blue",
  },
  {
    icon: BarChart3,
    title: "Identify hidden patterns instantly.",
    description:
      "Discover insights in complex datasets even when traditional analytics miss critical trends and correlations.",
    color: "teal",
  },
  {
    icon: Zap,
    title: "Empower your data teams.",
    description:
      "Accelerate decision-making and reduce time-to-insight by providing self-service analytics for all skill levels.",
    color: "purple",
  },
].map((feature, index) => {
  const bgColorClass = feature.color === "blue" ? "bg-blue-100" : feature.color === "teal" ? "bg-teal-100" : "bg-purple-100";
  const textColorClass = feature.color === "blue" ? "text-blue-600" : feature.color === "teal" ? "text-teal-600" : "text-purple-600";

  return (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-start space-x-4 group cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`${bgColorClass} flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-1 group-hover:shadow-lg transition-all duration-200`}
      >
        <feature.icon className={`${textColorClass} w-5 h-5`} />
      </motion.div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {feature.title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{feature.description}</p>
      </div>
    </motion.div>
  );
})}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
