import { createRoot } from "react-dom/client";
import { HomePage } from "./pages/HomePage";
import { Invoices } from "./pages/Invoices/Invoices";
import { ExponcesPage } from "./pages/ExponcesPage/ExponcesPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.css";

// const router = createBrowserRouter([{
//   path: '/',
//   element: <HomePage />,
// },
// {
//   path: '/invoices',
//   element: <Invoices />,
// },
// {
//   path: '/exponces',
//   element: <ExponcesPage />,
// }])

const routerWithChildren = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      { path: "/invoices", element: <Invoices /> },
      {
        path: "/exponces",
        element: <ExponcesPage />,
      },
    ],
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={routerWithChildren} />
);
