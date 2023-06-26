import React from "react";
import { useState } from "react";
import Select from "react-select";
import idimage from "./8605345.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SyncLoader from "react-spinners/SyncLoader";
import SuccessImage from "../Complain/image2.svg";
import "../../service-card/card.css";
import "./style.css";
import { useNavigate } from "react-router-dom";
import ErrorImage from "../error.svg";
import AnimatedPage from "../../AnimatedPage";

function DeathForm() {
  const handleReset = (event) => {
    event.preventDefault();
    event.target.form.reset();
  };

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState("");
  const [showTimeGap, setShowTimeGap] = useState(false);
  const [selectedTimeGap, setSelectedTimeGap] = useState();
  const [loading, setLoading] = useState(false);

  const calculateStartingDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 10);
    return currentDate;
  };

  const timeGapOptions = [
    { value: "morning", label: "Morning" },
    { value: "afternoon", label: "Afternoon" },
  ];

  const handleTimeGapChange = (selectedOption) => {
    const selectedValue = selectedOption.value;
    setSelectedTimeGap(selectedValue);
  };

  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(true);

  const closeDialog = () => {
    navigate("/");
    setSubmitted(false);
  };

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [placeOfDeath, setPlaceOfDeath] = useState("");
  const [reasonOfDeath, setReasonOfDeath] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState();
  const [dateOfDeath, setDateOfDeath] = useState();
  const [schedule, setSchedule] = useState();
  const formData = {
    firstName,
    lastName,
    middleName,
    age,
    placeOfDeath,
    dateOfBirth,
    dateOfDeath,
    reasonOfDeath,
    schedule,
    selectedTimeGap,
  };

  const handleSubmission = (e) => {
    setLoading(true);
    e.preventDefault();
    setTimeout(async () => {
      setLoading(false);
      let result = await fetch("http://localhost:4000/request", {
        method: "post",
        body: JSON.stringify({ type: "death", body: formData }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        if (response.status == 200) {
          setMessage("Submission Successfull");
          setDescription(
            `Your form is submitted successfully. ${(
              <br></br>
            )} And awaitinapproval. You can close this page!`
          );
        } else {
          setMessage("Submission Failed");
          setDescription("Something went wrong, Try agian please");
          setSuccess(false);
        }
      });

      setSubmitted(true);
    }, 2000);
  };

  const data = JSON.parse(localStorage.getItem("user"));
  const userPhone = data.phone;

  const handlePayment = (e) => {
    e.preventDefault();
    setTimeout(async () => {
      let result = await fetch("http://localhost:3008/api/pay/", {
        method: "post",
        body: { userPhone },
      })
        .then((response) => response.json())
        .then((data) => {
          window.location.replace(data, "_blank");
        });
    }, 2000);
  };

  return (
    <div>
      {submitted ? (
        <div className="notifier">
          <img
            className="notifier-image"
            src={success ? SuccessImage : ErrorImage}
            alt=""
          />
          <h2 className="success-header">{message}</h2>
          <p className="notifier-message">{description}</p>
          <div className="notifier-btn">
            <button onClick={closeDialog}>Close</button>
          </div>
        </div>
      ) : (
        <AnimatedPage>
          <div className="all">
            <div className="image-container">
              <h2 style={{ marginTop: "40px" }}>
                Death Certificate Application{" "}
              </h2>
              <img src={idimage} alt="" />
            </div>
            <div className="form-container">
              <h2>Death Certificate Application Form</h2>
              <p className="form-description">
                Fill out all the necessary informations and{" "}
                <span>schedule</span> your date to collect!
              </p>
              <form className="form" autoComplete="off">
                <p className="section-label">Deacesed Resident Information</p>

                <div className="form-sections">
                  <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input
                      type="text"
                      id="fname"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mname">Middle Name</label>
                    <input
                      type="text"
                      id="mname"
                      onChange={(e) => {
                        setMiddleName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input
                      type="text"
                      id="lname"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-sections">
                  <div className="form-group">
                    <label htmlFor="pdeath">Place of Death</label>
                    <input
                      type="text"
                      id="pdeath"
                      onChange={(e) => {
                        setPlaceOfDeath(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input
                      type="text"
                      id="age"
                      onChange={(e) => {
                        setAge(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-sections">
                  <div className="form-group">
                    <label htmlFor="reason">Reason for Death</label>
                    <input
                      type="text"
                      id="reason"
                      onChange={(e) => {
                        setReasonOfDeath(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group-birth">
                    <p>Date of Birth</p>
                    <input
                      type="date"
                      id="age"
                      className="bdate-input"
                      onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-sections">
                  <div className="form-group-birth">
                    <p>Date of Death</p>
                    <input
                      type="date"
                      id="age"
                      className="bdate-input"
                      onChange={(e) => setDateOfDeath(e.target.value)}
                    />
                  </div>
                </div>
                {/* <p className="section-label">Mother's Information</p>
          <p className="section-label">Father's Information</p> */}
                <p className="section-label">Schedule Date</p>
                <div className="form-group-birth">
                  <label htmlFor="scheduleDate">Date</label>
                  <DatePicker
                    id="scheduleDate"
                    selected={selectedDate}
                    onChange={(date) => {
                      setSchedule(date);
                      setShowTimeGap(true);
                    }}
                    minDate={calculateStartingDate()} // Set the minimum selectable date to today
                    className="bdate-input"
                    dateFormat="yyyy-MM-dd"
                  />
                </div>
                {showTimeGap && (
                  <div className="form-group-birth">
                    <label htmlFor="timeGap">Time</label>
                    <Select
                      defaultValue={selectedTimeGap}
                      onChange={handleTimeGapChange}
                      className="type-text"
                      options={timeGapOptions}
                    />
                  </div>
                )}
                <div className="btn-sections">
                  <button
                    type="reset"
                    className="reset-btn"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                  <button onClick={handlePayment} className="submit-btn">
                    Pay
                  </button>
                  <button
                    type="submit"
                    onClick={handleSubmission}
                    className="submit-btn"
                  >
                    {loading ? (
                      <SyncLoader color="#f1f1f1" loading={loading} size={10} />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </AnimatedPage>
      )}
    </div>
  );
}

export default DeathForm;
