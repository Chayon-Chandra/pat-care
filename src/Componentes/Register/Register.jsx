import React, { use, useState } from "react";
import { Link } from "react-router";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { AuthConText } from "../../Context/AuthContext/AuthContext";
import { sendEmailVerification, updateProfile } from "firebase/auth";


const Register = () => {
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [error, setError] = useState("");
  const [registerShowPassword, setRegisterShowPassword] = useState(false);

  const { createUser, setLoading } = use(AuthConText);

  const registerHandle = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    //    if (!passwordRegex.test(password)) {
    //   setError(
    //     "Password must be at least 6 characters and include 1 lowercase, 1 uppercase, and 1 special character"
    //   );
    //   return;
    // }
    setError("");
    setRegisterSuccess(false);

    createUser(email, password)

      .then((result) => {
        console.log(result.user);
        sendEmailVerification(result.user)
        .then(() => {
        alert("Please verification your email")
      })
      .catch((error) =>{
        setError(error.message)
      })

        setRegisterSuccess(true);
        e.target.reset();

        const profile = {
          displayName: name,
          photoURL: photo,
        };
        updateProfile(result.user, profile)
          .then(() => {
            
          })
          .catch((error) => {
            console.log(error.message);
          }).finally(() =>{
            setLoading(false)
          })
      })
      .catch((error) => {
        console.log(error.message);
      })

     
  };


  const handleRegistershwoPassword = (event) => {
    event.preventDefault();
    setRegisterShowPassword(!registerShowPassword);
  };

  return (
    <div className="hero bg-base-200 min-h-screen py-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-3xl text-center">Register</h2>
          <form onSubmit={registerHandle}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Your Name"
                name="name"
              />
              <label className="label">Photo</label>
              <input
                type="text"
                className="input"
                placeholder="Photo URL"
                name="photo"
              />

              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
              />
              <label className="label">Password</label>
              <div>
                <input
                  type={registerShowPassword ? "text" : "password"}
                  className="input relative"
                  placeholder="Password"
                  name="password"
                />
                <button
                  onClick={handleRegistershwoPassword}
                  className=" btn-xs absolute right-13 top-80"
                >
                  {registerShowPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>

              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            {registerSuccess && (
              <p className="text-green-500">Account Created Successfully. </p>
            )}
            {error && <p className="text-red-500">{error}</p>}
          </form>
          <p className="text-center">
        
            Don't have an Account?
            <Link to="/login" className="text-blue-600 underline">
              Log Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
