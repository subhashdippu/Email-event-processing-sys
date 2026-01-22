import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main";
import ComposeEmail from "../components/composeEmail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/compose-email",
        element: <ComposeEmail />,
      },
    ],
  },
]);

export default router;
