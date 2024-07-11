import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./ui/AppLayout";
import { Homepage } from "./features/homepage/Homepage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/region/:region",
        element: <Homepage />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
