import Image from "next/image";
import { ReactNode } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import avatar from "@/assets/code steam.jpg";
import Link from "next/link";
interface SidebarProps {
  handleOpenSidebar: () => void;
  handleCloseSidebar: () => void;
  openSidebar: boolean;
  children: ReactNode;
}

export function Sidebar({
  handleOpenSidebar,
  handleCloseSidebar,
  openSidebar,
  children,
}: SidebarProps) {
  const styles = {
    width: !openSidebar ? "0" : "300px",
    transition: "width 0.3s ease-in-out",
  };
  return (
    <div className="md:hidden relative h-full w-full">
      <button
        onClick={handleOpenSidebar}
        className="text-3xl text-white absolute top-4 right-4"
      >
        <HiMenu />
      </button>
      <nav
        style={styles}
        className="flex-col h-screen bg-neutral-800 fixed top-0 right-0 z-20 transition-transform duration-300 ease-in-out transform translate-x-0 rounded-tr-3xl rounded-l-2xl"
      >
        <button
          className="z-50 absolute top-2 left-2 text-white"
          onClick={handleCloseSidebar}
        >
          <IoClose className="text-3xl" />
        </button>
        <div className="h-36 bg-gradient-to-t from-[#ff00ff] to-[#ffb199] rounded-tl-2xl border-b-2 border-b-neutral-600">
          <div className=" flex w-full h-full gap-2 items-center px-4">
            <Image
              className="rounded-full object-cover h-10 w-10"
              src={avatar}
              alt={"avatar"}
              quality={100}
            />
            <section className="w-full  flex flex-col">
              <h1 className="text-white font-bold whitespace-nowrap">
                Felipe Fernandes
              </h1>
              <Link
                className="text-white font-light text-sm underline"
                href={"/profile"}
              >
                Meu Perfil
              </Link>
            </section>
          </div>
        </div>
        <div className="w-full mt-5 px-3 flex flex-col">{children}</div>
      </nav>
    </div>
  );
}
