import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Home } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4 py-3">
        <Link href="/" passHref>
          <Button variant="ghost" className="text-lg font-semibold">
            <Home className="mr-2 h-5 w-5" />
            John Doe
          </Button>
        </Link>
      </div>
    </nav>
  )
}