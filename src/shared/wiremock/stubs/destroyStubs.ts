export const destroyStubs = (wiremockMappingsUrl: string) => {
  return fetch(wiremockMappingsUrl, {
    method: "DELETE",
  });
};
