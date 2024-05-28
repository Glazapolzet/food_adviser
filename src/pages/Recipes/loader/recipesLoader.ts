export async function recipesLoader({ params }) {
  // console.log(params);

  function getRandomInt(min: number, max: number): number {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

  const mockApiResponce = [
    {
      id: getRandomInt(55555, 99999),
      imageSrc:
        "https://img.buzzfeed.com/buzzfeed-static/static/2016-03/15/20/campaign_images/webdr08/foods-that-are-more-beautiful-than-any-person-cou-2-28313-1458089995-10_dblbig.jpg?resize=1200:*",
      title: `card from: ${params.recipeCategory}`,
      description:
        'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
      info: {
        timeToCook: 40,
        difficulty: "easy",
        servings: 4,
      },
    },
  ];

  return mockApiResponce;
}
