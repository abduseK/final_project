import React from 'react'
import PropTypes from 'prop-types'
import AnimatedPage from "../../../../components/AnimatedPage";
import AddStaffTable from "../../../../components/DataTable/StaffAdd/StaffAdd";

const AddStaff = props => {
  return (
    <AnimatedPage>
    <div className="admin-screen">
    
      <AddStaffTable/>
    </div>
  </AnimatedPage>  
  )
}


export default AddStaff