"use client"

import Link from "next/link"
import { ArrowLeft } from "@/components/ui/icons"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackButton from "@/components/ui/back-button"

interface FunProject {
  id: string
  title: string
  subtitle: string
  type: "image" | "video"
  src: string
  height: "small" | "medium" | "large" | "xlarge"
  bgColor?: string
  description?: string
}

const funProjects: FunProject[] = [
  {
    id: "ai-device",
    title: "AI device to never forget people",
    subtitle: "INFU • 2ND PLACE @ HACK WESTERN 10",
    type: "image",
    src: "/placeholder-aqc9w.png",
    height: "large",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    description: "A wearable device that uses AI to remember people you've met, helping with social interactions and networking."
  },
  {
    id: "hack-western",
    title: "Making hacking for everyone",
    subtitle: "HACK WESTERN 12 • HACKATHON",
    type: "image",
    src: "/purple-gradient-letter.png",
    height: "medium",
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    description: "Democratizing hackathon participation through inclusive design and accessible tools."
  },
  {
    id: "hand-tracking",
    title: "Hand gesture recognition demo",
    subtitle: "COMPUTER VISION • PROTOTYPE 2024",
    type: "video",
    src: "/hand-tracking-demo.png",
    height: "small",
    bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
    description: "Real-time hand gesture recognition using computer vision for intuitive human-computer interaction."
  },
  {
    id: "eye-tracking",
    title: "Eye-tracking device for eye health",
    subtitle: "VISIONARY • BEST EYE-TRACKING HACK",
    type: "image",
    src: "/black-smart-glasses.png",
    height: "xlarge",
    bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
    description: "Smart glasses that monitor eye health and provide real-time feedback on eye strain and posture."
  },
  {
    id: "workspace",
    title: "My development setup",
    subtitle: "PRODUCTIVITY • WORKSPACE TOUR 2024",
    type: "video",
    src: "/dual-laptop-setup.png",
    height: "medium",
    bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    description: "A tour of my optimized development workspace designed for maximum productivity and creativity."
  },
  {
    id: "hangouts-app",
    title: "App for spontaneous hangouts",
    subtitle: "BUBBL • 1ST PLACE @ UXL DESIGNATHON",
    type: "image",
    src: "/purple-social-app.png",
    height: "xlarge",
    bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    description: "A social app that makes it easy to find and organize spontaneous meetups with friends and new people."
  },
  {
    id: "ai-trail",
    title: "AI trail generator app",
    subtitle: "TRAILO • DESIGN PROJECT",
    type: "image",
    src: "/placeholder-4opwp.png",
    height: "medium",
    bgColor: "bg-gradient-to-br from-green-50 to-green-100",
    description: "An AI-powered app that generates personalized hiking and walking trails based on your preferences."
  },
  {
    id: "emotion-mapping",
    title: "Real-time emotion-mapping",
    subtitle: "EMPA • 1ST PLACE @ SHEHACKS 2024",
    type: "image",
    src: "/emotion-mapping-chat.png",
    height: "large",
    bgColor: "bg-gradient-to-br from-teal-50 to-teal-100",
    description: "A system that maps and analyzes emotions in real-time conversations for better communication insights."
  },
  {
    id: "chrome-extension",
    title: "AI Chrome extension mental health",
    subtitle: "ZENSPHERE • BEST HEALTH HACK",
    type: "image",
    src: "/purple-zensphere-interface.png",
    height: "medium",
    bgColor: "bg-gradient-to-br from-violet-50 to-violet-100",
    description: "A Chrome extension that uses AI to promote mental health and mindfulness during browsing sessions."
  },
  {
    id: "youtube-notes",
    title: "Youtube video to organized notes",
    subtitle: "TL;DW • BEST COHERE HACK",
    type: "image",
    src: "/dark-terminal-interface.png",
    height: "medium",
    bgColor: "bg-gradient-to-br from-slate-50 to-slate-100",
    description: "An AI tool that converts YouTube videos into organized, searchable notes and summaries."
  },
  {
    id: "ai-chatbot",
    title: "AI chatbot of myself with stable diffusion",
    subtitle: "RACHELAI • CLIENT PROJECT",
    type: "image",
    src: "/green-chat-interface.png",
    height: "large",
    bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100",
    description: "A personalized AI chatbot that represents my personality and knowledge, with image generation capabilities."
  },
  {
    id: "data-analysis",
    title: "Machine learning and data analysis for hotels",
    subtitle: "DATAQUEST • 1ST PLACE @ DATAQUEST",
    type: "image",
    src: "/hotel-analytics-dashboard.png",
    height: "medium",
    bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
    description: "Advanced analytics and ML solutions for hotel optimization and guest experience improvement."
  },
]

function ProjectCard({ project }: { project: FunProject }) {
  const heightClasses = {
    small: "h-48",
    medium: "h-64", 
    large: "h-80",
    xlarge: "h-96"
  }

  return (
    <div className="masonry-item mb-8">
      <Link href={`/projects/${project.id}`} className="block group">
        <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 ease-out overflow-hidden cursor-pointer border border-gray-100 hover:border-blue-600/30">
          {/* Image Container with Dynamic Height */}
          <div className={`relative w-full ${heightClasses[project.height]} overflow-hidden`}>
            <div className={`absolute inset-0 ${project.bgColor} flex items-center justify-center p-6`}>
              <img
                src={project.src || "/placeholder.svg"}
                alt={project.title}
                className="max-w-full max-h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
          </div>
          
          {/* Card Content */}
          <div className="p-6">
            <h3 className="text-heading-3 font-medium text-gray-900 group-hover:text-blue-600 mb-3 leading-tight transition-colors duration-300">
              {project.title}
            </h3>
            
            {project.description && (
              <p className="text-body text-gray-600 leading-relaxed mb-4">
                {project.description}
              </p>
            )}
            
            <p className="text-meta text-gray-500 group-hover:text-blue-600 transition-colors duration-300">
              {project.subtitle}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default function FunPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Back Button */}
        <BackButton className="mb-12" />

        {/* Hero Section */}
        <div className="mb-20 max-w-4xl">
          <h1 className="text-heading-1 text-gray-900 mb-8 leading-tight">
            I lose sleep doing hackathons, design sprints, & silly little side quests.
          </h1>

          <div className="text-gray-600 leading-relaxed text-body-large">
            <p>
              Design is my passion, but I make time to code cool things and artificialize intelligence. Currently
              leading design at{" "}
              <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium transition-colors underline decoration-1 underline-offset-4">
                Hack Western
              </Link>
              , growing at{" "}
              <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium transition-colors underline decoration-1 underline-offset-4">
                SVSD
              </Link>
              , and climbing rocks.
            </p>
          </div>
        </div>

        {/* Masonry Grid Container */}
        <div className="masonry-grid">
          {funProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
