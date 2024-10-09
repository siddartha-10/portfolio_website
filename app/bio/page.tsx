import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Bio() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <Avatar className="w-32 h-32 mb-4">
          <AvatarImage src="https://github.com/shadcn.png" alt="John Doe" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold mb-2">John Doe</h1>
        <p className="text-xl text-muted-foreground">AI Researcher & Developer</p>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <p>John Doe is a renowned AI researcher and developer with over a decade of experience in the field. His work focuses on the intersection of artificial intelligence, quantum computing, and ethical considerations in technology.</p>
        <p>After completing his Ph.D. at Stanford University, John joined TechCorp as a Senior AI Researcher, where he has been instrumental in developing cutting-edge AI solutions for real-world problems. His research has been published in top-tier journals and has been cited over 10,000 times.</p>
        <p>In addition to his industry work, John serves as an Adjunct Professor at MIT, where he teaches advanced courses in machine learning and AI ethics. He is passionate about nurturing the next generation of AI researchers and ensuring that AI development proceeds with strong ethical foundations.</p>
        <p>John's current research interests include:</p>
        <ul>
          <li>Quantum machine learning algorithms</li>
          <li>Ethical AI and fairness in machine learning</li>
          <li>AI applications in climate science</li>
          <li>Natural language processing for low-resource languages</li>
        </ul>
        <p>Outside of his professional life, John is an avid science fiction reader and amateur astronomer. He believes that imagination and curiosity are key drivers of innovation in AI and technology at large.</p>
      </div>
      <div className="mt-6">
        <Link href="/" passHref>
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    </div>
  )
}