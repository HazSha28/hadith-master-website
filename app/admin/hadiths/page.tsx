"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Plus, Search, Filter, Edit, Trash2, Eye } from "lucide-react"
import Link from "next/link"

// Mock data for demonstration
const mockHadiths = [
  {
    id: 1,
    text: "The believer is not one who eats his fill while his neighbor goes hungry.",
    narrator: "Abu Hurairah",
    collection: "Sahih Bukhari",
    book: "Book of Good Manners",
    hadithNumber: "6018",
    grade: "Sahih",
    topic: ["Kindness", "Neighbors"],
    status: "Published",
    dateAdded: "2024-01-15",
    addedBy: "Admin",
  },
  {
    id: 2,
    text: "The strong person is not the one who can wrestle someone else down. The strong person is the one who can control himself when he is angry.",
    narrator: "Abu Hurairah",
    collection: "Sahih Bukhari",
    book: "Book of Good Manners",
    hadithNumber: "6114",
    grade: "Sahih",
    topic: ["Self-Control", "Anger"],
    status: "Published",
    dateAdded: "2024-01-14",
    addedBy: "Admin",
  },
  {
    id: 3,
    text: "Whoever believes in Allah and the Last Day should speak good or keep silent.",
    narrator: "Abu Hurairah",
    collection: "Sahih Bukhari",
    book: "Book of Good Manners",
    hadithNumber: "6475",
    grade: "Sahih",
    topic: ["Speech", "Manners"],
    status: "Draft",
    dateAdded: "2024-01-13",
    addedBy: "Editor",
  },
]

export default function AdminHadithsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCollection, setSelectedCollection] = useState("All Collections")
  const [selectedStatus, setSelectedStatus] = useState("All Status")

  const filteredHadiths = mockHadiths.filter((hadith) => {
    const matchesSearch =
      hadith.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hadith.narrator.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCollection = selectedCollection === "All Collections" || hadith.collection === selectedCollection
    const matchesStatus = selectedStatus === "All Status" || hadith.status === selectedStatus

    return matchesSearch && matchesCollection && matchesStatus
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/admin" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold text-foreground">Hadith Master</h1>
                <p className="text-sm text-muted-foreground">Manage Hadiths</p>
              </div>
            </Link>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add New Hadith
            </Button>
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
                  placeholder="Search Hadiths by text or narrator..."
                  className="pl-12 py-3"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <Button variant="outline" className="lg:w-auto bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Advanced Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={selectedCollection} onValueChange={setSelectedCollection}>
              <SelectTrigger>
                <SelectValue placeholder="Collection" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Collections">All Collections</SelectItem>
                <SelectItem value="Sahih Bukhari">Sahih Bukhari</SelectItem>
                <SelectItem value="Sahih Muslim">Sahih Muslim</SelectItem>
                <SelectItem value="Sunan Abu Dawood">Sunan Abu Dawood</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Status">All Status</SelectItem>
                <SelectItem value="Published">Published</SelectItem>
                <SelectItem value="Draft">Draft</SelectItem>
                <SelectItem value="Review">Under Review</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Select defaultValue="recent">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="collection">Collection</SelectItem>
                  <SelectItem value="narrator">Narrator</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredHadiths.length} of {mockHadiths.length} Hadiths
          </p>
        </div>

        {/* Hadith Management Table */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="font-serif">Hadith Collection</CardTitle>
            <CardDescription>Manage and organize your Hadith database</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredHadiths.map((hadith) => (
                <div key={hadith.id} className="border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{hadith.collection}</Badge>
                        <Badge variant="outline">{hadith.grade}</Badge>
                        <Badge variant={hadith.status === "Published" ? "default" : "secondary"}>{hadith.status}</Badge>
                        <span className="text-sm text-muted-foreground">#{hadith.hadithNumber}</span>
                      </div>
                      <h3 className="font-medium mb-2">{hadith.book}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <blockquote className="text-sm leading-relaxed mb-4 text-foreground">"{hadith.text}"</blockquote>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div>
                      <strong>Narrator:</strong> {hadith.narrator}
                    </div>
                    <div className="flex items-center gap-4">
                      <span>Added: {hadith.dateAdded}</span>
                      <span>By: {hadith.addedBy}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {hadith.topic.map((topic) => (
                      <Badge key={topic} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <p className="text-sm text-muted-foreground">Showing 1-10 of 247 results</p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
