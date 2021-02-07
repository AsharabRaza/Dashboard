import React from 'react'
import {
  CCol,
  CRow,
  CBreadcrumb,
  CBreadcrumbItem,
  CBreadcrumbRouter,
  CCard,
  CCardBody,
  CCardHeader,
  CFormGroup,
  CInputRadio,
  CInputCheckbox,
  CLabel
} from '@coreui/react'

import { CIcon } from '@coreui/icons-react';
import { cifAU } from '@coreui/icons';
import CoreUIIcons from '../../icons/coreui-icons/CoreUIIcons';

const TravelBookings = () => {
  return (
    <div>
    <CRow>
      <CCol xs="12">
       
        
          
            <h4>SERACH YOUR TRAVEL BOOKINGS</h4>
                <input className="lk" type="text" placeholder="Add a reference number"></input>
                <input className="lki" type="text" placeholder="Travel From"></input>
                <input className="lki" type="text" placeholder="Travel To"></input>
                <button type="submit" className="lkii">Search</button>
       
      </CCol>
    </CRow>
    <CRow>
     
        <CCol xs="12">
           <p className="lkk"><b>Advanced Filters</b></p>
           <CIcon name="cil-list-rich" className="lkkk"/>
           
        </CCol>
    </CRow>
    <CRow>
    <CCol xs="12" >
      <CCard>
    
        <CCardBody className="ad">
           <CRow>
              <CCol xs="12" md="3" lg="3">
                <h5>Travel Date</h5>
                <input className="lklk" type="text" placeholder="Date From"></input>
                <input className="lklk" type="text" placeholder="Date To"></input><br></br><br></br>
                <h5>Travel Time</h5>
                <input className="lklk" type="text" placeholder="Time From"></input>
                <input className="lklk" type="text" placeholder="Time To"></input>
              </CCol>
              <CCol xs="12" md="3" lg="3">
                <h5>Travel Detalis</h5>
                <input className="lklk" type="text" placeholder="To"></input>
                <input className="lklk" type="text" placeholder="From"></input><br></br><br></br>
                <h5>Transport Operator</h5>
                <input className="lklk" type="text" placeholder="Search for an operator "></input>
              </CCol>
              <CCol xs="12" md="2" lg="2">
                <h5>Transport Mode</h5>
                <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label aa" htmlFor="checkbox2">All</CLabel>
                </CFormGroup>
                <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label aa" htmlFor="checkbox2">Flight</CLabel>
                </CFormGroup>
                <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label aa" htmlFor="checkbox2">Rail</CLabel>
                </CFormGroup>
               
              </CCol>
              <CCol xs="12" md="2" lg="2">
                <h5>Distruption Type</h5>
                  <CFormGroup variant="checkbox" className="checkbox">
                        <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                        <CLabel variant="checkbox" className="form-check-label aa" htmlFor="checkbox2">All</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="checkbox" className="checkbox">
                        <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                        <CLabel variant="checkbox" className="form-check-label aa" htmlFor="checkbox2">Delayed</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="checkbox" className="checkbox">
                        <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                        <CLabel variant="checkbox" className="form-check-label aa" htmlFor="checkbox2">Canceled</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="checkbox" className="checkbox">
                        <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                        <CLabel variant="checkbox" className="form-check-label aa" htmlFor="checkbox2">Postponed</CLabel>
                  </CFormGroup><br></br><br></br>
                  <h5>Delay Time</h5>
                      <CFormGroup variant="checkbox" className="checkbox">
                            <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                            <CLabel variant="checkbox" className="form-check-label aa" htmlFor="checkbox2">All</CLabel>
                      </CFormGroup>
                      <CFormGroup variant="checkbox" className="checkbox">
                            <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                            <CLabel variant="checkbox" className="form-check-label aa" htmlFor="checkbox2"> {"<"} 30 Min</CLabel>
                      </CFormGroup>
                      <CFormGroup variant="checkbox" className="checkbox">
                            <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                            <CLabel variant="checkbox" className="form-check-label aa" htmlFor="checkbox2">{"<"} 2 Hours</CLabel>
                      </CFormGroup>
                      <CFormGroup variant="checkbox" className="checkbox">
                            <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                            <CLabel variant="checkbox" className="form-check-label aa" htmlFor="checkbox2">{">"} 24 Hours</CLabel>
                      </CFormGroup>
              </CCol>
              <CCol xs="12" md="2" lg="2">
                <h5>Status</h5>
                    <CFormGroup variant="checkbox" className="checkbox">
                          <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                          <CLabel variant="checkbox" className="form-check-label aa" htmlFor="checkbox2">All</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
                          <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                          <CLabel variant="checkbox" className="form-check-label aa" htmlFor="checkbox2">New</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
                          <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                          <CLabel variant="checkbox" className="form-check-label aa" htmlFor="checkbox2">Info Required</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
                          <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                          <CLabel variant="checkbox" className="form-check-label aa" htmlFor="checkbox2">Claim Requested</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
                          <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                          <CLabel variant="checkbox" className="form-check-label aa" htmlFor="checkbox2">Expired</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
                          <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                          <CLabel variant="checkbox" className="form-check-label aa" htmlFor="checkbox2">Closed</CLabel>
                    </CFormGroup>
              </CCol>
              
           </CRow>
             
            
      
            
           <div className="oo">
                  <button type="submit" className="lkiit">Search</button>
                  <p className="oo"><u className="aa">Reset Filter</u></p>
           </div>
         
          

        
        </CCardBody>
      </CCard>
                  
    </CCol>
  </CRow>



    </div>
    
    

    
  )
}

export default TravelBookings
