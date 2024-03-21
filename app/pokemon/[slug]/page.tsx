import PokeImage from "@/components/pokeImage";
import { createClient } from "@/lib/client";
import { HomeIcon } from "@heroicons/react/24/outline";
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
    <main className="flex flex-col items-center justify-between ">
      <div className="w-full bg-gray-100 flex mx-auto p-6 mx:p-8 lg:p-12 flex-col text-center">
        <div className="flex items-center justify-center">
          <PokeImage id={pokemon.id} alt={pokemon.name} />
          <span className="font-bold text-6xl text-gray-300">
            #{pokemon.id}
          </span>
          <PokeImage id={pokemon.id} alt={pokemon.name} back />
        </div>
      </div>
      <h1 className="text-5xl mt-4 mb-1">{pokemon.name} </h1>
      <div className="flex mb-6">
        {pokemon.types.map((type, index) => {
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
      <Link
        href="/"
        className="flex px-4 py-1 rounded-md items-center justify-center text-gray-500 border border-gray-500 hover:border-gray-700  hover:text-gray-700 transition-all"
      >
        <HomeIcon className="w-4 h-4 mr-2" /> Go to homepage
      </Link>
    </main>
  );
}
