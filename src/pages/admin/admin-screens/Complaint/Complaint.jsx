import React from 'react'
import PropTypes from 'prop-types'
import AnimatedPage from "../../../../components/AnimatedPage";
import ComplaintTable from "../../../../components/DataTable/Complainttable/Complainttable";

const Complaint = props => {
  return (
    <AnimatedPage>
    <div className="admin-screen">
      {/* <h1>Staff Managment</h1> */}
      <ComplaintTable/>
    </div>
  </AnimatedPage>  
  )
}


export default Complaint