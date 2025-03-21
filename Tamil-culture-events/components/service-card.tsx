import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Music, Users, Mic } from "lucide-react"

interface ServiceProps {
  service: {
    id: number
    title: string
    description: string
    image: string
    icon: string
  }
}

export default function ServiceCard({ service }: ServiceProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "music":
        return <Music className="h-6 w-6 text-primary" />
      case "users":
        return <Users className="h-6 w-6 text-primary" />
      case "mic":
        return <Mic className="h-6 w-6 text-primary" />
      default:
        return <Music className="h-6 w-6 text-primary" />
    }
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 bg-primary text-white p-2 rounded-full">{getIcon(service.icon)}</div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{service.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Learn More</Button>
      </CardFooter>
    </Card>
  )
}

