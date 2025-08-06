import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { updateProfile, loadProfile } from "../store/slices/profileSlice";
import { User, Mail, Save } from "lucide-react";
import "../styles/profilepage.scss";
const ProfilePage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { profileData } = useSelector((state) => state.profile);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: profileData,
  });

  const watchedValues = watch();

  const updateProfileHandler = (profileData) => {
    dispatch(updateProfile(profileData));
  };

  useEffect(() => {
    if (user && !profileData.username) {
      const initialProfile = {
        username: user.username || "",
        email: user.email || "",
        firstName: "",
        lastName: "",
      };
      dispatch(loadProfile(initialProfile));
      reset(initialProfile);
    }
  }, [user, profileData.username, dispatch, reset]);

  useEffect(() => {
    reset(profileData);
  }, [profileData, reset]);

  const onSubmit = (data) => {
    updateProfileHandler(data);
  };

  const hasChanges =
    JSON.stringify(watchedValues) !== JSON.stringify(profileData);

  return (
    <div className="profile-page">
      <div className="profile-page__container">
        <div className="profile-page__header">
          <h1 className="profile-page__title">Profile Settings</h1>
          <p className="profile-page__subtitle">
            Manage your personal information and preferences
          </p>
        </div>

        <div className="profile-page__card">
          <form
            className="profile-page__form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="profile-page__form-grid">
              <div className="profile-page__field">
                <label className="profile-page__label">Username</label>
                <div className="profile-page__input-wrapper">
                  <User className="profile-page__input-icon" size={20} />
                  <input
                    type="text"
                    className={`profile-page__input ${
                      errors.username ? "profile-page__input--error" : ""
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
                  <span className="profile-page__error">
                    {errors.username.message}
                  </span>
                )}
              </div>

              <div className="profile-page__field">
                <label className="profile-page__label">Email</label>
                <div className="profile-page__input-wrapper">
                  <Mail className="profile-page__input-icon" size={20} />
                  <input
                    type="email"
                    className={`profile-page__input ${
                      errors.email ? "profile-page__input--error" : ""
                    }`}
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <span className="profile-page__error">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="profile-page__field">
                <label className="profile-page__label">First Name</label>
                <div className="profile-page__input-wrapper">
                  <User className="profile-page__input-icon" size={20} />
                  <input
                    type="text"
                    className="profile-page__input"
                    placeholder="Enter your first name"
                    {...register("firstName")}
                  />
                </div>
              </div>

              <div className="profile-page__field">
                <label className="profile-page__label">Last Name</label>
                <div className="profile-page__input-wrapper">
                  <User className="profile-page__input-icon" size={20} />
                  <input
                    type="text"
                    className="profile-page__input"
                    placeholder="Enter your last name"
                    {...register("lastName")}
                  />
                </div>
              </div>
            </div>

            <div className="profile-page__actions">
              <button
                type="submit"
                className="profile-page__submit"
                disabled={!hasChanges}
              >
                <Save size={20} />
                Save Changes
              </button>
              {hasChanges && (
                <p className="profile-page__changes-notice">
                  You have unsaved changes
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
