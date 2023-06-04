import React from "react";
import Select from "react-select";
import { useState } from "react";

export default function BirthForm() {
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
      <h2>Birth Certificate Application Form</h2>
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
            <label htmlFor="address">Place of Birth</label>
            <input type="text" id="address" />
          </div>
        </div>
        <div className="form-sections">
          <div className="form-group">
            <label htmlFor="sex">Sex</label>
            {/* we can use selectedOption.value or selectedValue.label to extract the values */}
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              className="type-text"
              options={genderOptions}
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight</label>
            <input type="text" id="weight" />
          </div>
        </div>
        <div className="form-sections">
          <div className="form-group">
            <label htmlFor="delMethod">Delivery Method</label>
            <input type="text" id="delMethod" />
          </div>
          <div className="form-group">
            <label htmlFor="attProfessional">Attendant Professionsl</label>
            <input type="text" id="attProfessional" />
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
