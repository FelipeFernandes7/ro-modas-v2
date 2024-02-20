import { formatPrice } from "@/utils/format";

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
    <div className="w-full flex flex-col items-center bg-zinc-100 rounded-md h-[300px] hover:scale-105 transition-all duration-300">
      <section className="w-full h-32 bg-black rounded-t-md">
        <h1 className="text-white">{name}</h1>
      </section>
      <div className="w-full p-2 flex flex-col px-2 md:px-4">
        <p className="text-zinc-900 tracking-tight text-sm w-full">
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
