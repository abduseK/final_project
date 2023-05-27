import "./IDForm.css";
import React from "react";
import Select from "react-select";
import { useState } from "react";
export default function IDForm() {
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

  return (
    <div className="form-container">
      <h2>ID Application Form</h2>
      <p className="form-description">
        Fill out all the necessary informations and <span>schedule</span> your
        date to collect!
      </p>
      <form className="form" autoComplete="off">
        <p className="section-label">Personal Information</p>

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
        </div>
        <div className="form-sections">
          <div className="form-group">
            <label htmlFor="Mstatus">Maritial Status</label>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              className="type-text"
              options={maritialStatusOptions}
            />
          </div>
          <div className="form-group-birth">
            <p>Birth Date</p>
            <input
              type="date"
              id="age"
              className="bdate-input"
              onChange={(e) => setDate(e.target.value)}
              // now {date} will be the selected date value
            />
          </div>
        </div>
        <div className="form-sections">
          <div className="form-group">
            <label htmlFor="religion">Religion</label>
            <input type="text" id="religion" />
          </div>
          <div className="form-group">
            <label htmlFor="Mstatus">Gender</label>
            {/* we can use selectedOption.value or selectedValue.label to extract the values */}
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              className="type-text"
              options={genderOptions}
            />
          </div>
        </div>
        <p className="section-label">Mother's Information</p>
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
        <p className="section-label">Father's Information</p>
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
        <div className="btn-sections">
          <button type="reset" className="reset-btn" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
