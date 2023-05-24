import "./services.css";
import Scard from "../../components/service-card/card.jsx";
import AnimatedPage from "../../components/AnimatedPage";

export default function Services() {
  return (
    <AnimatedPage>
      <div className="services">
        <h1 className="services-title">
          <span className="services-title-header">Start</span> <br></br>
          <span className="s-span">Your Application</span> <br></br>
        </h1>

        <div className="services-cards">
          <div className="services--card">
            <div className="services--card-items">
              <Scard />
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
