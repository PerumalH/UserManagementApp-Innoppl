import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { logout } from "../store/slices/authSlice";
import { User, LogOut, Home, CheckSquare, X, Menu } from "lucide-react";
import "../styles/header.scss";
import { useState } from "react";

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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

        <nav
          className={`header__nav  ${
            isMobileMenuOpen ? "header__nav--open" : ""
          }`}
        >
          {/* <button
            className={`header__nav-item ${
              location.pathname === "/dashboard"
                ? "header__nav-item--active"
                : ""
            }`}
            onClick={() => handleNavigation("/dashboard")}
          >
            <Home size={20} />
            <span>Dashboard</span>
          </button> */}
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

        <div className="header__user">
          <span className="header__username">Welcome, {user?.username}</span>
          <button className="header__logout" onClick={handleLogout}>
            <LogOut size={20} />
            <span className="header__logout-text">Logout</span>
          </button>
        </div>
        <button className="header__mobile-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
