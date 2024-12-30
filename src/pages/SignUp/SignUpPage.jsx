import React from "react";
import "./SignUpPage.css";
function SignUpPage() {
  return (
    <div>
      <div className="signup-navbar">
        <div>
          <img src="/log.png" />
        </div>{" "}
      </div>
      <div className="signup-page">
        <div className="sign-up-box flex">
          <div className="left-imhage">
            <img src="/log.png" />
          </div>
          <div>
            <div className="login-head mb-6">Register</div>
            <div className="mb-6">Login to access your Booking Account</div>
            <div className="flex">
              <div>
                <div>First Name</div>
                <div>
                  <input className="input-style" placeholder="Easyset24" />
                </div>
              </div>
              <div>
                <div>Last Name</div>
                <div>
                  <input className="input-style" placeholder="Easyset24" />
                </div>
              </div>
            </div>
            <div>Email</div>
            <input
              className="input-style-long"
              placeholder="EasySet@gmail.com"
            />
            <div>Password</div>
            <div>
              <input className="input-style-long" type="password" />
            </div>
            <div>Confirm Password</div>
            <div>
              <input className="input-style-long" type="password" />
            </div>
            <div className="flex">
              <div className="flex">
                <input type="checkbox" />
                <div>I agree to all the Terms and Privacy Policies</div>
              </div>
            </div>
            <div>
              <button className="register-now"> Register Now</button>

          
              <div>Don't have an account in Booking yet? </div>
              <div>Already have an account? Login </div>
              <div className="text-center mb-6">or</div>
              <div className="flex">
                <img src="/login/facebook.png" />
                <img src="/login/apple.png" />
                <img src="/login/google.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
