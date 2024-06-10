import { createGetAllCategories } from "./stubs/createGetAllCategories";
import { createGetRecipesByCategory } from "./stubs/createGetRecipesByCategory";
import { CATEGORIES } from "./mockData/categories";
import { destroyStubs } from "./stubs/destroyStubs";

const WIREMOCK_BASE_URL = "http://localhost:8080";

class Wiremock {
  wiremockMappingsUrl: string;

  constructor(wiremockUrl: string) {
    this.wiremockMappingsUrl = wiremockUrl + "/__admin/mappings";
  }

  private _handleError(error) {
    console.error(error);
  }

  private async _createStubs() {
    const createAllRecipesByCategories = async () => {
      for (const category of CATEGORIES) {
        await createGetRecipesByCategory(
          this.wiremockMappingsUrl,
          category.name,
          category.content,
        );
      }
    };

    await Promise.all([
      createGetAllCategories(this.wiremockMappingsUrl, CATEGORIES),
      createAllRecipesByCategories(),
    ]);
  }

  init() {
    this._createStubs().catch((err) => this._handleError(err));
  }

  destroy() {
    destroyStubs(this.wiremockMappingsUrl).catch((err) =>
      this._handleError(err),
    );
  }
}

export const wiremockInstance = new Wiremock(WIREMOCK_BASE_URL);
