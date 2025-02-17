'use client';

import PokemonCard from '@/core/components/pokemon-card/PokemonCard';
import { Loader2 } from 'lucide-react';
import FooterButtons from '@/core/components/footer-buttons/FooterButtons';
import PokemonFilter from '@/core/components/pokemon-filter/PokemonFilter';
import { PokemonProvider, usePokemon } from '@/core/context/PokemonContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function Main() {
  const { pokemons, isLoading } = usePokemon();

  return (
    <main className="container mx-auto px-4 py-8">
      <PokemonFilter />
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <Loader2 className="w-8 h-8 animate-spin" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-5 gap-6">
            {pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
          <FooterButtons />
        </>
      )}
    </main>
  );
}

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonProvider>
        <Main />
      </PokemonProvider>
    </QueryClientProvider>
  );
}
