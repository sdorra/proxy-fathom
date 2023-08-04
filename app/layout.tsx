import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import ButtonLink from "@/components/ButtonLink";
import Analytics from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Proxy Fathom",
  description: "Demonstration of how to proxy Fathom Analytics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen pt-10 grid grid-rows-[auto,1fr,auto]`}
      >
        <header className="px-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Proxy Fathom Analytics
          </h1>
          <p className="text-muted-foreground">
            This page demonstrates the usage of Next.js rewrite rules to proxy
            fathom analytics
          </p>
        </header>
        <main className="grid grid-rows-[1fr,auto] p-10">
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-20 justify-center items-center h-full">
            <a href="https://usefathom.com/">
              <Image
                src="/fathom-analytics.svg"
                alt="Fathom Analytics Logo"
                width={180}
                height={80}
                priority
              />
            </a>
            <a href="https://nextjs.org/">
              <Image
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
              />
            </a>
          </div>
          <ul className="flex justify-center gap-5 items-stretch">
            <ButtonLink href="https://sdorra.dev">
              Read the full article here
            </ButtonLink>
            {children}
          </ul>
        </main>
        <footer className="text-right text-muted-foreground text-sm mr-2">
          <p>Made with ❤️ by Sebastian Sdorra</p>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
