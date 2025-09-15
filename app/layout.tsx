import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
})

export const metadata: Metadata = {
  title: "Tanzeel - Product Designer + Engineer",
  description: "Portfolio of Tanzeel, a Product Designer and Engineer specializing in AI applications, UX design, and human-computer interaction.",
  keywords: ["Product Designer", "UX Engineer", "HCI Researcher", "AI Applications", "Portfolio"],
  authors: [{ name: "Tanzeel" }],
  creator: "Tanzeel",
  generator: "Next.js",
  robots: "index, follow",
  openGraph: {
    title: "Tanzeel - Product Designer + Engineer",
    description: "Portfolio showcasing innovative design and engineering projects",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanzeel - Product Designer + Engineer",
    description: "Portfolio showcasing innovative design and engineering projects",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className={inter.className}>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
