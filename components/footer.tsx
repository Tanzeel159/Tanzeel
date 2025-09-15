export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 sm:py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-body text-gray-600 text-center sm:text-left">
            DESIGNED + CODED WITH <span className="text-blue-600 inline-block animate-spin" aria-label="love">💙</span> BY TANZEEL
          </p>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a 
              href="https://www.linkedin.com/in/tanzeel-ahmed-shaikh-1b633b12b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-meta text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Visit LinkedIn profile"
            >
              LINKEDIN
            </a>
            <a 
              href="mailto:tanzeels@iastate.edu" 
              className="text-meta text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Send email to tanzeels@iastate.edu"
            >
              EMAIL
            </a>
            <a 
              href="https://x.com/meeseeks_029" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-meta text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Visit X (Twitter) profile"
            >
              X
            </a>
            <a 
              href="https://github.com/Tanzeel159" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-meta text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Visit GitHub profile"
            >
              GITHUB
            </a>
            <a 
              href="https://codepen.io/tanzeel098" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-meta text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Visit CodePen profile"
            >
              CODEPEN
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
