import { FC, useEffect } from "react";
import { wiremockInstance } from "shared/wiremock";

interface MockApiProviderProps {
  children: FC;
}

export const MockApiProvider: FC<MockApiProviderProps> = ({ children }) => {
  useEffect(() => {
    wiremockInstance.init();

    return () => wiremockInstance.destroy();
  }, []);

  return <>{children}</>;
};
