import "./adminDashboard.css";
import AdminCard from "../admin-screen-card/admin-card.jsx";

export default function AdminDashboard() {
  return (
    <div className="admin-screen-title">
      <h1>Admin Dashboard</h1>
      <h5>Residential registration requests</h5>
      <AdminCard num={1} requester={"Abdelselam Kemal"} />
      <AdminCard num={2} requester={"Bereket Atakilt"} />
      <AdminCard num={3} requester={"Gedion Getachew"} />
      <AdminCard num={4} requester={"Tnsae Birhan"} />
      <h5>Confirmed Requests</h5>
    </div>
  );
}
