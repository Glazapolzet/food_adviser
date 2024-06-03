export async function loader({ params }) {
  // console.log(params);

  const mockApiResponce = params.recipeId;

  return mockApiResponce;
}
