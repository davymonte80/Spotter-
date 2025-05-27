"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Brain, Github, Twitter, Linkedin, Mail } from "lucide-react"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Integrations", href: "#integrations" },
    { name: "API", href: "#api" },
    { name: "Pricing", href: "#pricing" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Documentation", href: "#docs" },
    { name: "Help Center", href: "#help" },
    { name: "Community", href: "#community" },
    { name: "Status", href: "#status" },
  ],
  legal: [
    { name: "Privacy", href: "#privacy" },
    { name: "Terms", href: "#terms" },
    { name: "Security", href: "#security" },
    { name: "Cookies", href: "#cookies" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-bg">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Spotter</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
                AI-powered analytics platform that transforms data into actionable insights. Spot opportunities and make
                data-driven decisions with confidence.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Twitter, href: "#twitter" },
                  { icon: Github, href: "#github" },
                  { icon: Linkedin, href: "#linkedin" },
                  { icon: Mail, href: "#email" },
                ].map((social, index) => (
                  <motion.div
                    key={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Link
                      href={social.href}
                      className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="sr-only">{social.href}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-white mb-4 capitalize">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + linkIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors hover:underline"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-sm text-gray-400">© 2024 Spotter.ai. All rights reserved.</p>
          <p className="text-sm text-gray-400 mt-4 sm:mt-0">
            Made with <span className="text-red-400">❤️</span> for data-driven teams
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
