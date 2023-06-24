// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import './StaffManagement.css';
// import { Link } from 'react-router-dom';

// const StaffManagement = (props) => {
//   const records = [
//     {
//       id: 1,
//       name: 'Abdelselam Kemal',
//       email: 'abduselam@gmail.com',
//       role: 'VEP',
//       status: 'Active',
//     },
//     {
//       id: 2,
//       name: 'Abdelselam Kemal',
//       email: 'abduselam@gmail.com',
//       role: 'VEP',
//       status: 'Active',
//     },
//     {
//       id: 3,
//       name: 'Abdelselam Kemal',
//       email: 'abduselam@gmail.com',
//       role: 'VEP',
//       status: 'Active',
//     },
//   ];

//   const [filteredRecords, setFilteredRecords] = useState(records);

//   function handleFilter(event) {
//     const newData = records.filter((row) => {
//       return row.role.toLowerCase().includes(event.target.value.toLowerCase());
//     });

//     setFilteredRecords(newData);
//   }

//   return (
//     <div className="app-container">
//       <div className="app-content">
//         <div className="app-content-header">
//           <div className="header-left">
//             <h1 className="app-content-headerText">Staff Management</h1>
//             <Link to="/admin/admin/addstaffs">
//               <button className="app-content-headerButton">Add Staff</button>
//             </Link>
//           </div>
//         </div>
//         <div className="app-content-actions">
//           <div className="text-end">
//             <input type="text" onChange={handleFilter} placeholder="search" />
//           </div>
//         </div>
//         <div className="products-area-wrapper tableView">
//           <div className="products-header">
//             <div className="product-cell image">
//               Name
//               <button className="sort-button">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 512 512"
//                 >
//                   <path
//                     fill="currentColor"
//                     d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8L45.4 347.2c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c3.9 3.9 9.1 5.9 14.2 5.9s10.3-2 14.2-5.9l120.4-120.4c7.9-7.9 7.9-20.6 0-28.5z"
//                   ></path>
//                 </svg>
//               </button>
//             </div>
//             <div className="product-cell category">Email</div>
//             <div className="product-cell sales">Role</div>
//             <div className="product-cell status-cell">Status</div>
//             <div className="product-cell price">Actions</div>
//           </div>
//           <div className="products-list">
//             {filteredRecords.map((record) => (
//               <div key={record.id} className="product-row">
//                 <div className="product-cell image">{record.name}</div>
//                 <div className="product-cell category">{record.email}</div>
//                 <div className="product-cell sales">{record.role}</div>
//                 <div className="product-cell status-cell">{record.status}</div>
//                 <div className="product-cell price">
//                   <button className="edit-button">Edit</button>
//                   <button className="delete-button">Delete</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// StaffManagement.propTypes = {
//   // Add any required prop types here
// };

// export default StaffManagement;
