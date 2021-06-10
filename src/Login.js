import React, { useState } from "react";
import "./Login.css";

import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {})
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <h1>Login Page</h1>
      <Link to="/">
        <img
          className="login_logo"
          src="https://kfinancial.com/wp-content/uploads/2019/02/amazon-logo-vector-png-vector-png-free-amazon-logos-705.jpg"
        />
      </Link>
      <form onSubmit={login}>
        <div className="login_container">
          <h1>Sign-In</h1>
          <h5>E-mail</h5>
          <input
            type="email"
            name="email"
            id=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            id=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Button type="submit" className="login_signInButton" onClick={login}>
            Login
          </Button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            facilis accusantium earum ipsum a voluptatem eum beatae non illo
            dicta saepe animi, error repudiandae architecto nemo aperiam.
            Veritatis, cum voluptatum.
          </p>
          <br />
          <Button className="login_registerButton" onClick={register}>
            Create Your Amazon Account
          </Button>
          <br />
        </div>
      </form>
    </div>
  );
}

export default Login;
