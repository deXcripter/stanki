// src/contexts/AuthContext.tsx
"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

type User = {
  id: string
  name: string
  email: string
  role: 'student' | 'educator'
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string, role: 'student' | 'educator') => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check for stored user data on component mount
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (email: string, password: string) => {
    // TODO: Implement actual API call for login
    const mockUser: User = { id: '1', name: 'John Doe', email, role: 'student' }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
    router.push('/dashboard/student')
  }

  const signup = async (name: string, email: string, password: string, role: 'student' | 'educator') => {
    // TODO: Implement actual API call for signup
    const mockUser: User = { id: '2', name, email, role }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
    router.push(`/dashboard/${role}`)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}