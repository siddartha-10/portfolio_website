import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">John Doe</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          AI Researcher & Developer | Quantum Computing Enthusiast | Ethical AI Advocate
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300">
          I'm a passionate AI researcher and developer with a focus on the intersection of quantum computing, ethical AI, and climate tech. With over a decade of experience in the field, I strive to push the boundaries of AI while ensuring its responsible and ethical development.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Future Aspirations</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Looking ahead, I aim to lead groundbreaking research in quantum machine learning, contribute to the development of ethical AI frameworks, and apply advanced AI techniques to address pressing global challenges, particularly in climate science and sustainability.
        </p>
      </section>

      <div className="flex space-x-4">
        <Link href="/publications" passHref>
          <Button>View Publications</Button>
        </Link>
        <Link href="/talks" passHref>
          <Button variant="outline">Upcoming Talks</Button>
        </Link>
      </div>
    </div>
  )
}