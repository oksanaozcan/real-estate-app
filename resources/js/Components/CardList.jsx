import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card"
import { usePage } from '@inertiajs/react';
import FavoriteButton from "./FavoriteButton";

export default function CardList({ properties }) {
    const { static_text } = usePage().props;
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
                            <CardTitle className='pb-2 text-xl'>
                                {new Intl.NumberFormat('tr-TR', {
                                    style: 'currency',
                                    currency: 'TRY',
                                    maximumFractionDigits: 0
                                }).format(p.price)}
                            </CardTitle>
                            <CardTitle>{p.translations.title}</CardTitle>
                            <CardDescription>{p.address}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <p><span className="text-sm">{static_text.rooms}:</span> {p.rooms} + {p.salon}</p>
                            <p><span className="text-sm">{static_text.bathrooms}:</span> {p.bathrooms}</p>
                            <p><span className="text-sm">m²:</span> {p.square}</p>
                        </CardContent>
                        <CardFooter>
                            <p><FavoriteButton propertyId={p.id}/></p>
                        </CardFooter>
                    </Card>
                ))
            }
        </div>
    )
}
