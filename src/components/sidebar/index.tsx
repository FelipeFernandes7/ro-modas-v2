import Image from "next/image";
import { ReactNode, useEffect, useRef } from "react";
import { HiMenu } from "react-icons/hi";
import avatar from "@/assets/code steam.jpg";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

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
  const sidebarRef = useRef<HTMLDivElement>(null);
  const styles = {
    transform: openSidebar ? "translateX(0)" : "translateX(-64rem)",
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        openSidebar
      ) {
        handleCloseSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSidebar, handleCloseSidebar]);

  return (
    <div ref={sidebarRef} className="flex">
      <button onClick={handleOpenSidebar}>
        <HiMenu className="text-zinc-400 text-3xl font-bold" />
      </button>

      <div
        className={`fixed inset-y-0 left-0 w-64 bg-zinc-100 shadow-md transform transition-transform ease-in-out duration-300`}
        style={styles}
      >
        <div className="h-32 shadow-md bg-fuchsia-400 w-full relative ">
          <button
            onClick={handleCloseSidebar}
            className="absolute top-2 right-4"
          >
            <IoIosArrowBack className="text-white text-2xl font-bold" />
          </button>
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
      </div>
    </div>
  );
}
