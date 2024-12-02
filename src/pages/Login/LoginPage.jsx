import React from "react";
import "./LoginPage.css";
function LoginPage() {
  return (
    <div>
      <div className="signup-navbar">
        <div>
          <img src="/log.png" />
        </div>{" "}
      </div>
      <div className="signup-page">
        <div className="sign-up-box flex">
          <div className="left-image">
            <img src="/log.png" />
          </div>
          <div>
            <div className="login-head mb-6">Login</div>
            <div className="mb-6">Login to access your Booking Account</div>
            <div>Email</div>
            <div>
              <input className="input-style-long" placeholder="Easyset@gmail.com" />
            </div>
            <div>Password</div>
            <div>
              <input className="input-style-long"/>
            </div>
            <div className="flex">
              <div className="flex">
                <input type="checkbox" />
                <div>Remember me</div>
              </div>
              <div className="ml-auto">Forgot Password</div>
            </div>
            <div>
              <div className="text-center mb-6">or</div>
              <div className="flex">
                <img src="/login/facebook.png" />
                <img src="/login/apple.png" />
                <img src="/login/google.png" />
              </div>
              <button className="sign-in-button"> Login</button>
              <div>Don't have an account in Booking yet? </div>
              <a href="./register">Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
