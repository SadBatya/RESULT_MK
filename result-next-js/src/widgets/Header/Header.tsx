"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex border-b border-white/80 items-center justify-between px-8 py-4">
      <Image alt="vercel logo" src={"/vercel.svg"} width={48} height={48} />
      <nav className="flex items-center gap-8">
        <Link
          className={twMerge("text-white/40", pathname === "/" && "text-white")}
          href={"/"}
        >
          HOME
        </Link>
        <Link
          className={twMerge(
            "text-white/40",
            pathname === "/ssr" && "text-white"
          )}
          href={"/ssr"}
        >
          SSR
        </Link>
        <Link
          className={twMerge(
            "text-white/40",
            pathname === "/ssg" && "text-white"
          )}
          href={"/ssg"}
        >
          SSG
        </Link>
      </nav>
    </header>
  );
};
