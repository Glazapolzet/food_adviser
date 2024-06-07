import { createGetAllCategories } from "./stubs/createGetAllCategories";
import { createGetRecipesByCategory } from "./stubs/createGetRecipesByCategory";
import { CATEGORIES } from "./mockData/categories";
import { destroyAllStubs } from "./stubs/destroyAllStubs";

const WIREMOCK_BASE_URL = "http://localhost:8080";

class Wiremock {
  wiremockMappingsUrl: string;

  constructor(wiremockUrl: string) {
    this.wiremockMappingsUrl = wiremockUrl + "/__admin/mappings";
  }

  private handleError(error) {
    console.log(error);
  }

  init() {
    createGetAllCategories(this.wiremockMappingsUrl, CATEGORIES).catch((err) =>
      this.handleError(err),
    );

    CATEGORIES.forEach((category) => {
      createGetRecipesByCategory(
        this.wiremockMappingsUrl,
        category.name,
        category.content,
      ).catch((err) => this.handleError(err));
    });
  }

  destroy() {
    destroyAllStubs(this.wiremockMappingsUrl).catch((err) =>
      this.handleError(err),
    );
  }
}

export const wiremockInstance = new Wiremock(WIREMOCK_BASE_URL);
