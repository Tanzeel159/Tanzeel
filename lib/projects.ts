export interface Project {
  id: string
  title: string
  company: string
  status: string
  year: string
  role: string[]
  timeline: string
  team: string[]
  skills: string[]
  tools: string[]
  focus: string
  overview: string
  description: string
  sections: ProjectSection[]
}

export interface ProjectSection {
  id: string
  title: string
  content: string
  subsections?: { id: string; title: string; content: string }[]
}

export const projects: Project[] = [
  {
    id: "cookie-consent-ux-research",
    title: "Cookie Consent UX Research",
    company: "ISU",
    status: "SHIPPED",
    year: "2025",
    role: ["Designer"],
    timeline: "Jan - May 2025",
    team: ["Tanzeel", "Purva"],
    skills: ["User Research", "Competitive Analysis", "Prototyping"],
    tools: ["Figma", "Miro", "Google Forms", "Notion"],
    focus: "UX Research & Design",
    overview: "Research project focused on improving user experience for cookie consent mechanisms on websites.",
    description:
      "This UX research project aimed to understand user behavior and preferences when interacting with cookie consent dialogs, with the goal of creating more user-friendly and compliant consent experiences.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content:
          "This project focused on researching and improving how users interact with cookie consent mechanisms on websites. We aimed to create more user-friendly and compliant consent experiences while maintaining legal requirements.",
      },
      {
        id: "initial-findings",
        title: "Initial Findings",
        content:
          "Through user research and competitive analysis, we discovered that existing cookie consent solutions often frustrated users and led to poor user experience. Users wanted clear, simple, and non-intrusive consent mechanisms.",
      },
      {
        id: "managing-clash",
        title: "Managing the Clash",
        content:
          "One of the biggest challenges was balancing legal compliance requirements with user experience expectations. We had to find ways to meet regulatory standards while creating experiences that felt effortless and transparent.",
      },
      {
        id: "designing-flows",
        title: "Designing the Flows",
        content:
          "We designed comprehensive user flows that covered everything from initial consent to preference management. Each flow was tested and refined based on user feedback and legal requirements.",
      },
      {
        id: "dealing-adoption",
        title: "Dealing with Adoption",
        content:
          "To ensure successful adoption, we created consent experiences that clearly communicated the value and purpose of cookies while providing users with meaningful choices and control.",
      },
      {
        id: "final-design",
        title: "Final Design",
        content:
          "The final design provides a clear, accessible, and user-friendly cookie consent experience that meets legal requirements while respecting user preferences and maintaining transparency.",
      },
      {
        id: "reflection",
        title: "Reflection",
        content:
          "This project taught me the importance of balancing user needs with legal constraints. Working closely with legal experts and users helped me understand how design decisions impact both user experience and compliance.",
      },
    ],
  },
  {
    id: "pokergpt-ai-coach",
    title: "The world's first AI poker coach",
    company: "POKERGPT",
    status: "SHIPPED",
    year: "2023",
    role: ["Product Designer"],
    timeline: "Mar - Aug 2023",
    team: ["2 Engineers", "1 Designer (me!)"],
    skills: ["AI/ML Design", "User Experience", "Mobile Design"],
    tools: ["Figma", "React Native", "OpenAI API", "Firebase"],
    focus: "AI/ML Product Design",
    overview: "PokerGPT revolutionizes poker learning with AI-powered coaching and real-time strategy guidance.",
    description:
      "Led the design of an innovative AI coaching platform that helps players improve their poker skills through personalized feedback and strategic insights.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: "AI poker coach project overview...",
      },
    ],
  },
  {
    id: "earth-hackathon",
    title: "End-to-end hackathon management for Fortune 500s",
    company: "EARTH",
    status: "SHIPPED",
    year: "2023",
    role: ["Product Designer"],
    timeline: "Jun - Dec 2023",
    team: ["1 PM", "4 Engineers", "2 Designers"],
    skills: ["Enterprise Design", "Event Management", "Platform Design"],
    tools: ["Figma", "React", "Node.js", "PostgreSQL"],
    focus: "Enterprise Platform Design",
    overview: "Earth provides comprehensive hackathon management solutions for large enterprises.",
    description: "Designed a complete platform for managing corporate hackathons from registration to judging.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: "Hackathon management platform overview...",
      },
    ],
  },
  {
    id: "mindspace",
    title: "Mindspace: A Gamified VR Experience for Emotional Intelligence",
    company: "ISU",
    status: "PITCHED",
    year: "2025",
    role: ["UX Designer & Developer"],
    timeline: "Jan - May 2025",
    team: ["Tanzeel Shaikh", "Ethan Baccam", "Visruta Aiyer"],
    skills: ["Product Strategy", "User Research", "Interaction Design"],
    tools: ["Unity3D", "C#", "Meta Quest 3", "Unity Asset Store"],
    focus: "Product Strategy & UX",
    overview: "An immersive, gamified VR experience to practice emotional awareness and regulation.",
    description: "Mindspace explores how VR can teach emotional intelligence by letting players interact with emotions like Joy and Anxiety in symbolic, playable worlds.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: "Designing emotional intelligence training in VR with playable, reflective experiences.",
      },
      {
        id: "problem",
        title: "The Problem",
        content:
          "Mental health education often stays abstract. Young learners rarely practice navigating emotions in context, making emotional intelligence difficult to cultivate.",
      },
      {
        id: "vision",
        title: "The Vision",
        content:
          "Build a safe, symbolic VR environment to interact with emotions directly—making learning accessible and fun, reinforcing healthy thinking, and scaling to classrooms and wellness programs.",
      },
      {
        id: "process",
        title: "The Process",
        content: "Our approach emphasized calm reflection over speed, using feedback from early playtests.",
        subsections: [
          {
            id: "defining-core-emotions",
            title: "Defining Core Emotions",
            content:
              "We focused on Joy (celebrating small wins) and Anxiety (recognizing and reframing unhelpful thoughts) as our first emotions.",
          },
          {
            id: "designing-the-mechanics",
            title: "Designing the Mechanics",
            content:
              "We designed for reflection over speed: simple navigation, environmental feedback (fog clearing, light appearing), and textual overlays to reinforce lessons.",
          },
        ],
      },
      {
        id: "challenges",
        title: "Challenges We Faced",
        content:
          "Unity Cloud collaboration issues, limited C#/Unity bandwidth (pivoted from shooting mechanics to fog interaction), and single-headset testing constraints.",
      },
      {
        id: "experience",
        title: "The Experience",
        content: "Two symbolic worlds model Joy and Anxiety with gentle, guided interactions.",
        subsections: [
          {
            id: "joy-level",
            title: "Joy — Noticing the Small Things",
            content:
              "A bright, nature-filled world with glowing coins revealing uplifting reminders. Encourages gratitude and mindfulness.",
          },
          {
            id: "anxiety-level",
            title: "Anxiety — Clearing the Fog",
            content:
              "A foggy forest where constructive thoughts clear fog and negative ones thicken it, making anxious thinking tangible.",
          },
        ],
      },
      {
        id: "outcome",
        title: "Outcome",
        content:
          "A working two-level VR prototype (Joy and Anxiety). Testers described it as thoughtful, calming, and distinct from typical VR games.",
      },
      {
        id: "lessons",
        title: "Lessons Learned",
        content:
          "Adaptability matters; research strengthens design; reflective pacing can deepen impact; plan technical collaboration early.",
      },
      {
        id: "personal-reflection",
        title: "Personal Reflection",
        content:
          "Good design isn’t just usable—it helps people feel safe, understood, and inspired. Mindspace sparked deeper interest in therapeutic interactive media.",
      },
    ],
  },
  {
    id: "rbc-heyhr",
    title: "A patent-pending AI for RBC's Global HR Center",
    company: "RBC - HEYHR",
    status: "HANDED OFF",
    year: "2024",
    role: ["Product Designer"],
    timeline: "May - Aug 2024",
    team: ["1 PM", "2 Engineers", "1 Designer (me!)"],
    skills: ["AI/ML Design", "Enterprise Software", "Conversational UI"],
    tools: ["Figma", "Dialogflow", "React", "Azure"],
    focus: "AI Conversational Design",
    overview: "HeyHR transforms how employees interact with HR services through AI-powered assistance.",
    description: "Developed an AI-powered HR assistant that streamlines employee inquiries and HR processes.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: "HeyHR AI assistant overview...",
      },
    ],
  },
  {
    id: "chattin-professional",
    title: "A dating app, but for professional connections",
    company: "CHATTIN",
    status: "SHIPPED",
    year: "2024",
    role: ["Product Designer", "Engineer"],
    timeline: "Jan - Jun 2024",
    team: ["2 Engineers", "1 Designer (me!)"],
    skills: ["Mobile Design", "Social Features", "Matching Algorithms"],
    tools: ["Figma", "React Native", "Firebase", "Algolia"],
    focus: "Mobile Social Design",
    overview: "Chattin reimagines professional networking with a swipe-based matching system.",
    description: "Created a mobile app that makes professional networking as engaging as dating apps.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: "Professional networking app overview...",
      },
    ],
  },
  {
    id: "biogenesis-homepage",
    title: "The home page of an emerging biotech startup",
    company: "BIOGENESIS",
    status: "SHIPPED",
    year: "2024",
    role: ["Web Designer"],
    timeline: "Sep - Oct 2024",
    team: ["Solo Project"],
    skills: ["Web Design", "Brand Identity", "Healthcare Design"],
    tools: ["Figma", "Webflow", "Photoshop", "Illustrator"],
    focus: "Web Design & Branding",
    overview: "Biogenesis is pioneering new approaches to clinical research and biotechnology.",
    description: "Designed a compelling homepage that communicates complex biotech concepts to diverse audiences.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: "Biotech startup homepage overview...",
      },
    ],
  },
]

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getAllProjects(): Project[] {
  return projects
}
