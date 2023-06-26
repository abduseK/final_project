// import BcertPic from "./card-images/Bcert.png";
// import RregisterPic from "./card-images/register2.png";
// import IdPic from "./card-images/id.png";
// import DthPic from "./card-images/death2.png";
// import WedPic from "./card-images/wedding.png";
// import Complain from "./card-images/complain.jpg";
// import "./card.css";
// import AnimatedPage from "../AnimatedPage";
// import IDForm from "../Forms/IdForm/IDForm";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import AuthPage from "../authForms/AuthComponent.jsx";
// import BirthForm from "../Forms/BirthForm/BirthForm";
// import DeathForm from "../Forms/DeathForm/DeathForm";
// import WedForm from "../Forms/WeddingForm/WedForm";
// import RRForm from "../Forms/ResidentRegForm/RRForm";
// import { useState } from "react";
// import SuccessImage from "../Forms/Complain/image2.svg";
// import SyncLoader from "react-spinners/SyncLoader";

// export default function ServieCard() {
//   const [showDialog, setShowDialog] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const openDialog = () => {
//     setShowDialog(true);
//   };

//   const closeDialog = () => {
//     setShowDialog(false);
//     setSubmitted(false);
//   };

//   const handleComplainSubmission = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setSubmitted(true);
//     }, 2000);
//   };

//   if (showDialog) {
//     document.body.classList.add("active-modal");
//   } else {
//     document.body.classList.remove("active-modal");
//   }
//   return (
//     <AnimatedPage>
//       <div>
//         <div className="card-grid">
//           <Link to="/application/resident">
//             <div className="card">
//               <div className="card--items">
//                 <img className="card--imgs" src={RregisterPic} alt="" />
//                 <h5 className="card--title">Residential Registration</h5>
//               </div>
//             </div>
//           </Link>
//           <Link to="/application/id">
//             <div className="card">
//               <div className="card--items">
//                 <img className="card--imgs" src={IdPic} alt="" />
//                 <h5 className="card--title">Apply ID</h5>
//               </div>
//             </div>
//           </Link>
//           <Link to="/application/birth">
//             <div className="card">
//               <div className="card--items">
//                 <img className="card--imgs" src={BcertPic} alt="" />
//                 <h5 className="card--title">Apply for Birth Certificate</h5>
//               </div>
//             </div>
//           </Link>
//           <Link to="/application/death">
//             <div className="card">
//               <div className="card--items">
//                 <img className="card--imgs" src={DthPic} alt="" />
//                 <h5 className="card--title">Apply for Death Certificate</h5>
//               </div>
//             </div>
//           </Link>
//           <Link to="/application/wedding">
//             <div className="card">
//               <div className="card--items">
//                 <img className="card--imgs" src={WedPic} alt="" />
//                 <h5 className="card--title">Apply for Wedding Certificate</h5>
//               </div>
//             </div>
//           </Link>
//           <Link>
//             <div className="card" onClick={openDialog}>
//               <div className="card--items">
//                 <img className="card--imgs" src={Complain} alt="" />
//                 <h5 className="card--title">Send Feedback and Complaint</h5>
//               </div>
//             </div>
//           </Link>
//           {showDialog && (
//             <div className="dialog">
//               {submitted ? (
//                 <>
//                   <img
//                     className="complian-dialog-img"
//                     src={SuccessImage}
//                     alt=""
//                   />
//                   <h2 className="success-header">Submission Successful</h2>
//                   <p className="success-message">
//                     Thank you for your submission! We have received your
//                     feedback.
//                   </p>
//                   <div className="btns-1">
//                     <button onClick={closeDialog}>Close</button>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <img className="complian-dialog-img" src={Complain} alt="" />
//                   <h2 className="complain-header">Submitt Your Complaint</h2>
//                   <p className="complain-intro">
//                     Submitt your complaints and feedbacks so that we can address
//                     them as soon as possible. For more info call{" "}
//                     <span className="address">+2519000000</span> or send us an
//                     email at{" "}
//                     <span className="address">kfeedback@gmail.com</span>
//                   </p>
//                   <input
//                     type="text"
//                     placeholder="Type here..."
//                     className="complain-text-area"
//                   />
//                   <div className="btns-1">
//                     <button onClick={handleComplainSubmission}>
//                       {loading ? (
//                         <SyncLoader
//                           color="#f1f1f1"
//                           loading={loading}
//                           size={10}
//                         />
//                       ) : (
//                         "Submit"
//                       )}
//                     </button>
//                   </div>
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       <Routes>
//         <Route path="/application/id" Component={IDForm} />
//         <Route path="/users/auth" Component={AuthPage} />
//         <Route path="/application/birth" Component={BirthForm} />
//         <Route path="/application/death" Component={DeathForm} />
//         <Route path="/application/wedding" Component={WedForm} />
//         <Route path="/application/resident" Component={RRForm} />
//       </Routes>
//     </AnimatedPage>
//   );
// }

