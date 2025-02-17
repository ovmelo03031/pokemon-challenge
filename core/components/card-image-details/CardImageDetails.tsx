import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { getTypeColor } from '@/core/utils/pockemon-details';
import { Pokemon } from '@/lib/types';

interface CardImageDetailsProps {
  pokemon: Pokemon;
}
const CardImageDetails = ({ pokemon }: CardImageDetailsProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-lg">
      <CardHeader className="p-0">
        <div className="relative aspect-square bg-gray-50">
          <Image
            width={55}
            height={55}
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="absolute inset-0 w-full h-full object-contain p-8"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold capitalize mb-4">{pokemon.name}</h1>
          <div className="flex gap-2 justify-center mb-4">
            {pokemon.types.map((type) => (
              <Badge
                key={type.type.name}
                className={`${getTypeColor(type.type.name)} text-white border-none`}
              >
                {type.type.name}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardImageDetails;
