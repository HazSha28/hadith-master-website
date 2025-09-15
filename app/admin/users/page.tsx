"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Search, Filter, Edit, Ban, Mail, MoreHorizontal } from "lucide-react"
import Link from "next/link"

// Mock data for demonstration
const mockUsers = [
  {
    id: 1,
    name: "Ahmad Hassan",
    email: "ahmad.hassan@email.com",
    joinDate: "2024-01-15",
    lastActive: "2 hours ago",
    status: "Active",
    role: "Student",
    hadithsStudied: 247,
    quizzesTaken: 24,
    streak: 15,
  },
  {
    id: 2,
    name: "Fatima Ali",
    email: "fatima.ali@email.com",
    joinDate: "2024-01-10",
    lastActive: "1 day ago",
    status: "Active",
    role: "Student",
    hadithsStudied: 156,
    quizzesTaken: 18,
    streak: 8,
  },
  {
    id: 3,
    name: "Omar Ibrahim",
    email: "omar.ibrahim@email.com",
    joinDate: "2023-12-20",
    lastActive: "3 days ago",
    status: "Inactive",
    role: "Student",
    hadithsStudied: 89,
    quizzesTaken: 12,
    streak: 0,
  },
  {
    id: 4,
    name: "Aisha Mohammed",
    email: "aisha.mohammed@email.com",
    joinDate: "2024-01-08",
    lastActive: "5 hours ago",
    status: "Active",
    role: "Moderator",
    hadithsStudied: 432,
    quizzesTaken: 45,
    streak: 22,
  },
]

export default function AdminUsersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("All Status")
  const [selectedRole, setSelectedRole] = useState("All Roles")

  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === "All Status" || user.status === selectedStatus
    const matchesRole = selectedRole === "All Roles" || user.role === selectedRole

    return matchesSearch && matchesStatus && matchesRole
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
                <p className="text-sm text-muted-foreground">User Management</p>
              </div>
            </Link>
            <Button variant="outline">
              <Mail className="w-4 h-4 mr-2" />
              Send Announcement
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary mb-2">25,431</div>
              <div className="text-sm text-muted-foreground">Total Users</div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary mb-2">18,234</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary mb-2">1,234</div>
              <div className="text-sm text-muted-foreground">New This Month</div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary mb-2">87%</div>
              <div className="text-sm text-muted-foreground">Retention Rate</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search users by name or email..."
                  className="pl-12 py-3"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <Button variant="outline" className="lg:w-auto bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Export Users
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Status">All Status</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
                <SelectItem value="Suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger>
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Roles">All Roles</SelectItem>
                <SelectItem value="Student">Student</SelectItem>
                <SelectItem value="Moderator">Moderator</SelectItem>
                <SelectItem value="Admin">Admin</SelectItem>
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
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="activity">Last Active</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredUsers.length} of {mockUsers.length} users
          </p>
        </div>

        {/* User Management Table */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="font-serif">User Management</CardTitle>
            <CardDescription>Monitor and manage user accounts and activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredUsers.map((user) => (
                <div key={user.id} className="border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-medium">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-medium">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant={user.status === "Active" ? "default" : "secondary"}>{user.status}</Badge>
                          <Badge variant="outline">{user.role}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                        <Ban className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Joined</p>
                      <p className="font-medium">{user.joinDate}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Last Active</p>
                      <p className="font-medium">{user.lastActive}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Hadiths Studied</p>
                      <p className="font-medium text-primary">{user.hadithsStudied}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Quizzes Taken</p>
                      <p className="font-medium text-primary">{user.quizzesTaken}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Current Streak</p>
                      <p className="font-medium text-primary">{user.streak} days</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <p className="text-sm text-muted-foreground">Showing 1-10 of 25,431 results</p>
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
