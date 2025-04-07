import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card"

export default function CardList({ properties }) {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {
                properties.map(p => (
                    <Card key={p.id}>
                        {p.image && (
                            <img
                                src={p.image}
                                alt={p.translations.title}
                                className="object-cover w-full h-48 rounded-t"
                            />
                        )}
                        <CardHeader>
                            <CardTitle>{p.price}</CardTitle>
                            <CardTitle>{p.translations.title}</CardTitle>
                            <CardDescription>{p.address}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{p.rooms} + {p.salon}</p>
                            <p>{p.bathrooms} bathrooms</p>
                            <p>{p.square} m²</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                ))
            }
        </div>
    )
}
