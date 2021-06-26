import React from "react";

export default function Login(props) {
  return (
    <div>
      <div className="content">
        <div className="container login-container">
          <div className="region">
            <div className="login-card">
              <h1>Login</h1>
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
                  <div className="submit-sec">
                    <div className="submit-cont">
                      <a href className="save-btn">
                        Login
                      </a>
                    </div>
                    <div className="submit-google-cont">
                      <div className="g-signin2" data-onsuccess="onSignIn" />
                    </div>
                  </div>
                  <div className="form-group">
                    <a href className="sign-up-link">
                      Sign Up
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
