import React from "react";
import Select from "react-select";
import { useState } from "react";
import idimage from "./reject.png";


export default function RejectForm() {
  const handleReset = (event) => {
    event.preventDefault();
    event.target.form.reset();
  };
  const [reason, setReason] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  const [date, setDate] = useState();

  return (
    <div className="all">
    <div className="image-container">
    <h2 style={{ marginTop: "40px" }}>Reject Witness Form </h2>
      <img src={idimage} alt="" />
    </div>
    <div className="form-container">
      <h2>Reject Witness Form For Abdelselam</h2>
                                                                                                                                                        
      <fieldset
              style={{                                                                                                                                                                                      
                padding: 0,
                borderLeft: "6px solid #00a967",
                borderRight: "none",
                marginLeft: "-1px", 
                marginTop:"-10px",
                paddingBottom: "9px" 
              }}             
            >
      <form className="form" autoComplete="off">
      <h2 className="fs-title">Abduselam Kemal</h2>
        

        <div>
        <input type="checkbox" id="accounted" name="response" value="accounted"/>
<label for="accounted">I am sure that i don't want to be a witness for Abduselam Kemal</label>

        </div>
        
        <label>
          <input
            type="radio"
            value="unknown"
            checked={selectedOption === "unknown"}
            onChange={handleOptionChange}
          />
          I don't know this person
        </label>
        <label>
          <input
            type="radio"
            value="dontWantToWitness"
            checked={selectedOption === "dontWantToWitness"}
            onChange={handleOptionChange}
          />
          I know the person but I don't want to be his or her witness
        </label>
        {selectedOption === "dontWantToWitness" && (
          <div>
            <label>
              Reason If you have one:
              <input
                type="text"
                value={reason}
                onChange={handleReasonChange}
              />
            </label>
          </div>
        )}
     


        
{/*         
<div style="display: flex; align-items: center;">
  <input type="checkbox" id="accounted" name="response" value="accounted" style="margin-right: 5px;">
  <label for="accounted">I will be accounted with my response</label>
</div> */}

        <div className="btn-sections">
          <button type="reset" className="reset-btn" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
      </fieldset>
    </div>
    </div>
  );
}
