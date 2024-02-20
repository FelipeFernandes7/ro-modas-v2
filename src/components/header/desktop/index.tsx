import { paths } from "@/data/paths";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

export function HeaderDesktop() {
  const hoverLink =
    "text-zinc-400 hover:text-fuchsia-400 transition-all duration-300 hover:underline";
  return (
    <header className="w-full flex items-center justify-between px-6 shadow-md fixed bg-opacity-75 bg-zinc-100 z-50 top-0 h-16">
      <h1 className="text-2xl text-fuchsia-400 font-medium tracking-tight">
        RÔ MODAS
      </h1>
      <div className="flex gap-3 items-center justify-center text-center">
        {paths.map((path) => (
          <Link
            className={`${hoverLink} text-md font-semibold`}
            key={path.text}
            href={path.href}
          >
            {path.text}
          </Link>
        ))}
      </div>
      <button className="text-3xl text-zinc-400">
        <CiShoppingCart />
      </button>
    </header>
  );
}
