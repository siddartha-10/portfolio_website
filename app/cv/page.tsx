import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function CV() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Curriculum Vitae</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <ul className="list-disc list-inside">
            <li>Ph.D. in Computer Science, Stanford University, 2015</li>
            <li>M.S. in Artificial Intelligence, MIT, 2011</li>
            <li>B.S. in Computer Engineering, UC Berkeley, 2009</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Professional Experience</h2>
          <ul className="list-disc list-inside">
            <li>Senior AI Researcher, TechCorp (2015 - Present)</li>
            <li>Adjunct Professor, MIT (2018 - Present)</li>
            <li>Research Intern, Google AI (Summer 2014)</li>
            <li>Teaching Assistant, Stanford University (2012 - 2015)</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside">
            <li>Programming Languages: Python, C++, Java, R</li>
            <li>Machine Learning Frameworks: TensorFlow, PyTorch, Scikit-learn</li>
            <li>Cloud Platforms: AWS, Google Cloud, Azure</li>
            <li>Big Data Technologies: Hadoop, Spark</li>
            <li>Version Control: Git</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Awards and Honors</h2>
          <ul className="list-disc list-inside">
            <li>ACM Distinguished Scientist, 2022</li>
            <li>Best Paper Award, NeurIPS 2020</li>
            <li>Google AI Research Grant, 2019</li>
            <li>Stanford Graduate Fellowship, 2011-2015</li>
          </ul>
        </section>
      </div>
      <div className="mt-6">
        <Link href="/" passHref>
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    </div>
  )
}