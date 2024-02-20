import { IconType } from "react-icons";
import { BiHome } from "react-icons/bi";
import { CgShoppingBag } from "react-icons/cg";
import { TbShirt } from "react-icons/tb";

interface Path {
  text: string;
  href: string;
  icon?: IconType;
}

export const paths: Path[] = [
  {
    text: "Home",
    href: "/",
    icon: BiHome,
  },
  {
    text: "Modas",
    href: "/fashion",
    icon: TbShirt,
  },
  {
    text: "Produtos",
    href: "/product",
    icon: CgShoppingBag,
  },
];
