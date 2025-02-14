import "./header.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import dot from "./full-stop.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  let menuRef = useRef(null);
  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
  });
  return (
    <div className="nav">
      <h3 className="logo">KKTasks</h3>

      <div className="menus" ref={menuRef}>
        <ul className="menu-lists">
          <li>
            <Link className="links" to="/">
              Home
            </Link>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <div
            className="menu-trigger"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Notification
          </div>
          <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
            <h2>Notifications</h2>
            <hr />
            <ul>
              <DropDownItem
                message={"Beki has commented on this project, hehe"}
              />
              <DropDownItem message={"Your ID is ready to collect..."} />
              <DropDownItem message={"Your ID is ready to collect..."} />
            </ul>
          </div>
          <li>
            <Link className="links" to="/users/Auth">
              Sign Up
            </Link>
          </li>
          <li>
            <Link className="links" to="/admin">
              Account
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

  function DropDownItem(props) {
    return (
      <li className="dropdownItem">
        <div className="messages">
          <p>{props.message}</p>
          <img src={dot} alt="" />
        </div>
      </li>
    );
  }
}
