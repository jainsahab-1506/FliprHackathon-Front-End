import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Login(props) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      setemail(value);
    } else {
      setpassword(value);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }
  return (
    <div>
      <div className="login-card">
        <h1>Login</h1>
        <div className="form-container">
          <form id="login-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                value={email}
                className="text-input"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="text-input"
              />
            </div>
            <div className="submit-sec">
              <div className="submit-cont">
                <a onClick={handleSubmit} href className="save-btn">
                  Login
                </a>
              </div>
              <div className="submit-google-cont">
                <div className="g-signin2" data-onsuccess="onSignIn" />
              </div>
            </div>
            <div className="form-group">
              <Link to="/register" className="sign-up-link">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
