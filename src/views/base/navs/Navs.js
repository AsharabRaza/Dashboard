import React from 'react'
import {
  CRow,
  CCol,
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const Navs = () => {
  return (
    <>
       
    <CRow>
        <CCol xs="12" sm="6" md="6" lg="6">
          <b>SECURITY SETTINGS</b><br></br><br></br>
          <input className="lkioo" type="text" placeholder="Old Password"></input>
          <input className="lkioo" type="text" placeholder="New Password"></input>
          <input className="lkioo" type="text" placeholder="Confirm New Password"></input>
          <div className="oo">
            <button type="submit" className="lot">Change Password</button>
          </div>
          <b>DELETE ACCOUNT</b><br></br><br></br>
          <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum vvlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum v lorem ipsum lorem ipsum lorem ipsum v v v v lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
          <div className="oo">
           <button type="submit" className="loet">Change Password</button>
           </div> 
          </CCol>
    </CRow>    

      
    </>
  )
}

export default Navs
