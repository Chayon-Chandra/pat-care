import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "/logo.png"
import { AuthConText } from "../../Context/AuthContext/AuthContext";

const NavBar = () => {
  const {user, signOutUser} = use(AuthConText)

  const handleSignOutUser = () =>{
    signOutUser()
    .then( result => {
      console.log(result.user)
    })
    .catch(error => {
      console.log(error.massage)
    })
  }

  const links = (
    <>
      <li> <NavLink to="/">Home</NavLink> </li>
      <li> <NavLink to="/services">Services</NavLink> </li>
      <li> <NavLink to="/profile">My Profile</NavLink> </li>
      
    </>
  );
  

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
          <h2>Pat Care</h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="pr-3 relative group">
           <img className="w-10 h-10 rounded-full object-cover cursor-pointer " referrerPolicy="no-referrer" src={user?.photoURL ||"https://i.ibb.co.com/fzHgBZ2d/images-15.jpg"} alt="" />
            <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {user?.displayName || "User Name"}
            </span>
        </div>
        <div>
          {user ? <a onClick={handleSignOutUser} className="btn">Sign Out</a> : <Link to="/login" className="btn">Login</Link>}
        </div>
        
      </div>
    </div>
  );
};

export default NavBar;
