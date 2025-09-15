"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Search, Filter, Heart, Share2, BookmarkPlus } from "lucide-react"
import Link from "next/link"

// Mock data for demonstration
const mockHadiths = [
  {
    id: 1,
    text: "The Prophet (ﷺ) said: 'The believer is not one who eats his fill while his neighbor goes hungry.'",
    narrator: "Abu Hurairah",
    collection: "Sahih Bukhari",
    book: "Book of Good Manners",
    chapter: "Chapter on Kindness to Neighbors",
    hadithNumber: "6018",
    grade: "Sahih",
    topic: ["Kindness", "Neighbors", "Social Responsibility"],
    arabic: "قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم: لَيْسَ الْمُؤْمِنُ الَّذِي يَشْبَعُ وَجَارُهُ جَائِعٌ",
  },
  {
    id: 2,
    text: "The Prophet (ﷺ) said: 'Whoever believes in Allah and the Last Day should speak good or keep silent.'",
    narrator: "Abu Hurairah",
    collection: "Sahih Bukhari",
    book: "Book of Good Manners",
    chapter: "Chapter on Good Speech",
    hadithNumber: "6018",
    grade: "Sahih",
    topic: ["Speech", "Manners", "Faith"],
    arabic: "قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم: مَن كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
  },
  {
    id: 3,
    text: "The Prophet (ﷺ) said: 'The strong person is not the one who can wrestle someone else down. The strong person is the one who can control himself when he is angry.'",
    narrator: "Abu Hurairah",
    collection: "Sahih Bukhari",
    book: "Book of Good Manners",
    chapter: "Chapter on Anger Management",
    hadithNumber: "6114",
    grade: "Sahih",
    topic: ["Self-Control", "Anger", "Strength"],
    arabic: "قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم: لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ",
  },
]

const collections = [
  "All Collections",
  "Sahih Bukhari",
  "Sahih Muslim",
  "Sunan Abu Dawood",
  "Jami at-Tirmidhi",
  "Sunan an-Nasa'i",
  "Sunan Ibn Majah",
]
const topics = [
  "All Topics",
  "Faith",
  "Prayer",
  "Charity",
  "Fasting",
  "Pilgrimage",
  "Manners",
  "Social Relations",
  "Knowledge",
]
const grades = ["All Grades", "Sahih", "Hasan", "Da'if"]

export default function DatabasePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCollection, setSelectedCollection] = useState("All Collections")
  const [selectedTopic, setSelectedTopic] = useState("All Topics")
  const [selectedGrade, setSelectedGrade] = useState("All Grades")
  const [showArabic, setShowArabic] = useState(true)

  const filteredHadiths = mockHadiths.filter((hadith) => {
    const matchesSearch =
      hadith.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hadith.narrator.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hadith.topic.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCollection = selectedCollection === "All Collections" || hadith.collection === selectedCollection
    const matchesTopic = selectedTopic === "All Topics" || hadith.topic.includes(selectedTopic)
    const matchesGrade = selectedGrade === "All Grades" || hadith.grade === selectedGrade

    return matchesSearch && matchesCollection && matchesTopic && matchesGrade
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold text-foreground">Hadith Master</h1>
                <p className="text-sm text-muted-foreground">Database</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/learning" className="text-muted-foreground hover:text-primary transition-colors">
                Learning Tools
              </Link>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search Hadiths by text, narrator, or topic..."
                  className="pl-12 py-3"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <Button variant="outline" className="lg:w-auto bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Advanced Search
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={selectedCollection} onValueChange={setSelectedCollection}>
              <SelectTrigger>
                <SelectValue placeholder="Collection" />
              </SelectTrigger>
              <SelectContent>
                {collections.map((collection) => (
                  <SelectItem key={collection} value={collection}>
                    {collection}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedTopic} onValueChange={setSelectedTopic}>
              <SelectTrigger>
                <SelectValue placeholder="Topic" />
              </SelectTrigger>
              <SelectContent>
                {topics.map((topic) => (
                  <SelectItem key={topic} value={topic}>
                    {topic}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedGrade} onValueChange={setSelectedGrade}>
              <SelectTrigger>
                <SelectValue placeholder="Grade" />
              </SelectTrigger>
              <SelectContent>
                {grades.map((grade) => (
                  <SelectItem key={grade} value={grade}>
                    {grade}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              variant={showArabic ? "default" : "outline"}
              onClick={() => setShowArabic(!showArabic)}
              className="justify-center"
            >
              Arabic Text
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              Showing {filteredHadiths.length} of {mockHadiths.length} Hadiths
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Select defaultValue="relevance">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="collection">Collection</SelectItem>
                  <SelectItem value="narrator">Narrator</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Hadith Cards */}
        <div className="space-y-6">
          {filteredHadiths.map((hadith) => (
            <Card key={hadith.id} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{hadith.collection}</Badge>
                      <Badge variant="outline">{hadith.grade}</Badge>
                      <span className="text-sm text-muted-foreground">#{hadith.hadithNumber}</span>
                    </div>
                    <CardTitle className="text-lg font-serif mb-2">{hadith.book}</CardTitle>
                    <CardDescription>{hadith.chapter}</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <BookmarkPlus className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {showArabic && (
                  <div className="mb-4 p-4 bg-muted/30 rounded-lg">
                    <p className="text-right text-lg leading-relaxed font-arabic" dir="rtl">
                      {hadith.arabic}
                    </p>
                  </div>
                )}

                <blockquote className="text-lg leading-relaxed mb-4 text-foreground">"{hadith.text}"</blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Narrator:</strong> {hadith.narrator}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {hadith.topic.map((topic) => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Hadiths
          </Button>
        </div>
      </div>
    </div>
  )
}
