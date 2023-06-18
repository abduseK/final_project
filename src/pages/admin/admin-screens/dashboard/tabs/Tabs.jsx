import { useState } from "react";
import "./Tabs.css";
import AdminCard from "../../admin-screen-card/admin-card";
import AnimatedPage from "../../../../../components/AnimatedPage";
import Select from "react-select";
import StaffUsers from "./Staffs";
import { Link, Route, Routes } from "react-router-dom";
import Settings from "../../settings/admin_settings.jsx";
export default function Tabs() {
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
            <textarea placeholder="Type your message here..."></textarea>
          </div>
          <button className="post-btn">Post</button>
        </div>
      </div>
      <Routes>
        <Route exact={true} path="/admin/admin/settings" Component={Settings} />
      </Routes>
    </div>
  );
}
