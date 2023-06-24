// import React, { useState } from "react";
import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import register from "./register2.png";
import "./RRForm.css";

function RRForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([
    "Witness 1",
    "Witness 2",
    "Witness 3",
    "Witness 4",
    "Witness 5",
  ]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      if (selectedItems.length < 3) {
        setSelectedItems([...selectedItems, item]);
      }
    }
    setSearchTerm("");
    setDropdownVisible(false);
  };

  const handleRemoveWitness = (item) => {
    setSelectedItems(
      selectedItems.filter((selectedItem) => selectedItem !== item)
    );
  };

  const handleAddWitness = () => {
    // Perform the necessary logic for adding the witness
    console.log("Witness Added");
    console.log("Name:", name);
    console.log("ID:", id);
    console.log("Phone:", phone);
    console.log("Selected Witnesses:", selectedItems);

    // Reset the form fields
    setName("");
    setId("");
    setPhone("");
    setSelectedItems([]);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
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

  const occupationOptions = [
    { value: "employed", label: "Employed" },
    { value: "unemployed", label: "UnEmployed" },
  ];
  const educationOptions = [
    { value: "high-school", label: "High School" },
    { value: "college", label: "College" },
    { value: "graduate", label: "Graduate" },
    { value: "uneducated", label: "Uneducated" },
  ];

  const [maritialStatus, setMaritialStatus] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  const [date, setDate] = useState();
  const [education, setEducation] = useState();
  const [occupation, setOccupation] = useState();
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const previousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const [name, setRName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [grandFatherName, setGrandFatherName] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState();
  const [sex, setSex] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [emergencyContact, setEmergencyContact] = useState();
  const [schedule, setSchedule] = useState();
  const [religion, setReligion] = useState();
  const [witnessName, setWitnessName] = useState("");
  const [witnessID, setWitnessID] = useState("");
  const [witnessPhone, setWitnessPhone] = useState("");

  const formData = {
    name,
    fatherName,
    grandFatherName,
    age,
    nationality,
    sex,
    placeOfBirth,
    dateOfBirth,
    address,
    phoneNumber,
    emergencyContact,
    education,
    occupation,
    maritialStatus,
    witnessName,
    witnessID,
    religion,
    witnessPhone,
    schedule,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleOccupationChange = (e) => {
    const selectedValue = e.value;
    setOccupation(selectedValue);
  };
  const handleSexChange = (e) => {
    const selectedValue = e.value;
    setSex(selectedValue);
  };
  const handleEducationChange = (e) => {
    const selectedValue = e.value;
    setEducation(selectedValue);
  };
  const handleMaritialStatusChange = (e) => {
    const selectedValue = e.value;
    setMaritialStatus(selectedValue);
  };

  return (
    <div>
      <div className="all">
        <div className="image-container">
          <h2 style={{ marginTop: "40px" }}>
            Residential Registration Application Form
          </h2>
          <img src={register} alt="" />
        </div>
        <div className="form-container">
          <div id="msform">
            <ul
              id="progressbar"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {/* <li className={step === 1 ? "active" : ""} style={{ color: step >= 1 ? "#00a967" : "#59616d" }}>
    Account Setup
  </li> */}
              <li
                className={step === 2 ? "active" : ""}
                style={{ color: step >= 2 ? "#00a967" : "#59616d" }}
              >
                Personal Information
              </li>
              <li
                className={step === 3 ? "active" : ""}
                style={{ color: step >= 3 ? "#00a967" : "#59616d" }}
              >
                Choose Witness
              </li>
            </ul>

            {/* fieldsets */}
            <fieldset
              style={{
                display: step === 1 ? "block" : "none",
                padding: 0,
                borderLeft: "6px solid #00a967",
                borderRight: "none",
              }}
            >
              <div className="auth-body">
                <form className="auth-form-validation">
                  <div className="input-field">
                    <input
                      type="email"
                      name="txt"
                      placeholder="User name"
                      required=""
                      class="password-input"
                    />
                  </div>
                  <div className="input-field">
                    {/* <label htmlFor="email" className="input-label">
              Email address
            </label>
            <input
              type="text"
              className="input-control"
              id="email"
              placeholder="example@gmail.com"
              autoComplete="off"
              required
            /> */}
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required=""
                      class="password-input"
                    />
                  </div>
                  <div className="input-field">
                    {/* <label htmlFor="password" className="input-label">
              Password
            </label> */}
                    {/* <input
              type="password"
              name="password"
              id="password"
              className="input-control"
              placeholder="Password"
              autoComplete="off"
              required
            /> */}
                    <input
                      type="password"
                      name="pswd"
                      placeholder="Password"
                      required=""
                      class="password-input"
                    />
                  </div>
                </form>
              </div>
              <button
                type="button"
                className="next action-button"
                onClick={nextStep}
              >
                Next
              </button>
            </fieldset>
            <fieldset
              style={{
                display: step === 2 ? "block" : "none",
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
                    <label htmlFor="fname">Name</label>
                    <input
                      type="text"
                      id="fname"
                      onChange={(e) => {
                        setRName(e.target.value);
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
                    <label htmlFor="gname">Grandfather Name</label>
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
                    <label htmlFor="nationality">Nationality</label>
                    <input
                      type="text"
                      id="nationality"
                      onChange={(e) => {
                        setNationality(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="religion">Religion</label>
                    {/* <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    className="type-text"
                    options={religionOptions}
                  /> */}
                    <input
                      type="text"
                      id="religion"
                      onChange={(e) => {
                        setReligion(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-sections">
                  <div className="form-group">
                    <label htmlFor="Mstatus">Marital Status</label>
                    <Select
                      defaultValue={maritialStatus}
                      onChange={handleMaritialStatusChange}
                      className="type-text"
                      options={maritialStatusOptions}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="sex">sex</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={handleSexChange}
                      className="type-text"
                      options={genderOptions}
                    />
                  </div>
                </div>
                <div className="form-sections">
                  <div className="form-group-birth">
                    <p>Date of Birth</p>
                    <input
                      type="date"
                      id="age"
                      className="bdate-input"
                      onChange={(e) => setDateOfBirth(e.target.value)}
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
                <div className="form-sections">
                  <div className="form-group">
                    <label htmlFor="edlevel">Education Level</label>
                    <Select
                      defaultValue={education}
                      onChange={handleEducationChange}
                      className="type-text"
                      options={educationOptions}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="occupation">Occupation</label>
                    <Select
                      defaultValue={occupation}
                      onChange={handleOccupationChange}
                      className="type-text"
                      options={occupationOptions}
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
              <div className="witness-form">
                <h2 className="fs-title">Witness</h2>
                <p>Choose a witness who is registered residents</p>
                <h6>Witness Number 1</h6>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required=""
                  className="password-input"
                  onChange={(e) => setWitnessName(e.target.value)}
                />
                <input
                  type="text"
                  name="id"
                  placeholder="ID Number"
                  required=""
                  className="password-input"
                  onChange={(e) => setWitnessID(e.target.value)}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  onChange={(e) => setWitnessPhone(e.target.value)}
                />
                {/* <div className="dropdown" ref={dropdownRef}>
                  {selectedItems.length > 0 && (
                    <div className="selected-items">
                      <h4>Selected Witness Number 1:</h4>
                      <ul>
                        {selectedItems.map((item) => (
                          <li key={item}>
                            {item}
                            <button
                              className="remove-witness"
                              onClick={() => handleRemoveWitness(item)}
                            >
                              x
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                    onFocus={() => setDropdownVisible(true)}
                  />
                  {isDropdownVisible &&
                    searchTerm &&
                    filteredItems.length > 0 && (
                      <div className="dropdown-menu">
                        {filteredItems.map((item) => (
                          <div
                            key={item}
                            className={`menu-item ${
                              selectedItems.includes(item) ? "selected" : ""
                            }`}
                            onClick={() => handleItemClick(item)}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                </div>
                <button
                  type="button"
                  className="submit-btn"
                  onClick={handleAddWitness}
                  disabled={selectedItems.length !== 3}
                >
                  Add Witness
                </button> */}
              </div>

              <button
                type="button"
                className="previous action-button"
                onClick={previousStep}
              >
                Previous
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="submit-btn"
              >
                Submit
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RRForm;
