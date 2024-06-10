import { TCategory } from "shared/api/categories";

const CATEGORY = {
  all: [
    {
      id: "90983a0a-2feb-4427-a04f-a8bff5478b27",
      cover:
        "https://img.freepik.com/free-photo/khachapuri-adjarian-open-pie-with-mozzarella-egg-georgian-cuisine_2829-14431.jpg?t=st=1717168292~exp=1717171892~hmac=b5410a9cd30237d96a0f5411e292efc25e81194607129229fffbc6e9e3bdd663&w=2000",
      title: "khachapuri adjarian open pie with mozzarella egg",
      description: "In non eos et tenetur sint at corporis.",
      timeToCook: 90,
      difficulty: "easy",
      servings: 3,
      category: "lunch",
    },
    {
      id: "8e8bf7dc-149a-40ed-998c-7c0ca93ac1eb",
      cover:
        "https://img.freepik.com/free-photo/imeretian-khachapuri-cheese-lemon-side-view_140725-11276.jpg?w=1800&t=st=1717170181~exp=1717170781~hmac=ff73fa50566b34daa2b7a43ea023b10aa9ed6bd08b0acd560d2c375fa75e3e3c",
      title: "imeretian khachapuri cheese lemon",
      description: "Veritatis corporis dignissimos voluptates et.",
      timeToCook: 75,
      difficulty: "medium",
      servings: 5,
      category: "dinner",
    },
  ],
  breakfast: [
    {
      id: "a7749453-69b5-4b42-8a29-115631b46c5e",
      cover:
        "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1717595987~exp=1717599587~hmac=16a21bc3bcfc8d027b72e7b45c4310765dcf9f7f932ab1760e08dd7331db75e7&w=2000",
      title: "penne pasta tomato sauce with chicken",
      description: "Voluptatum nam eius voluptas sapiente tempora.",
      timeToCook: 15,
      difficulty: "easy",
      servings: 3,
      category: "breakfast",
    },
  ],
  lunch: [
    {
      id: "92e0cd36-db76-4c55-bd2f-56b979238866",
      cover:
        "https://img.freepik.com/free-photo/khachapuri-adjarian-open-pie-with-mozzarella-egg-georgian-cuisine_2829-14431.jpg?t=st=1717168292~exp=1717171892~hmac=b5410a9cd30237d96a0f5411e292efc25e81194607129229fffbc6e9e3bdd663&w=2000",
      title: "khachapuri adjarian open pie with mozzarella egg",
      description: "In non eos et tenetur sint at corporis.",
      timeToCook: 90,
      difficulty: "easy",
      servings: 3,
      category: "lunch",
    },
  ],
  dinner: [
    {
      id: "f1f6ec69-2196-4d04-bf01-20fd68e165ac",
      cover:
        "https://img.freepik.com/free-photo/imeretian-khachapuri-cheese-lemon-side-view_140725-11276.jpg?w=1800&t=st=1717170181~exp=1717170781~hmac=ff73fa50566b34daa2b7a43ea023b10aa9ed6bd08b0acd560d2c375fa75e3e3c",
      title: "imeretian khachapuri cheese lemon",
      description: "Veritatis corporis dignissimos voluptates et.",
      timeToCook: 75,
      difficulty: "medium",
      servings: 5,
      category: "dinner",
    },
  ],
  dessert: [
    {
      id: "f4ea303d-b699-40e0-b21c-63a6502d2dfc",
      cover:
        "https://img.freepik.com/free-photo/raspberry-cake-with-powdered-sugar-fresh-raspberries-light-summer-berry-dessert_114579-4727.jpg?t=st=1717596168~exp=1717599768~hmac=062e3c661a2d2c9a23147846d25935cf806c93c30f621f212cb9b480e1b6cb4f&w=2000",
      title: "raspberry cake with powdered sugar",
      description: "Ut et maiores quisquam soluta nihil quaerat.",
      timeToCook: 60,
      difficulty: "easy",
      servings: 3,
      category: "dessert",
    },
  ],
};

export const CATEGORIES = [
  {
    name: "all",
    content: CATEGORY.all,
  },
  {
    name: "breakfast",
    content: CATEGORY.breakfast,
  },
  {
    name: "lunch",
    content: CATEGORY.lunch,
  },
  {
    name: "dinner",
    content: CATEGORY.dinner,
  },
  {
    name: "dessert",
    content: CATEGORY.dessert,
  },
] as Array<TCategory>;
