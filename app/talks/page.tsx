import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Talks() {
  const talks = [
    { title: "The Future of Ethical AI in Climate Tech", event: "AI Ethics Conference", year: 2023, upcoming: true },
    { title: "Quantum Computing: Revolutionizing Machine Learning", event: "Quantum Tech Symposium", year: 2022 },
    { title: "Explainable AI: Making the Black Box Transparent", event: "AAAI Conference", year: 2021 },
    { title: "Federated Learning and Privacy in AI", event: "Privacy in AI Workshop", year: 2020 },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Talks & Presentations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {talks.map((talk, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{talk.title}</CardTitle>
              <CardDescription>{talk.event}, {talk.year}</CardDescription>
            </CardHeader>
            <CardContent>
              {talk.upcoming ? (
                <p className="text-green-500">Upcoming</p>
              ) : (
                <p>
                  <a href="#" className="text-blue-500 hover:underline">View Slides</a>
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}