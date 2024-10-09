import { Github, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t mt-8">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <p>&copy; 2023 John Doe. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}