// gitHub部屬不支援createBrowserRouter，所以改用createHashRouter
import { createHashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NoticePage from "./pages/NoticePage";
import UserInfoPage from "./pages/UserInfoPage";
import DivinationPage from "./pages/DivinationPage";
import ResultPage from "./pages/ResultPage";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/notice",
    element: <NoticePage />,
  },
  {
    path: "/userInfo",
    element: <UserInfoPage />,
  },
  {
    path: "/divination",
    element: <DivinationPage />,
  },
  {
    path: "/result/:hexagramID",
    element: <ResultPage />,
  },
]);

export default router;
