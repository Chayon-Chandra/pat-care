import { sendPasswordResetEmail } from "firebase/auth";
import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthConText } from "../../Context/AuthContext/AuthContext";
import { auth } from "../../firebase/firebase.init";
import { FiEye, FiEyeOff } from "react-icons/fi";


const LogIn = () => {
  const [error, setError] = useState("");
  const [loginShowPasword, setLoginShowPassword] = useState(false);

  const emailRaf = useRef();
  const { signIn, setLoading } = use(AuthConText);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    setError("");

    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        if (!result.user.emailverified) {
          setError("please verified your email");
        }
        event.target.reset();
        navigate(location.state || "/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRaf.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("please cheek your email");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleLoginPassword = (event) =>{
    event.preventDefault();
    setLoginShowPassword(!loginShowPasword);
  }

  return (
    <div className="hero bg-base-200 min-h-screen py-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-3xl text-center">Log In</h2>
          <form onSubmit={handleLogIn}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                ref={emailRaf}
                type="email"
                className="input"
                name="email"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <div>
                <input
                  type={loginShowPasword ? "text" : "password"}
                  className="input relative"
                  name="password"
                  placeholder="Password"
                />
                <button onClick={handleLoginPassword} className="btn-xs absolute right-13 top-45">
                  {loginShowPasword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              <div>
                <a onClick={handleForgetPassword} className="link link-hover">
                  Forgot password?
                </a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>

          {error && <p className="text-red-500">{error}</p>}
          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
