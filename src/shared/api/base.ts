const API_BASE_URL = "http://localhost:8000";

const headers = {
  "Content-Type": "application/json",
};

type TResponseSuccess<T> = T;

type TResponseError = {
  msg: string;
};

type JSONResponse<T> = TResponseSuccess<T> | TResponseError;

const isResponseError = <T>(res: JSONResponse<T>): res is TResponseError => {
  return (res as TResponseError).msg !== undefined;
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
    { headers = {}, ...options }: RequestInit = {},
  ): Promise<T> {
    const res: Response = await fetch(this.baseUrl + endpoint, {
      headers: Object.assign(headers, this.headers),
      ...options,
    });

    if (!res.ok) {
      return Promise.reject(new Error(res.statusText));
    }

    const awaited: JSONResponse<T> = (await res.json()) as JSONResponse<T>;

    if (isResponseError<T>(awaited)) {
      return Promise.reject(new Error(awaited.msg));
    }

    const data = awaited;

    if (!data) {
      return Promise.reject(new Error("No data"));
    }

    return data;
  }
}

export const apiInstance = new Api(API_BASE_URL, headers);
