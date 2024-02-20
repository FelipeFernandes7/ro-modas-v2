interface Clothes {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  sizes: string[];
  colors: string[];
}
const image =
  "data:image/jpeg;base64,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";
export const clothes: Clothes[] = [
  {
    id: 1,
    name: "Camiseta branca",
    price: 29.99,
    description: "Uma camiseta branca básica",
    image: image,
    sizes: ["P", "M", "G", "GG"],
    colors: ["branco", "preto", "azul", "vermelho"],
  },
  {
    id: 2,
    name: "Calça jeans",
    price: 49.99,
    description: "Uma calça jeans tradicional",
    image: image,
    sizes: ["36", "38", "40", "42"],
    colors: ["azul"],
  },
  {
    id: 3,
    name: "Vestido floral",
    price: 59.99,
    description: "Um vestido estampado com flores",
    image: image,
    sizes: ["P", "M", "G"],
    colors: ["vermelho", "azul", "verde"],
  },
  {
    id: 4,
    name: "Blusa de seda",
    price: 39.99,
    description: "Uma blusa elegante feita de seda",
    image: image,
    sizes: ["P", "M", "G"],
    colors: ["branco", "preto", "rosa"],
  },
  {
    id: 5,
    name: "Bermuda cargo",
    price: 34.99,
    description: "Uma bermuda prática com bolsos",
    image: image,
    sizes: ["36", "38", "40", "42"],
    colors: ["verde", "caqui", "preto"],
  },
  {
    id: 6,
    name: "Sapato de couro",
    price: 69.99,
    description: "Um sapato elegante feito de couro genuíno",
    image: image,
    sizes: ["35", "36", "37", "38", "39", "40"],
    colors: ["marrom", "preto"],
  },
  {
    id: 7,
    name: "Saia plissada",
    price: 44.99,
    description: "Uma saia feminina com pregas elegantes",
    image: image,
    sizes: ["P", "M", "G"],
    colors: ["azul", "vermelho", "preto"],
  },
  {
    id: 8,
    name: "Blazer xadrez",
    price: 79.99,
    description: "Um blazer formal com padrão xadrez",
    image: image,
    sizes: ["P", "M", "G"],
    colors: ["cinza", "verde", "azul"],
  },
  {
    id: 9,
    name: "Lenço de seda",
    price: 19.99,
    description: "Um lenço delicado feito de seda",
    image: image,
    sizes: ["Único"],
    colors: ["amarelo", "roxo", "laranja"],
  },
  {
    id: 10,
    name: "Jaqueta de couro",
    price: 99.99,
    description: "Uma jaqueta de couro resistente e estilosa",
    image: image,
    sizes: ["P", "M", "G"],
    colors: ["preto", "marrom"],
  },
];
