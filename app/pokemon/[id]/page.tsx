import {Suspense} from 'react';
import {getPokemonDetails, getPokemonList} from '@/lib/pokemon';
import {PokemonDetailsClient} from '@/core/components/PokemonDetailsClient';
import Loading from "@/app/loading";

export async function generateStaticParams() {
  const { pokemons } = await getPokemonList(1, 1000);
  return pokemons.map((pokemon) => ({
    id: pokemon.id.toString(),
  }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PokemonDetail({ params }: Props) {
  'use server';

  const { id } = await params;

  const pokemon = await getPokemonDetails(id);

  return (
    <Suspense
        fallback={<Loading/>}
    >
      <PokemonDetailsClient pokemon={pokemon} />
    </Suspense>
  );
}
