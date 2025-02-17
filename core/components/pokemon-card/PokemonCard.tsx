import { Pokemon } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { getTypeColor } from '@/core/utils/pockemon-details';
import Image from 'next/image';
import { STATS_ICONS } from '@/core/constants/pokemon.contants';

function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-none">
        <div className="relative aspect-square bg-gray-50">
          <Image
            width={55}
            height={55}
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="absolute inset-0 w-full h-full object-contain p-4"
          />
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-lg capitalize mb-2">
            {pokemon.name}
          </h3>
          <div className="flex flex-wrap gap-1 mb-3">
            {pokemon.types.map((type) => (
              <Badge
                key={type.type.name}
                className={`${getTypeColor(type.type.name)} text-white border-none`}
              >
                {type.type.name}
              </Badge>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground">
            {pokemon.stats.slice(0, 3).map((stat) => {
              return (
                <div key={stat.stat.name} className="flex items-center gap-1">
                  {STATS_ICONS[stat.stat.name]}
                  <span>{stat.base_stat}</span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default PokemonCard;
