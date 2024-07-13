import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./ui/AppLayout";
import {
  Homepage,
  loader as homepageLoader,
} from "./features/homepage/Homepage";
import {
  DetailsPage,
  loader as detailsPageLoader,
} from "./features/details-page/DetailsPage";

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
      {
        path: "/country/:countryName",
        element: <DetailsPage />,
        loader: detailsPageLoader,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
