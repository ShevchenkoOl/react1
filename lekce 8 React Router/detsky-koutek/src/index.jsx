import { createRoot } from "react-dom/client";
import { HomePage } from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.css";
import { App } from "./pages/App/App";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Error } from "./pages/Error/Error";
import { CentersPage } from "./pages/CentersPage/CentersPage";
import { CenterDetail } from "./pages/CenterDetail/CenterDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/homepage",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/centers",
        element: <CentersPage />
      },
      {
        path: "centers",
        element: <CentersPage />,
        children: [
          {
            path: ":id", // Добавляем дочерний маршрут с параметром id
            element: <CenterDetail />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);
