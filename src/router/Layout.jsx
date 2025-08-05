import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "../styles/layout.scss";
import { useSelector } from "react-redux";

const Layout = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="layout">
      <Header />
      <main className={`${isAuthenticated && "layout__main"}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
