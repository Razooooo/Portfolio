// src/types/Project.ts
export interface Project {
  id: number
  title: string
  date: string
  description: string
  image: string
  features: string[]
  technologies: string[]
  documentationUrl: string
  demoUrl?: string
  githubUrl?: string
}
