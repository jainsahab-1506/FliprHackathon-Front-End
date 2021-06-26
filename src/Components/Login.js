import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "./utils/axios.js";
import { requests } from "./utils/requests";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../store/modules/auth/auth.action";

export default function Login(props) {
  const dispatch = useDispatch();
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
  function HandleSubmit(e) {
    const data = {
      username: email,
      password: password,
    };
    e.preventDefault();
    async function doLogin() {
      const request = await axios.post(requests["doLogin"], data);
      return request;
    }
    doLogin()
      .then((res) => {
        const data = res.data;
        const { token: token, profile: userinfo } = res.data;

        dispatch(signInSuccess({ token, userinfo }));
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
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
                <a onClick={HandleSubmit} href className="save-btn">
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
