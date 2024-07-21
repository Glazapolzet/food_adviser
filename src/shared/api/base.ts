const API_BASE_URL = "http://localhost:8000";

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

  async fetch<T>(
    endpoint: string,
    { headers, ...options }: RequestInit = {},
  ): Promise<T> {
    const res: Response = await fetch(this.baseUrl + endpoint, {
      headers: Object.assign(headers, this.headers),
      ...options,
    });

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

export const apiInstance = new Api(API_BASE_URL, headers);
