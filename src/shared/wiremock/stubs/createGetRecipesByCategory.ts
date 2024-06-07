import { TRecipe } from "shared/api/recipes";

export const createGetRecipesByCategory = (
  wiremockMappingsUrl: string,
  categoryName: string,
  data: Array<TRecipe>,
) => {
  return fetch(wiremockMappingsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "get recipes by category",
      request: {
        urlPathTemplate: "/recipes/categories/{categoryName}",
        pathParameters: {
          categoryName: {
            equalTo: categoryName,
          },
        },
        method: "GET",
      },
      response: {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        jsonBody: {
          data: data,
        },
      },
    }),
  });
};
