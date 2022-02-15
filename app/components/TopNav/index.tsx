import React, { useState } from "react";
import { NavLink } from "remix";

const TopNav = () => {
  const [open, setOpen] = useState(false);
  const [showOrHideText, setShowOrHideText] = useState("show");

  const handleOnClick = () => {
    setOpen(!open);
    setShowOrHideText(open ? "show" : "hide");
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      setOpen(!open);
      setShowOrHideText(open ? "show" : "hide");
    }
  };

  let activeStyle = {
    textDecoration: "underline",
    textUnderlineOffset: "4px",
  };

  return (
    <>
      <div
        role="button"
        aria-pressed={open}
        aria-haspopup="dialog"
        tabIndex={0}
        className={`hamburgerMenu-nav-${showOrHideText}`}
        onClick={handleOnClick}
        onKeyDown={handleOnKeyDown}>
        <svg
          role="img"
          aria-labelledby="title desc"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <title id="title">Hamburger Menu</title>
          <desc id="desc">
            Three lines stacked on top of each other with space between each
          </desc>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      {open ? (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <button
              onClick={handleOnClick}
              className="close modal-button-close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="hamburgerMenu-list-container">
              <li className="hamburgerMenu-list-item">
                <NavLink
                  onClick={handleOnClick}
                  className="hamburgerMenu-list-item-text"
                  to={"/"}
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  {"Home"}
                </NavLink>
              </li>
              <li className="hamburgerMenu-list-item">
                <NavLink
                  onClick={handleOnClick}
                  className="hamburgerMenu-list-item-text"
                  to={"about"}
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  {"About"}
                </NavLink>
              </li>
              <li className="hamburgerMenu-list-item">
                <NavLink
                  onClick={handleOnClick}
                  className="hamburgerMenu-list-item-text"
                  to={"skills"}
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  {"Skills"}
                </NavLink>
              </li>
              {/* <li className='hamburgerMenu-list-item'>
                <NavLink
                  onClick={handleOnClick}
                  className='hamburgerMenu-list-item-text'
                  to={'blogs'}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {'Blogs'}
                </NavLink>
              </li> */}
              <li className="hamburgerMenu-list-item">
                <NavLink
                  onClick={handleOnClick}
                  className="hamburgerMenu-list-item-text"
                  to={"contact"}
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  {"Contact"}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
      <nav className="header-nav-hide" data-primary-nav>
        <ul data-primary-list>
          <li data-primary-list-item>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              data-primary-nav-text
              to={"/"}>
              {"Home"}
            </NavLink>
          </li>
          <li data-primary-list-item>
            <NavLink
              data-primary-nav-text
              to={"about"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              {"About"}
            </NavLink>
          </li>
          <li data-primary-list-item>
            <NavLink
              data-primary-nav-text
              to={"skills"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              {"Skills"}
            </NavLink>
          </li>
          {/* <li data-primary-list-item>
            <NavLink
              data-primary-nav-text
              to={'blogs'}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {'Blogs'}
            </NavLink>
          </li> */}
          <li data-primary-list-item>
            <NavLink
              data-primary-nav-text
              to={"contact"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              {"Contact"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TopNav;
