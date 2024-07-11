import { PATH_CONFIG } from "./paths";

export const navbarLinks = [
  { link: PATH_CONFIG.root.home.fullPath, title: PATH_CONFIG.root.home.id },
  {
    link: PATH_CONFIG.root.recipes.fullPath,
    title: PATH_CONFIG.root.recipes.id,
  },
  { link: PATH_CONFIG.root.stats.fullPath, title: PATH_CONFIG.root.stats.id },
];
