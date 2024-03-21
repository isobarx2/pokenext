import PokeFavourite from "@/components/pokeFavourite";
import PokeImage from "@/components/pokeImage";
import { createClient } from "@/lib/client";
import {
  ChevronUpDownIcon,
  HomeIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { slug?: string };
};

const getPage = async ({ slug }: { slug: string }) => {
  const client = createClient();
  const { pokemon } = await client.getByName({ slug });

  return pokemon[0];
};

export default async function Page({ params }: Props) {
  const pokemon = await getPage({ slug: params.slug || "" });

  if (!pokemon) return notFound();
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <PokeImage id={pokemon.id} alt={pokemon.name} />
        <PokeFavourite id={pokemon.id} />
        <PokeImage id={pokemon.id} alt={pokemon.name} back />
      </div>

      <h1 className="text-5xl mt-4 mb-1">{pokemon.name}</h1>

      <div className="flex my-2 justify-center">
        {pokemon.types.map((item, index) => {
          return (
            <span
              className="inline-block text-xs mr-1 text-white bg-gray-400 rounded-md px-2 py-0"
              key={index}
            >
              {item.type?.name}
            </span>
          );
        })}
      </div>

      <div className="flex">
        <div className="m-4 flex justify-center items-center">
          <ChevronUpDownIcon className="text-gray-500 w-6 h-6 inline-block mr-2" />
          <span className="text-3xl">{pokemon.height}</span>
        </div>
        <div className="m-4 flex justify-center items-center">
          <ScaleIcon className="text-gray-500 w-6 h-6 inline-block mr-2" />
          <span className="text-3xl">{pokemon.weight}</span>
        </div>
      </div>
      <Link
        href="/"
        className="flex px-4 py-1 rounded-md items-center justify-center text-gray-500 border border-gray-500 hover:border-gray-700  hover:text-gray-700 transition-all"
      >
        <HomeIcon className="w-4 h-4 mr-2" /> Go to homepage
      </Link>
    </div>
  );
}
