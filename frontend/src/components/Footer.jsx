import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Saturday",
      time: "9:00 AM - 5:00 PM",
    },
    {
      id: 2,
      day: "Sunday",
      time: "9:00 AM - 5:00 PM",
    },
    {
      id: 3,
      day: "Monday",
      time: "9:00 AM - 5:00 PM",
    },
    {
      id: 4,
      day: "Tuesday",
      time: "9:00 AM - 5:00 PM",
    },
    {
      id: 5,
      day: "Wednesday",
      time: "9:00 AM - 5:00 PM",
    },
  ];

  return (
    <>
      <footer className="container">
        <hr />
        <div className="content">
          <div>
            <img
              src="https://mbstu.ac.bd/assets/images/logo.png"
              alt="logo"
              className="logo-img"
              style={{ height: "200px", width: "200px" }}
            />
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span> +880921 51899</span>
            </div>
            <div>
              <MdEmail />
              <span>medical.mbstu.ac.bd</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
