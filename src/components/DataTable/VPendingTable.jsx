import DataTable from "react-data-table-component";
import "./PendingTable.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function VPendingTable() {
  const navigate = useNavigate();

  const [wedding, setWedding] = useState(false);

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
    // {
    //   name: "",
    //   cell: (row) => (
    //     <div className="table-btns">
    //       <p className="table-btn-1" onClick={() => handleConfirm(row)}>
    //         Confirm
    //       </p>
    //       <span className="table-btn-2" onClick={() => handleDeny(row)}>
    //         Deny
    //       </span>
    //     </div>
    //   ),
    //   ignoreRowClick: true,
    //   allowOverflow: true,
    //   button: true,
    // },
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

  const [records, setRecords] = useState([]);

  const calculateAge = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  useEffect(() => {
    fetch("http://localhost:4000/birth/pending")
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
          const { firstName, lastName } = entry.body;
          const name = `${firstName} ${lastName}`;
          const age = calculateAge(entry.body.dateOfBirth);
          const sex = entry.body.sex;
          const type = entry.type;

          return { name, sex, type, age };
        });

        setRecords(filteredEntries);
      });
  }, []);

  const handleRowClick = (row) => {
    // Handle the rowclick and show the data using row.name, row.type and bla bla
  };

  function handleFilter(event) {
    const newData = records.filter((row) => {
      return row.type.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setRecords(newData);
  }
  return (
    // <div className="table-container">
    //   <div className="text-end">
    //     <input
    //       type="text"
    //       onChange={handleFilter}
    //       placeholder="filter application type"
    //     />
    //   </div>
    //   <DataTable
    //     columns={columns}
    //     data={records}
    //     selectableRows
    //     fixedHeader
    //     pagination
    //     onRowClicked={handleRowClick}
    //   ></DataTable>
    // </div>
    <div
      className="app-container"
      style={{ background: "white", paddingTop: "20px" }}
    >
      <div className="app-content">
        <div className="app-content-header">
          <div className="header-left">
            <h1 className="app-content-headerText">Pending Requests</h1>
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
  );
}
