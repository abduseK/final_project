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
        <input type="text" onChange={handleFilter} placeholder="search staff" />
      </div>
      <DataTable columns={columns} data={records} selectableRows></DataTable>
    </div>
  );
}
