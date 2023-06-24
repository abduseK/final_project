import AnimatedPage from "../../../../components/AnimatedPage";
import StaffTable from "../../../../components/DataTable/Staff/StaffManagement";
import "./Staff.css";

export default function Staff() {
  return (
    <AnimatedPage>
      <div className="admin-screen">
        {/* <h1>Staff Managment</h1> */}
        <StaffTable />
      </div>
    </AnimatedPage>
  );
}
