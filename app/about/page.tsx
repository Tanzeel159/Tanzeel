"use client"

import Link from "next/link"
import { ArrowLeft } from "@/components/ui/icons"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackButton from "@/components/ui/back-button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Back Button */}
        <BackButton className="mb-6 sm:mb-8" />

        {/* Hero Section */}
        <div className="mb-12 sm:mb-16 max-w-4xl">
          <h1 className="text-heading-1 text-gray-900 mb-6 sm:mb-8 leading-tight">
            I'm a designer, builder, & creative—
            <br className="hidden sm:block" />
            always seeking a new adventure.
          </h1>

          <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed text-body">
            <p>
              Hey! I'm Tanzeel, a techie based in Ames, Iowa. I enjoy thinking deeply about people,
              products, and the future of technology.
            </p>

            <p>
              Open to freelance (Fall 2025 - Winter 2026) and Summer 2026 internship opportunities. Currently focused on
              the future of human-AI interaction. If you're in this space,{" "}
              <Link href="mailto:tanzeels@iastate.edu" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
                let's chat!
              </Link>
            </p>

            <div>
              <p className="mb-4">Outside of design, engineering, and being a comp sci + business student, I'm:</p>
              <ul className="space-y-2 ml-4 sm:ml-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                  leading student clubs in the tech space
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                  searching for food
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                  flashing V4's
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                  dancing, dancing, & dancing
                </li>
              </ul>
            </div>

            <p>
              Want to befriend me or hire me? Reach out on{" "}
              <Link href="https://linkedin.com/in/tanzeel" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
                LinkedIn
              </Link>
              ,{" "}
              <Link href="https://x.com/tanzeel" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
                X
              </Link>
              , or by{" "}
              <Link href="mailto:tanzeels@iastate.edu" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
                email
              </Link>
              —can't wait to meet you!
            </p>
          </div>
        </div>

        {/* Photos on Rope Section */}
        <div className="relative">
          {/* Grid Background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
            aria-hidden="true"
          ></div>

          <div className="relative h-64 sm:h-80 overflow-hidden">
            {/* Placeholder for photos */}
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <p className="text-caption text-gray-500">Photos coming soon...</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
