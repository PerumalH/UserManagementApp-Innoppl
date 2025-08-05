import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { logout } from "../store/slices/authSlice";
import { User, LogOut, Home, CheckSquare } from "lucide-react";
import "../styles/header.scss";

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__brand">
          <h1 className="header__title">Todo Management</h1>
        </div>

        <nav className={`header__nav`}>
          <button
            className={`header__nav-item ${
              location.pathname === "/dashboard"
                ? "header__nav-item--active"
                : ""
            }`}
            onClick={() => handleNavigation("/dashboard")}
          >
            <Home size={20} />
            <span>Dashboard</span>
          </button>
          <button
            className={`header__nav-item ${
              location.pathname === "/todos" ? "header__nav-item--active" : ""
            }`}
            onClick={() => handleNavigation("/todos")}
          >
            <CheckSquare size={20} />
            <span>Todos</span>
          </button>
          <button
            className={`header__nav-item ${
              location.pathname === "/profile" ? "header__nav-item--active" : ""
            }`}
            onClick={() => handleNavigation("/profile")}
          >
            <User size={20} />
            <span>Profile</span>
          </button>
        </nav>

        <div>
          <button className="header__logout" onClick={handleLogout}>
            <LogOut size={20} />
            <span className="header__logout-text">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
