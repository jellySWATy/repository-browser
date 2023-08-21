import { createBrowserRouter } from "react-router-dom";
import { Main } from "../../pages/Main";
import { Detailed } from "../../pages/Detailed";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "repositories/:owner/:repo",
    element: <Detailed />,
  },
]);
