import React from 'react'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CLink,
  CProgress,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const Alerts = () => {
  const [visible, setVisible] = React.useState(10)

  return (
    <>
      <CRow>
        <CCol xs="12" md="7">
          <CCard>
            <CCardHeader>
            <b>NOTIFICATIONS</b>
             
            </CCardHeader>
            <CCardBody>
              <CAlert color="secondary">
                <pre><b>MESSAGE TITLE                                                12/20/2021</b></pre>
                Aww yeah, you successfully read this important alert message. This example text is going
                to run a bit longer so that you can see how spacing within
              </CAlert>
              <CAlert color="primary">
                <pre><b>MESSAGE TITLE                                                12/20/2021</b></pre>
                Aww yeah, you successfully read this important alert message. This example text is going
                to run a bit longer so that you can see how spacing within
              </CAlert>
              <CAlert color="secondary">
                <pre><b>MESSAGE TITLE                                                12/20/2021</b></pre>
                Aww yeah, you successfully read this important alert message. This example text is going
                to run a bit longer so that you can see how spacing within
              </CAlert>
              <CAlert color="secondary">
                <pre><b>MESSAGE TITLE                                                12/20/2021</b></pre>
                Aww yeah, you successfully read this important alert message. This example text is going
                to run a bit longer so that you can see how spacing within
              </CAlert>
              <CAlert color="secondary">
                <pre><b>MESSAGE TITLE                                                12/20/2021</b></pre>
                Aww yeah, you successfully read this important alert message. This example text is going
                to run a bit longer so that you can see how spacing within
              </CAlert>
             
            </CCardBody>
          </CCard>
        </CCol>
      
     
        <CCol xs="12" md="5">
          <CCard>
            <CCardHeader>
             <b>MESSAGE TITLE</b><br></br>12/20/2021 
             
            </CCardHeader>
            <CCardBody>
              <CAlert>
                
                <p>
                  Aww yeah, you successfully read this important alert message. This example text is going
                  to run a bit longer so that you can see how spacing within an alert works with this kind
                  of content. Aww yeah, you successfully read this important alert message. This example text is going
                  to run a bit longer so that you can see how spacing within an alert works with this kind
                  of content.
                  Aww yeah, you successfully read this important alert message. This example text is going
                  to run a bit longer so that you can see how spacing within an alert works with this kind
                  of content. Aww yeah, you successfully read this important alert message. This example text is going
                  to run a bit longer so that you can see how spacing within an alert works with this kind
                  of content.
                </p>
               
              </CAlert>
            </CCardBody>
          </CCard>
        </CCol>
        
        
      </CRow>
    </>
  )
}

export default Alerts
