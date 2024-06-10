import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "app/providers";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider />,
  </React.StrictMode>,
);
