import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";
import "../styles/notfoundpage.scss";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="not-found__container">
        <div className="not-found__content">
          <h1 className="not-found__title">404</h1>
          <h2 className="not-found__subtitle">Page Not Found</h2>
          <p className="not-found__description">
            The page you're looking for doesn't exist.
          </p>

          <div className="not-found__actions">
            <button
              className="not-found__button"
              onClick={() => navigate("/todos")}
            >
              <Home size={20} />
              Go to Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
