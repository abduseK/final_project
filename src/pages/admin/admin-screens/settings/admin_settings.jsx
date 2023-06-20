import { useState } from "react";
import AnimatedPage from "../../../../components/AnimatedPage";
import "./adminSettings.css";
import DataTable from "react-data-table-component";
import av from "./download.png";
import del from "./delete.png";

export default function AdminSettings() {
  const [showDialog, setShowDialog] = useState(false);
  const closeDialog = () => {
    setShowDialog(false);
  };

  const openDialog = () => {
    setShowDialog(true);
  };
  const roleOptions = [
    { value: "vep", label: "VEP" },
    { value: "rep", label: "REP" },
  ];

  function handleDeleteClick() {
    // handle delete staff here
  }
  const columns = [
    {
      name: "",
      selector: (row) => row.avatar,
      cell: (row) => (
        <div className="avatar-row">
          <img
            src={row.avatar}
            alt="Avatar"
            style={{ width: "30px", borderRadius: "50%" }}
          />
          <p>{row.name}</p>
        </div>
      ),
      sortable: true,
    },

    {
      name: "",
      selector: (row) => row.role,
    },
    {
      name: "",
      cell: (row) => (
        <div className="select-section">
          <select>
            <option value="Admin" selected={row.role === "Admin"}>
              VEP
            </option>
            <option value="User" selected={row.role === "User"}>
              REP
            </option>
          </select>
          <img onClick={handleDeleteClick} src={del} alt="" />
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];
  const data = [
    {
      id: 1,
      avatar: av,
      name: "Abdelselam Kemal",
      role: "VEP",
    },
    {
      id: 2,
      avatar: av,
      name: "Araman Armaan",
      role: "REP",
    },
    {
      id: 3,
      avatar: av,
      name: "Habtamu Alemu",
      role: "REP",
    },
  ];
  const customStyles = {
    headCells: {
      style: {
        width: "70%",
      },
    },
    rows: {
      style: {
        backgroundColor: "",
        padding: "0 8px",
        width: "70%",
      },
    },
    cells: {
      style: {
        fontSize: "14px",
        paddingRight: "40px",
        width: "70%",
        // marginRight: "40px",
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
              <button onClick={openDialog}>Add Staff</button>
              {showDialog && (
                <div className="dialog">
                  <h2>Add a new staff</h2>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="dialog-text-area"
                  />
                  <input
                    type="text"
                    placeholder="Enter role (VEP or REP)"
                    className="dialog-text-area"
                  />
                  <div className="btns">
                    <button onClick={closeDialog}>Cancel</button>
                    <button onClick={""}>Add</button>
                  </div>
                </div>
              )}
            </div>
            <div className="col-2">
              <DataTable
                columns={columns}
                data={data}
                customStyles={customStyles}
              ></DataTable>
            </div>
            <hr />
            <h2>Pending Adds</h2>
            <p>
              You can add a staff and make it pending before you give any
              permissions. Assigning a role gives a staff the previlege to
              confirm requests submitted by the resident.
            </p>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
