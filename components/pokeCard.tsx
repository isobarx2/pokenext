import PokeImage from "./pokeImage";
import { PokemonSimpleFieldsFragment } from "@/lib/generated/graphql";

import PokeLink from "./pokeLink";
import PokeFavourite from "./pokeFavourite";

interface PokeCardProps extends PokemonSimpleFieldsFragment {
  className?: string;
}
export default function PokeCard({
  id,
  name,
  types,
  className,
}: PokeCardProps) {
  return (
    <div className={`relative ${className}`}>
      <PokeFavourite className=" absolute bottom-5 right-8 z-10" id={id} />
      <PokeLink
        name={name}
        className="block border border-gray-200 bg-white m-2 p-4 rounded-md group hover:border-gray-400 scale-100 hover:scale-105 transition-all"
      >
        <div className="bg-gray-100 rounded-sm p-4 mb-4 flex justify-center relative group-hover:bg-gray-500 transition-all">
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
          {types.map((item, index) => {
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
      </PokeLink>
    </div>
  );
}
