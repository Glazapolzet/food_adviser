const BASE_URL = "http://localhost:8080";

const headers = {
  "Content-Type": "application/json",
};

type JSONResponse<T> = {
  data?: T;
  error?: {
    message: string;
  };
};

class Api {
  baseUrl: string;
  headers: HeadersInit;

  constructor(baseUrl: string, headers: HeadersInit) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  async fetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const res: Response = await fetch(this.baseUrl + endpoint, options);

    if (!res.ok) {
      return Promise.reject(new Error(res.statusText));
    }

    const { data, error }: JSONResponse<T> =
      (await res.json()) as JSONResponse<T>;

    if (error) {
      return Promise.reject(new Error(error.message));
    }

    if (!data) {
      return Promise.reject(new Error("No data"));
    }

    return data;
  }
}

export const apiInstance = new Api(BASE_URL, headers);
