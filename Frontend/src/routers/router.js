import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main";
import ScheduledEmail from "../components/scheduledEmail";
import ComposeEmail from "../components/composeEmail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/schedle-email",
        element: <ScheduledEmail />,
      },
      {
        path: "/compose-email",
        element: <ComposeEmail />,
      },
    ],
  },
]);

export default router;
