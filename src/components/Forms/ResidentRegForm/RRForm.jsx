import React from "react";
import Select from "react-select";
import { useState } from "react";

export default function RRForm() {
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
      <h2>Residential Registration Application Form</h2>
      <p className="form-description">
        Fill out all the necessary informations and <span>schedule</span> your
        date to collect!
      </p>
      <form className="form" autoComplete="off">
        <p className="section-label">Resident's Information</p>
        <div className="form-sections">
          <div className="form-group">
            <label htmlFor="idNo">ID Number</label>
            <input type="text" id="idNo" />
          </div>
          <div className="form-group">
            <label htmlFor="regNo">Registration Number</label>
            <input type="text" id="regNo" />
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
