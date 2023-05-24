import "./home.css";
import heroPic from "./heroImage.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage";
import Services from "../3.services/services.jsx";
import Hero from "../../components/StatComponent/Stat.jsx";
export default function Home() {
  return (
    <AnimatedPage>
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
            <Link to="/services">
              <button className="register---btn">Services</button>
            </Link>
            <form action="#works">
              <button className="services---btn">Register</button>
            </form>
          </div>
        </div>
        <div className="hero-pic">
          <img src={heroPic} alt="Welcome" className="hero-pic-img" />
        </div>
      </div>
      <Hero />
      <Routes>
        <Route path="/services" Component={Services} />
      </Routes>
    </AnimatedPage>
  );
}
