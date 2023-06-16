import "./adminDashboard.css";
import AdminCard from "../admin-screen-card/admin-card.jsx";
import AnimatedPage from "../../../../components/AnimatedPage";
import StatBarChart from "../../../../components/Chart/statBarChart";
import Tabs from "./tabs/Tabs";

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
          <Tabs />
        </div>
      </div>
    </AnimatedPage>
  );
}
