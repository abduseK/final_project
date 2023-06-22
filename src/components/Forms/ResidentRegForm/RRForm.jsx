import React, { useState } from "react";
import Select from "react-select";
import register from "./register2.png";
import "./RRForm.css";

export default function RRForm() {
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
      <h2 style={{ marginTop: "40px" }}>Residential Registration Application Form</h2>
        <img src={register} alt="" />
      </div>
      <div className="form-container">
        <div id="msform">
          
        <ul id="progressbar" style={{ display: "flex", justifyContent: "space-between" }}>
  <li className={step === 1 ? "active" : ""} style={{ color: step >= 1 ? "#00a967" : "#59616d" }}>
    Account Setup
  </li>
  <li className={step === 2 ? "active" : ""} style={{ color: step >= 2 ? "#00a967" : "#59616d" }}>
    Personal Information
  </li>
  <li className={step === 3 ? "active" : ""} style={{ color: step >= 3 ? "#00a967" : "#59616d" }}>
    Personal Details
  </li>
</ul>

          {/* fieldsets */}
          <fieldset style={{ display: step === 1 ? "block" : "none" , padding: 0, borderLeft: "6px solid #00a967" , borderRight: "none" }}>
            <div className="auth-body">
        <form className="auth-form-validation">
          <div className="input-field">
            <label htmlFor="full-name" className="input-label">
              Full Name
            </label>
            <input
              type="text"
              className="input-control"
              id="full-name"
              placeholder="Jhon doe"
              autoComplete="off"
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="email" className="input-label">
              Email address
            </label>
            <input
              type="text"
              className="input-control"
              id="email"
              placeholder="example@gmail.com"
              autoComplete="off"
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="input-control"
              placeholder="Password"
              autoComplete="off"
              required
            />
          </div>
         
        </form>
        
      </div>
            <button type="button" className="next action-button" onClick={nextStep}>
              Next
            </button>
          </fieldset>
          <fieldset style={{ display: step === 2 ? "block" : "none", padding: 0, borderLeft: "6px solid #00a967" , borderRight: "none" }}>
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
              <div className="form-sections">
                
                <div className="form-group-birth">
                  <p>Since when did you start living in the woreda?</p>
                  <input
                    type="date"
                    id="age"
                    className="bdate-input"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="btn-sections" style={{ marginTop: "5px" }}>
                <button type="button" className="previous action-button" onClick={previousStep}>
                  Previous
                </button>
                <button type="reset" className="reset-btn" onClick={handleReset}>
                  Reset
                </button>
                <button type="button" className="next action-button" onClick={nextStep}>
                  Next
                </button>
              </div>
            </form>
          </fieldset>
          <fieldset style={{ display: step === 3 ? "block" : "none" , padding: 0, borderLeft: "6px solid #00a967" , borderRight: "none" }}>
            <h2 className="fs-title">Personal Details</h2>
            <input type="text" name="fname" placeholder="First Name" />
            <input type="text" name="lname" placeholder="Last Name" />
            <input type="text" name="phone" placeholder="Phone" />
            <textarea name="address" placeholder="Address" />
            <button type="button" className="previous action-button" onClick={previousStep}>
              Previous
            </button>
            <button type="submit" className="submit-btn">
            Submit
          </button>
          </fieldset>
        </div>
      </div>
    </div>
    </div>
  );
}
