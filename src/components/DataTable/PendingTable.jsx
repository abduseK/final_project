import DataTable from "react-data-table-component";
import "./PendingTable.css";
import { useState } from "react";
export default function PendingTable() {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
    },
    {
      name: "Sex",
      selector: (row) => row.sex,
    },
    {
      name: "Application Type",
      selector: (row) => row.type,
    },
    {
      name: "",
      cell: (row) => (
        <div className="table-btns">
          <p className="table-btn-1" onClick={() => handleConfirm(row)}>
            Confirm
          </p>
          <span className="table-btn-2" onClick={() => handleDeny(row)}>
            Deny
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
      age: 22,
      sex: "M",
      type: "ID card",
    },
    {
      id: 2,
      name: "Araman Armaan",
      age: 32,
      sex: "M",
      type: "Wedding Cert.",
    },
    {
      id: 3,
      name: "Habtamu Alemu",
      age: 26,
      sex: "M",
      type: "Wedding Cert.",
    },
    {
      id: 4,
      name: "Ashraf Hakime",
      age: 29,
      sex: "F",
      type: "Death Cert.",
    },
    {
      id: 5,
      name: "Gedion Getachew",
      age: 23,
      sex: "M",
      type: "Birth Cert.",
    },
  ];

  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const newData = data.filter((row) => {
      return row.type.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setRecords(newData);
  }
  return (
    <div className="table-container">
      <div className="text-end">
        <input
          type="text"
          onChange={handleFilter}
          placeholder="filter application type"
        />
      </div>
      <DataTable
        columns={columns}
        data={records}
        selectableRows
        fixedHeader
        pagination
      ></DataTable>
    </div>
  );
}
