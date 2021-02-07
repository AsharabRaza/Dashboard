import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import { CIcon } from '@coreui/icons-react';

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
const fields = ['TRAVEL DATE','FROM > TO', 'TRAVEL MODE', 'TRANSPORT OPERATOR' ,'DISTRUPTION TYPE' ,'DELAY' ,'STATUS']

const BookingsData = () => {
  return (
    <>
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
    <CCol>
      <CCard>
        
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
  </CRow>

    </>
  )
}

export default BookingsData
