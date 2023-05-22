import "./header.css";
import { Link } from "react-router-dom";
import Try from "../try";
import Services from "../../pages/3.services/services";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Header() {
  return (
    <div className="nav">
      <h3 className="logo">KKTasks</h3>
      <div className="menus">
        <ul className="menu-lists">
          <li>
            <Link className="links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="links" to="/services">
              Services
            </Link>
          </li>
          <li>About</li>
          <li>
            <Link className="links" to="/admin">
              Account
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
