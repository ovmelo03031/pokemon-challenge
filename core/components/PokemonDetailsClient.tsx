'use client';

import { Pokemon } from '@/lib/types';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import PokemonStatsDetails from '@/core/components/pokemon-stats-details/PokemonStatsDetails';
import CardImageDetails from '@/core/components/card-image-details/CardImageDetails';

export function PokemonDetailsClient({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/public">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Pokédex
        </Button>
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <CardImageDetails {...{ pokemon }} />

        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle>Base Stats</CardTitle>
            <CardDescription>
              Pokemon&#39;s attributes and powers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <PokemonStatsDetails stats={pokemon.stats} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
