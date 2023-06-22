import React from "react";
import Select from "react-select";
import { useState } from "react";

export default function DeathForm() {
  const handleReset = (event) => {
    event.preventDefault();
    event.target.form.reset();
  };

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [date, setDate] = useState();

  return (
    <div className="form-container">
      <h2>Death Certificate Application Form</h2>
      <p className="form-description">
        Fill out all the necessary informations and <span>schedule</span> your
        date to collect!
      </p>
      <form className="form" autoComplete="off">
        <p className="section-label">Deacesed Resident Information</p>

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
            <label htmlFor="address">Place of Death</label>
            <input type="text" id="address" />
          </div>
        </div>
        <div className="form-sections">
          <div className="form-group">
            <label htmlFor="certNo">Certificate Number</label>
            <input type="text" id="certNo" />
          </div>
          <div className="form-group">
            <label htmlFor="ncr">Name of Civil Registrar</label>
            <input type="text" id="ncr" />
          </div>
        </div>
        {/* <p className="section-label">Mother's Information</p>
        <p className="section-label">Father's Information</p> */}
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
