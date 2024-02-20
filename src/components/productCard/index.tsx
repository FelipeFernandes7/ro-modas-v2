import { formatPrice } from "@/utils/format";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  image: string;
  sizes: string[];
  colors: string[];
}

export function ProductCard({
  colors,
  description,
  image,
  name,
  sizes,
  price,
}: ProductCardProps) {
  return (
    <div className="w-full flex flex-col items-center bg-zinc-100 rounded-md h-[330px] hover:scale-105 transition-all duration-300 shadow-md cursor-pointer">
      <section className="w-full h-32 rounded-t-md relative">
        <Image
          className="w-full h-full object-cover rounded-t-md"
          quality={100}
          width={100}
          height={100}
          src={image}
          alt={name}
        />
        <h1 className="text-white font-semibold absolute bottom-1 left-2">
          {name}
        </h1>
      </section>
      <div className="w-full p-2 flex flex-col px-2 md:px-4">
        <p className="text-zinc-900 tracking-tight font-semibold text-sm w-full">
          {description}
        </p>
        <div className="flex gap-1 w-full flex-wrap mt-2">
          {colors.map((color) => (
            <button
              key={color}
              className="p-1 rounded-md border-[1px] border-fuchsia-400 text-fuchsia-400 px-2 text-xs"
            >
              {color}
            </button>
          ))}
        </div>

        <div className="flex gap-1 w-full flex-wrap mt-2">
          {sizes.map((sizes) => (
            <button
              key={sizes}
              className="p-1 rounded-md border-[1px] border-zinc-400 text-zinc-400 px-2 text-xs"
            >
              {sizes}
            </button>
          ))}
        </div>
        <p className="text-black mt-5 font-medium">{formatPrice(price)}</p>
      </div>
    </div>
  );
}
