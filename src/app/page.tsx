import { ProductCard } from "@/components/productCard";
import { SearchField } from "@/components/searchField";
import { clothes } from "@/data/clothes";

export default function Home() {
  return (
    <div className="w-full flex flex-col ">
      <div className="w-full flex items-center justify-center px-4 md:px-0 mb-3">
        <SearchField />
      </div>
      <h1 className="text-xl font-bold ml-2 mb-2">Produtos</h1>
      <div className="w-full grid sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center mb-4">
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
