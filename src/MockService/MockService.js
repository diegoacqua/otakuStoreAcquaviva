const products = [
  {
    id: 1,
    title: "Manga Placeholder",
    detail: "Un manga con una historia muy interesante",
    price: 800,
    stock: 15,
    category: "manga",
  },
  {
    id: 2,
    title: "Manga Placeholder",
    detail: "Un manga con una historia muy interesante",
    price: 500,
    stock: 20,
    category: "manga",
  },
  {
    id: 3,
    title: "Manga Placeholder",
    detail: "Un manga con una historia muy interesante",
    price: 600,
    stock: 25,
    category: "manga",
  },
  {
    id: 4,
    title: "Manga Placeholder",
    detail: "Un manga con una historia muy interesante",
    price: 550,
    stock: 10,
    category: "manga",
  },
  {
    id: 5,
    title: "Manga Placeholder",
    detail: "Un manga con una historia muy interesante",
    price: 1500,
    stock: 23,
    category: "manga",
  },
  {
    id: 6,
    title: "Manga Placeholder",
    detail: "Un manga con una historia muy interesante",
    price: 800,
    stock: 28,
    category: "manga",
  },
  {
    id: 7,
    title: "Manga Placeholder",
    detail: "Un manga con una historia muy interesante",
    price: 500,
    stock: 9,
    category: "manga",
  },
  {
    id: 8,
    title: "Manga Placeholder",
    detail: "Un manga con una historia muy interesante",
    price: 900,
    stock: 17,
    category: "manga",
  },
  {
    id: 9,
    title: "Manga Placeholder",
    detail: "Un manga con una historia muy interesante",
    price: 550,
    stock: 26,
    category: "manga",
  },
  {
    id: 10,
    title: "Manga Placeholder",
    detail: "Un manga con una historia muy interesante",
    price: 1200,
    stock: 40,
    category: "manga",
  },
  {
    id: 11,
    title: "Ropa Placeholder",
    detail: "Una remera con un diseño muy cool",
    price: 5200,
    stock: 40,
    category: "ropa",
  },
  {
    id: 12,
    title: "Ropa Placeholder",
    detail: "Una remera con un diseño muy cool",
    price: 7800,
    stock: 30,
    category: "ropa",
  },
  {
    id: 13,
    title: "Ropa Placeholder",
    detail: "Una remera con un diseño muy cool",
    price: 10000,
    stock: 50,
    category: "ropa",
  },
  {
    id: 14,
    title: "Ropa Placeholder",
    detail: "Una remera con un diseño muy cool",
    price: 9000,
    stock: 45,
    category: "ropa",
  },
  {
    id: 15,
    title: "Ropa Placeholder",
    detail: "Una remera con un diseño muy cool",
    price: 7500,
    stock: 12,
    category: "ropa",
  },
  {
    id: 16,
    title: "accesorio Placeholder",
    detail: "Una accesorio con toda la onda!",
    price: 700,
    stock: 8,
    category: "accesorios",
  },
  {
    id: 17,
    title: "accesorio Placeholder",
    detail: "Una accesorio con toda la onda!",
    price: 500,
    stock: 3,
    category: "accesorios",
  },
  {
    id: 18,
    title: "accesorio Placeholder",
    detail: "Una accesorio con toda la onda!",
    price: 1000,
    stock: 14,
    category: "accesorios",
  },
];

export default function getItemsFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
}

export function getSingleItemFromAPI(idParams) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let itemRequested = products.find((item) => item.id === Number(idParams));
      if (itemRequested) {
        resolve(itemRequested);
      } else {
        reject(new Error("El item no esta definido"));
      }
    }, 2000);
  });
}

export function getItemsFromAPIByCategory(categoryid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let itemsRequested = products.filter(
        (item) => item.category === categoryid
      );
      resolve(itemsRequested);
    }, 500);
  });
}
