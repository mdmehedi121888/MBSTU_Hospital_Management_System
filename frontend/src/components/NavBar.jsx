import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main"; // Import your context
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context); // Use the Context here
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/v1/user/patient/logout",
        { withCredentials: true }
      );
      toast.success(res.data.message);
      setIsAuthenticated(false);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const gotoLogin = () => {
    navigateTo("/login");
  };

  return (
    <nav className="container">
      <div className="logo">
        {" "}
        <img
          src="https://mbstu.ac.bd/assets/images/logo.png"
          alt="logo"
          className="logo-img"
          style={{ width: "100px", height: "100px" }}
        />
      </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to={"/"}>HOME</Link>
          <Link to={"/appointment"}>APPOINMENT</Link>
          <Link to={"/about"}>ABOUT US</Link>
        </div>
        {isAuthenticated ? (
          <button className="logoutBtn btn" onClick={handleLogout}>
            LOGOUT
          </button>
        ) : (
          <button className="loginBtn btn" onClick={gotoLogin}>
            LOGIN
          </button>
        )}
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu></GiHamburgerMenu>
      </div>
    </nav>
  );
};

export default NavBar;
