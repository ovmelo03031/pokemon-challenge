export interface Pokemon {
  id: number;
  name: string;
  types: PokemonType[];
  sprites: {
    front_default: string;
  };
  stats: PokemonStat[];
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export type PockemonStatType = 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed';
export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: PockemonStatType;
    url: string;
  };
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}