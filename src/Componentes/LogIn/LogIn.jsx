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
  const { signIn, setLoading, signInGoogle, setUser } = use(AuthConText);

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

        if (!result?.user?.emailVerified) {
          alert("you have to verification your account");
          return;
        }
        if (!result.user.emailverified) {
          setError("please verified your email");
        }
        event.target.reset();
        setUser(result.user)
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

  const handleLoginPassword = (event) => {
    event.preventDefault();
    setLoginShowPassword(!loginShowPasword);
  };

   const handleGoogleSignIn = () => {
    signInGoogle()
    .then(result => {
      console.log(result.user)
      setUser(result.user)
      navigate(location.state || "/");
    })
    .catch((error) => {
      console.log(error.message)
    })
   };

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
                <button
                  onClick={handleLoginPassword}
                  className="btn-xs absolute right-13 top-45"
                >
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
          {/* google signIn */}
          <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

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
