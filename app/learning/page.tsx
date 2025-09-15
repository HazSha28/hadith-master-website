"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Brain, Target, Play, RotateCcw, Trophy } from "lucide-react"
import Link from "next/link"

export default function LearningPage() {
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
                <p className="text-sm text-muted-foreground">Learning Tools</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/database" className="text-muted-foreground hover:text-primary transition-colors">
                Database
              </Link>
              <Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Interactive Learning Tools</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enhance your Hadith memorization and understanding with our comprehensive learning tools
          </p>
        </div>

        {/* Learning Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="border-border hover:shadow-lg transition-shadow group">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="font-serif">Interactive Quizzes</CardTitle>
              <CardDescription>
                Test your knowledge with comprehensive quizzes covering different topics and difficulty levels.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span>Completed Quizzes</span>
                  <span className="font-medium">24/50</span>
                </div>
                <Progress value={48} className="h-2" />
                <div className="flex items-center justify-between text-sm">
                  <span>Average Score</span>
                  <span className="font-medium text-primary">92%</span>
                </div>
              </div>
              <Button className="w-full" asChild>
                <Link href="/learning/quiz">
                  <Play className="w-4 h-4 mr-2" />
                  Start Quiz
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-lg transition-shadow group">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <RotateCcw className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="font-serif">Flashcards</CardTitle>
              <CardDescription>
                Memorize Hadiths effectively with our spaced repetition flashcard system.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span>Cards Mastered</span>
                  <span className="font-medium">156/300</span>
                </div>
                <Progress value={52} className="h-2" />
                <div className="flex items-center justify-between text-sm">
                  <span>Due Today</span>
                  <span className="font-medium text-primary">12 cards</span>
                </div>
              </div>
              <Button className="w-full" asChild>
                <Link href="/learning/flashcards">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Study Cards
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-lg transition-shadow group">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="font-serif">Progress Tracking</CardTitle>
              <CardDescription>
                Monitor your learning journey with detailed analytics and achievement tracking.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span>Learning Streak</span>
                  <span className="font-medium">15 days</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Total Study Time</span>
                  <span className="font-medium text-primary">24h 30m</span>
                </div>
              </div>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/dashboard">
                  <Trophy className="w-4 h-4 mr-2" />
                  View Progress
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Learning Paths */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Learning Paths</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="font-serif">Beginner Path</CardTitle>
                    <CardDescription>Start your journey with fundamental Hadiths</CardDescription>
                  </div>
                  <Badge variant="secondary">Recommended</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Faith & Belief</span>
                    <Badge variant="outline">20 Hadiths</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Prayer Basics</span>
                    <Badge variant="outline">15 Hadiths</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Good Character</span>
                    <Badge variant="outline">25 Hadiths</Badge>
                  </div>
                  <Button className="w-full mt-4">Start Learning Path</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="font-serif">Advanced Path</CardTitle>
                    <CardDescription>Deep dive into complex Islamic teachings</CardDescription>
                  </div>
                  <Badge variant="outline">Advanced</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Islamic Jurisprudence</span>
                    <Badge variant="outline">40 Hadiths</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Social Relations</span>
                    <Badge variant="outline">35 Hadiths</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Leadership & Governance</span>
                    <Badge variant="outline">30 Hadiths</Badge>
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    Start Learning Path
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Study Statistics */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="border-border text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">247</div>
              <div className="text-sm text-muted-foreground">Hadiths Studied</div>
            </CardContent>
          </Card>

          <Card className="border-border text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">92%</div>
              <div className="text-sm text-muted-foreground">Average Quiz Score</div>
            </CardContent>
          </Card>

          <Card className="border-border text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <div className="text-sm text-muted-foreground">Day Learning Streak</div>
            </CardContent>
          </Card>

          <Card className="border-border text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Total Study Time</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
