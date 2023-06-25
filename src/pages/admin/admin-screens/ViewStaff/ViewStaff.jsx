import AnimatedPage from "../../../../components/AnimatedPage";
import ViewTable from "../../../../components/DataTable/ViewStaffTable/ViewStaffTable";

export default function ViewStaff(props) {
  return (
    <AnimatedPage>
      <div className="admin-screen">
        <h1>Staff Managment</h1>
        <ViewTable />
      </div>
    </AnimatedPage>
  );
}
