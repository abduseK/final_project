import AnimatedPage from "../../../../components/AnimatedPage";
import "./adminSettings.css";
import DataTable from "react-data-table-component";

export default function AdminSettings() {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: "Role",
      selector: (row) => row.role,
    },
    {
      name: "",
      cell: (row) => <div className="table-btns"></div>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];
  const data = [
    {
      id: 1,
      name: "Abdelselam Kemal",
      role: "VEP",
    },
    {
      id: 2,
      name: "Araman Armaan",
      role: "REP",
    },
    {
      id: 3,
      name: "Habtamu Alemu",
      role: "REP",
    },
  ];
  const customStyles = {
    rows: {
      style: {
        backgroundColor: "",
        padding: "0 8px",
      },
    },
    cells: {
      style: {
        fontSize: "14px",
        paddingRight: "40px",
        marginRight: "40px",
      },
    },
  };
  return (
    <AnimatedPage>
      <div className="admin-screen">
        <div className="admin-settings">
          <h1>Admin Settings</h1>
          <h2>Staffs</h2>
          <hr />
          <div className="staff-detail-section">
            <div className="col-1">
              <p>
                You can add new staffs, edit the existing one, give a role and
                delete a staff from the board. Assigning a role gives a staff
                the previlege to confirm requests submitted by the resident.
              </p>
              <button>Add Staff</button>
            </div>
            <div className="col-2">
              <DataTable
                columns={columns}
                data={data}
                customStyles={customStyles}
              ></DataTable>
              <button>Add Staff</button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
