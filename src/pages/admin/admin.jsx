import "./admin.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaHome, FaClock, FaCog } from "react-icons/fa";
import Dashboard from "./admin-screens/dashboard/admin_dashboard.jsx";
import Settings from "./admin-screens/settings/admin_settings.jsx";
import AnimatedPage from "../../components/AnimatedPage";
import VPending from "./admin-screens/pending/VPending";
import RPending from "./admin-screens/pending/RPending";

import { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import admin from "./download.png";

import Staff from "./admin-screens/Staff/Staff";
import Update from "./admin-screens/update/update";
import Complaints from "./admin-screens/Complaint/Complaint";
import AddStaffs from "./admin-screens/AddStaff/AddStaff";
import ViewStaffs from "./admin-screens/ViewStaff/ViewStaff";

export default function Admin() {
  const [loading, setLoading] = useState(false);
  const [adminSelected, setAdminSelected] = useState(false);

  // Admin Phone == "0912121212"
  // VEP/REP Phone == "0913131313"

  const data = JSON.parse(localStorage.getItem("user"));
  const userPhone = data.phone;

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
                <h3 className="logo"></h3>
                {userPhone === "0912121212" && (
                  <div>
                    <li>
                      <Link to="admin/dashboard">
                        <FaHome className="icon" />
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to="admin/staff">
                        <FaCog className="icon" />
                        Staff Mgt.
                      </Link>
                    </li>
                  </div>
                )}
                {userPhone === "0913131313" && (
                  <div>
                    <li>
                      <Link to="admin/vpending">
                        <FaClock className="icon" />
                        VEP PR
                      </Link>
                    </li>
                    <li>
                      <Link to="admin/rpending">
                        <FaClock className="icon" />
                        REP PR
                      </Link>
                    </li>

                    <li>
                      <Link to="admin/updaterequest">
                        <FaCog className="icon" />
                        Update Requests
                      </Link>
                    </li>
                    <li>
                      <Link to="admin/complains">
                        <FaCog className="icon" />
                        Complaints
                      </Link>
                    </li>
                  </div>
                )}

                <div className="profile">
                  <img src={admin} alt="" />
                  <p>Abdelselam</p>
                </div>
              </ul>
            </div>
            <Routes>
              <Route exact path="admin/dashboard" element={<Dashboard />} />
              <Route exact path="admin/settings" element={<Settings />} />
              <Route path="admin/vpending" element={<VPending />} />
              <Route path="admin/rpending" element={<RPending />} />
              <Route path="admin/staff" element={<Staff />} />
              <Route path="admin/updaterequest" element={<Update />} />

              <Route path="admin/complains" element={<Complaints />} />
              <Route path="admin/addstaffs" element={<AddStaffs />} />

              <Route path="admin/viewstaffs" element={<ViewStaffs />} />
              {/* <Route
                path="admin/viewpendingtables"
                element={<ViewPendingTables />}
              /> */}

              {/* <Route
                path="admin/viewpendingTablesbc"
                element={<ViewPendingTablesBc />}
              /> */}
            </Routes>
          </div>
        </AnimatedPage>
      )}
    </div>
  );
}
