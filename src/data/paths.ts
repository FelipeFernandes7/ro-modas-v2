import { IconType } from "react-icons";
import { FaHome, FaShoppingBag } from "react-icons/fa";
import { FaCartShopping, FaShirt } from "react-icons/fa6";

interface Path {
  text: string;
  href: string;
  icon?: IconType;
}
export const paths: Path[] = [
  {
    text: "Home",
    href: "/",
    icon: FaHome,
  },
  {
    text: "Modas",
    href: "/fashion",
    icon: FaShirt,
  },
  {
    text: "Produtos",
    href: "/product",
    icon: FaShoppingBag,
  },
];
