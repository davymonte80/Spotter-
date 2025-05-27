import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-teal-50/50" />
      <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"&gt;&lt;g fill="none" fillRule="evenodd"&gt;&lt;g fill="#e5f3ff" fillOpacity="0.4"&gt;&lt;circle cx="30" cy="30" r="1"/&gt;&lt;/g&gt;&lt;/g&gt;&lt;/svg&gt;&apos;)] opacity-40' />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-4rem)] py-12 lg:py-20">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left lg:pr-12">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build{" "}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  intelligent
                </span>{" "}
                and{" "}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  data-driven
                </span>{" "}
                products
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
                The AI-powered analytics platform for actionable insights.
                <br />
                Transform data into decisions. Spot opportunities before your
                competition.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-teal-600 hover:from-blue-600 hover:to-teal-700 text-white px-8 py-3 text-lg font-semibold"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold"
                >
                  Watch Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>SOC 2 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>GDPR Ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="flex-1 mt-12 lg:mt-0 lg:pl-12">
            <div className="relative max-w-lg mx-auto">
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Analytics Dashboard
                  </h3>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Revenue Growth
                    </span>
                    <span className="text-sm font-semibold text-green-600">
                      +24.5%
                    </span>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg flex items-end justify-center p-4">
                    <TrendingUp className="h-16 w-16 text-blue-500" />
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mx-auto mb-2">
                        <BarChart3 className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="text-xs text-gray-600">Insights</div>
                      <div className="text-sm font-semibold">1,247</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-10 h-10 bg-teal-100 rounded-lg mx-auto mb-2">
                        <Zap className="h-5 w-5 text-teal-600" />
                      </div>
                      <div className="text-xs text-gray-600">Alerts</div>
                      <div className="text-sm font-semibold">23</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg mx-auto mb-2">
                        <TrendingUp className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="text-xs text-gray-600">Trends</div>
                      <div className="text-sm font-semibold">89</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
