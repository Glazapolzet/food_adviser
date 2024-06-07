import { AppRouterProvider } from "./AppRouterProvider";
import { MockApiProvider } from "./MockApiProvider";

export const Provider = () => {
  return (
    <MockApiProvider>
      <AppRouterProvider />
    </MockApiProvider>
  );
};
