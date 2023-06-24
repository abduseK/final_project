import React from "react";
import Select from "react-select";
import { useState } from "react";
import idimage from "./wedding.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AnimatedPage from "../../AnimatedPage";
import SuccessImage from "../Complain/image2.svg";
import ErrorImage from "../error.svg";
import "../DeathForm/style.css";
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

function WedForm() {
  const navigate = useNavigate();
  const handleReset = (event) => {
    event.preventDefault();
    event.target.form.reset();
  };

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [showTimeGap, setShowTimeGap] = useState(false);
  const [selectedTimeGap, setSelectedTimeGap] = useState(null);

  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(true);
  const [loading, setLoading] = useState(false);

  const closeDialog = () => {
    navigate("/");
    setSubmitted(false);
  };

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

  const [wfirstName, setWfirstName] = useState("");
  const [wlastName, setWlastName] = useState("");
  const [waddress, setWaddress] = useState("");
  const [wphone, setWphone] = useState("");
  const [wage, setWage] = useState("");
  const [hfirstName, setHfirstName] = useState("");
  const [hlastName, setHlastName] = useState("");
  const [haddress, setHaddress] = useState("");
  const [hphone, setHphone] = useState("");
  const [hage, setHage] = useState("");
  const [dateOfMarriage, setDateOfMarriage] = useState();
  const [placeOfMarriage, setPlaceOfMarriage] = useState();
  const [schedule, setSchedule] = useState();
  const formData = {
    wfirstName,
    wlastName,
    waddress,
    wphone,
    wage,
    hfirstName,
    hlastName,
    haddress,
    hphone,
    hage,
    dateOfMarriage,
    placeOfMarriage,
    schedule,
    selectedTimeGap,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let result = await fetch("http://localhost:4000/request", {
        method: "post",
        body: JSON.stringify({ type: "wedding", body: formData }),
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
                Wedding Certificate Application{" "}
              </h2>
              <img src={idimage} alt="" />
            </div>
            <div className="form-container">
              <h2>Wedding Certificate Application Form</h2>
              <p className="form-description">
                Fill out all the necessary informations and{" "}
                <span>schedule</span> your date to collect!
              </p>
              <form className="form" autoComplete="off">
                <p className="section-label">Husband's Information</p>
                <div className="form-sections">
                  <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input
                      type="text"
                      id="fname"
                      onChange={(e) => {
                        setHfirstName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mname">Last Name</label>
                    <input
                      type="text"
                      id="mname"
                      onChange={(e) => {
                        setHlastName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-sections">
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="adress"
                      onChange={(e) => {
                        setHaddress(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input
                      type="text"
                      id="age"
                      onChange={(e) => {
                        setHage(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="fomr-sections">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      id="phone"
                      onChange={(e) => {
                        setHphone(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <p className="section-label">Wife's Information</p>
                <div className="form-sections">
                  <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input
                      type="text"
                      id="fname"
                      onChange={(e) => {
                        setWfirstName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mname">Last Name</label>
                    <input
                      type="text"
                      id="mname"
                      onChange={(e) => {
                        setWlastName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-sections">
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="adress"
                      onChange={(e) => {
                        setWaddress(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="text" id="age" />
                  </div>
                </div>
                <div className="fomr-sections">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      id="phone"
                      onChange={(e) => {
                        setWphone(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <p className="section-label">Additional Information</p>
                <div className="form-sections">
                  <div className="form-group">
                    <label htmlFor="pmarriage">Place of Marriage</label>
                    <input
                      type="text"
                      id="pmarriage"
                      onChange={(e) => {
                        setPlaceOfMarriage(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dmarriage">Date of Marriage</label>
                    <input
                      type="date"
                      id="b-date"
                      className="bdate-input"
                      onChange={(e) => {
                        setDateOfMarriage(e.target.value);
                      }}
                    />
                  </div>
                </div>
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
                  <button
                    type="submit"
                    onClick={handleSubmit}
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

export default WedForm;
