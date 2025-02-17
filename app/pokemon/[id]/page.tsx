import {Suspense} from 'react';
import {getPokemonDetails} from '@/lib/pokemon';
import {PokemonDetailsClient} from '@/core/components/PokemonDetailsClient';
import Loading from "@/app/loading";
import {notFound, redirect} from 'next/navigation'

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PokemonDetail({ params }: Props) {
  'use server';
  try {
      const { id } = await params;

      const pokemon = await getPokemonDetails(id);

      if (!pokemon) {
        redirect('/')
      }

      return (
        <Suspense
            fallback={<Loading/>}
        >
          <PokemonDetailsClient pokemon={pokemon} />
        </Suspense>
      );
    } catch  {
      notFound();
    }
}
