import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  const [email, setemail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setpassword] = useState("");
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      setemail(value);
    } else if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
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
      <div className="signup-card">
        <h1>Sign Up</h1>
        <div className="form-container">
          <form id="login-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={email}
                className="text-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                className="text-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                className="text-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                className="text-input"
                onChange={handleChange}
              />
            </div>
            <div className="submit-sec">
              <div className="submit-cont">
                <a onClick={handleSubmit} className="save-btn">
                  SignUp
                </a>
              </div>
            </div>
            <div className="form-group">
              <Link to="/login" className="sign-up-link">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
