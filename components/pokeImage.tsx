import Image, { ImageProps } from "next/image";

interface PokeImageProps {
  id: number;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  back?: boolean;
}
export default function PokeImage({
  id,
  alt,
  width = 96,
  height = 96,
  className,
  back = false,
}: PokeImageProps) {
  return (
    <Image
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon${back ? "/back" : ""}/${id}.png`}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
