import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main";
import ScheduledEmail from "../components/scheduledEmail";
import ComposeEmail from "../components/composeEmail";
import SentEmail from "../components/sentEmail";
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
      {
        path: "/sent-email",
        element: <SentEmail />,
      },
    ],
  },
]);

export default router;
