import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import { LoginPage, GeneralPage, ErrorPage, HelpPage } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GeneralPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/help", element: <HelpPage /> }
    ],
  },
]);

export default router;
