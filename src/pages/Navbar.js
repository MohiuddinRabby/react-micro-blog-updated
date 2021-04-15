import React, { useContext } from "react";
import Tippy from "@tippyjs/react";
import { TwitterPicker } from "react-color";
import { ColorContext } from "../global/ColorContext";
import logo from "../img/logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { selectedColor, setSelectedColor } = useContext(ColorContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link
            to="/"
            className="navbar-brand"
            style={{ color: selectedColor, fontWeight: "bold" }}
          >
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <img
                    style={{
                      backgroundColor: selectedColor,
                      height: "30px",
                      width: "30px",
                      borderRadius: "100%",
                    }}
                    src={logo}
                    alt=""
                  />
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Tippy
                interactive={true}
                placement={"bottom"}
                content={
                  <TwitterPicker
                    color={selectedColor}
                    onChangeComplete={(color) => setSelectedColor(color.hex)}
                  />
                }
              >
                <button
                  style={{
                    backgroundColor: selectedColor,
                    border: "none",
                    height: "30px",
                    width: "30px",
                    outline: "none",
                    marginRight: "5px",
                  }}
                >#</button>
              </Tippy>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
