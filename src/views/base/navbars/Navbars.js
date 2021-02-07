import React, { useState } from 'react'
import {
  CRow,
  CCol,
} from '@coreui/react'


const CNavbars = () => {

  return (
    <>
      
    <CRow>
    <CCol xs="12" sm="6" md="6" lg="6">
      <b>WHY ARE YOU LEAVING</b><br></br><br></br>
        <p className="ooi"> i want to temporarily delete my account</p>
        <p className="ooi"> i want to temporarily delete my account</p>
        <p className="ooi"> i want to temporarily delete my account</p>
        <p className="ooi"> i want to temporarily delete my account</p>
     
      <div className="oo">
       <button type="submit" className="loet">Delete Account</button>
       </div> 
      </CCol>
</CRow>  
      
    </>
  )
}

export default CNavbars
