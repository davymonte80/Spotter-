"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Globe } from "lucide-react"

export function DemoShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Analyze <span className="gradient-text">Every Data Point</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stop data silos, detect anomalies, or optimize performance. Analyze patterns and trends with
            industry-leading accuracy - even in complex datasets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button className="gradient-bg hover:opacity-90 text-white px-8 py-3 text-lg font-semibold">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold"
            >
              Contact Sales
            </Button>
          </div>
        </motion.div>

        {/* Demo Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Panel - Analytics Console */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Analytics Console</h3>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                I&apos;M A DATA ANALYST
              </Badge>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
              <div className="mb-2">Welcome to Spotter.ai,</div>
              <div className="mb-2">
                Dataset: <span className="text-blue-400">e-commerce_analytics_2024</span>
              </div>
              <div className="mb-4">
                It&apos;s great to have you here.
                <br />
                This is analysis session #5 using Advanced AI.
              </div>
              <div className="mb-4">
                Your current data suggests you&apos;re analyzing
                <br />
                <span className="text-yellow-400">E-commerce, Global</span>
                <br />
                What a comprehensive dataset! <span className="text-blue-400">Nice!</span>
              </div>
              <div className="mb-4">
                Curious to explore more? <span className="text-orange-400 underline cursor-pointer">Sign up</span> for a
                <br />
                free trial and unlock all the features
                <br />
                we offer - without any commitment.
              </div>
              <div>Hope we see you soon!</div>
            </div>
          </motion.div>

          {/* Right Panel - Data Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Hello, dataset ID <span className="text-blue-600">EC2024Q4Br33nyk00SY</span>
              </h3>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6 text-center">
              <div>
                <div className="text-xs text-gray-500 mb-1">DATA POINTS</div>
                <div className="font-semibold">2.4M records</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">ANOMALIES</div>
                <div className="font-semibold">12 detected</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">ACCURACY</div>
                <div className="font-semibold">99.7%</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">INSIGHTS</div>
                <div className="font-semibold">847 generated</div>
              </div>
            </div>

            {/* Analysis History */}
            <div className="mb-6">
              <div className="text-xs text-gray-500 mb-2">YOUR ANALYSIS HISTORY</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Now</span>
                </div>
                <div className="text-sm text-gray-600">Global E-commerce Analysis</div>
              </div>
            </div>

            {/* Current Analysis */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Data Source</span>
                <span className="text-sm font-semibold">Multi-platform API</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Processing Mode</span>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  Real-time
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">AI Model</span>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  Advanced Analytics
                </Badge>
              </div>
            </div>

            {/* Mini Map */}
            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">DATA DISTRIBUTION</span>
                <Globe className="w-4 h-4 text-gray-400" />
              </div>
              <div className="relative h-20 bg-gradient-to-r from-blue-100 to-teal-100 rounded flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span className="ml-2 text-sm font-medium text-gray-700">Global Coverage</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 mb-8 tracking-wider">TRUSTED BY 2000+ DATA TEAMS OF ALL SIZES</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              "Microsoft",
              "Shopify",
              "Stripe",
              "Airbnb",
              "Netflix",
              "Spotify",
              "Uber",
              "Tesla",
              "Adobe",
              "Salesforce",
            ].map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-lg font-semibold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
