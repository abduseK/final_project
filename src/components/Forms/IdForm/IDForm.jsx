// import React, { useState } from "react";
// import Select from "react-select";
// import "./IDForm.css";
// import idimage from "./3412737.jpg";
// import "../ResidentRegForm/RRForm.css";

// function IDForm() {
//   const handleReset = (event) => {
//     event.preventDefault();
//     event.target.form.reset();
//   };

//   const maritialStatusOptions = [
//     { value: "married", label: "Married" },
//     { value: "unmarried", label: "Unmarried" },
//     { value: "divorce", label: "Divorce" },
//   ];

//   const genderOptions = [
//     { value: "male", label: "Male" },
//     { value: "female", label: "Female" },
//   ];

//   const religionOptions = [
//     { value: "christian", label: "Christian" },
//     { value: "muslim", label: "Muslim" },
//     { value: "catholic", label: "Catholic" },
//     { value: "manually", label: "Enter Manually" },
//   ];

//   const [selectedOption, setSelectedOption] = useState(null);
//   const [date, setDate] = useState();

//   const [step, setStep] = useState(1);

//   const nextStep = () => {
//     setStep((prevStep) => prevStep + 1);
//   };

//   const previousStep = () => {
//     setStep((prevStep) => prevStep - 1);
//   };

