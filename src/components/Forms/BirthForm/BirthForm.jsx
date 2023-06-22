import React, { useState } from "react";
import Select from "react-select";
import "../IdForm//IDForm.css";
import idimage from "./Bcert.png";
import "../ResidentRegForm/RRForm.css";

function BirthForm() {
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

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const previousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
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
              Fill out all the necessary information and <span>schedule</span>{" "}
              your date to collect!
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
                    <input type="text" id="fname" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mname">Middle Name</label>
                    <input type="text" id="mname" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" />
                  </div>
                </div>
                <div className="form-sections">
                  <div className="form-group">
                    <label htmlFor="nationality">Nationality</label>
                    <input type="text" id="nationality" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="religion">Religion</label>
                    {/* <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    className="type-text"
                    options={religionOptions}
                  /> */}
                    <input type="text" id="religion" />
                  </div>
                </div>
                <div className="form-sections">
                  <div className="form-group">
                    <label htmlFor="Mstatus">Marital Status</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      className="type-text"
                      options={maritialStatusOptions}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Mstatus">Gender</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      className="type-text"
                      options={genderOptions}
                    />
                  </div>
                  <div className="form-group-birth">
                    <p>Birth Date</p>
                    <input
                      type="date"
                      id="age"
                      className="bdate-input"
                      onChange={(e) => setDate(e.target.value)}
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
                    <input type="text" id="fname" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mname">Last Name</label>
                    <input type="text" id="mname" />
                  </div>
                </div>
                <div className="form-sections">
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pnumber">Phone Number</label>
                    <input type="text" id="pnumber" />
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
                    <input type="text" id="fname" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mname">Last Name</label>
                    <input type="text" id="mname" />
                  </div>
                </div>
                <div className="form-sections">
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pnumber">Phone Number</label>
                    <input type="text" id="pnumber" />
                  </div>
                </div>
                <p className="section-label">Schedule Date</p>
                <div className="form-group-birth">
                  <input
                    type="date"
                    id="age"
                    className="bdate-input"
                    onChange={(e) => setDate(e.target.value)}
                    // now {date} will be the selected date value
                  />
                  {/* <p className="schedule-notifier">Your scheduled date is {date}</p> */}
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
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </div>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BirthForm;
