
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Details:", data);

    alert("Login Successful!");

    reset();

    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-card">

        {/* Left Side */}
        <div className="login-left">

          <div className="login-brand">
            <span className="brand-icon">✦</span>
            ShopKart
          </div>

          <div className="login-welcome">
            <h1>
              Welcome
              <br />
              Back!
            </h1>

            <p>
              Discover amazing products and
              enjoy a seamless shopping
              experience with us.
            </p>
          </div>

          <div className="login-decoration">
            <div className="circle circle-one"></div>
            <div className="circle circle-two"></div>
            <div className="circle circle-three"></div>
          </div>

          <div className="login-footer">
            Your shopping journey starts here.
          </div>

        </div>

        {/* Right Side */}
        <div className="login-right">

          <div className="login-form-header">
            <h2>Sign In</h2>

            <p>
              Don't have an account?{" "}
              <a href="/register">Create Account</a>
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Email */}
            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                className="form-control login-input"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />

              {errors.email && (
                <p className="error-message">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="form-group">
              <label>Password</label>

              <div className="password-wrapper">

                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control login-input"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message:
                        "Password must be at least 6 characters",
                    },
                  })}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

              {errors.password && (
                <p className="error-message">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember Me */}
            <div className="login-options">

              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <a href="/forgot-password">
                Forgot Password?
              </a>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="login-button"
            >
              Sign In
              <span> → </span>
            </button>

            {/* Divider */}
            <div className="login-divider">
              <span>OR</span>
            </div>

            {/* Google Login UI */}
            <button
              type="button"
              className="google-login"
              onClick={() =>
                alert("Google login is not connected yet.")
              }
            >
              <span className="google-icon">G</span>
              Continue with Google
            </button>

          </form>

          <p className="login-bottom-text">
            By signing in, you agree to our{" "}
            <a href="/terms">Terms</a> and{" "}
            <a href="/privacy">Privacy Policy</a>.
          </p>

        </div>

      </div>
    </div>
  );
};

export default Login;
