import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  return (
    <div className={`nav ${show ? "nav_black" : ""}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
        alt="Netflix logo"
      />
    </div>
  );
}

export default Nav;
