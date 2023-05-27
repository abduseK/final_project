import "./IDForm.css";

export default function IDForm() {
  return (
    <div className="form-container">
      <h2>ID Application Form</h2>
      <form className="form" autoComplete="off">
        <p className="section-label">Personal Information</p>
        <div className="form-sections">
          <div className="form-group">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" />
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
            <label htmlFor="address">Address</label>
            <input type="text" id="address" />
          </div>
        </div>
        <div className="form-sections">
          <div className="form-group">
            <label htmlFor="Mstatus">Maritial Status</label>
            <input type="text" id="Mstatus" />
          </div>
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
