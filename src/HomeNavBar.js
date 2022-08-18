import { useState } from "react";
import LoginModal from "./HomeLogin";
import "./App.css";

export default function Navbar2() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="wrapper">
      <nav className="navigation">
        <a href="/" className="brand-name">
          <img
            width="200px"
            height="60px"
            className="logo"
            src="https://www.turners.co.nz/contentassets/3e15c8546917474ca0a150b18e9fd64e/turnerscars_logo_1line_horz_true-rgb-desktop.png"
            alt="Turners Cars Logo"
          />
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from Heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <a href="/home">Vehicles</a>
            </li>
            <li>
              <a href="/about">Auctions</a>
            </li>
            <li>
              <a href="/about">Finance</a>
            </li>
            <li>
              <a href="/contact">Services</a>
            </li>
            <LoginModal />
          </ul>
        </div>
      </nav>
    </div>
  );
}
