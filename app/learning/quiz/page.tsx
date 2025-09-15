"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { BookOpen, Clock, CheckCircle, XCircle, ArrowRight, RotateCcw } from "lucide-react"
import Link from "next/link"

const quizQuestions = [
  {
    id: 1,
    question: "According to the Hadith, what is the best deed after faith in Allah?",
    options: [
      "Giving charity to the poor",
      "Being kind to one's parents",
      "Performing the five daily prayers",
      "Fasting during Ramadan",
    ],
    correct: 1,
    explanation:
      "The Prophet (ﷺ) said: 'Paradise lies at the feet of your mother.' Being kind to parents is emphasized as one of the greatest deeds after faith.",
    hadithReference: "Sahih Bukhari, Book 78, Hadith 2",
  },
  {
    id: 2,
    question: "What did the Prophet (ﷺ) say about a believer and their neighbor?",
    options: [
      "A believer should visit their neighbor daily",
      "A believer is not one who eats his fill while his neighbor goes hungry",
      "A believer should lend money to their neighbor",
      "A believer should invite their neighbor for every meal",
    ],
    correct: 1,
    explanation:
      "This Hadith emphasizes the importance of caring for one's neighbors and ensuring their well-being, especially in times of need.",
    hadithReference: "Sahih Bukhari, Book 73, Hadith 112",
  },
  {
    id: 3,
    question: "According to Islamic teaching, who is the strong person?",
    options: [
      "The one who can lift heavy weights",
      "The one who can defeat others in wrestling",
      "The one who can control himself when angry",
      "The one who speaks loudly",
    ],
    correct: 2,
    explanation:
      "The Prophet (ﷺ) taught that true strength lies in self-control, especially controlling one's anger and emotions.",
    hadithReference: "Sahih Bukhari, Book 73, Hadith 135",
  },
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value)
  }

  const handleNextQuestion = () => {
    const answerIndex = Number.parseInt(selectedAnswer)
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)

    if (answerIndex === quizQuestions[currentQuestion].correct) {
      setScore(score + 1)
    }

    setShowResult(true)
  }

  const handleContinue = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer("")
      setShowResult(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer("")
    setShowResult(false)
    setScore(0)
    setAnswers([])
    setQuizCompleted(false)
  }

  const currentQ = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + (showResult ? 1 : 0)) / quizQuestions.length) * 100

  if (quizCompleted) {
    const percentage = Math.round((score / quizQuestions.length) * 100)
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
                  <p className="text-sm text-muted-foreground">Quiz Results</p>
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
                <CardTitle className="text-2xl font-serif">Quiz Completed!</CardTitle>
                <CardDescription>Great job on completing the Hadith knowledge quiz</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">{percentage}%</div>
                  <p className="text-muted-foreground">
                    You scored {score} out of {quizQuestions.length} questions correctly
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <span>Questions Answered</span>
                    <span className="font-medium">{quizQuestions.length}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <span>Correct Answers</span>
                    <span className="font-medium text-primary">{score}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <span>Time Taken</span>
                    <span className="font-medium">3m 45s</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={resetQuiz} className="flex-1">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Retake Quiz
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
                <p className="text-sm text-muted-foreground">Interactive Quiz</p>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>3:45</span>
              </div>
              <Badge variant="outline">
                {currentQuestion + 1} of {quizQuestions.length}
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
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="font-serif">Question {currentQuestion + 1}</CardTitle>
              <CardDescription>Choose the best answer based on Islamic teachings</CardDescription>
            </CardHeader>
            <CardContent>
              {!showResult ? (
                <div className="space-y-6">
                  <h3 className="text-lg font-medium leading-relaxed">{currentQ.question}</h3>

                  <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
                    {currentQ.options.map((option, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors"
                      >
                        <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>

                  <Button onClick={handleNextQuestion} disabled={!selectedAnswer} className="w-full">
                    Submit Answer
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    {Number.parseInt(selectedAnswer) === currentQ.correct ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-500" />
                    )}
                    <span className="font-medium">
                      {Number.parseInt(selectedAnswer) === currentQ.correct ? "Correct!" : "Incorrect"}
                    </span>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm font-medium mb-2">Explanation:</p>
                    <p className="text-sm text-muted-foreground mb-3">{currentQ.explanation}</p>
                    <p className="text-xs text-muted-foreground">
                      <strong>Reference:</strong> {currentQ.hadithReference}
                    </p>
                  </div>

                  <Button onClick={handleContinue} className="w-full">
                    {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "View Results"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
