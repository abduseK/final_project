import React from "react";
import Select from "react-select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RRForm() {
  // const handleSubmission = async () => {
  //   let result = fetch("http://localhost:4000/request", {
  //     method: 'post',
  //     body: JSON.stringify({type: 'resident', requester, {}})
  //   })
  // }
  const handleReset = (event) => {
    event.preventDefault();
    event.target.form.reset();
  };

  const navigate = useNavigate();

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const occupationOptions = [
    { value: "employed", label: "Employed" },
    { value: "unemloyed", label: "Unemployed" },
  ];

  const educationOptions = [
    { value: "highschool", label: "Finished High School" },
    { value: "college", label: "College" },
    { value: "graduate", label: "Graduate" },
  ];

  const religionOptions = [
    { value: "christian", label: "Christian" },
    { value: "muslim", label: "Muslim" },
    { value: "catholic", label: "Catholic" },
    { value: "manually", label: "Enter Manually" },
  ];

  const [sexOption, setSexOption] = useState();
  const [educationOption, setEducationOption] = useState();
  const [religionOption, setReligionOption] = useState();
  const [occupationOption, setOccupationOption] = useState();
  const [date, setDate] = useState();

  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [grandFatherName, setGrandFatherName] = useState("");
  const [maritialStatus, setMaritialStatus] = useState("");
  const [nationality, setNationality] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [sex, setSex] = useState("");
  // const [dateOfBirth, setDateOfBirth] = useState();
  const [educationLevel, setEducationLevel] = useState("");
  const [occupation, setOccupation] = useState("");
  const [religion, setReligion] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [scheduledDate, setScheduleDate] = useState();
  const [age, setAge] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name,
      fatherName,
      grandFatherName,
      maritialStatus,
      nationality,
      placeOfBirth,
      address,
      sex,
      date,
      educationLevel,
      occupation,
      religion,
      phoneNumber,
      emergencyContact,
      scheduledDate,
      age,
    };

    setTimeout(async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      let result = await fetch("http://localhost:4000/request", {
        method: "post",
        body: JSON.stringify({
          type: "resident",
          requester: user.phone,
          body: formData,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(result);
      navigate("/");
    }, 2000);
  };

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
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fname">Father Name</label>
            <input
              type="text"
              id="fname"
              onChange={(e) => {
                setFatherName(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gname">GrandFather Name</label>
            <input
              type="text"
              id="gname"
              onChange={(e) => {
                setGrandFatherName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-sections">
          <div className="form-group">
            <label htmlFor="mstatus">Maritial Status</label>
            <input
              type="text"
              id="mstatus"
              onChange={(e) => {
                setMaritialStatus(e.target.value);
              }}
            />
          </div>
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
        </div>
        <div className="form-sections">
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
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="adress"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="sex">Sex</label>
            {/* we can use selectedOption.value or selectedValue.label to extract the values */}
            <Select
              name="sex"
              defaultValue={sexOption}
              onChange={(e) => {
                setSexOption(e.label);
              }}
              className="type-text"
              options={genderOptions}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bdate">Date of Birth</label>
            <input
              name="dateOfBirth"
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
            <label htmlFor="edlevel">Education Level</label>
            <Select
              name="educationLevel"
              defaultValue={educationOption}
              onChange={(selectedOption) => {
                setEducationOption(selectedOption.label);
              }}
              className="type-text"
              options={educationOptions}
            />
          </div>
          <div className="form-group">
            <label htmlFor="occupation">Occupation</label>
            <Select
              name="occupation"
              defaultValue={occupationOption}
              onChange={(selectedOption) => {
                setOccupationOption(selectedOption.label);
              }}
              className="type-text"
              options={occupationOptions}
            />
          </div>
        </div>
        <div className="form-sections">
          <div className="form-group">
            <label htmlFor="religion">Religion</label>
            <Select
              name="religion"
              defaultValue={religionOption}
              onChange={(selectedOption) => {
                setReligionOption(selectedOption.label);
              }}
              className="type-text"
              options={religionOptions}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pnumber">Phone Number</label>
            <input
              type="text"
              id="pnumber"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-sections">
          <div className="form-group">
            <label htmlFor="emcontact">Emergency Contact</label>
            <input
              type="text"
              id="emcontact"
              onChange={(e) => {
                setEmergencyContact(e.target.value);
              }}
            />
          </div>
        </div>
        <p className="section-label">Schedule Date</p>
        <div className="form-group-birth">
          <input
            name="scheduleDate"
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
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RRForm;
