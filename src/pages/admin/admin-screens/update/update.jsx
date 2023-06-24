import React from 'react'
import AnimatedPage from "../../../../components/AnimatedPage";
import UpdateAndchangeTable from "../../../../components/DataTable/UpdateTable/UpdateTable";

const update = () => {
  return (
<AnimatedPage>
      <div className="admin-screen">
        {/* <h1>Staff Managment</h1> */}
        <UpdateAndchangeTable/>
      </div>
    </AnimatedPage>  )
}

export default update

    
