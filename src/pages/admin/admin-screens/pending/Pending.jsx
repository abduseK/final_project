import AnimatedPage from "../../../../components/AnimatedPage";
import PendingTable from "../../../../components/DataTable/PendingTable";
import "./Pending.css";

export default function Pending() {
  return (
    <AnimatedPage>
      <div className="admin-screen">
        <h1>Pending Requests</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          dignissimos neque asperiores eligendi dicta? Laudantium beatae ipsum
          dignissimos esse non. Ad, autem accusamus deserunt distinctio harum
          labore eligendi libero tempora?
        </p>
        <PendingTable />
      </div>
    </AnimatedPage>
  );
}
