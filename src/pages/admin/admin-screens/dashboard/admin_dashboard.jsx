import "./adminDashboard.css";
import AdminCard from "../admin-screen-card/admin-card.jsx";
import AnimatedPage from "../../../../components/AnimatedPage";
import StatBarChart from "../../../../components/Chart/statBarChart";

export default function AdminDashboard() {
  return (
    <AnimatedPage>
      <div className="admin-screen">
        <div className="admin-header">
          <p className="admin-header--count">Requests (50)</p>
          <div className="admin-barChart">
            <StatBarChart />
          </div>
        </div>
        <div className="admin-header-2">
          <p className="admin-header--count">Details</p>
        </div>
        {/* <h1>Admin Dashboard</h1>
        <h5>Residential registration requests</h5>
        <AdminCard num={1} requester={". Abdelselam Kemal"} />
        <AdminCard num={2} requester={". Bereket Atakilt"} />
        <AdminCard num={3} requester={". Gedion Getachew"} />
        <AdminCard num={4} requester={". Tnsae Birhan"} />
        <h5>Confirmed Requests</h5> */}
      </div>
    </AnimatedPage>
  );
}
