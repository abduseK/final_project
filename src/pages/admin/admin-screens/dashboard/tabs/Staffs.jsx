import DataTable from "react-data-table-component";
import { useState } from "react";
import "../../pending/Pending.css";
export default function StaffUsers() {
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
      cell: (row) => (
        <div className="table-btns">
          <p className="table-btn-1" onClick={() => handleConfirm(row)}>
            Edit
          </p>
          <span className="table-btn-2" onClick={() => handleDeny(row)}>
            Delete
          </span>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const handleConfirm = (row) => {
    // Handle confirm button click
    console.log("confirmed");
  };

  const handleDeny = (row) => {
    // Handle deny button click
  };

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
  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const newData = data.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setRecords(newData);
  }
  return (
    <div className="table-container">
      <div className="text-end">
        <input type="text" onChange={handleFilter} />
      </div>
      <DataTable columns={columns} data={records} selectableRows></DataTable>
    </div>
  );
}
