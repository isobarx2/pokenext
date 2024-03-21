"use client";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import PokeImage from "./pokeImage";
import { PokemonSimpleFieldsFragment } from "@/lib/generated/graphql";
import { HeartIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import PokeLink from "./pokeLink";

interface PokeCardProps extends PokemonSimpleFieldsFragment {
  className?: string;
}
export default function PokeCard({
  id,
  name,
  types,
  className,
}: PokeCardProps) {
  const [fav, setFav] = useState(false);
  const FavIcon = fav ? HeartIcon : HeartIconOutline;
  return (
    <PokeLink
      name={name}
      className={`block border border-gray-200 bg-white m-2 p-4 rounded-md group hover:border-gray-400 scale-100 hover:scale-105 transition-all ${className}`}
    >
      <div className="bg-gray-100 rounded-sm p-4 mb-4 flex justify-center relative group-hover:bg-gray-500 transition-all">
        <button onClick={() => setFav(!fav)} className="absolute top-1 left-2">
          <FavIcon
            onClick={() => setFav(!fav)}
            className={`w-6 h-6  ${fav ? "text-red-500" : "text-black group-hover:text-white transition-all"}`}
          />
        </button>
        <PokeImage id={id} alt={name} className="group-hover:hidden" />
        <PokeImage
          id={id}
          alt={name}
          className="hidden group-hover:block"
          back
        />
        <span className="font-bold absolute top-0 right-2 text-xl text-gray-300">
          #{id}
        </span>
      </div>
      <h4 className="font-semibold tracking-wider">{name}</h4>
      <div className="flex">
        {types.map((type, index) => {
          return (
            <p
              className="text-xs mr-1 text-white bg-gray-400 rounded-md px-2 py-0"
              key={index}
            >
              {type.pokemon_v2_type?.name}
            </p>
          );
        })}
      </div>
    </PokeLink>
  );
}
