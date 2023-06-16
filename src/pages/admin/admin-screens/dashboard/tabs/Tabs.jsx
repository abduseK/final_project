import { useState } from "react";
import "./Tabs.css";
import AdminCard from "../../admin-screen-card/admin-card";
import AnimatedPage from "../../../../../components/AnimatedPage";
import Select from "react-select";
export default function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const [showDialog, setShowDialog] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <p
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Active staffs
        </p>
        <p
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Post Announcements
        </p>
      </div>
      <div className="content-tabs">
        <AnimatedPage>
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <h2>Registered staff members</h2>
            <hr />
            <AdminCard num={1} name={"Abdelselam Kemal"} />
            <AdminCard num={2} name={"Bereket Atakilt"} />
            <AdminCard num={3} name={"Gedion Getachew"} />
            <AdminCard num={4} name={"Tnsae Birhan"} />
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
        </AnimatedPage>
        <AnimatedPage>
          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <h2>Put your post bellow</h2>
            <div className="text-area">
              <textarea placeholder="Type your message here..."></textarea>
            </div>
            <button className="create-staff-acct">Post</button>
          </div>
        </AnimatedPage>
      </div>
    </div>
  );
}
