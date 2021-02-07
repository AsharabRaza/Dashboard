import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CListGroup,
  CListGroupItem,
  CCol,
  CRow,
  CDataTable,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  CChartBar,

} from '@coreui/react-chartjs'

import MainChartExample from '../charts/MainChartExample.js'
import { DocsLink } from 'src/reusable'

import usersData from '../users/UsersData'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['TRAVEL DATE','FROM > TO', 'DISTRUPTION TYPE', 'status']

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  return (
    <>
    
      
    <CRow>
    <CCol xs="12" md ="8" lg="8">
        <CCard>
          <CCardHeader style={{color:"rgb(88 88 193)"}}>
            <b>YOUR TRAVEL BOOKINGS</b>
          </CCardHeader>
          <CCardBody>
            <CChartBar
              datasets={[
                {
                  label: 'Commits',
                  backgroundColor: 'rgb(88 88 193)',
                  data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                }
              ]}
              labels="months"
              options={{
                tooltips: {
                  enabled: true
                }
              }}
            />
          </CCardBody>
        </CCard>
        
        <CRow>
          <CCol xs="12" lg="12">
                <CCard>
                <CCardHeader style={{color:"rgb(88 88 193)"}}>
                  <b>YOUR RECENT TRAVEL BOOKINGS</b>
                  <DocsLink name=""/>
                </CCardHeader>
                <CCardBody>
                <CDataTable
                  items={usersData}
                  fields={fields}
                  itemsPerPage={5}
                  pagination
                  scopedSlots = {{
                    'status':
                      (item)=>(
                        <td>
                          <CBadge >
                            {item.status}
                          </CBadge>
                        </td>
                      )

                  }}
                />
                </CCardBody>
              </CCard>
             
          </CCol>  
        
        </CRow> 
       

        </CCol>
        <CCol xs="12" md ="4" lg="4">
        <CButton color="primary" style={{margin:"-13% 0% 0% 32%"}} >Retrieve Your Travel BOOKING</CButton>
        
            <CCard>
            <CCardHeader>
              <b>TRAVEL BOOKING STATUS UPDATE</b><br></br><br></br>
              <CButton color="primary" block>BOOKING DETAILS</CButton>
            </CCardHeader>
            <CCardBody>

              <CListGroup >
                <CListGroupItem action className="ak">
                  
                  <div>
                     <pre>BOOKING REFERENCE       1564-584134</pre>
                     <pre>TRAVEL DATE              08/01/2021</pre>
                     <pre>DEPARTURE TIME         05:00 AM GMT</pre>
                     <pre>DEPARTURE LOCATION        Dubai UAE</pre>
                     <pre>TRANSPORT OPERATOR    Qatar Airways</pre>
                     <pre>DELAY                    30 Minutes</pre>
                  </div>
                </CListGroupItem>
                <CListGroupItem>
                    <pre><b className="tell">NEW</b>             12/20/21 | 23:00</pre>
                    <p>A contract record has been created for your travel booking and being monitered for qualifying travel disruption</p>
                </CListGroupItem>
                <CListGroupItem>
                    <pre><b className="tell">CLAIM REQUESTED</b> 13/20/21 | 5:00</pre>
                    <p>Your claim has been automatically requested with the transport operator</p>
                </CListGroupItem>
                <CListGroupItem>
                    <pre><b className="tell">CLOSED</b></pre>
                    
                </CListGroupItem>
                
              
              </CListGroup>

            </CCardBody>
          </CCard>
        
        
        </CCol>
      </CRow>


     
      
    
    </>
  )
}

export default Dashboard
