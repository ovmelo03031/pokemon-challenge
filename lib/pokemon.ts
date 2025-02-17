import {PokemonListResponse} from "@/lib/types";
import {notFound} from "next/navigation";

export async function getPokemonTypes() {
  const response = await fetch('https://pokeapi.co/api/v2/type');
  const data = await response.json();
  return data.results;
}

export async function getPokemonList(page: number = 1, limit: number = 12) {
  const offset = (page - 1) * limit;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  const data: PokemonListResponse = await response.json();
  
  // Fetch detailed information for each Pokemon
  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      return res.json();
    })
  );

  return {
    pokemons: pokemonDetails,
    total: data.count,
  };
}

export async function getPokemonsByType(type: string, page: number = 1, limit: number = 12) {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const data = await response.json();
  
  const offset = (page - 1) * limit;
  const paginatedResults = data.pokemon.slice(offset, offset + limit);
  
  const pokemonDetails = await Promise.all(
    paginatedResults.map(async (p: { pokemon: { url: string } }) => {
      const res = await fetch(p.pokemon.url);
      return res.json();
    })
  );

  return {
    pokemons: pokemonDetails,
    total: data.pokemon.length,
  };
}

export async function getPokemonDetails(id: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  if (!data) notFound();
  return data;
}