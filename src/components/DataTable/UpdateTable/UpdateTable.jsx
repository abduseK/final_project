import DataTable from "react-data-table-component";
import './UpdateTable.css';;
import { useState } from "react";
import { Link } from 'react-router-dom';
export default function UpdateTable() {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "schema",
      selector: (row) => row.schema,
    },
    {
      name: "Status",
      selector: (row) => row.status,
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
      schema: "age",
      status: "Update",
     
    },
    {
      id: 1,
      name: "gegion",
      schema: "sex",
      status: "xhange",
     
    },
    {
      id: 1,
      name: "Abdelselam Kemal",
      schema: "age",
      status: "Update",
     
    },
    {
      id: 1,
      name: "Abdelselam Kemal",
      schema: "age",
      status: "Update",
     
    },
    {
      id: 1,
      name: "gegion",
      schema: "sex",
      status: "xhange",
     
    },
    {
      id: 1,
      name: "Abdelselam Kemal",
      schema: "age",
      status: "Update",
     
    },
   
  ];

  const [records, setRecords] = useState(data);

  const handleRowClick = (row) => {
    // Handle the rowclick and show the data using row.name, row.type and bla bla
  };

  function handleFilter(event) {
    const newData = data.filter((row) => {
      return row.type.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setRecords(newData);
  }
  return (
    
<div className="app-container">
      <div className="app-content">
        <div className="app-content-header">
          <div className="header-left">
            <h1 className="app-content-headerText">Update and Change Requests</h1>
            
          </div>
        </div>
        <div className="text-end">
        <input
          type="text"
          onChange={handleFilter}
          placeholder="filter application type"
        />
      </div>
        <fieldset
          style={{
            padding: 0,
            borderLeft: '6px solid #00a967',
            borderRight: 'none',
          }}
        >
          <DataTable
        columns={columns}
        data={records}
        selectableRows
        fixedHeader
        pagination
        onRowClicked={handleRowClick}
      ></DataTable>
        </fieldset>
      </div>
    </div>
  );
}
