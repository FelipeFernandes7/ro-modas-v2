import images from "@/assets/moda.jpg";
import { StaticImageData } from "next/image";

interface Clothes {
  id: number;
  name: string;
  price: number;
  description: string;
  image: StaticImageData;
  sizes: string[];
  colors: string[];
}
export const clothes: Clothes[] = [
  {
    id: 1,
    name: "Camiseta branca",
    price: 29.99,
    description: "Uma camiseta branca básica",
    image: images,
    sizes: ["P", "M", "G", "GG"],
    colors: ["branco", "preto", "azul", "vermelho"],
  },
  {
    id: 2,
    name: "Calça jeans",
    price: 49.99,
    description: "Uma calça jeans tradicional",
    image: images,
    sizes: ["36", "38", "40", "42"],
    colors: ["azul"],
  },
  {
    id: 3,
    name: "Vestido floral",
    price: 59.99,
    description: "Um vestido estampado com flores",
    image: images,
    sizes: ["P", "M", "G"],
    colors: ["vermelho", "azul", "verde"],
  },
  {
    id: 4,
    name: "Blusa de seda",
    price: 39.99,
    description: "Uma blusa elegante feita de seda",
    image: images,
    sizes: ["P", "M", "G"],
    colors: ["branco", "preto", "rosa"],
  },
  {
    id: 5,
    name: "Bermuda cargo",
    price: 34.99,
    description: "Uma bermuda prática com bolsos",
    image: images,
    sizes: ["36", "38", "40", "42"],
    colors: ["verde", "caqui", "preto"],
  },
  {
    id: 6,
    name: "Sapato de couro",
    price: 69.99,
    description: "Um sapato elegante feito de couro genuíno",
    image: images,
    sizes: ["35", "36", "37", "38", "39", "40"],
    colors: ["marrom", "preto"],
  },
  {
    id: 7,
    name: "Saia plissada",
    price: 44.99,
    description: "Uma saia feminina com pregas elegantes",
    image: images,
    sizes: ["P", "M", "G"],
    colors: ["azul", "vermelho", "preto"],
  },
  {
    id: 8,
    name: "Blazer xadrez",
    price: 79.99,
    description: "Um blazer formal com padrão xadrez",
    image: images,
    sizes: ["P", "M", "G"],
    colors: ["cinza", "verde", "azul"],
  },
  {
    id: 9,
    name: "Lenço de seda",
    price: 19.99,
    description: "Um lenço delicado feito de seda",
    image: images,
    sizes: ["Único"],
    colors: ["amarelo", "roxo", "laranja"],
  },
  {
    id: 10,
    name: "Jaqueta de couro",
    price: 99.99,
    description: "Uma jaqueta de couro resistente e estilosa",
    image: images,
    sizes: ["P", "M", "G"],
    colors: ["preto", "marrom"],
  },
];