//   return (
//     <div>
//       <div className="all">
//         <div className="image-container">
//           <h2 style={{ marginTop: "40px" }}>ID Application Form</h2>
//           <img src={idimage} alt="" />
//         </div>
//         <div className="form-container">
//           <div id="msform">
//             <ul
//               id="progressbar"
//               style={{ display: "flex", justifyContent: "space-between" }}
//             >
//               <li
//                 className={step === 1 ? "active" : ""}
//                 style={{ color: step >= 1 ? "#00a967" : "#59616d" }}
//               >
//                 Personal Information
//               </li>
//               <li
//                 className={step === 2 ? "active" : ""}
//                 style={{ color: step >= 2 ? "#00a967" : "#59616d" }}
//               >
//                 Mother's Information
//               </li>
//               <li
//                 className={step === 3 ? "active" : ""}
//                 style={{ color: step >= 3 ? "#00a967" : "#59616d" }}
//               >
//                 Father's Information
//               </li>
//             </ul>
//             <p className="form-description">
//               Fill out all the necessary information and <span>schedule</span>{" "}
//               your date to collect!
//             </p>
//             {/* fieldsets */}
//             <fieldset
//               style={{
//                 display: step === 1 ? "block" : "none",
//                 padding: 0,
//                 borderLeft: "6px solid #00a967",
//                 borderRight: "none",
//               }}
//             >
//               <h2 className="fs-title">Personal Information</h2>
//               {/* <h3 className="fs-subtitle">Fill out your personal information</h3> */}
//               <form className="form" autoComplete="off">
//                 <div className="form-sections">
//                   <div className="form-group">
//                     <label htmlFor="fname">First Name</label>
//                     <input type="text" id="fname" />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="mname">Middle Name</label>
//                     <input type="text" id="mname" />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="lname">Last Name</label>
//                     <input type="text" id="lname" />
//                   </div>
//                 </div>
//                 <div className="form-sections">
//                   <div className="form-group">
//                     <label htmlFor="nationality">Nationality</label>
//                     <input type="text" id="nationality" />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="address">Address</label>
//                     <input type="text" id="address" />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="religion">Religion</label>
//                     {/* <Select
//                     defaultValue={selectedOption}
//                     onChange={setSelectedOption}
//                     className="type-text"
//                     options={religionOptions}
//                   /> */}
//                     <input type="text" id="religion" />
//                   </div>
//                 </div>
//                 <div className="form-sections">
//                   <div className="form-group">
//                     <label htmlFor="Mstatus">Marital Status</label>
//                     <Select
//                       defaultValue={selectedOption}
//                       onChange={setSelectedOption}
//                       className="type-text"
//                       options={maritialStatusOptions}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="Mstatus">Gender</label>
//                     <Select
//                       defaultValue={selectedOption}
//                       onChange={setSelectedOption}
//                       className="type-text"
//                       options={genderOptions}
//                     />
//                   </div>
//                   <div className="form-group-birth">
//                     <p>Birth Date</p>
//                     <input
//                       type="date"
//                       id="age"
//                       className="bdate-input"
//                       onChange={(e) => setDate(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="form-sections"></div>
//                 <div className="btn-sections" style={{ marginTop: "5px" }}>
//                   <button
//                     type="reset"
//                     className="reset-btn"
//                     onClick={handleReset}
//                   >
//                     Reset
//                   </button>
//                   <button
//                     type="button"
//                     className="next action-button"
//                     onClick={nextStep}
//                   >
//                     Next
//                   </button>
//                 </div>
//               </form>
//             </fieldset>
//             <fieldset
//               style={{
//                 display: step === 2 ? "block" : "none",
//                 padding: 0,
//                 borderLeft: "6px solid #00a967",
//                 borderRight: "none",
//               }}
//             >
//               <h2 className="fs-title">Mother's Information</h2>
//               {/* <h3 className="fs-subtitle">Fill out your personal information</h3> */}
//               <form className="form" autoComplete="off">
//                 <div className="form-sections">
//                   <div className="form-group">
//                     <label htmlFor="fname">First Name</label>
//                     <input type="text" id="fname" />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="mname">Last Name</label>
//                     <input type="text" id="mname" />
//                   </div>
//                 </div>
//                 <div className="form-sections">
//                   <div className="form-group">
//                     <label htmlFor="address">Address</label>
//                     <input type="text" id="address" />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="pnumber">Phone Number</label>
//                     <input type="text" id="pnumber" />
//                   </div>
//                 </div>
//                 <div className="btn-sections" style={{ marginTop: "5px" }}>
//                   <button
//                     type="button"
//                     className="previous action-button"
//                     onClick={previousStep}
//                   >
//                     Previous
//                   </button>
//                   <button
//                     type="reset"
//                     className="reset-btn"
//                     onClick={handleReset}
//                   >
//                     Reset
//                   </button>
//                   <button
//                     type="button"
//                     className="next action-button"
//                     onClick={nextStep}
//                   >
//                     Next
//                   </button>
//                 </div>
//               </form>
//             </fieldset>
//             <fieldset
//               style={{
//                 display: step === 3 ? "block" : "none",
//                 padding: 0,
//                 borderLeft: "6px solid #00a967",
//                 borderRight: "none",
//               }}
//             >
//               <h2 className="fs-title">Father's Information</h2>
//               {/* <h3 className="fs-subtitle">Fill out your personal information</h3> */}
//               <form className="form" autoComplete="off">
//                 <div className="form-sections">
//                   <div className="form-group">
//                     <label htmlFor="fname">First Name</label>
//                     <input type="text" id="fname" />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="mname">Last Name</label>
//                     <input type="text" id="mname" />
//                   </div>
//                 </div>
//                 <div className="form-sections">
//                   <div className="form-group">
//                     <label htmlFor="address">Address</label>
//                     <input type="text" id="address" />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="pnumber">Phone Number</label>
//                     <input type="text" id="pnumber" />
//                   </div>
//                 </div>
//                 <p className="section-label">Schedule Date</p>
//                 <div className="form-group-birth">
//                   <input
//                     type="date"
//                     id="age"
//                     className="bdate-input"
//                     onChange={(e) => setDate(e.target.value)}
//                     // now {date} will be the selected date value
//                   />
//                   {/* <p className="schedule-notifier">Your scheduled date is {date}</p> */}
//                 </div>
//                 <div className="btn-sections" style={{ marginTop: "5px" }}>
//                   <button
//                     type="button"
//                     className="previous action-button"
//                     onClick={previousStep}
//                   >
//                     Previous
//                   </button>
//                   <button
//                     type="reset"
//                     className="reset-btn"
//                     onClick={handleReset}
//                   >
//                     Reset
//                   </button>
//                   <button type="submit" className="submit-btn">
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </fieldset>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default IDForm;

import React from "react";
import Select from "react-select";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import idimage from "./3412737.jpg";
// import idimage from "./birth.jpg";

function IDForm() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div className="all">
      <div className="image-container">
        <h2 style={{ marginTop: "40px" }}>ID Application </h2>
        <img src={idimage} alt="" />
      </div>
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
            <button onClick={handleSubmit} type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default IDForm;
