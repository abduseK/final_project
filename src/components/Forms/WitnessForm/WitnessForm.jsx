import React from "react";
import Select from "react-select";
import { useState } from "react";
import idimage from "./witness.png";

export default function WitnessForm() {
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
    <div className="all">
      <div className="image-container">
        <h2 style={{ marginTop: "40px" }}>Witness Application </h2>
        <img src={idimage} alt="" />
      </div>
      <div className="form-container">
        <h2>Witness Form For Abdelselam</h2>

        <p className="form-description">Please be Honest For Your Woreda.</p>
        <fieldset
          style={{
            padding: 0,
            borderLeft: "6px solid #00a967",
            borderRight: "none",
            marginLeft: "-1px",
            marginTop: "-10px",
            paddingBottom: "9px",
          }}
        >
          <form className="form" autoComplete="off">
            <h2 className="fs-title">Abduselam Kemal</h2>

            <div className="form-sections">
              <div className="form-group">
                <label htmlFor="address">Your Relation to the person</label>
                <input type="text" id="relation" />
              </div>
              <div className="form-group">
                <label htmlFor="address">His/her Adress in the woreda</label>
                <input type="text" id="address" />
              </div>
            </div>

            <div className="form-sections">
              <div className="form-group-birth">
                <p>How long have they lived in the woreda?</p>
                <input
                  type="date"
                  id="age"
                  className="bdate-input"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="certNo">
                  He/she been living in what kind of compound?
                </label>
                <input type="text" id="certNo" />
              </div>
            </div>
            <div className="form-sections">
              <div className="form-group">
                <label htmlFor="ncr">He/she been living with whom?</label>
                <input type="text" id="ncr" />
              </div>
              <div className="form-group">
                <label htmlFor="ncr">The person occupation</label>
                <input type="text" id="ncr" />
              </div>
            </div>
            <div>
              <input
                type="checkbox"
                id="accounted"
                name="response"
                value="accounted"
              />
              <label for="accounted">
                I will be accounted with my response
              </label>
            </div>
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
