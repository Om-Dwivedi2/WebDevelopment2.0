import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CardContext from "./context/CardContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CardContext>
      <App />
    </CardContext>
  </StrictMode>,
);
