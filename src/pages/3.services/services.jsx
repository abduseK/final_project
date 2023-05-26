import "./services.css";
import Scard from "../../components/service-card/card.jsx";
import AnimatedPage from "../../components/AnimatedPage";

export default function Services() {
  return (
    <AnimatedPage>
      <div className="services" id="services">
        <h1 className="services-title">Start Your Application</h1>

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
