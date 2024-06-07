import { FC, useEffect } from "react";
import { wiremockInstance } from "shared/wiremock";

export const MockApiProvider: FC = ({ children }) => {
  useEffect(() => {
    wiremockInstance.init();

    return () => wiremockInstance.destroy();
  }, []);

  return <>{children}</>;
};
