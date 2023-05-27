import BcertPic from "./card-images/Bcert.png";
import RregisterPic from "./card-images/register2.png";
import IdPic from "./card-images/id.png";
import DthPic from "./card-images/death2.png";
import WedPic from "./card-images/wedding.png";
import "./card.css";
import AnimatedPage from "../AnimatedPage";
import IDForm from "../Forms/IdForm/IDForm";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
export default function ServieCard() {
  return (
    <AnimatedPage>
      <div>
        <div className="card-grid">
          <Link to="/">
            <div className="card">
              <div className="card--items">
                <img className="card--imgs" src={RregisterPic} alt="" />
                <h5 className="card--title">Residential Registration</h5>
              </div>
            </div>
          </Link>
          <Link to="/home/idform">
            <div className="card">
              <div className="card--items">
                <img className="card--imgs" src={IdPic} alt="" />
                <h5 className="card--title">Apply ID</h5>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="card">
              <div className="card--items">
                <img className="card--imgs" src={BcertPic} alt="" />
                <h5 className="card--title">Apply for Birth Certificate</h5>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="card">
              <div className="card--items">
                <img className="card--imgs" src={DthPic} alt="" />
                <h5 className="card--title">Apply for Death Certificate</h5>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="card">
              <div className="card--items">
                <img className="card--imgs" src={WedPic} alt="" />
                <h5 className="card--title">Apply for Wedding Certificate</h5>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="card">
              <div className="card--items">
                <img className="card--imgs" src={BcertPic} alt="" />
                <h5 className="card--title">Send Feedback and Complaint</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/home/idform" Component={IDForm} />
      </Routes>
    </AnimatedPage>
  );
}
