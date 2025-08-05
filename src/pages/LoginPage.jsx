import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login, clearError } from "../store/slices/authSlice";
import { Eye, EyeOff, User, Lock } from "lucide-react";
import "../styles/loginpage.scss";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const onSubmit = async (data) => {
    const result = await dispatch(login(data));
    if (result.success) {
      reset();
      navigate("/dashboard", { replace: true });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="login-page__container">
        <div className="login-page__card">
          <div className="login-page__header">
            <h1 className="login-page__title">Todo Management </h1>
            <p className="login-page__subtitle">Sign in to your account</p>
          </div>

          <div className="login-page__demo">
            <p className="login-page__demo-text">Demo Credentials:</p>
            <p className="login-page__demo-creds">
              <strong>Username:</strong> Hpk <br />
              <strong>Password:</strong> PerumalHpk
            </p>
          </div>

          <form className="login-page__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="login-page__field">
              <label className="login-page__label">Username</label>
              <div className="login-page__input-wrapper">
                <User className="login-page__input-icon" size={20} />
                <input
                  type="text"
                  className={`login-page__input ${
                    errors.username ? "login-page__input--error" : ""
                  }`}
                  placeholder="Enter your username"
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "Username must be at least 3 characters",
                    },
                  })}
                />
              </div>
              {errors.username && (
                <span className="login-page__error">
                  {errors.username.message}
                </span>
              )}
            </div>

            <div className="login-page__field">
              <label className="login-page__label">Password</label>
              <div className="login-page__input-wrapper">
                <Lock className="login-page__input-icon" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  className={`login-page__input ${
                    errors.password ? "login-page__input--error" : ""
                  }`}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                <button
                  type="button"
                  className="login-page__password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <span className="login-page__error">
                  {errors.password.message}
                </span>
              )}
            </div>

            {error && <div className="login-page__server-error">{error}</div>}

            <button
              type="submit"
              className="login-page__submit"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
