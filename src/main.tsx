import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProviderImpl } from "./routes";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProviderImpl />
  </React.StrictMode>,
)
