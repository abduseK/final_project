import { useState } from "react";
import "./Tabs.css";
import AdminCard from "../../admin-screen-card/admin-card";
import AnimatedPage from "../../../../../components/AnimatedPage";
import Select from "react-select";
import StaffUsers from "./Staffs";
import { Link, Route, Routes } from "react-router-dom";
import Settings from "../../settings/admin_settings.jsx";

function Tabs() {
  const [message, setMessage] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();

    setTimeout(async () => {
      let result = await fetch("http://localhost:3005/api/post", {
        method: "post",
        body: JSON.stringify({ body: message }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status == 201) {
            return response.json();
          } else {
            console.log("Something went wrong");
          }
        })
        .then((data) => {
          console.log(data.body);
        });
      setMessage("");
    }, 2000);
  };

  return (
    <div className="container">
      <div className="bloc-tabs"></div>
      <div className="content-tabs">
        <div>
          <h2>Registered staff members</h2>
          <StaffUsers />
          <Link to="/admin/admin/settings">
            <button className="create-staff-acct">Manage staff</button>
          </Link>
        </div>
        <div>
          <h2>Put your post bellow</h2>
          <div className="text-area">
            <textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button onClick={handleSubmission} className="post-btn">
            Post
          </button>
        </div>
      </div>
      <Routes>
        <Route exact={true} path="/admin/admin/settings" Component={Settings} />
      </Routes>
    </div>
  );
}

export default Tabs;
