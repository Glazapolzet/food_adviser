export const PATH_CONFIG = {
  root: {
    id: "root",
    path: "",
    fullPath: "",
    home: { id: "home", path: "", fullPath: "/" },
    recipes: {
      id: "recipes",
      path: "recipes",
      fullPath: "/recipes",
      categories: {
        id: "categories",
        path: "categories",
        fullPath: "/recipes/categories",
        category: {
          id: "category",
          path: ":categoryName",
          fullPath: "/recipes/categories/:categoryName",
        },
      },
      recipe: {
        id: "recipe",
        path: ":recipeId",
        fullPath: "/recipes/:recipeId",
      },
    },
    stats: { id: "stats", path: "stats", fullPath: "/stats" },
  },
};
