"use client";

import Link from "next/link";
import { useState } from "react";
import { FaHome, FaShoppingBag, FaVestPatches } from "react-icons/fa";
import { Sidebar } from "./sidebar";
import { Path } from "./path";
import { FaCartShopping, FaShirt } from "react-icons/fa6";

export function Header() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleOpenSidebar = () => {
    setOpenSidebar(true);
  };

  const handleCloseMenu = () => {
    setOpenSidebar(false);
  };

  return (
    <header className="w-full flex items-center justify-between px-4 md:px-6 h-16 md:h-24 bg-neutral-900 shadow-md relative">
      <section className="flex items-center gap-2">
        <Link
          className="bg-gradient-to-t from-[#ff00ff] to-[#ffb199] bg-clip-text text-transparent inline-block"
          href={"/"}
        >
          <FaVestPatches className="transition-all duration-300 text-[#ff00ff] hover:text-[#ffb199] text-sm md:text-2xl" />
        </Link>
        <h1 className="text-sm whitespace-nowrap md:text-3xl bg-gradient-to-t from-[#ff00ff] to-[#ffb199] bg-clip-text text-transparent">
          RÔ MODAS
        </h1>
      </section>
      <div className="hidden md:block">
        <section className="flex items-center gap-4 font-medium text-lg">
          <Link href={"/"}>Home</Link>
          <Link href={"/fashion"}>Modas</Link>
          <Link href={"/product"}>Produto</Link>
          <Link href={"/cart"}>Carrinho</Link>
          <button className="bg-gradient-to-t from-[#ff00ff] to-[#ffb199] h-12 w-24 font-medium rounded-md text-sm">
            Entrar
          </button>
        </section>
      </div>
      <Sidebar
        handleOpenSidebar={handleOpenSidebar}
        handleCloseSidebar={handleCloseMenu}
        openSidebar={openSidebar}
      >
        <section className="flex flex-col w-full gap-6 ml-4">
          <Path text={"Home"} href={"/"} Icon={FaHome} />
          <Path text={"Modas"} href={"/fashion"} Icon={FaShirt} />
          <Path text={"Produto"} href={"/product"} Icon={FaShoppingBag} />
          <Path text={"Carrinho"} href={"/cart"} Icon={FaCartShopping} />
        </section>
      </Sidebar>
    </header>
  );
}
