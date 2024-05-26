import styles from "./Recipes.module.scss";
import { Preface } from "entities/preface";
import { TabBar } from "entities/tabbar";
import { recipeTabBarItems } from "shared/consts";
import { useLoaderData } from "react-router-dom";
import { RecipeCardGrid } from "widgets/recipe-card-grid";

export const Recipes = () => {
  const data = useLoaderData();

  // const [recipes, setRecipes] = useState([
  //   {
  //     name: "",
  //     timeToCook: 0,
  //     servings: 0,
  //     difficulty: "",
  //   },
  // ]);

  // const navigate = useNavigate();
  // const location = useLocation();

  // const tabBarItems = recipeTabBarItems.map((item) => {
  //   // console.log(location.pathname);
  //
  //   item.isActive = location.pathname === item.endpoint;
  //
  //   item.onClick = () => {
  //     console.log(`fetch ${item.endpoint}..`);
  //
  //     navigate(item.endpoint, { replace: true });
  //
  //     // это должно быть в loadere в роутинге
  //     setRecipes(
  //       item.endpoint === "/recipes/breakfast"
  //         ? [
  //             {
  //               name: "fried eggs",
  //               timeToCook: 5,
  //               servings: 3,
  //               difficulty: "easy",
  //             },
  //             {
  //               name: "spam eggs",
  //               timeToCook: 50,
  //               servings: 1,
  //               difficulty: "hard",
  //             },
  //           ]
  //         : [
  //             {
  //               name: "",
  //               timeToCook: 0,
  //               servings: 0,
  //               difficulty: "",
  //             },
  //           ],
  //     );
  //   };
  //
  //   return item;
  // });

  const mock = {
    tagName: "test",
    title: "test lorem ipsum bla blamet",
    description: "bla bla bla bla bla bla bla bla bla bla bla bla",
  };

  return (
    <section className={styles.recipes}>
      <Preface content={mock} theme={"light"} size={"m"} align={"center"} />
      <div className={styles.tabbarContainer}>
        <TabBar items={recipeTabBarItems} />
      </div>
      <RecipeCardGrid items={data} />
    </section>
  );
};
