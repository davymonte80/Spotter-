"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Zap, Globe } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "Accuracy Rate",
    description: "Industry-leading precision",
  },
  {
    icon: Users,
    value: "10K+",
    label: "Active Users",
    description: "Trusted by data teams",
  },
  {
    icon: Zap,
    value: "2.5x",
    label: "Faster Insights",
    description: "Compared to traditional tools",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Countries",
    description: "Global reach and impact",
  },
]

export function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="gradient-text">data-driven</span> teams worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of companies using Spotter.ai to transform their data into actionable insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center group cursor-pointer"
            >
              <div className="glass-effect rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-200"
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold gradient-text mb-2"
                >
                  {stat.value}
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
