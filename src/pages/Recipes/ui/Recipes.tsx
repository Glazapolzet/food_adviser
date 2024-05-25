import styles from "./Recipes.module.scss";
import { Preface } from "entities/preface";
import { TabBar } from "entities/tabbar";
import { recipeTabBarContent } from "shared/consts";
import { useLoaderData } from "react-router-dom";

export const Recipes = () => {
  const data = useLoaderData();

  // interface Dummy {
  //   name: null | string;
  // }

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

  // const tabBarItems = recipeTabBarContent.map((item) => {
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

  return (
    <section>
      <Preface />
      <TabBar items={recipeTabBarContent} />
      <div>{data}</div>
    </section>
  );
};
