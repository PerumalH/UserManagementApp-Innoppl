import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you're looking for doesn't exist</p>

          <div>
            <button onClick={() => navigate("/dashboard")}>
              <Home size={20} />
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
