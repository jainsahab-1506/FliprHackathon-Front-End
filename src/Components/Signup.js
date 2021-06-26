import React from "react";

export default function Signup() {
  return (
    <div>
      <div className="signup-card">
        <h1>Sign Up</h1>
        <div className="form-container">
          <form id="login-form">
            <div className="form-group">
              <label>Email</label>
              <input type="text" className="text-input" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="text-input" />
            </div>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" className="text-input" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" className="text-input" />
            </div>
            <div className="submit-sec">
              <div className="submit-cont">
                <a href className="save-btn">
                  SignUp
                </a>
              </div>
            </div>
            <div className="form-group">
              <a href className="sign-up-link">
                Sign in
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
