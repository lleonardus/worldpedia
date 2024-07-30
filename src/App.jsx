import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./ui/AppLayout";
import { ErrorPage } from "./ui/ErrorPage";
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
    errorElement: <ErrorPage />,
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
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
