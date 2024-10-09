import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Building, Mail, BookOpen, FileText, Heart, Newspaper, PenTool, Home } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 h-screen sticky top-0 p-4 border-r border-gray-200 dark:border-gray-700">
      <div className="flex flex-col items-center mb-6">
        <Avatar className="w-32 h-32 mb-4">
          <AvatarImage src="https://github.com/shadcn.png" alt="John Doe" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold text-center">John Doe</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">AI Researcher & Developer</p>
      </div>
      <nav className="space-y-2">
        <SidebarLink href="/" icon={<Home className="mr-2 h-4 w-4" />}>Home</SidebarLink>
        <SidebarLink href="/publications" icon={<BookOpen className="mr-2 h-4 w-4" />}>Publications</SidebarLink>
        <SidebarLink href="/talks" icon={<PenTool className="mr-2 h-4 w-4" />}>Talks</SidebarLink>
        <SidebarLink href="/teaching" icon={<Newspaper className="mr-2 h-4 w-4" />}>Teaching</SidebarLink>
        <SidebarLink href="https://drive.google.com/your-cv-link" icon={<FileText className="mr-2 h-4 w-4" />} external>CV</SidebarLink>
        <SidebarLink href="/interests" icon={<Heart className="mr-2 h-4 w-4" />}>Interests</SidebarLink>
      </nav>
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <SidebarInfo icon={<MapPin className="mr-2 h-4 w-4" />}>Stanford, CA</SidebarInfo>
        <SidebarInfo icon={<Building className="mr-2 h-4 w-4" />}>Stanford University</SidebarInfo>
        <SidebarInfo icon={<Mail className="mr-2 h-4 w-4" />}>john.doe@stanford.edu</SidebarInfo>
      </div>
    </aside>
  )
}

function SidebarLink({ href, icon, children, external = false }: { href: string, icon: React.ReactNode, children: React.ReactNode, external?: boolean }) {
  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link href={href} className="flex items-center px-2 py-1 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded" {...linkProps}>
      {icon}
      {children}
    </Link>
  )
}

function SidebarInfo({ icon, children }: { icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
      {icon}
      {children}
    </div>
  )
}