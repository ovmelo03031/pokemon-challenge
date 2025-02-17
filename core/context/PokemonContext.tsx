"use client";
import {createContext, useContext, ReactNode, useState, useMemo} from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPokemonList, getPokemonsByType, getPokemonTypes } from '@/lib/pokemon';
import { Pokemon } from '@/lib/types';

interface PokemonContextType {
  pokemons: Pokemon[];
  types: { name: string; url: string }[];
  isLoading: boolean;
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export function PokemonProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState(1);
  const [selectedType, setSelectedType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const limit = 10;

  const { data: types = [] } = useQuery({
    queryKey: ['pokemonTypes'],
    queryFn: getPokemonTypes,
  });

  const { data: pokemonData, isLoading } = useQuery({
    queryKey: ['pokemons', page, selectedType],

    queryFn: () => 
      selectedType !== "all"
        ? getPokemonsByType(selectedType, page, limit)
        : getPokemonList(page, limit),
  });

  const totalPages = useMemo(() => Math.ceil(pokemonData?.total || 0 / limit), [pokemonData?.total]);

  const filteredPokemons = (pokemonData?.pokemons || []).filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const value = {
    pokemons: filteredPokemons,
    types,
    isLoading,
    totalPages,
    page,
    setPage,
    selectedType,
    setSelectedType,
    searchQuery,
    setSearchQuery,
  };

  return (
    <PokemonContext.Provider value={value}>
      {children}
    </PokemonContext.Provider>
  );
}

export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemon must be used within a PokemonProvider');
  }
  return context;
}; 