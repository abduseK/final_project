import "./admin.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./admin-screens/dashboard/admin_dashboard.jsx";
import Settings from "./admin-screens/settings/admin_settings.jsx";
import AnimatedPage from "../../components/AnimatedPage";
import Pending from "./admin-screens/pending/Pending";
import { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import admin from "./download.png";

export default function Admin() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loader">
          <PulseLoader color={"#00a967"} loading={loading} size={20} />
        </div>
      ) : (
        <AnimatedPage>
          <div className="container">
            <div className="sidenav">
              <ul className="sidenav-menu">
                <h3 className="logo">KKTasks</h3>
                <li>
                  <Link to="admin/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="admin/pending">Pending Requests</Link>
                </li>
                {/* <li>
                  <Link to="admin/resident-data">Resident's Data</Link>
                </li>
                <li>
                  <Link to="admin/account-management">Account Management</Link>
                </li> */}
                <li>
                  <Link to="admin/settings">Settings</Link>
                </li>
                <div className="profile">
                  <img src={admin} alt="" />
                  <p>Abdelselam</p>
                </div>
              </ul>
            </div>
            <Routes>
              <Route
                exact={true}
                path="admin/dashboard"
                Component={Dashboard}
              />
              <Route exact={true} path="admin/settings" Component={Settings} />
              <Route path="admin/pending" Component={Pending} />
            </Routes>
          </div>
        </AnimatedPage>
      )}
    </div>
  );
}
