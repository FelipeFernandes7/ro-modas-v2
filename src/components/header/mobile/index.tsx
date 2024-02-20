"use client";

import { Path } from "@/components/path";
import { Sidebar } from "@/components/sidebar";
import { paths } from "@/data/paths";
import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";

export function HeaderMobile() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpenSidebar = () => {
    setOpenSidebar(true);
  };

  const handleCloseMenu = () => {
    setOpenSidebar(false);
  };
  return (
    <header className="w-full flex items-center justify-between px-4 shadow-md fixed bg-opacity-75 bg-zinc-100 z-50 top-0 h-16">
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
      <h1 className="text-2xl  text-fuchsia-400 font-medium tracking-tight text-center">
        RÔ MODAS
      </h1>
      <button className="text-3xl text-zinc-400">
        <CiShoppingCart />
      </button>
    </header>
  );
}
