import React from "react";
import Select from "react-select";
import { useState } from "react";
import idimage from "./wedding.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function WedForm() {
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
    setSelectedTimeGap(selectedOption);
  };

  return (
    <div className="all">
      <div className="image-container">
        <h2 style={{ marginTop: "40px" }}>Wedding Certificate Application </h2>
        <img src={idimage} alt="" />
      </div>
      <div className="form-container">
        <h2>Wedding Certificate Application Form</h2>
        <p className="form-description">
          Fill out all the necessary informations and <span>schedule</span> your
          date to collect!
        </p>
        <form className="form" autoComplete="off">
          <p className="section-label">Husband's Information</p>
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
              <input type="text" id="adress" />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input type="text" id="age" />
            </div>
          </div>
          <div className="fomr-sections">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" />
            </div>
          </div>
          <p className="section-label">Wife's Information</p>
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
              <input type="text" id="adress" />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input type="text" id="age" />
            </div>
          </div>
          <div className="fomr-sections">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" />
            </div>
          </div>
          <p className="section-label">Additional Information</p>
          <div className="form-sections">
            <div className="form-group">
              <label htmlFor="pmarriage">Place of Marriage</label>
              <input type="text" id="pmarriage" />
            </div>
            <div className="form-group">
              <label htmlFor="dmarriage">Date of Marriage</label>
              <input type="date" id="b-date" className="bdate-input" />
            </div>
          </div>
          <p className="section-label">Schedule Date</p>
          <div className="form-group-birth">
            <label htmlFor="scheduleDate">Date</label>
            <DatePicker
              id="scheduleDate"
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
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
            <button type="reset" className="reset-btn" onClick={handleReset}>
              Reset
            </button>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WedForm;
