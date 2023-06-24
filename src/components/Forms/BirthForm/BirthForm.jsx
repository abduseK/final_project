import React, { useState } from "react";
import Select from "react-select";
import "../IdForm//IDForm.css";
import idimage from "./Bcert.png";
import "../ResidentRegForm/RRForm.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import SuccessImage from "../Complain/image2.svg";
import ErrorImage from "../error.svg";
import "../DeathForm/style.css";
import AnimatedPage from "../../AnimatedPage";
import SyncLoader from "react-spinners/SyncLoader";

function BirthForm() {
  const navigate = useNavigate();
  const handleReset = (event) => {
    event.preventDefault();
    event.target.form.reset();
  };

  const maritialStatusOptions = [
    { value: "married", label: "Married" },
    { value: "unmarried", label: "Unmarried" },
    { value: "divorce", label: "Divorce" },
  ];

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

  const [selectedOption, setSelectedOption] = useState(null);
  const [date, setDate] = useState();
  const [selectedDate, setSelectedDate] = useState("");
  const [showTimeGap, setShowTimeGap] = useState(false);
  const [selectedTimeGap, setSelectedTimeGap] = useState();
  const [step, setStep] = useState(1);
  const [maritialStatus, setMaritialStatus] = useState();
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

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const previousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleMaritailChange = (e) => {
    const selectedValue = e.value;
    setMaritialStatus(selectedValue);
  };

  const handleSexChange = (e) => {
    const selectedValue = e.value;
    setSex(selectedValue);
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
  const [weight, setWeight] = useState("");
  const [sex, setSex] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [nationality, setNationality] = useState("");
  const [attendantProfessional, setAttendantProfessional] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [placeOfBirth, setPlaceOfBirth] = useState();
  const [schedule, setSchedule] = useState();
  const [mfirstName, setMfirstName] = useState();
  const [mlastName, setMlastName] = useState();
  const [maddress, setMadress] = useState();
  const [mphone, setMphone] = useState();
  const [ffirstName, setFfirstName] = useState();
  const [flastName, setFlastName] = useState();
  const [faddress, setFadress] = useState();
  const [fphone, setFphone] = useState();

  const formData = {
    firstName,
    lastName,
    middleName,
    weight,
    sex,
    maritialStatus,
    dateOfBirth,
    placeOfBirth,
    nationality,
    deliveryMethod,
    attendantProfessional,
    ffirstName,
    flastName,
    faddress,
    fphone,
    mfirstName,
    mlastName,
    maddress,
    mphone,
    schedule,
    selectedTimeGap,
  };

  const handleSubmit = (e) => {
    e.preventDefault(), setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let result = await fetch("http://localhost:4000/request", {
        method: "post",
        body: JSON.stringify({ type: "birth", body: formData }),
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
      // result = await result.json();
      // console.log(result);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <div>
      {submitted ? (
        <AnimatedPage>
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
        </AnimatedPage>
      ) : (
        <AnimatedPage>
          <div className="all">
            <div className="image-container">
              <h2 style={{ marginTop: "40px" }}>
                Birth Certificate Application Form
              </h2>
              <img src={idimage} alt="" />
            </div>
            <div className="form-container">
              <div id="msform">
                <ul
                  id="progressbar"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <li
                    className={step === 1 ? "active" : ""}
                    style={{ color: step >= 1 ? "#00a967" : "#59616d" }}
                  >
                    Personal Information
                  </li>
                  <li
                    className={step === 2 ? "active" : ""}
                    style={{ color: step >= 2 ? "#00a967" : "#59616d" }}
                  >
                    Mother's Information
                  </li>
                  <li
                    className={step === 3 ? "active" : ""}
                    style={{ color: step >= 3 ? "#00a967" : "#59616d" }}
                  >
                    Father's Information
                  </li>
                </ul>
                <p className="form-description">
                  Fill out all the necessary information and{" "}
                  <span>schedule</span> your date to collect!
                </p>
                {/* fieldsets */}
                <fieldset
                  style={{
                    display: step === 1 ? "block" : "none",
                    padding: 0,
                    borderLeft: "6px solid #00a967",
                    borderRight: "none",
                  }}
                >
                  <h2 className="fs-title">Personal Information</h2>
                  {/* <h3 className="fs-subtitle">Fill out your personal information</h3> */}
                  <form className="form" autoComplete="off">
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
                        <label htmlFor="weight">Weight</label>
                        <input
                          type="text"
                          id="weight"
                          onChange={(e) => {
                            setWeight(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="attprofessional">
                          Attendant Professional
                        </label>
                        <input
                          type="text"
                          id="attprofessional"
                          onChange={(e) => {
                            setAttendantProfessional(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-sections">
                      <div className="form-group">
                        <label htmlFor="Mstatus">Marital Status</label>
                        <Select
                          defaultValue={selectedOption}
                          onChange={handleMaritailChange}
                          className="type-text"
                          options={maritialStatusOptions}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="sex">Sex</label>
                        <Select
                          defaultValue={selectedOption}
                          onChange={handleSexChange}
                          className="type-text"
                          options={genderOptions}
                        />
                      </div>
                    </div>
                    <div className="form-sections">
                      <div className="form-group-birth">
                        <p>Date of Birth</p>
                        <input
                          type="date"
                          id="age"
                          className="bdate-input"
                          onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="pbirth">Place of Birth</label>
                        <input
                          type="text"
                          id="pbirth"
                          onChange={(e) => {
                            setPlaceOfBirth(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-sections"></div>
                    <div className="btn-sections" style={{ marginTop: "5px" }}>
                      <button
                        type="reset"
                        className="reset-btn"
                        onClick={handleReset}
                      >
                        Reset
                      </button>
                      <button
                        type="button"
                        className="next action-button"
                        onClick={nextStep}
                      >
                        Next
                      </button>
                    </div>
                  </form>
                </fieldset>
                <fieldset
                  style={{
                    display: step === 2 ? "block" : "none",
                    padding: 0,
                    borderLeft: "6px solid #00a967",
                    borderRight: "none",
                  }}
                >
                  <h2 className="fs-title">Mother's Information</h2>
                  {/* <h3 className="fs-subtitle">Fill out your personal information</h3> */}
                  <form className="form" autoComplete="off">
                    <div className="form-sections">
                      <div className="form-group">
                        <label htmlFor="fname">First Name</label>
                        <input
                          type="text"
                          id="fname"
                          onChange={(e) => {
                            setMfirstName(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="mname">Last Name</label>
                        <input
                          type="text"
                          id="mname"
                          onChange={(e) => {
                            setMlastName(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-sections">
                      <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                          type="text"
                          id="address"
                          onChange={(e) => {
                            setMadress(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="pnumber">Phone Number</label>
                        <input
                          type="text"
                          id="pnumber"
                          onChange={(e) => {
                            setMphone(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="btn-sections" style={{ marginTop: "5px" }}>
                      <button
                        type="button"
                        className="previous action-button"
                        onClick={previousStep}
                      >
                        Previous
                      </button>
                      <button
                        type="reset"
                        className="reset-btn"
                        onClick={handleReset}
                      >
                        Reset
                      </button>
                      <button
                        type="button"
                        className="next action-button"
                        onClick={nextStep}
                      >
                        Next
                      </button>
                    </div>
                  </form>
                </fieldset>
                <fieldset
                  style={{
                    display: step === 3 ? "block" : "none",
                    padding: 0,
                    borderLeft: "6px solid #00a967",
                    borderRight: "none",
                  }}
                >
                  <h2 className="fs-title">Father's Information</h2>
                  {/* <h3 className="fs-subtitle">Fill out your personal information</h3> */}
                  <form className="form" autoComplete="off">
                    <div className="form-sections">
                      <div className="form-group">
                        <label htmlFor="fname">First Name</label>
                        <input
                          type="text"
                          id="fname"
                          onChange={(e) => {
                            setFfirstName(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="mname">Last Name</label>
                        <input
                          type="text"
                          id="mname"
                          onChange={(e) => {
                            setFlastName(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-sections">
                      <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                          type="text"
                          id="address"
                          onChange={(e) => {
                            setFadress(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="pnumber">Phone Number</label>
                        <input
                          type="text"
                          id="pnumber"
                          onChange={(e) => {
                            setFphone(e.target.value);
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
                    <div className="btn-sections" style={{ marginTop: "5px" }}>
                      <button
                        type="button"
                        className="previous action-button"
                        onClick={previousStep}
                      >
                        Previous
                      </button>
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
                  </form>
                </fieldset>
              </div>
            </div>
          </div>
        </AnimatedPage>
      )}
    </div>
  );
}
export default BirthForm;
