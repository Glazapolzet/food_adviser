// type PathPropsUnnested = {
//   id: string;
//   path: string;
//   fullPath: string;
// };
//
// type PathProps = {
//   id: string;
//   path: string;
//   fullPath: string;
//   [key: string]: PathProps | PathPropsUnnested;
// };
//
// type PathConfigProps = {
//   [key: string]: PathProps | PathPropsUnnested;
// };

export const PATH_CONFIG = {
  root: {
    id: "root",
    path: "",
    fullPath: "/",
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
      new: {
        id: "new",
        path: "new",
        fullPath: "/recipes/new",
      },
      recipe: {
        id: "recipe",
        path: ":recipeId",
        fullPath: "/recipes/:recipeId",
      },
    },
    stats: { id: "stats", path: "stats", fullPath: "/stats" },
  },
} as const;
