import "./home.css";
import heroPic from "./heroImage.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero-section">
      <div className="hero-intro">
        <h1>
          The Simplest Way to Apply for Your ID, Birth and Other Certificates
        </h1>
        <p className="hero-text">
          We assit you to apply for your birth, death, wedding certificates,
          apply for residential registration and other services
        </p>
        <div className="hero-btns">
          <form action="#works">
            <button className="services---btn">Services</button>
          </form>
          <form action="#register">
            <button className="register---btn">Register</button>
          </form>
        </div>
      </div>
      <div className="hero-pic">
        <img src={heroPic} alt="Welcome" className="hero-pic-img" />
      </div>
    </div>
  );
}
