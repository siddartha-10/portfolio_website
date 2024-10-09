import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Interests() {
  const interests = [
    {
      title: "Quantum Computing",
      description: "Exploring the potential of quantum algorithms to revolutionize computational capabilities."
    },
    {
      title: "Ethical AI",
      description: "Investigating methods to ensure AI systems are fair, transparent, and beneficial to society."
    },
    {
      title: "Climate Tech",
      description: "Applying AI and machine learning to address climate change and environmental challenges."
    },
    {
      title: "Astrophysics",
      description: "Amateur stargazing and keeping up with the latest discoveries in space exploration."
    },
    {
      title: "Science Fiction Literature",
      description: "Reading and analyzing sci-fi novels to inspire new ideas in technology and AI."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Interests</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interests.map((interest, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{interest.title}</h2>
            <p>{interest.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link href="/" passHref>
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    </div>
  )
}