import DataTable from "react-data-table-component";
import "./PendingTable.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ViewPendingID from "./viewpending/viewpending";

export default function RPendingTable() {
  const navigate = useNavigate();
  const [religion, setReligion] = useState(false);
  const [martialStatus, setMartialStatus] = useState(false);
  const [schedule, setSchedule] = useState(false);
  const [time, setTime] = useState(false);
  const [middleName, setMiddleName] = useState(false);
  const [address, setAddress] = useState(false);
  const [birthD, setBirthD] = useState(false);
  const [nationality, setNationality] = useState(false);

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
      name: "Schedule",
      selector: (row) => row.schedule,
      omit: !schedule,
    },
    {
      name: "Time",
      selector: (row) => row.time,
      omit: !time,
    },
    {
      name: "Religion",
      selector: (row) => row.religion,
      omit: !religion,
    },
    // {
    //   name: "Maritial Status",
    //   selector: (row) => row.martialStatus,
    //   omit: !martialStatus,
    // },
    {
      name: "Nationality",
      selector: (row) => row.nationality,
      omit: !nationality,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.birhtD,
      omit: !birthD,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      omit: !address,
    },
    {
      name: "Middle Name",
      selector: (row) => row.middleName,
      omit: !middleName,
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
    fetch("http://localhost:4000/id/pending")
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
          const sex = entry.body.gender;
          const type = "ID";
          const schedule = entry.body.schedule;
          const time = entry.body.selectedTimeGap;
          const nationality = entry.body.nationality;
          const middleName = entry.body.middleName;
          const address = entry.body.address;
          const religion = entry.body.religion;
          const maritialStatus = entry.body.maritialStatus;
          const dateOfBirth = entry.body.dateOfBirth;

          return {
            name,
            firstName,
            lastName,
            sex,
            type,
            age,
            schedule,
            time,
            nationality,
            middleName,
            address,
            religion,
            dateOfBirth,
          };
        });

        setRecords(filteredEntries);
      });
  }, []);

  const [showDetailView, setShowDetailView] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);

  const handleRowClick = (row) => {
    // Handle the rowclick and show the data using row.name, row.type and bla bla
    const {
      firstName,
      lastName,
      sex,
      type,
      age,
      schedule,
      time,
      nationality,
      middleName,
      address,
      religion,
      dateOfBirth,
    } = row;
    setSelectedStaff({
      firstName,
      lastName,
      sex,
      type,
      age,
      schedule,
      time,
      nationality,
      middleName,
      address,
      religion,
      dateOfBirth,
    });
    setShowDetailView(true);
  };

  function handleFilter(event) {
    const newData = records.filter((row) => {
      return row.type.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setRecords(newData);
  }
  return (
    <div>
      {showDetailView ? (
        <ViewPendingID details={selectedStaff} />
      ) : (
        <>
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
                <div className="toggle-columns">
                  <label>
                    <input
                      type="checkbox"
                      checked={schedule}
                      onChange={() => setSchedule(!schedule)}
                    />
                    Schedule
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={time}
                      onChange={() => setTime(!time)}
                    />
                    Time
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={address}
                      onChange={() => setAddress(!address)}
                    />
                    Address
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={middleName}
                      onChange={() => setMiddleName(!middleName)}
                    />
                    Middle Name
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={religion}
                      onChange={() => setReligion(!religion)}
                    />
                    Religion
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={nationality}
                      onChange={() => setNationality(!nationality)}
                    />
                    Nationality
                  </label>
                </div>

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
        </>
      )}
    </div>
  );
}
