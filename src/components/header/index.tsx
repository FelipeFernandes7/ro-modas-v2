"use client";

import Link from "next/link";
import { useState } from "react";
import { FaVestPatches } from "react-icons/fa";
import { Sidebar } from "./sidebar";
import { Path } from "./path";
import { paths } from "@/constants/paths";

export function Header() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const hoverLink =
    "hover:text-fuchsia-400 transition-all duration-300 hover:underline";

  const handleOpenSidebar = () => {
    setOpenSidebar(true);
  };

  const handleCloseMenu = () => {
    setOpenSidebar(false);
  };

  return (
    <header className="w-full flex items-center justify-between px-4 md:px-6 h-20 md:h-24 shadow-md relative">
      <section className="flex items-center gap-2">
        <Link
          className="bg-gradient-to-t from-[#ff00ff] to-[#ffb199] bg-clip-text text-transparent inline-block"
          href={"/"}
        >
          <FaVestPatches className="transition-all duration-300 text-white hover:text-fuchsia-400 text-xl md:text-2xl" />
        </Link>
        <h1 className="text-xl font-bold whitespace-nowrap md:text-3xl bg-gradient-to-t from-[#ff00ff] to-[#ffb199] bg-clip-text text-transparent">
          RÔ MODAS
        </h1>
      </section>
      <div className="hidden md:block">
        <section className="flex items-center gap-4 font-medium text-lg">
          {paths.map((path) => (
            <Link key={path.text} className={hoverLink} href={path.href}>
              {path.text}
            </Link>
          ))}
          <button className="bg-gradient-to-t from-[#ff00ff] to-[#ffb199] h-10 w-24 rounded-md text-sm font-bold transition-all duration-300 hover:opacity-80">
            Entrar
          </button>
        </section>
      </div>
      <Sidebar
        handleOpenSidebar={handleOpenSidebar}
        handleCloseSidebar={handleCloseMenu}
        openSidebar={openSidebar}
      >
        <section className="flex flex-col w-full gap-6">
          {paths.map((path) => (
            <Path text={path.text} href={path.href} Icon={path.icon} />
          ))}
        </section>
      </Sidebar>
    </header>
  );
}
