import "./Hero.css";
import heroPic from "./heroImage.png";
import { Link } from "react-router-dom";
export default function Hero() {
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
          <form action="#services">
            <button className="services---btn">Services</button>
          </form>

          <Link to="/users/auth">
            <button className="services---btn">Register</button>
          </Link>
        </div>
      </div>
      <div className="hero-pic">
        <img src={heroPic} alt="Welcome" className="hero-pic-img" />
      </div>
    </div>
  );
}
