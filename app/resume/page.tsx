"use client"

import Link from "next/link"
import { ArrowLeft, Download, Copy, ExternalLink, Phone } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackButton from "@/components/ui/back-button"
import { useState } from "react"

export default function ResumePage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('tanzeels@iastate.edu');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        {/* Back Button */}
        <BackButton className="mb-4 sm:mb-6" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8">
              <h1 className="text-heading-1 text-gray-900 mb-4 sm:mb-6">Resume.</h1>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white justify-start" asChild>
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Resume Preview */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl hover:border-blue-200 cursor-pointer">
              {/* Resume Header */}
              <div className="bg-gray-50 p-3 sm:p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Tanzeel Ahmed Shaikh</h2>
                    <p className="text-blue-600 font-medium mb-4">UX Engineer & HCI Researcher</p>
                    <div className="space-y-1 text-sm text-gray-700">
                      <p>• UX Engineer and HCI researcher with strong interest in AI applications</p>
                      <p>• Dedicated to building intuitive, accessible, and data-informed digital experiences</p>
                      <p>• Master of Science in Human Computer Interaction with 4.0 CGPA</p>
                      <p>• 3+ years of system engineering experience</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right text-sm text-gray-700">
                    <p className="text-gray-900 font-medium mb-2">Ames, Iowa - 50010</p>
                    <div className="space-y-2">
                      <p className="bg-blue-600 text-white px-2 py-1 rounded text-xs inline-block">
                        Portfolio / www.tanzeel.com
                      </p>
                      <a 
                        href="https://linkedin.com/in/tanzeel" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        LinkedIn / tanzeel
                        <ExternalLink className="w-3 h-3 text-gray-500 -mt-0.5" />
                      </a>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-700 flex-1">tanzeels@iastate.edu</span>
                        <button
                          onClick={copyEmail}
                          className="p-1 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                          title="Copy email"
                        >
                          <Copy className="w-3 h-3 text-gray-600 -mt-0.5" />
                        </button>
                        {copied && (
                          <span className="text-xs text-green-600 font-medium flex-shrink-0">Copied!</span>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {/* Skills Section */}
                <div>
                  <h3 className="text-blue-600 font-medium mb-3 flex items-center">Skills 🛠️</h3>

                  <div className="mb-4">
                    <h4 className="text-gray-900 font-medium">Programming:</h4>
                    <div className="text-xs sm:text-sm text-gray-700 space-y-1 mb-4">
                      <p>Python | HTML | CSS | JavaScript | TypeScript | SQL</p>
                    </div>

                    <h4 className="text-gray-900 font-medium">Frameworks:</h4>
                    <div className="text-xs sm:text-sm text-gray-700 space-y-1 mb-4">
                      <p>React | TailwindCSS</p>
                    </div>

                    <h4 className="text-gray-900 font-medium">Design Tools:</h4>
                    <div className="text-xs sm:text-sm text-gray-700 space-y-1 mb-4">
                      <p>Figma | Framer | Canva</p>
                    </div>

                    <h4 className="text-gray-900 font-medium">Tools:</h4>
                    <div className="text-xs sm:text-sm text-gray-700 space-y-1 mb-4">
                      <p>VSCode | Git | Jenkins | Jira | Miro | Firebase</p>
                      <p>Chrome DevTools | Taguette | LLM Tools</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-gray-900 font-medium">User Experience:</h4>
                    <div className="text-xs sm:text-sm text-gray-700 space-y-1">
                      <p>Usability Testing | Wireframing | Prototyping</p>
                      <p>User Research | Information Architecture</p>
                      <p>Heuristic Evaluation | A/B Testing</p>
                      <p>Diary Studies | Journey Mapping</p>
                      <p>Data Visualization | Accessibility (WCAG)</p>
                      <p>Responsive Design</p>
                    </div>
                  </div>
                </div>

                {/* Work Experience Section */}
                <div>
                  <h3 className="text-blue-600 font-medium mb-3 flex items-center">Work Experience 💼</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-gray-900 font-medium text-sm mb-1">
                        System Engineer | Tata Consultancy Services (TCS)
                      </h4>
                      <span className="text-gray-500 text-xs sm:text-sm block mb-2">2021-2024</span>
                      <p className="text-gray-500 text-xs mb-2">Hyderabad, India</p>
                      <ul className="text-xs sm:text-sm text-gray-700 space-y-1 ml-4">
                        <li>
                          • Maintained backend infrastructure (WebSphere Application Server), ensuring 95%+ uptime for
                          user-facing applications
                        </li>
                        <li>
                          • Monitored system logs and reduced issue identification time by 15% through proactive
                          analysis and alerting
                        </li>
                        <li>
                          • Implemented, tested, and deployed 4 major Change Requests (CRs) in testing and production
                          environments, improving usability with zero rollbacks
                        </li>
                        <li>
                          • Led 16 server patching activities, each followed by successful sanity checks with no
                          deployment failures
                        </li>
                        <li>
                          • Collaborated with development, QA, and UX teams to enhance system performance and support
                          user-centric improvements
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Projects Section */}
                  <div className="mt-6">
                    <h3 className="text-blue-600 font-medium mb-3 flex items-center">Projects 🚀</h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-gray-900 font-medium text-sm">Cookie Consent UX Research</h4>
                        <p className="text-gray-500 text-xs mb-2">Jan 2025 - May 2025</p>
                        <ul className="text-xs sm:text-sm text-gray-700 space-y-1 ml-4">
                          <li>
                            • Conducted 5 semi-structured interviews and built custom survey tool to analyze user
                            interactions with cookie consent banners
                          </li>
                          <li>
                            • Applied thematic coding using Taguette to identify patterns in user trust, frustration,
                            and decision fatigue
                          </li>
                          <li>
                            • Uncovered 4 key UX pain points leading to design recommendations for improving
                            transparency and user control
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-gray-900 font-medium text-sm">SmartPantry</h4>
                        <p className="text-gray-500 text-xs sm:text-sm">Jan 2025 - May 2025</p>
                        <ul className="text-xs sm:text-sm text-gray-700 space-y-1 ml-4">
                          <li>
                            • Redesigned mobile app to streamline food inventory tracking using OCR and voice input
                          </li>
                          <li>
                            • Achieved 48% decrease in task time and 90% reduction in interaction errors through
                            usability improvements
                          </li>
                          <li>• Increased user satisfaction with System Usability Score of 87 (vs. 46 for original)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="p-3 sm:p-6 border-t border-gray-200">
                <h3 className="text-blue-600 font-medium mb-3 flex items-center">Education 🎓</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-gray-900 font-medium text-sm">
                      Master of Science in Human Computer Interaction
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm">August 2024 - May 2026 | CGPA - 4.0</p>
                    <p className="text-gray-500 text-xs sm:text-sm italic">Iowa State University, Ames, Iowa</p>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium text-sm">
                      Bachelor of Technology Computer Science & Engineering
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm">August 2015 - May 2019 | CGPA - 3.6</p>
                    <p className="text-gray-500 text-xs sm:text-sm italic">
                      Vardhaman College of Engineering, Hyderabad, India
                    </p>
                  </div>
                </div>

                {/* Certifications and Leadership Sections */}
                <div className="mt-4">
                  <h4 className="text-gray-900 font-medium mb-2">Certifications:</h4>
                  <div className="text-xs sm:text-sm text-gray-700 space-y-1">
                    <p>• Udemy - Figma UI/UX Design Essentials</p>
                    <p>• Google Cloud Certified Associate Cloud Engineer</p>
                    <p>• Udemy - HTML and CSS Tutorial Course</p>
                    <p>• Udemy - Automating Boring Stuff with Python</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-gray-900 font-medium mb-2">Leadership & Activities:</h4>
                  <div className="text-xs sm:text-sm text-gray-700 space-y-1">
                    <p>• Graduate and Professional Student Senate (GPSS) Senator, Iowa State University</p>
                    <p>• Honorable Mention – Ivy Hackathon 2024, Iowa State University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
