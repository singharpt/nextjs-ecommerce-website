import * as React from "react";
import Link from "next/link";
import { toast, ToastContainer } from "react-nextjs-toast";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [currentState, setState] = React.useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });

  const addData = (e) => {
    const { name, value } = e.target;
    const user = {
      ...currentState,
      [name]: value,
    };
    setState(user);
  };

  const senddata = async (e) => {
    e.preventDefault();

    const { fname, email, mobile, password, cpassword } = currentState;

    try {
      if (
        fname === "" ||
        email === "" ||
        mobile === "" ||
        password === "" ||
        cpassword === ""
      ) {
        throw new Error("Null Credentials");
      } else if (mobile.length !== 10) {
        throw new Error("Invalid Mobile Number");
      } else if (password !== cpassword) {
        throw new Error("Password Mismatch");
      }
      const res = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          email,
          mobile,
          password,
          cpassword,
        }),
      });

      const response = await res.json();
      console.log(response);

      if (response.status === 400 || !response.data) {
        toast.notify("Invalid Details 👎!", {
          duration: 5,
          type: "error",
        });
      } else {
        setState({
          ...currentState,
          fname: "",
          email: "",
          mobile: "",
          password: "",
          cpassword: "",
        });
        toast.notify("Registration Successfully done 😃!", {
          duration: 5,
          type: "success",
        });
      }
    } catch (error) {
      toast.notify("Error in registering user, check credentials!", {
        duration: 5,
        type: "error",
      });
      console.log("front end catch block error ----> " + error.message);
    }
  };
  return (
    <div>
      <div className="signUp__upper__part">
        <Link href="/" style={{ textDecoration: "none" }}>
          <img
            className="signUp__logo"
            src="https://m.media-amazon.com/images/I/31epF-8N9LL.png"
            alt="sign up page logo"
          />
        </Link>
        <div className="signUp__box">
          <form method="POST">
            <h1 className="signUp__heading">Create Account</h1>
            <label className="signUp__box__title">Your name</label>
            <input
              className="signUp__textbox"
              type="text"
              onChange={addData}
              value={currentState.fname}
              placeholder=" First and last Name"
              name="fname"
              id="name"
            />
            <label className="signUp__box__title">Email</label>
            <input
              className="signUp__textbox"
              type="text"
              onChange={addData}
              placeholder="Email"
              value={currentState.email}
              name="email"
              id="email"
            />
            <label className="signUp__box__title">Mobile number</label>
            <input
              className="signUp__textbox"
              type="text"
              onChange={addData}
              placeholder="Mobile Number"
              value={currentState.mobile}
              name="mobile"
              id="mobile"
            />
            <label className="signUp__box__title">Password</label>
            <input
              className="signUp__textbox"
              type="password"
              onChange={addData}
              value={currentState.password}
              placeholder=" At least 6 characters"
              name="password"
              id="password"
            />
            <label className="signUp__box__title">Confirm password</label>
            <input
              className="signUp__textbox"
              type="password"
              onChange={addData}
              value={currentState.cpassword}
              name="cpassword"
              id="cpassword"
            />
            <small className="signUp__box__info">
              We will send you a text to verify your phone. Message and Data
              rates may apply.
            </small>
            <button className="SignUp__button" onClick={senddata}>
              Continue
            </button>
          </form>
          <div className="signUp__to__logIn">
            <hr />
            <p>
              Already have an account?{" "}
              <Link href="/login" style={{ textDecoration: "none" }}>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="signUp__lower__part">
        <div className="signUp__lower__info">
          <p>Conditions of Use</p>
          <p>Privacy Notice</p>
          <p>Help</p>
        </div>
        <small>© 1996-2022, Amazon.com, Inc. or its affiliates</small>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
