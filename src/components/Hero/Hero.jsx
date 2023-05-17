import "./hero.css";
import heroPic from "./heroImage.png";
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
          <form action="#works">
            <button className="services---btn">Services</button>
          </form>
          <form action="#works">
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
