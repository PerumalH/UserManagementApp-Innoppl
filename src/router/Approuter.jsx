import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { useSelector } from "react-redux";
import DashBoardPage from "../pages/DashBoardPage";
import Layout from "./Layout";
import ProfilePage from "../pages/ProfilePage";
import TodoPage from "../pages/TodoPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: isAuthenticated ? <TodoPage /> : <LoginPage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        // {
        //   path: "dashboard",
        //   element: (
        //     <ProtectedRoute>
        //       <DashBoardPage />
        //     </ProtectedRoute>
        //   ),
        // },
        {
          path: "profile",
          element: (
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          ),
        },
        {
          path: "todos",
          element: (
            <ProtectedRoute>
              <TodoPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
