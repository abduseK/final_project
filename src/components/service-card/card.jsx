import BcertPic from "./card-images/Bcert.png";
import RregisterPic from "./card-images/register2.png";
import IdPic from "./card-images/id.png";
import DthPic from "./card-images/death2.png";
import WedPic from "./card-images/wedding.png";
import Complain from "./card-images/complain.jpg";
import "./card.css";
import AnimatedPage from "../AnimatedPage";
import IDForm from "../Forms/IdForm/IDForm";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AuthPage from "../authForms/AuthComponent.jsx";
import BirthForm from "../Forms/BirthForm/BirthForm";
import DeathForm from "../Forms/DeathForm/DeathForm";
import WedForm from "../Forms/WeddingForm/WedForm";
import RRForm from "../Forms/ResidentRegForm/RRForm";
import { useState } from "react";
import SuccessImage from "../Forms/Complain/image2.svg";
import SyncLoader from "react-spinners/SyncLoader";

export default function ServieCard() {
  const [showDialog, setShowDialog] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
    setSubmitted(false);
  };

  const handleComplainSubmission = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  if (showDialog) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <AnimatedPage>
      <div>
        <div className="card-grid">
          <Link to="/application/resident">
            <div className="card">
              <div className="card--items">
                <img className="card--imgs" src={RregisterPic} alt="" />
                <h5 className="card--title">Residential Registration</h5>
              </div>
            </div>
          </Link>
          <Link to="/application/id">
            <div className="card">
              <div className="card--items">
                <img className="card--imgs" src={IdPic} alt="" />
                <h5 className="card--title">Apply ID</h5>
              </div>
            </div>
          </Link>
          <Link to="/application/birth">
            <div className="card">
              <div className="card--items">
                <img className="card--imgs" src={BcertPic} alt="" />
                <h5 className="card--title">Apply for Birth Certificate</h5>
              </div>
            </div>
          </Link>
          <Link to="/application/death">
            <div className="card">
              <div className="card--items">
                <img className="card--imgs" src={DthPic} alt="" />
                <h5 className="card--title">Apply for Death Certificate</h5>
              </div>
            </div>
          </Link>
          <Link to="/application/wedding">
            <div className="card">
              <div className="card--items">
                <img className="card--imgs" src={WedPic} alt="" />
                <h5 className="card--title">Apply for Wedding Certificate</h5>
              </div>
            </div>
          </Link>
          <Link>
            <div className="card" onClick={openDialog}>
              <div className="card--items">
                <img className="card--imgs" src={Complain} alt="" />
                <h5 className="card--title">Send Feedback and Complaint</h5>
              </div>
            </div>
          </Link>
          {showDialog && (
            <div className="dialog">
              {submitted ? (
                <>
                  <img
                    className="complian-dialog-img"
                    src={SuccessImage}
                    alt=""
                  />
                  <h2 className="success-header">Submission Successful</h2>
                  <p className="success-message">
                    Thank you for your submission! We have received your
                    feedback.
                  </p>
                  <div className="btns-1">
                    <button onClick={closeDialog}>Close</button>
                  </div>
                </>
              ) : (
                <>
                  <img className="complian-dialog-img" src={Complain} alt="" />
                  <h2 className="complain-header">Submitt Your Complaint</h2>
                  <p className="complain-intro">
                    Submitt your complaints and feedbacks so that we can address
                    them as soon as possible. For more info call{" "}
                    <span className="address">+2519000000</span> or send us an
                    email at{" "}
                    <span className="address">kfeedback@gmail.com</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="complain-text-area"
                  />
                  <div className="btns-1">
                    <button onClick={handleComplainSubmission}>
                      {loading ? (
                        <SyncLoader
                          color="#f1f1f1"
                          loading={loading}
                          size={10}
                        />
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <Routes>
        <Route path="/application/id" Component={IDForm} />
        <Route path="/users/auth" Component={AuthPage} />
        <Route path="/application/birth" Component={BirthForm} />
        <Route path="/application/death" Component={DeathForm} />
        <Route path="/application/wedding" Component={WedForm} />
        <Route path="/application/resident" Component={RRForm} />
      </Routes>
    </AnimatedPage>
  );
}
