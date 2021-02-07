import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
 
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import usersData from '../../users/UsersData'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['DATE','TIME', 'ACTIVITY TYPE', 'IP ADDRESS']

const ViewAccountActivity = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
        <CRow>
        <CCol xs="12" md="8" lg="8">
          <CCard>
            <CCardHeader>
              <b>ACCOUNT ACTIVITY </b>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
            <CCol xs="12" sm="6" md="4" lg="4">
              <CCard>
                <CCardHeader>
                  <b>ACTIVITY DETAILS</b>
                  <pre>12/20/2021                        05:00PM</pre>
                </CCardHeader>
                <CCardBody>
                   <b>PASSWORD CHANGE</b><br></br>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </CCardBody><br></br><br></br>
                <CButton color="primary" block>BOOKING DETAILS</CButton>
              </CCard>
            </CCol>
        </CRow>
    </>
  )
}

export default ViewAccountActivity
