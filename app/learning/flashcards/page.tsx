"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, RotateCcw, Eye, EyeOff, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"

const flashcards = [
  {
    id: 1,
    front: "What did the Prophet (ﷺ) say about kindness to neighbors?",
    back: "The believer is not one who eats his fill while his neighbor goes hungry.",
    arabic: "لَيْسَ الْمُؤْمِنُ الَّذِي يَشْبَعُ وَجَارُهُ جَائِعٌ",
    narrator: "Abu Hurairah",
    collection: "Sahih Bukhari",
    topic: "Social Relations",
    difficulty: "Easy",
  },
  {
    id: 2,
    front: "According to the Hadith, who is considered the strong person?",
    back: "The strong person is not the one who can wrestle someone else down. The strong person is the one who can control himself when he is angry.",
    arabic: "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ",
    narrator: "Abu Hurairah",
    collection: "Sahih Bukhari",
    topic: "Self-Control",
    difficulty: "Medium",
  },
  {
    id: 3,
    front: "What is the reward for one who believes in Allah and the Last Day?",
    back: "Whoever believes in Allah and the Last Day should speak good or keep silent.",
    arabic: "مَن كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    narrator: "Abu Hurairah",
    collection: "Sahih Bukhari",
    topic: "Speech Ethics",
    difficulty: "Easy",
  },
]

export default function FlashcardsPage() {
  const [currentCard, setCurrentCard] = useState(0)
  const [showBack, setShowBack] = useState(false)
  const [showArabic, setShowArabic] = useState(true)
  const [studiedCards, setStudiedCards] = useState<number[]>([])
  const [sessionComplete, setSessionComplete] = useState(false)

  const handleCardFlip = () => {
    setShowBack(!showBack)
  }

  const handleCardResponse = (difficulty: "easy" | "medium" | "hard") => {
    const newStudiedCards = [...studiedCards, currentCard]
    setStudiedCards(newStudiedCards)

    if (currentCard < flashcards.length - 1) {
      setCurrentCard(currentCard + 1)
      setShowBack(false)
    } else {
      setSessionComplete(true)
    }
  }

  const resetSession = () => {
    setCurrentCard(0)
    setShowBack(false)
    setStudiedCards([])
    setSessionComplete(false)
  }

  const progress = (studiedCards.length / flashcards.length) * 100
  const card = flashcards[currentCard]

  if (sessionComplete) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/learning" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-xl font-serif font-bold text-foreground">Hadith Master</h1>
                  <p className="text-sm text-muted-foreground">Session Complete</p>
                </div>
              </Link>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Card className="border-border">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-serif">Session Complete!</CardTitle>
                <CardDescription>You've reviewed all flashcards in this session</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">{flashcards.length}</div>
                  <p className="text-muted-foreground">Cards reviewed in this session</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <span>Cards Studied</span>
                    <span className="font-medium">{studiedCards.length}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <span>Session Time</span>
                    <span className="font-medium">5m 30s</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <span>Next Review</span>
                    <span className="font-medium text-primary">Tomorrow</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={resetSession} className="flex-1">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Study Again
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent" asChild>
                    <Link href="/learning">Back to Learning</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/learning" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold text-foreground">Hadith Master</h1>
                <p className="text-sm text-muted-foreground">Flashcards</p>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <Button variant={showArabic ? "default" : "outline"} size="sm" onClick={() => setShowArabic(!showArabic)}>
                {showArabic ? <Eye className="w-4 h-4 mr-2" /> : <EyeOff className="w-4 h-4 mr-2" />}
                Arabic
              </Button>
              <Badge variant="outline">
                {currentCard + 1} of {flashcards.length}
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Session Progress</span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Flashcard */}
          <Card className="border-border min-h-[400px] cursor-pointer" onClick={handleCardFlip}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{card.topic}</Badge>
                  <Badge variant="outline">{card.difficulty}</Badge>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCardFlip()
                  }}
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col justify-center min-h-[300px]">
              {!showBack ? (
                <div className="text-center space-y-6">
                  <div className="text-lg font-medium leading-relaxed">{card.front}</div>
                  <div className="text-sm text-muted-foreground">Click to reveal answer</div>
                </div>
              ) : (
                <div className="space-y-6">
                  {showArabic && (
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <p className="text-right text-lg leading-relaxed font-arabic" dir="rtl">
                        {card.arabic}
                      </p>
                    </div>
                  )}

                  <blockquote className="text-lg leading-relaxed text-center italic">"{card.back}"</blockquote>

                  <div className="text-center text-sm text-muted-foreground">
                    <p>
                      <strong>Narrator:</strong> {card.narrator}
                    </p>
                    <p>
                      <strong>Collection:</strong> {card.collection}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Response Buttons */}
          {showBack && (
            <div className="mt-6 space-y-4">
              <p className="text-center text-sm text-muted-foreground">How well did you remember this?</p>
              <div className="grid grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  className="bg-red-50 border-red-200 text-red-700 hover:bg-red-100"
                  onClick={() => handleCardResponse("hard")}
                >
                  <XCircle className="w-4 h-4 mr-2" />
                  Hard
                </Button>
                <Button
                  variant="outline"
                  className="bg-yellow-50 border-yellow-200 text-yellow-700 hover:bg-yellow-100"
                  onClick={() => handleCardResponse("medium")}
                >
                  Medium
                </Button>
                <Button
                  variant="outline"
                  className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
                  onClick={() => handleCardResponse("easy")}
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Easy
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
