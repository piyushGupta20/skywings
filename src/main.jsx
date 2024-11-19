import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// import "https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css";
// import "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
// import "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
