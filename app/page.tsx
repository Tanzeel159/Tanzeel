"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] })

  const scale1 = useTransform(scrollYProgress, [0, 0.25], [1.05, 1])
  const scale2 = useTransform(scrollYProgress, [0.1, 0.35], [1.05, 1])
  const scale3 = useTransform(scrollYProgress, [0.2, 0.45], [1.05, 1])
  const scale4 = useTransform(scrollYProgress, [0.3, 0.55], [1.05, 1])

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <section className="py-8 sm:py-12 lg:py-16" aria-labelledby="hero-heading">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h1 
                id="hero-heading"
                className="text-hero text-gray-900 leading-tight mb-4 sm:mb-6"
              >
                I'm Tanzeel and I bring ideas to life with{" "}
                <span className="text-blue-600 italic underline decoration-blue-600 decoration-2 underline-offset-4 whitespace-nowrap">design + code</span>
              </h1>
              <p className="text-body-large text-gray-600 leading-relaxed">
                Currently thinking about designing for the future, knowing what's possible today and what will be
                possible tomorrow.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div>
                <h2 className="text-meta text-gray-400 mb-3 sm:mb-4">
                  NOW
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                  <span className="text-gray-900 font-medium text-body">Iowa State University</span>
                  <span className="text-gray-500 text-body-small">GPSS Senator</span>
                </div>
              </div>

              <div>
                <h2 className="text-meta text-gray-400 mb-3 sm:mb-4">
                  PREVIOUSLY
                </h2>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                    <span className="text-gray-900 font-medium text-body">Tata Consultancy Services</span>
                    <span className="text-gray-500 text-body-small">System Engineer</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                    <span className="text-gray-900 font-medium text-body">Tata Consultancy Services</span>
                    <span className="text-gray-500 text-body-small">Assistant System Engineer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-8 sm:py-12 lg:py-16" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="sr-only">Featured Projects</h2>
          <div className="relative">
            {/* Cookie Consent UX Research Project */}
            <div className="h-[65vh] relative z-40">
              <div className="sticky" style={{ top: "calc(-2vh + 0px)" }}>
                <Link href="/projects/cookie-consent-ux-research" className="block group">
                  <motion.div style={{ scale: scale1 }} className="will-change-transform">
                  <Card className="overflow-hidden border border-gray-100 hover:border-blue-600/30 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group rounded-xl">
                <div className="bg-slate-800 p-4 sm:p-6 lg:p-8 h-48 sm:h-64 lg:h-80 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-3 sm:p-4 lg:p-6 w-full max-w-xs sm:max-w-sm transform group-hover:scale-105 transition-transform duration-300">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-blue-600 text-xs">🍪</span>
                        </div>
                        <h4 className="text-sm font-medium text-gray-900 mb-1">Cookie Consent</h4>
                        <p className="text-xs text-gray-600">UX Research Study</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">Accept All</span>
                          <span className="text-blue-600 font-medium">Customize</span>
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-2">
                          Accept Cookies
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-heading-3 font-medium text-gray-900 group-hover:text-blue-600 mb-2 line-clamp-2 transition-colors duration-300">
                    Cookie Consent UX Research
                  </h3>
                  <p className="text-body text-gray-600 mb-2 line-clamp-2">UX research study on cookie consent dialogs and user experience optimization.</p>
                  <p className="text-meta text-gray-500 group-hover:text-blue-600 transition-colors duration-300 mb-2">UX Research & Design</p>
                  <p className="text-meta text-gray-500 group-hover:text-blue-600 transition-colors duration-300">ISU • SHIPPED 2025</p>
                </div>
                  </Card>
                  </motion.div>
                </Link>
              </div>
            </div>

            {/* PokerGPT Project */}
            <div className="h-[65vh] relative z-30">
              <div className="sticky" style={{ top: "calc(-2vh + 12px)" }}>
                <Link href="/projects/pokergpt-ai-coach" className="block group">
                  <motion.div style={{ scale: scale2 }} className="will-change-transform">
                  <Card className="overflow-hidden border border-gray-100 hover:border-blue-600/30 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group rounded-xl">
                <div className="bg-blue-600 p-4 sm:p-6 lg:p-8 h-48 sm:h-64 lg:h-80 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-3 sm:p-4 lg:p-6 w-full max-w-xs sm:max-w-sm transform group-hover:scale-105 transition-transform duration-300">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-body">My Jobs</h4>
                        <Button variant="outline" size="sm" className="text-body bg-transparent px-2 py-1">
                          Export Data
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-1 sm:space-x-2 text-body-small">
                          <span className="bg-green-100 text-green-800 px-1.5 sm:px-2 py-1 rounded text-body-small">
                            All (123)
                          </span>
                          <span className="text-gray-600 text-body-small">Saved (94)</span>
                          <span className="text-gray-600 text-body-small hidden sm:inline">Applied (43)</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 sm:space-x-3 p-2 border rounded">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-black rounded flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-body-small truncate">Product Manager Intern</p>
                            <p className="text-body-small text-gray-500">Uber</p>
                            <p className="text-body-small text-gray-400 hidden sm:block">San Francisco, CA</p>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-body bg-transparent px-2 py-1 flex-shrink-0"
                          >
                            Saved
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-heading-3 font-medium text-gray-900 group-hover:text-blue-600 mb-2 line-clamp-2 transition-colors duration-300">
                    The world's first AI poker coach
                  </h3>
                  <p className="text-body text-gray-600 mb-2 line-clamp-2">AI-powered poker coaching platform with personalized strategy guidance.</p>
                  <p className="text-meta text-gray-500 group-hover:text-blue-600 transition-colors duration-300 mb-2">AI/ML Product Design</p>
                  <p className="text-meta text-gray-500 group-hover:text-blue-600 transition-colors duration-300">POKERGPT • SHIPPED 2023</p>
                </div>
                  </Card>
                  </motion.div>
                </Link>
              </div>
            </div>

            {/* Earth Project */}
            <div className="h-[65vh] relative z-20">
              <div className="sticky" style={{ top: "calc(-2vh + 24px)" }}>
                <Link href="/projects/earth-hackathon" className="block group">
                  <motion.div style={{ scale: scale3 }} className="will-change-transform">
                  <Card className="overflow-hidden border border-gray-100 hover:border-blue-600/30 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group rounded-xl">
                <div className="bg-gradient-to-br from-blue-200 to-blue-300 p-4 sm:p-6 lg:p-8 h-48 sm:h-64 lg:h-80 flex items-center justify-center">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-body font-medium transform group-hover:scale-105 transition-transform duration-300">
                    Create Team
                  </Button>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-heading-3 font-medium text-gray-900 group-hover:text-blue-600 mb-2 line-clamp-2 transition-colors duration-300">
                    End-to-end hackathon management for Fortune 500s
                  </h3>
                  <p className="text-body text-gray-600 mb-2 line-clamp-2">End-to-end hackathon management platform for Fortune 500 companies.</p>
                  <p className="text-meta text-gray-500 group-hover:text-blue-600 transition-colors duration-300 mb-2">Enterprise Platform Design</p>
                  <p className="text-meta text-gray-500 group-hover:text-blue-600 transition-colors duration-300">EARTH • SHIPPED 2023</p>
                </div>
                  </Card>
                  </motion.div>
                </Link>
              </div>
            </div>

            {/* LinkedIn Project */}
            <div className="h-[65vh] relative z-10">
              <div className="sticky" style={{ top: "calc(-2vh + 36px)" }}>
                <Link href="/projects/mindspace" className="block group">
                  <motion.div style={{ scale: scale4 }} className="will-change-transform">
                  <Card className="overflow-hidden border border-gray-100 hover:border-blue-600/30 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group rounded-xl">
                <div className="bg-blue-600 p-4 sm:p-6 lg:p-8 h-48 sm:h-64 lg:h-80 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-3 sm:p-4 lg:p-6 w-full max-w-xs sm:max-w-sm transform group-hover:scale-105 transition-transform duration-300">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-body">My Jobs</h4>
                        <Button className="text-body bg-transparent px-2 py-1">
                          Export Data
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-1 sm:space-x-2 text-body-small">
                          <span className="bg-green-100 text-green-800 px-1.5 sm:px-2 py-1 rounded text-body-small">
                            All (123)
                          </span>
                          <span className="text-gray-600 text-body-small">Saved (94)</span>
                          <span className="text-gray-600 text-body-small hidden sm:inline">Applied (43)</span>
                        </div>
                      </div>
                      <div className="space-y-1 sm:space-y-2">
                        <div className="flex items-center space-x-2 p-1.5 sm:p-2 border rounded">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-black rounded flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-body truncate">Product Manager Intern</p>
                            <p className="text-body-small text-gray-500">Uber</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-heading-3 font-medium text-gray-900 group-hover:text-blue-600 mb-2 line-clamp-2 transition-colors duration-300">
                    Mindspace: A Gamified VR Experience for Emotional Intelligence
                  </h3>
                  <p className="text-body text-gray-600 mb-2 line-clamp-2">A virtual reality gamified project designed to help young people explore emotions like Joy and Anxiety through immersive, interactive worlds.</p>
                  <p className="text-meta text-gray-500 group-hover:text-blue-600 transition-colors duration-300 mb-2">Product Strategy & UX</p>
                  <p className="text-meta text-gray-500 group-hover:text-blue-600 transition-colors duration-300">ISU • Shipped 2025</p>
                </div>
                  </Card>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12 lg:py-16">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900 mb-6 sm:mb-8 lg:mb-12">More Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* HeyHR Project */}
            <Link href="/projects/rbc-heyhr" className="block">
              <Card className="overflow-hidden border border-gray-100 hover:border-blue-600/30 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 sm:p-6 lg:p-8 h-48 sm:h-64 lg:h-80 flex flex-col items-center justify-center">
                  <div className="text-center transform group-hover:scale-105 transition-transform duration-300">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 mb-1 sm:mb-2">heyHR</h3>
                    <p className="text-blue-600 text-xs sm:text-sm">The better way to call HR</p>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 group-hover:text-blue-600 mb-2 line-clamp-2 transition-colors duration-300">
                    A patent-pending AI for RBC's Global HR Center
                  </h3>
                  <p className="text-meta text-gray-500 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                    AI Conversational Design
                  </p>
                  <p className="text-meta text-gray-500 group-hover:text-blue-600 transition-colors duration-300">
                    RBC - HEYHR • HANDED OFF 2024
                  </p>
                </div>
              </Card>
            </Link>

            {/* Chattin Project */}
            <Link href="/projects/chattin-professional" className="block">
              <Card className="overflow-hidden border border-gray-100 hover:border-blue-600/30 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className="bg-gradient-to-br from-orange-400 to-orange-500 p-4 sm:p-6 lg:p-8 h-48 sm:h-64 lg:h-80 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-3 sm:p-4 w-full max-w-xs shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3 lg:mb-4">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                      <div className="min-w-0">
                        <p className="font-medium text-xs sm:text-sm truncate">Jennifer Lee</p>
                        <p className="text-xs text-gray-500">Product Manager</p>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-1.5 sm:p-2 lg:p-3 mb-2 sm:mb-3">
                      <img
                        src="/modern-glass-office.png"
                        alt="Office"
                        className="w-full h-8 sm:h-12 lg:h-16 object-cover rounded"
                      />
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm py-1.5 sm:py-2">
                      Connect
                    </Button>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 group-hover:text-blue-600 mb-2 line-clamp-2 transition-colors duration-300">
                    A dating app, but for professional connections
                  </h3>
                  <p className="text-meta text-gray-500 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                    Mobile Social Design
                  </p>
                  <p className="text-meta text-gray-500 group-hover:text-blue-600 transition-colors duration-300">CHATTIN • SHIPPED 2024</p>
                </div>
              </Card>
            </Link>

            {/* Biogenesis Project */}
            <Link href="/projects/biogenesis-homepage" className="block">
              <Card className="overflow-hidden border border-gray-100 hover:border-blue-600/30 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className="bg-gray-100 p-4 sm:p-6 lg:p-8 h-48 sm:h-64 lg:h-80 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-3 sm:p-4 lg:p-6 w-full max-w-xs shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                    <div className="text-center mb-2 sm:mb-3 lg:mb-4">
                      <h4 className="text-xs sm:text-sm lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2 line-clamp-2">
                        Join our clinical research site network
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                        Connect with leading research facilities
                      </p>
                    </div>
                    <div className="mb-2 sm:mb-3 lg:mb-4">
                      <img
                        src="/placeholder-crl74.png"
                        alt="Medical facility"
                        className="w-full h-6 sm:h-8 lg:h-12 object-cover rounded"
                      />
                    </div>
                    <Button className="w-full bg-black hover:bg-gray-800 text-white text-xs sm:text-sm py-1.5 sm:py-2">
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 group-hover:text-blue-600 mb-2 line-clamp-2 transition-colors duration-300">
                    The home page of an emerging biotech startup
                  </h3>
                  <p className="text-meta text-gray-500 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                    Web Design & Branding
                  </p>
                  <p className="text-meta text-gray-500 group-hover:text-blue-600 transition-colors duration-300">BIOGENESIS • SHIPPED 2024</p>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
