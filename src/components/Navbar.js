import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  //FUNCTION handleClick ADALAH PERUBAHAN HAMBURGER
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //JIKA LAYAR KURANG DARI 960PX MAKA HAMBURGER DIBUAT DAN TAB HILANG
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* LOGO */}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <h2>
              ASTORE
              <i className="far fa-play-circle" />
            </h2>
          </Link>

          {/* HAMBURGEN ICON */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          {/* TAB  */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                FEATURED
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/travel"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                BLOG
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                SUBSCRIBE
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contactus"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                CONTACT US
              </Link>
            </li>
            <li>
              <Button
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--medium"
                onClick={console.log("hey")}
              >
                SIGN IN
              </Button>
            </li>
            <li>
              <Button
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--medium"
                onClick={console.log("hey")}
              >
                SIGN UP
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
