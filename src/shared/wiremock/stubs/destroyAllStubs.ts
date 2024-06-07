export const destroyAllStubs = (wiremockMappingsUrl: string) => {
  return fetch(wiremockMappingsUrl, {
    method: "DELETE",
  });
};
