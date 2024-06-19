import { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";

type DynamicPathParams = {
  params: {
    recipeId: string;
  };
};

export const loader: LoaderFunction = async ({
  params,
  // eslint-disable-next-line @typescript-eslint/require-await
}: LoaderFunctionArgs<DynamicPathParams>): Promise<string> => {
  return params.recipeId ?? "";
};
