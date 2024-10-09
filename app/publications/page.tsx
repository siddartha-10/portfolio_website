import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Publications() {
  const publications = [
    { title: "Advances in Quantum Computing for Machine Learning", journal: "Nature", year: 2023 },
    { title: "Deep Learning Approaches for Climate Prediction", journal: "Science", year: 2022 },
    { title: "Ethical Considerations in AI: A Comprehensive Review", journal: "AI Ethics Journal", year: 2021 },
    { title: "Novel Approaches to Natural Language Processing in Low-Resource Languages", journal: "ACL Proceedings", year: 2020 },
    { title: "Reinforcement Learning Techniques in Robotic Manipulation", journal: "ICRA", year: 2019 },
    { title: "Federated Learning: Privacy-Preserving Collaborative AI", journal: "IEEE Security & Privacy", year: 2018 },
    { title: "Explainable AI: Making Black Box Models Transparent", journal: "AAAI Conference", year: 2017 },
    { title: "Quantum-Inspired Algorithms for Big Data Analysis", journal: "Big Data", year: 2016 },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Publications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {publications.map((pub, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{pub.title}</CardTitle>
              <CardDescription>{pub.journal}, {pub.year}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Authors: John Doe, et al.</p>
              <p className="mt-2">
                <a href="#" className="text-blue-500 hover:underline">Read Paper</a>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}