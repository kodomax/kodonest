import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header, Projects, ErrorPage } from "@/components";
import { TeleportCalculator } from "@/projects";
import { ROUTES } from "@/constants/routes";

const router = createBrowserRouter([
  {
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Projects />,
      },
      {
        path: ROUTES.PROJECT_TELEPORT,
        element: <TeleportCalculator />,
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;