import BcertPic from "./card-images/Bcert.png";
import RregisterPic from "./card-images/register2.png";
import IdPic from "./card-images/id.png";
import DthPic from "./card-images/death2.png";
import WedPic from "./card-images/wedding.png";
import Complain from "./card-images/complain.jpg";
import upd from "./card-images/update.jpg";
import IdLo from "./card-images/IdLost.png";
import IDRen from "./card-images/IDRenovation.jpg";
import expire from "./card-images/expire.jpg";

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

  const closeComplainForm = () => {
    setShowDialog(false);
  };

  if (showDialog) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  /////////////////////////////////////////////
  const [showUpdate, setShowUpdate] = useState(false);
  const openUpdate = () => {
    setShowUpdate(true);
  };

  if (showUpdate) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  /////////////////////////////////////////////
  const [showNotexpier, setShowNotexpier] = useState(false);
  const openNotexpier = () => {
    setShowNotexpier(true);
  };

  const closeNotexpier = () => {
    setShowNotexpier(false);
    setSubmitted(false);
  };

  if (showNotexpier) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const [complain, setComplain] = useState("");

  const handleComplainSubmission = async (e) => {
    setLoading(true);
    e.preventDefault();
    // setTimeout(async () => {
    //   setLoading(false);
    //   setSubmitted(true);
    //   let result = await fetch("http://localhost:4000/request", {
    //     method: "post",
    //     body: {compl},
    //   });
    // }, 2000);
  };
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
          {/* <Link to="/application/renovation">
            
            <div className="card" onClick={openNotexpier}>
              <div className="card--items">
                <img
                  className="card--imgs"
                  src={IDRen}
                  alt=""
                  style={{ height: "135px" }}
                />
                <h5 className="card--title">Apply for ID Renovation</h5>
              </div>
            </div>
          </Link>
          {showNotexpier && (
            <div className="back">
              <div
                className="dialog"
                style={{
                  width: "5000px",
                }}
              >
                <img className="complian-dialog-img" src={expire} alt="" />
                <h2>Your ID is still valid and has not yet expired.</h2>
                <p className="success-message">It will expier in on x.</p>
                <div className="btns-1">
                  <button onClick={closeNotexpier}>Close</button>
                </div>
              </div>
            </div>
          )} */}
          <Link to="/application/lost">
            <div className="card">
              <div className="card--items">
                <img className="card--imgs" src={IdLo} alt="" />
                <h5 className="card--title">Apply for ID Lost</h5>
              </div>
            </div>
          </Link>
          {/* <Link to="/application/updatechange">
            <div className="card">
              <div className="card--items">
                <img className="card--imgs" src={upd} alt="" />
                <h5 className="card--title">Update and Change Request</h5>
              </div>
            </div>
          </Link> */}
          <Link>
            <div className="card" onClick={openDialog}>
              <div className="card--items">
                <img className="card--imgs" src={Complain} alt="" />
                <h5 className="card--title">Send Feedback and Complaint</h5>
              </div>
            </div>
          </Link>

          {showDialog && (
            <div className="back">
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
                    <img
                      className="complian-dialog-img"
                      src={Complain}
                      alt=""
                    />
                    <h2 className="complain-header">Submitt Your Complaint</h2>
                    <p className="complain-intro">
                      Submitt your complaints and feedbacks so that we can
                      address them as soon as possible. For more info call{" "}
                      <span className="address">+2519000000</span> or send us an
                      email at{" "}
                      <span className="address">kfeedback@gmail.com</span>
                    </p>
                    <input
                      type="text"
                      onChange={(e) => {
                        setComplain(e.target.value);
                      }}
                      placeholder="Type here..."
                      className="complain-text-area"
                    />
                    <div className="btns-1">
                      <button onClick={closeComplainForm}>Cancel</button>
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
