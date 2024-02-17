import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface PathProps {
  text: string;
  href: string;
  Icon?: IconType;
}
export function Path({ text, href, Icon }: PathProps) {
  const pathname = usePathname();
  return (
    <div
      className={`flex items-center gap-4 w-full ${
        pathname === href ? "text-pink-400" : "text-white"
      }`}
    >
      {Icon && <Icon className={" font-bold text-xl"} />}
      <Link className="text-lg" href={href}>
        {text}
      </Link>
    </div>
  );
}
