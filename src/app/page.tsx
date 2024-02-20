import { ProductCard } from "@/components/productCard";
import { clothes } from "@/data/clothes";

export default function Home() {
  return (
    <div className="w-full flex flex-col ">
      <h1>Projeto Modas</h1>
      <div className="w-full grid sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center py-4 ">
        {clothes.map((clothe) => (
          <ProductCard
            key={clothe.id}
            name={clothe.name}
            price={clothe.price}
            description={clothe.description}
            image={clothe.image}
            colors={clothe.colors}
            sizes={clothe.sizes}
          />
        ))}
      </div>
    </div>
  );
}
