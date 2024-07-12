import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./ui/AppLayout";
import {
  Homepage,
  loader as homepageLoader,
} from "./features/homepage/Homepage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        loader: homepageLoader,
      },
      {
        path: "/region/:region",
        element: <Homepage />,
        loader: homepageLoader,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
