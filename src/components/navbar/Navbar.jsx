import "./navbar.css";
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import nekoh from "../../assets/nekoh2.svg";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#WhatNekoh">Who is Nekoh</a>
    </p>
    <p>
      <a href="#Posibility">Services</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Blog</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="nekoh__navbar">
      <div className="nekoh__navbar-links">
        <div className="nekoh__navbar-links_logo">
          <img src={nekoh} alt="logo" />
        </div>
        <div className="nekoh__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="nekoh__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>

      <div className="nekoh__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="nekoh__navbar-menu_container scale-up-center">
            <div className="nekoh__navbar-menu_container-links">
              <Menu />
              <div className="nekoh__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
