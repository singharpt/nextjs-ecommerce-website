import React, { useState, useContext } from "react";
import { User_context } from "../components/context/context_provider";
import { toast, ToastContainer } from "react-nextjs-toast";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Login = () => {
  // get the user context to store user detail
  const { account, setAccount } = useContext(User_context);

  // create state to manage login credentials
  const [currentState, setState] = useState({
    email: "",
    password: "",
  });

  const changeData = (e) => {
    const { name, value } = e.target;
    const user = {
      ...currentState,
      [name]: value,
    };
    setState(user);
  };

  const senddata = async (event) => {
    try {
      event.preventDefault();
      const { email, password } = currentState;
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const reponse = await res.json();

      if (reponse.status === 400 || !reponse.data) {
        throw new Error("User not found");
      } else {
        setAccount(reponse.data);
        setState({ ...currentState, email: "", password: "" });
        toast.notify(`User logged in successfully`, {
          duration: 5,
          type: "success",
        });
      }
    } catch (error) {
      toast.notify(`Error while logging in`, {
        duration: 5,
        type: "error",
      });

      console.log("Error in login page ----> " + error.message);
    }
  };

  return (
    <div>
      <div className="login__upp">
        <Link href="/" style={{ textDecoration: "none" }}>
          <img
            className="login__logo"
            src="https://m.media-amazon.com/images/I/31epF-8N9LL.png"
            alt="login page logo"
          />
        </Link>
        <div className="login__box">
          <form method="post">
            <h1 className="login__box__heading">Sign-In</h1>
            <label className="login__box__title">
              Email or mobile phone number
            </label>
            <input
              className="login__textbox"
              onChange={changeData}
              value={currentState.email}
              type="text"
              name="email"
              id="email"
            />
            <label className="login__box__title">Password</label>
            <input
              className="login__textbox"
              onChange={changeData}
              value={currentState.password}
              type="password"
              name="password"
              id="password"
            />
            <button className="login__button" onClick={senddata}>
              Sign In
            </button>
          </form>
          <small className="login__box__info1">
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </small>
          <p className="login__box__info2">Need help?</p>
        </div>
        <div className="login__horizationLine">
          <h2>
            <span>
              <small>New to Amazon?</small>
            </span>
          </h2>
        </div>
        <button className="login__create__account__button">
          <Link href="/register" style={{ textDecoration: "none" }}>
            Create your Amazon account
          </Link>
        </button>
      </div>
      <div className="login__bellow">
        <div className="login__bellow__line1">
          <p>Conditions of Use</p>
          <p>Privacy Notice</p>
          <p>Help</p>
        </div>
        <small>© 1996-2022, Amazon.com, Inc. or its affiliates</small>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
