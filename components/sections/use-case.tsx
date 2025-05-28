"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  CreditCard,
  MessageSquare,
  Bot,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  MapPin,
  Monitor,
} from "lucide-react";

const useCases = [
  {
    icon: Shield,
    title: "Fraud Detection",
    description:
      "Reduce fraudulent transactions and increase legitimate conversions with AI-powered risk scoring.",
    isExpanded: true,
  },
  {
    icon: CreditCard,
    title: "Payment Analytics",
    description:
      "Optimize payment flows and reduce cart abandonment with intelligent payment insights.",
    isExpanded: false,
  },
  {
    icon: MessageSquare,
    title: "Customer Insights",
    description:
      "Understand customer behavior patterns and predict churn with advanced analytics.",
    isExpanded: false,
  },
  {
    icon: Bot,
    title: "Anomaly Detection",
    description:
      "Automatically detect unusual patterns and outliers in your data streams.",
    isExpanded: false,
  },
];

export function UseCases() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Build <span className="gradient-text">intelligent</span> and{" "}
            <span className="gradient-text">data-driven</span> products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            The AI analytics platform for actionable insights.
            <br />
            Transform complex data into clear decisions. Optimize performance
            across all touchpoints.
          </p>
          <Button
            variant="outline"
            className="mt-6 border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            See all Use Cases
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Use Cases */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                  useCase.isExpanded
                    ? "bg-white border-blue-200 shadow-md"
                    : "bg-gray-50 border-gray-200 hover:bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      useCase.isExpanded ? "bg-blue-100" : "bg-gray-100"
                    }`}
                  >
                    <useCase.icon
                      className={`w-4 h-4 ${
                        useCase.isExpanded ? "text-blue-600" : "text-gray-600"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      {useCase.title}
                    </h3>
                    {useCase.isExpanded && (
                      <p className="text-sm text-gray-600 mt-1">
                        {useCase.description}
                      </p>
                    )}
                  </div>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      useCase.isExpanded ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Center Panel - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-effect rounded-xl p-6 shadow-lg"
          >
            <div className="mb-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Risk Analysis Dashboard
                </h3>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>

              {/* Mock Payment Form */}
              <div className="bg-white rounded-lg border p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700">
                    Transaction Details
                  </span>
                  <Badge
                    variant="secondary"
                    className="bg-orange-100 text-orange-700"
                  >
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    Analyzing
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-gray-500">Amount</label>
                    <div className="text-lg font-semibold">$2,847.50</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-gray-500">Currency</label>
                      <div className="text-sm font-medium">USD</div>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500">Method</label>
                      <div className="text-sm font-medium">Credit Card</div>
                    </div>
                  </div>
                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Cancel
                    </Button>
                    <Button size="sm" className="flex-1 gradient-bg">
                      Proceed to Analysis
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Analysis Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Risk Score Card */}
            <div className="glass-effect rounded-xl p-4 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">
                  Risk Score
                </span>
                <Badge
                  variant="secondary"
                  className="bg-yellow-100 text-yellow-700"
                >
                  Medium Risk
                </Badge>
              </div>
              <div className="text-2xl font-bold text-yellow-600 mb-2">42</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-yellow-500 h-2 rounded-full"
                  style={{ width: "42%" }}
                ></div>
              </div>
            </div>

            {/* Analysis Details */}
            <div className="glass-effect rounded-xl p-4 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-3">
                Analysis Results
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Geolocation</span>
                  </div>
                  <span className="text-sm font-medium">New York, USA</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Monitor className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      Device Pattern
                    </span>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700"
                  >
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      Behavior Score
                    </span>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-red-100 text-red-700"
                  >
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    Unusual
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      Security Check
                    </span>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700"
                  >
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Passed
                  </Badge>
                </div>
              </div>
            </div>

            {/* Recommendation */}
            <div className="glass-effect rounded-xl p-4 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                AI Recommendation
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Transaction shows moderate risk indicators. Consider additional
                verification steps or manual review before processing.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Why Spotter.ai
              </h3>
              <p className="text-gray-600">
                Advanced AI algorithms that learn and adapt to your data
                patterns, providing increasingly accurate insights over time.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Any data source, any format.
              </h3>
              <p className="text-gray-600">
                Connect and analyze data from APIs, databases, files, and
                real-time streams with exceptional accuracy across all
                platforms.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
