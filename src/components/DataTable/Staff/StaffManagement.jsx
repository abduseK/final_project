
import DataTable from "react-data-table-component";
import './StaffManagement.css';;
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function StaffManagement() {

  const navigate = useNavigate()
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Role",
      selector: (row) => row.role,
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
      name: 'Abdelselam Kemal',
      email: 'abduselam@gmail.com',
      role: 'VEP',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Abdelselam Kemal',
      email: 'abduselam@gmail.com',
      role: 'VEP',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Abdelselam Kemal',
      email: 'abduselam@gmail.com',
      role: 'VEP',
      status: 'Active',
    },
    {
      id: 4,
      name: 'Abdelselam Kemal',
      email: 'abduselam@gmail.com',
      role: 'VEP',
      status: 'Active',
    },
    {
      id: 5,
      name: 'Abdelselam Kemal',
      email: 'abduselam@gmail.com',
      role: 'VEP',
      status: 'Active',
    },
    {
      id: 6,
      name: 'Abdelselam Kemal',
      email: 'abduselam@gmail.com',
      role: 'VEP',
      status: 'Active',
    },
  ];

  const [records, setRecords] = useState(data);

  const handleRowClick = (row) => {
    navigate('/admin/admin/viewstaffs')
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
            <h1 className="app-content-headerText">Staff Management</h1>
            <Link to="/admin/admin/addstaffs">
              <button className="app-content-headerButton">Add Staff</button>
            </Link>
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


