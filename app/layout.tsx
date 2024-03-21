import type { Metadata } from "next";
import { Signika } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const signika = Signika({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PokeNext",
  description: "Generated by  next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gray-50 ${signika.className}`}>
        <main className="min-h-screen flex flex-col">
          <header className="bg-black text-2xl text-white text-center py-4">
            <Link href="/">
              <b>Poké</b>Next
            </Link>
          </header>
          <div className="grow">{children}</div>
          <footer className="container mx-auto border-t text-black border-black py-4 mt-4 text-center">
            <b>Poké</b>Next
          </footer>
        </main>
      </body>
    </html>
  );
}
