import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
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

      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="w-full max-w-2xl">
          <div className="bg-stone-400/40 rounded-lg p-8 backdrop-blur-sm">
            <div className="text-center mb-8">
              <p className="text-teal-700 text-lg font-medium">
                Please type in the gist of the hadith or select any of the below criteria to ensure accurate search
                results.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <Input
                  placeholder="Enter Hadith gist here..."
                  className="w-full h-16 text-lg bg-white border-gray-300 rounded-lg px-4"
                />
              </div>

              <div>
                <Select>
                  <SelectTrigger className="w-full h-12 bg-white border-gray-300 rounded-lg">
                    <SelectValue placeholder="Book Name" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sahih-bukhari">Sahih Bukhari</SelectItem>
                    <SelectItem value="sahih-muslim">Sahih Muslim</SelectItem>
                    <SelectItem value="sunan-abu-dawood">Sunan Abu Dawood</SelectItem>
                    <SelectItem value="jami-tirmidhi">Jami At-Tirmidhi</SelectItem>
                    <SelectItem value="sunan-nasai">Sunan An-Nasai</SelectItem>
                    <SelectItem value="sunan-ibn-majah">Sunan Ibn Majah</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Select>
                  <SelectTrigger className="w-full h-12 bg-white border-gray-300 rounded-lg">
                    <SelectValue placeholder="Author's Name" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bukhari">Imam Bukhari</SelectItem>
                    <SelectItem value="muslim">Imam Muslim</SelectItem>
                    <SelectItem value="abu-dawood">Abu Dawood</SelectItem>
                    <SelectItem value="tirmidhi">At-Tirmidhi</SelectItem>
                    <SelectItem value="nasai">An-Nasai</SelectItem>
                    <SelectItem value="ibn-majah">Ibn Majah</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Select>
                  <SelectTrigger className="w-full h-12 bg-white border-gray-300 rounded-lg">
                    <SelectValue placeholder="Narrator's Names" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="abu-bakr">Abu Bakr (RA)</SelectItem>
                    <SelectItem value="umar">Umar ibn Al-Khattab (RA)</SelectItem>
                    <SelectItem value="uthman">Uthman ibn Affan (RA)</SelectItem>
                    <SelectItem value="ali">Ali ibn Abi Talib (RA)</SelectItem>
                    <SelectItem value="aisha">Aisha (RA)</SelectItem>
                    <SelectItem value="abu-hurairah">Abu Hurairah (RA)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-center pt-4">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-12 py-3 rounded-lg text-lg font-medium">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
