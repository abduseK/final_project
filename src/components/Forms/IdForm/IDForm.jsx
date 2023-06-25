import React from "react";
import Select from "react-select";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import idimage from "./3412737.jpg";
// import idimage from "./birth.jpg";
import SuccessImage from "../Complain/image2.svg";
import "../DeathForm/style.css";
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import ErrorImage from "../error.svg";
import AnimatedPage from "../../AnimatedPage";

function IDForm() {
  const navigate = useNavigate();
  const handleReset = (event) => {
    event.preventDefault();
    event.target.form.reset();
  };

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const religionOptions = [
    { value: "christian", label: "Christian" },
    { value: "muslim", label: "Muslim" },
    { value: "catholic", label: "Catholic" },
    { value: "manually", label: "Enter Manually" },
  ];

  const maritialStatusOptions = [
    { value: "married", label: "Married" },
    { value: "unmarried", label: "Unmarried" },
    { value: "divorce", label: "Divorce" },
  ];

  const [religion, setReligion] = useState();
  const [maritialStatus, setMaritialStatus] = useState();

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [showTimeGap, setShowTimeGap] = useState(false);
  const [selectedTimeGap, setSelectedTimeGap] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(true);

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
  const handleGenderChange = (e) => {
    const selectedValue = e.value;
    setGender(selectedValue);
  };

  const handleMaritialChange = (e) => {
    const selectedValue = e.value;
    setMaritialStatus(selectedValue);
  };

  const [submitted, setSubmitted] = useState(false);

  const closeDialog = () => {
    navigate("/");
    setSubmitted(false);
  };

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [schedule, setSchedule] = useState();
  const formData = {
    firstName,
    lastName,
    middleName,
    age,
    address,
    nationality,
    gender,
    dateOfBirth,
    schedule,
    selectedTimeGap,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let result = await fetch("http://localhost:4000/request", {
        method: "post",
        body: JSON.stringify({ type: "id", body: formData }),
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
    // Perform form submission logic here
  };

  const handlePayment = (e) => {
    e.preventDefault();
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
              <h2 style={{ marginTop: "40px" }}>ID Application </h2>
              <img src={idimage} alt="" />
            </div>
            <div className="form-container">
              <h2>ID Application Form</h2>
              <p className="form-description">
                Fill out all the necessary informations and{" "}
                <span>schedule</span> your date to collect!
              </p>
              <form className="form" autoComplete="off">
                <p className="section-label">Personal Information</p>

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
                    <label htmlFor="nationality">Nationality</label>
                    <input
                      type="text"
                      id="nationality"
                      onChange={(e) => {
                        setNationality(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      onChange={(e) => {
                        setAddress(e.target.value);
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
                    <label htmlFor="sex">Sex</label>
                    {/* we can use selectedOption.value or selectedValue.label to extract the values */}
                    <Select
                      defaultValue={selectedOption}
                      onChange={handleGenderChange}
                      className="type-text"
                      options={genderOptions}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="religion">Religion</label>
                    <input
                      type="text"
                      id="religion"
                      onChange={(e) => {
                        setReligion(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-sections">
                  <div className="form-group">
                    <label htmlFor="mstatus">Maritial Status</label>
                    {/* we can use selectedOption.value or selectedValue.label to extract the values */}
                    <Select
                      defaultValue={maritialStatus}
                      onChange={handleMaritialChange}
                      className="type-text"
                      options={maritialStatusOptions}
                    />
                  </div>
                  <div className="form-group-birth">
                    <p>Date of Birth</p>
                    <input
                      type="date"
                      id="age"
                      className="bdate-input"
                      onChange={(e) => {
                        setDateOfBirth(e.target.value);
                      }}
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
                  <button className="submit-btn" onClick={handlePayment}>
                    Pay
                  </button>
                  <button
                    onClick={handleSubmit}
                    type="submit"
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

export default IDForm;
