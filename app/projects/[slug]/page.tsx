"use client"

import { notFound } from "next/navigation"
import { getProject } from "@/lib/projects"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "@/components/ui/icons"
import Link from "next/link"
import { use, useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackButton from "@/components/ui/back-button"
import { motion } from "framer-motion"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params)
  const project = getProject(slug)
  const [activeSection, setActiveSection] = useState("overview")
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const fadeIn = {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5, ease: "easeOut" },
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = project?.sections || []
      const scrollPosition = window.scrollY + 200 // Offset for better UX

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / totalHeight) * 100
      setScrollProgress(Math.min(currentProgress, 100))

      // Build a flat ordered list of section and subsection IDs
      const anchorIds: string[] = []
      sections.forEach((s: any) => {
        anchorIds.push(s.id)
        if (Array.isArray(s.subsections)) {
          s.subsections.forEach((sub: any) => anchorIds.push(sub.id))
        }
      })

      for (let i = anchorIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(anchorIds[i])
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(anchorIds[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [project])

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Horizontal Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-blue-600 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 lg:py-8">
        {/* Back Button */}
        <BackButton className="mb-4 sm:mb-6 lg:mb-8" />

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-48 lg:flex-shrink-0">
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <span>Navigation</span>
                <div className={`transform transition-transform ${isMobileNavOpen ? "rotate-180" : ""}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
            </div>

            <nav className="lg:sticky lg:top-8">
              <div className={`${isMobileNavOpen ? "block" : "hidden"} lg:block`}>
                <div className="flex flex-col space-y-1 lg:space-y-2">
                  {project.sections.map((section: any) => (
                    <div key={section.id} className="">
                      <a
                        href={`#${section.id}`}
                        className={`block py-2 px-3 lg:px-0 text-sm transition-colors hover:text-gray-900 rounded-md lg:rounded-none hover:bg-gray-50 lg:hover:bg-transparent ${
                          activeSection === section.id
                            ? "font-medium text-gray-900 bg-blue-50 lg:bg-transparent"
                            : "text-gray-600"
                        }`}
                        onClick={(e) => {
                          e.preventDefault()
                          const element = document.getElementById(section.id)
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "start" })
                          }
                          setActiveSection(section.id)
                          setIsMobileNavOpen(false)
                        }}
                      >
                        {section.title}
                      </a>
                      {Array.isArray(section.subsections) && (
                        <div className="ml-3">
                          {section.subsections.map((sub: any) => (
                            <a
                              key={sub.id}
                              href={`#${sub.id}`}
                              className={`block py-1.5 px-3 lg:px-3 text-sm transition-colors hover:text-gray-900 rounded-md lg:rounded-none hover:bg-gray-50 lg:hover:bg-transparent ${
                                activeSection === sub.id ? "font-medium text-gray-900 bg-blue-50 lg:bg-transparent" : "text-gray-600"
                              }`}
                              onClick={(e) => {
                                e.preventDefault()
                                const element = document.getElementById(sub.id)
                                if (element) {
                                  element.scrollIntoView({ behavior: "smooth", block: "start" })
                                }
                                setActiveSection(sub.id)
                                setIsMobileNavOpen(false)
                              }}
                            >
                              {sub.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-none lg:max-w-4xl">
            {/* Project Header */}
            <div className="mb-6 sm:mb-8 lg:mb-12">
              <motion.p {...fadeIn} className="text-meta text-gray-500 mb-3 sm:mb-4">
                {project.company} • {project.status} {project.year}
              </motion.p>
              <motion.h1 {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.05 }} className="text-heading-1 text-gray-900 leading-tight mb-6 sm:mb-8 lg:mb-12">
                {project.title}
              </motion.h1>

              <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.1 }} className="bg-slate-800 rounded-lg overflow-hidden mb-6 sm:mb-8 lg:mb-12">
                <div className="p-4 sm:p-8 lg:p-12 flex items-center justify-center min-h-[250px] sm:min-h-[300px] lg:min-h-[400px]">
                  {project.id === "cookie-consent-ux-research" && (
                    <div className="bg-white rounded-lg p-3 sm:p-6 lg:p-8 w-full max-w-xs sm:max-w-sm lg:max-w-md shadow-2xl">
                      <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                        <div className="text-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                            <span className="text-blue-600 text-lg sm:text-xl lg:text-2xl">🍪</span>
                          </div>
                          <h4 className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 mb-1 sm:mb-2">Cookie Consent</h4>
                          <p className="text-xs sm:text-sm lg:text-base text-gray-600">UX Research Study</p>
                        </div>
                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex items-center justify-between text-xs sm:text-sm">
                            <span className="text-gray-600">Accept All</span>
                            <span className="text-blue-600 font-medium">Customize</span>
                          </div>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 text-xs sm:text-sm lg:text-base font-medium">
                            Accept Cookies
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                  {project.id !== "cookie-consent-ux-research" && (
                    <div className="text-white text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-white/40 rounded"></div>
                      </div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-medium mb-2">Project Preview</h3>
                      <p className="text-gray-300 text-xs sm:text-sm">Detailed case study coming soon</p>
                    </div>
                  )}
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10 lg:mb-12">
                <motion.div {...fadeIn} className="flex flex-col">
                  <h3 className="text-meta text-gray-400 mb-3 font-medium tracking-wide">ROLE</h3>
                  <div className="space-y-2">
                    {project.role.map((role, index) => (
                      <p key={index} className="text-gray-900 font-medium text-body leading-relaxed">
                        {role}
                      </p>
                    ))}
                  </div>
                </motion.div>
                <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.05 }} className="flex flex-col">
                  <h3 className="text-meta text-gray-400 mb-3 font-medium tracking-wide">
                    TIMELINE
                  </h3>
                  <p className="text-gray-900 font-medium text-body leading-relaxed">{project.timeline}</p>
                </motion.div>
                <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.1 }} className="flex flex-col">
                  <h3 className="text-meta text-gray-400 mb-3 font-medium tracking-wide">TEAM</h3>
                  <div className="space-y-2">
                    {project.team.map((member, index) => (
                      <p key={index} className="text-gray-900 font-medium text-body leading-relaxed">
                        {member}
                      </p>
                    ))}
                  </div>
                </motion.div>
                <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.15 }} className="flex flex-col">
                  <h3 className="text-meta text-gray-400 mb-3 font-medium tracking-wide">SKILLS</h3>
                  <div className="space-y-2">
                    {project.skills.map((skill, index) => (
                      <p key={index} className="text-gray-900 font-medium text-body leading-relaxed">
                        {skill}
                      </p>
                    ))}
                  </div>
                </motion.div>
                <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }} className="flex flex-col">
                  <h3 className="text-meta text-gray-400 mb-3 font-medium tracking-wide">TOOLS</h3>
                  <div className="space-y-2">
                    {project.tools.map((tool, index) => (
                      <p key={index} className="text-gray-900 font-medium text-body leading-relaxed">
                        {tool}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              {/* Overview Section Card */}
              <section id="overview" className="scroll-mt-20 sm:scroll-mt-24">
                <motion.div {...fadeIn}>
                  <Card className="p-6 sm:p-8 lg:p-10 border border-gray-200 hover:border-blue-600/30 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                    <div className="mb-4 sm:mb-6">
                      <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">OVERVIEW</h2>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-normal text-gray-900 leading-relaxed mb-4 sm:mb-6">
                        {project.overview}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">{project.description}</p>
                    </div>
                  </Card>
                </motion.div>
              </section>

              {/* Project Sections Cards */}
              {project.sections.slice(1).map((section, idx) => (
                <section key={section.id} id={section.id} className="scroll-mt-20 sm:scroll-mt-24">
                  <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.05 * (idx % 3) }}>
                    <Card className="p-6 sm:p-8 lg:p-10 border border-gray-200 hover:border-blue-600/30 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                      <div className="mb-4 sm:mb-6">
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900 mb-4 sm:mb-6">
                          {section.title}
                        </h2>
                        <div className="prose prose-gray max-w-none">
                          <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">{section.content}</p>
                        </div>
                      </div>
                      
                      {/* Render subsections if any */}
                      {Array.isArray((section as any).subsections) && (
                        <div className="mt-6 sm:mt-8 space-y-6">
                          {((section as any).subsections as Array<{ id: string; title: string; content: string }>).map((sub, i) => (
                            <div key={sub.id} id={sub.id} className="scroll-mt-20 sm:scroll-mt-24">
                              <h3 className="text-base sm:text-lg lg:text-xl font-medium text-gray-900 mb-3 sm:mb-4">
                                {sub.title}
                              </h3>
                              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                                {sub.content}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Research & Inspiration Cards after Vision for Mindspace only */}
                      {project.id === "mindspace" && section.id === "vision" && (
                        <div id="research-cards" className="mt-6 sm:mt-8">
                          <h3 className="text-base sm:text-lg lg:text-xl font-medium text-gray-900 mb-4 sm:mb-6">
                            Research & Inspiration
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                            {[
                              { title: "Duolingo", desc: "Gamification as a lever for engagement and long-term learning.", img: "/research-duolingo.png" },
                              { title: "Inside Out", desc: "Visual language for personifying and teaching emotions.", img: "/research-insideout.png" },
                              { title: "Positive Psychology", desc: "Practices for cultivating joy and gratitude.", img: "/research-positive-psych.png" },
                              { title: "CBT/ACT", desc: "Frameworks for reframing anxious thoughts and behaviors.", img: "/research-cbt-act.png" },
                            ].map((card, i) => (
                              <motion.div key={card.title} {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.05 * i }} className="overflow-hidden border border-gray-100 hover:border-blue-600/30 shadow-lg hover:shadow-xl transition-all duration-300 cursor-default rounded-xl bg-white">
                                <div className="p-3 sm:p-4 border-b bg-gray-50">
                                  <div className="w-full h-24 sm:h-28 lg:h-32 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
                                    <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                                  </div>
                                </div>
                                <div className="p-4 sm:p-6">
                                  <h3 className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 mb-2">{card.title}</h3>
                                  <p className="text-meta text-gray-500">{card.desc}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </Card>
                  </motion.div>
                </section>
              ))}
            </div>

            <div className="mt-12 sm:mt-16 lg:mt-24 pt-6 sm:pt-8 lg:pt-12 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm sm:text-base"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to all projects</span>
                </Link>
                <div className="text-xs sm:text-sm text-gray-500">More projects coming soon</div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}
