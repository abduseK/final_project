import "./services.css";
import Scard from "../../components/service-card/card.jsx";

export default function Services() {
  return (
    <div className="services">
      <h1 className="services-title">
        Apply for your ID, Birth Certificate, <br></br>Death Certificate and
        Other Services HERE!
      </h1>
      <div className="services-cards">
        <div className="services--card">
          <div className="services--card-items">
            <Scard />
          </div>
        </div>
      </div>
    </div>
  );
}
