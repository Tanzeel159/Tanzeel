import Link from "next/link"
import { ArrowLeft } from "@/components/ui/icons"

interface BackButtonProps {
  href?: string
  className?: string
}

export default function BackButton({ href = "/", className = "" }: BackButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group ${className}`}
    >
      <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
      <span className="text-body font-medium tracking-wide">BACK</span>
    </Link>
  )
}
