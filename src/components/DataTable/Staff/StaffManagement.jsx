import DataTable from "react-data-table-component";
import "./StaffManagement.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ViewStaffTable from "../ViewStaffTable/ViewStaffTable";

export default function StaffManagement() {
  const navigate = useNavigate();
  const columns = [
    {
      name: "Name",
      selector: (row) => row.username,
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
      name: "Phone",
      selector: (row) => row.phone,
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
      email: "abduselam@gmail.com",
      role: "VEP",
      status: "Active",
    },
    {
      id: 2,
      name: "Abdelselam Kemal",
      email: "abduselam@gmail.com",
      role: "VEP",
      status: "Active",
    },
    {
      id: 3,
      name: "Abdelselam Kemal",
      email: "abduselam@gmail.com",
      role: "VEP",
      status: "Active",
    },
    {
      id: 4,
      name: "Abdelselam Kemal",
      email: "abduselam@gmail.com",
      role: "VEP",
      status: "Active",
    },
    {
      id: 5,
      name: "Abdelselam Kemal",
      email: "abduselam@gmail.com",
      role: "VEP",
      status: "Active",
    },
    {
      id: 6,
      name: "Abdelselam Kemal",
      email: "abduselam@gmail.com",
      role: "VEP",
      status: "Active",
    },
  ];

  const [records, setRecords] = useState([]);

  function handleFilter(event) {
    const newData = data.filter((row) => {
      return row.type.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setRecords(newData);
  }

  useEffect(() => {
    fetch("http://localhost:3004/api/account/staff")
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        } else {
          console.log("Something went wrong");
        }
      })
      .then((data) => {
        const entries = data;
        const filteredEntries = entries.map((entry) => {
          const username = entry.username;
          const email = entry.email;
          const role = entry.role;
          const phone = entry.phone;
          return { username, email, role, phone };
        });
        setRecords(filteredEntries);
      });
  }, []);
  const [showDetailView, setShowDetailView] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);

  const handleRowClick = (row) => {
    // navigate("/admin/admin/viewstaffs");

    const { username, email, phone, role } = row;
    setSelectedStaff({ username, email, phone, role });
    setShowDetailView(true);

    // const { username, email, phone, role } = row;
    // console.log(username, email);
    // navigate({
    //   pathname: "/admin/admin/viewstaffs",
    //   state: { username, email, phone, role },
    // });

    // console.log(username);
  };

  return (
    <div>
      {showDetailView ? (
        <ViewStaffTable staff={selectedStaff} />
      ) : (
        <div className="app-container">
          <div className="app-content">
            <div className="app-content-header">
              <div className="header-left">
                <h1 className="app-content-headerText">Staff Management</h1>
                <Link to="/admin/admin/addstaffs">
                  <button className="app-content-headerButton">
                    Add Staff
                  </button>
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
                borderLeft: "6px solid #00a967",
                borderRight: "none",
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
      )}
    </div>
  );
}
