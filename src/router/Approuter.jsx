import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>login</div>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
