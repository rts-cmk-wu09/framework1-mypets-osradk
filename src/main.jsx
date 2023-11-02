import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Detaljevisning from "./pages/Detaljevisning";
import Home from "./pages/Home";
import Listevisning from "./pages/Listevisning";
// import { AnimalProvider } from "./AnimalContext.jsx";
// import AboutAnimals from "./template/AboutAnimals.jsx";
import ErrorView from "./pages/ErrorView.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}errorElement={<ErrorView />} >
      <Route index element={<Home />} />
      <Route path="Listevisning" element={<Listevisning />} />
      <Route path="Detaljevisning" element={<Detaljevisning />} />
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {/* <AnimalProvider>
        <AboutAnimals />
      </AnimalProvider> */}
    </RouterProvider>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// ReactDOM.render(
//   <AnimalProvider>
//     <AboutAnimals />
//   </AnimalProvider>,
//   document.getElementById("root")
// );
