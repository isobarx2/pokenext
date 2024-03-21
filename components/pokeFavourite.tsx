"use client";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

interface PokeFavouriteProps {
  id: number;
  className?: string;
  iconClassName?: string;
}
export default function PokeFavourite({
  id,
  className,
  iconClassName,
}: PokeFavouriteProps) {
  const [fav, setFav] = useState(false);
  const FavIcon = fav ? HeartIcon : HeartIconOutline;

  useEffect(() => {
    localStorage.getItem(`isFav${id}`) ? setFav(true) : setFav(false);
  }, [id]);

  const setFavourite = (state: boolean) => {
    state
      ? localStorage.setItem(`isFav${id}`, `true`)
      : localStorage.removeItem(`isFav${id}`);
    setFav(state);
  };

  return (
    <button onClick={() => setFavourite(!fav)} className={className}>
      <FavIcon
        onClick={() => setFav(!fav)}
        className={`w-6 h-6  ${fav ? "text-red-500" : "text-black "} ${iconClassName}`}
      />
    </button>
  );
}
