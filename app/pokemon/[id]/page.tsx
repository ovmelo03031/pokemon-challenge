import { Suspense } from 'react';
import { getPokemonDetails, getPokemonList } from '@/lib/pokemon';
import { PokemonDetailsClient } from '@/core/components/PokemonDetailsClient';
import { Loader2 } from 'lucide-react';

export async function generateStaticParams() {
  const { pokemons } = await getPokemonList(1, 1000);
  return pokemons.map((pokemon) => ({
    id: pokemon.id.toString(),
  }));
}

type Props = {
  params: { id: string };
};

export default async function PokemonDetail({ params }: Props) {
  'use server';

  if (!params.id) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  const pokemon = await getPokemonDetails(params.id);

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          <Loader2 className="w-8 h-8 animate-spin" />
        </div>
      }
    >
      <PokemonDetailsClient pokemon={pokemon} />
    </Suspense>
  );
}
