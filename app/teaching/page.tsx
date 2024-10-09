import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Teaching() {
  const courses = [
    { 
      title: "Advanced Machine Learning (CS 229)", 
      institution: "Stanford University",
      description: "Graduate-level course covering advanced topics in machine learning, including deep learning, reinforcement learning, and probabilistic graphical models.",
      year: "2023"
    },
    { 
      title: "AI Ethics (CS 281)", 
      institution: "MIT",
      description: "Course exploring ethical considerations in AI development and deployment, covering topics such as fairness, accountability, transparency, and privacy.",
      year: "2022-2023"
    },
    { 
      title: "Introduction to Artificial Intelligence (CS 188)", 
      institution: "UC Berkeley",
      description: "Undergraduate course introducing fundamental concepts in AI, including search algorithms, machine learning, and natural language processing.",
      year: "2021"
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Teaching</h1>
      <div className="space-y-6">
        {courses.map((course, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.institution}, {course.year}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{course.description}</p>
              <p className="mt-2">
                <a href="#" className="text-blue-500 hover:underline">Course Materials</a>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}