import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Detaljevisning from "./pages/Detaljevisning";
import Home from "./pages/Home";
import Listevisning from "./pages/Listevisning";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />

      <Route path="Listevisning" element={<Listevisning />} />
      <Route path="Detaljevisning" element={<Detaljevisning />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
