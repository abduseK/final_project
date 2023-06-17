import { useState } from "react";
import "./Tabs.css";
import AdminCard from "../../admin-screen-card/admin-card";
import AnimatedPage from "../../../../../components/AnimatedPage";
import Select from "react-select";
import StaffUsers from "./Staffs";
export default function Tabs() {
  const [showDialog, setShowDialog] = useState(false);

  const closeDialog = () => {
    setShowDialog(false);
  };

  const openDialog = () => {
    setShowDialog(true);
  };

  return (
    <div className="container">
      <div className="bloc-tabs"></div>
      <div className="content-tabs">
        <div>
          <h2>Registered staff members</h2>
          <StaffUsers />
          <button className="create-staff-acct" onClick={openDialog}>
            Add new staff
          </button>
          {showDialog && (
            <div className="dialog">
              <h2>Add a new staff</h2>
              <input
                type="text"
                placeholder="Enter name"
                className="dialog-text-area"
              />
              <input
                type="text"
                placeholder="Enter role (VEP or REP)"
                className="dialog-text-area"
              />
              <div className="btns">
                <button onClick={closeDialog}>Cancel</button>
                <button onClick={""}>Submit</button>
              </div>
            </div>
          )}
        </div>
        <div>
          <h2>Put your post bellow</h2>
          <div className="text-area">
            <textarea placeholder="Type your message here..."></textarea>
          </div>
          <button className="create-staff-acct">Post</button>
        </div>
      </div>
    </div>
  );
}
