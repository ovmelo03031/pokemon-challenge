"use client";

import { useEffect, useState } from "react";
import { Pokemon } from "@/lib/types";
import { getPokemonDetails } from "@/lib/pokemon";
import { Loader2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function PokemonDetails({ id }: { id: string }) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const data = await getPokemonDetails(id);
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching pokemon details:", error);
      }
      setLoading(false);
    };
    fetchPokemon();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!pokemon) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Pokemon not found</h1>
          <Link href="/public">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Pokédex
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/public">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Pokédex
        </Button>
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6">
          <CardHeader>
            <div className="flex justify-center">
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="w-48 h-48 object-contain"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <h1 className="text-3xl font-bold capitalize mb-4">{pokemon.name}</h1>
              <div className="flex gap-2 justify-center mb-4">
                {pokemon.types.map((type) => (
                  <Badge key={type.type.name} variant="secondary" className="capitalize">
                    {type.type.name}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Base Stats</CardTitle>
            <CardDescription>Pokemon's basic attributes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium capitalize">
                    {stat.stat.name.replace("-", " ")}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stat.base_stat}/255
                  </span>
                </div>
                <Progress value={(stat.base_stat / 255) * 100} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}