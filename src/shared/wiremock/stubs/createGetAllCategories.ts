import { TCategory } from "shared/api/categories";

export const createGetAllCategories = (
  wiremockMappingsUrl: string,
  data: Array<TCategory>,
) => {
  return fetch(wiremockMappingsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "get all categories",
      request: {
        url: "/recipes/categories",
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
