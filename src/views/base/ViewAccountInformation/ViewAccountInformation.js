import React from 'react'
import {
  CCol,
  CRow,
  CSwitch
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const ViewAccountInformation = () => {

  return (
    <>
       <CRow>
          <CCol xs="12" md="6">
             <b>YOUR ACCOUNT INFORMATION</b><br></br><br></br>
             <textarea rows="4" cols="15"></textarea><br></br><br></br>
             <input className="lkio" type="text" placeholder="First Name"></input>
             <input className="lkio" type="text" placeholder="Last Name"></input>
             <input className="lkioo" type="text" placeholder="Email Address"></input>
             <input className="lkioo" type="text" placeholder="Mobile Number"></input>
             <input className="lkioo" type="text" placeholder="Postal Code"></input>
             <input className="lkioo" type="text" placeholder="Address"></input><br></br>
             <div className="oo">
               <button type="submit" className="lkiiit">Save</button>
             </div>
          </CCol>
          <CCol xs="12" md="6">
             <b>PAYMENT DETAILS</b><br></br>
             <input className="lkioo" type="text" placeholder="Sort Code"></input>
             <input className="lkioo" type="text" placeholder="Accout Number"></input>
             <input className="lkioo" type="text" placeholder="Alternative Compensation Method"></input><br></br><br></br>
             <b>ACCOUNT SETTINGS</b>
             <div className="od">
             <pre>Notifications               <CSwitch className={'mx-1'} shape={'pill'} color={'primary'} defaultChecked /></pre>
             <pre>Newsletter                  <CSwitch className={'mx-1'} shape={'pill'} color={'secondary'} defaultChecked /></pre>
             </div>

          </CCol>
       </CRow>
  
    </>
  )
}

export default ViewAccountInformation
