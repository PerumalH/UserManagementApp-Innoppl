import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { useSelector } from "react-redux";
import DashBoardPage from "../pages/DashBoardPage";

const AppRouter = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthenticated ? <DashBoardPage /> : <LoginPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
