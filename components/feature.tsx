import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Shield, BarChart3, Zap } from "lucide-react";

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium text-blue-600 mb-4">
                Why Spotter.ai
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                The market&apos;s most{" "}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  intelligent
                </span>{" "}
                analytics platform
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Industry-leading AI accuracy that improves over time, delivering
                insights that get smarter with every data point.
              </p>
            </div>

            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Learn More
            </Button>

            {/* Chart Visualization */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">
                  PREDICTION ACCURACY
                </h3>
                <div className="flex items-center space-x-4 text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"></div>
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
                <svg className="w-full h-full" viewBox="0 0 400 160">
                  {/* Grid lines */}
                  <defs>
                    <pattern
                      id="grid"
                      width="40"
                      height="32"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 32"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Spotter.ai line (stays high) */}
                  <path
                    d="M 0 40 Q 100 35 200 30 T 400 25"
                    fill="none"
                    stroke="url(#gradient1)"
                    strokeWidth="3"
                    className="drop-shadow-sm"
                  />

                  {/* Traditional analytics line (drops off) */}
                  <path
                    d="M 0 40 Q 100 50 200 80 T 400 120"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="3"
                    className="drop-shadow-sm"
                  />

                  <defs>
                    <linearGradient
                      id="gradient1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Chart labels */}
                <div className="absolute bottom-2 left-4 text-xs text-gray-500">
                  0
                </div>
                <div className="absolute bottom-2 left-1/4 text-xs text-gray-500">
                  30
                </div>
                <div className="absolute bottom-2 left-1/2 text-xs text-gray-500">
                  60
                </div>
                <div className="absolute bottom-2 left-3/4 text-xs text-gray-500">
                  90
                </div>
                <div className="absolute bottom-2 right-4 text-xs text-gray-500">
                  120
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
                  DAYS AFTER INITIAL ANALYSIS
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs text-gray-400">
                  ACCURACY RETENTION
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-8">
            {/* AI Detection Status Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="font-medium text-gray-900">
                    Anomaly Detection
                  </span>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-700 hover:bg-green-100"
                >
                  Active
                </Badge>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">Clean</div>
                <div className="text-sm text-gray-500">
                  No anomalies detected
                </div>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                  <Search className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Any data source, any format.
                  </h3>
                  <p className="text-gray-600">
                    Connect and analyze data from web, mobile, IoT, and
                    enterprise systems with exceptional accuracy across all
                    platforms.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mt-1">
                  <BarChart3 className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Identify hidden patterns instantly.
                  </h3>
                  <p className="text-gray-600">
                    Discover insights in complex datasets even when traditional
                    analytics miss critical trends and correlations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mt-1">
                  <Zap className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Empower your data teams.
                  </h3>
                  <p className="text-gray-600">
                    Accelerate decision-making and reduce time-to-insight by
                    providing self-service analytics for all skill levels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
