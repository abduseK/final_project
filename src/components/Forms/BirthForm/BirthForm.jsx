import React from "react";
import Select from "react-select";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BirthForm() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
            <label htmlFor="fname">Name of Child</label>
            <input type="text" id="fname" />
          </div>
        </div>
        <div className="form-sections">
          <div className="form-group">
            <label htmlFor="nationality">Nationality</label>
            <input type="text" id="nationality" />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight</label>
            <input type="text" id="weight" />
          </div>
        </div>
        <div className="form-sections">
          <div className="form-group-birth">
            <p>Date of Birth</p>
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
            <label htmlFor="attprofessional">Attendant Professional</label>
            <input type="text" id="attprofessional" />
          </div>
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
        </div>
        <div className="form-sections">
          <div className="form-group">
            <label htmlFor="pbirth">Place of Birth</label>
            <input type="text" id="pbirth" />
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
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
