import { BookOpen } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <header className="bg-teal-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-serif font-bold text-white">HADITH MASTER</h1>
            </div>
            <nav className="flex items-center gap-8">
              <Link href="/" className="text-white hover:text-teal-200 transition-colors font-medium">
                HOME
              </Link>
              <Link href="/about" className="text-white hover:text-teal-200 transition-colors font-medium">
                ABOUT US
              </Link>
              <Link href="/help" className="text-white hover:text-teal-200 transition-colors font-medium">
                HELP
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-teal-700 text-center mb-8">About Hadith Master</h1>
          <p className="text-lg text-teal-600 text-center">Learn more about our mission and goals.</p>
        </div>
      </main>
    </div>
  )
}
