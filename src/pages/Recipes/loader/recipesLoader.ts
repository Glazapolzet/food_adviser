export async function recipesLoader({ params }) {
  console.log(params.recipeCategory);

  const mockApiResponce = [
    {
      imageSrc:
        "https://thumb.spokesman.com/fg1HX-YkTbJzoFIDxYH-5TTC-Sc=/1200x800/smart/media.spokesman.com/photos/2023/05/25/646fe0a21a73e.hires.jpg",
      title: `card from: ${params.recipeCategory}`,
      description: "toad",
      info: {
        timeToCook: 40,
        difficulty: "easy",
        servings: 4,
      },
    },
  ];

  return mockApiResponce;
}
