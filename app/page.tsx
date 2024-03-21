import PokeCard from "@/components/pokeCard";
import PokeImage from "@/components/pokeImage";
import { createClient } from "@/lib/client";

const getPage = async () => {
  const client = createClient();
  const { pokemons } = await client.getAll();

  return pokemons;
};

export default async function Page() {
  const pokoemons = await getPage();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="container flex mx-auto p-6 mx:p-8 lg:p-12 flex-wrap">
        {pokoemons.map((pokemon, index) => {
          return (
            <div
              key={pokemon.id}
              className="w-full sm:w-1/2 lg:w-1/3  xl:w-1/4"
            >
              <PokeCard {...pokemon} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
