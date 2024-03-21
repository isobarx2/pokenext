import { ReactNode } from "react";
import Link from "next/link";

interface PokeLink {
  name: string;
  children: ReactNode;
  className?: string;
}

function nameToSlug(name: string) {
  return name.replace(/\s+/g, "-");
}
export default function PokeLink({ name, className, children }: PokeLink) {
  return (
    <Link className={className} href={`/pokemon/${nameToSlug(name)}`}>
      {children}
    </Link>
  );
}
