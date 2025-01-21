import React from 'react'
import { CButton, CCard, CCardBody, CCol, CForm, CFormInput, CRow } from '@coreui/react'

const Dashboard = () => {
  return (
    <CCard className="mb-4">
      <CCardBody>
        <CForm>
          <CRow className="align-items-center g-2 flex-nowrap">
            <CCol xs="auto">
              <CFormInput size="sm" placeholder="Serial ID" style={{ width: '120px' }} />
            </CCol>
            <CCol xs="auto">
              <CFormInput size="sm" placeholder="Phone" style={{ width: '120px' }} />
            </CCol>
            <CCol xs="auto">
              <CFormInput size="sm" placeholder="User ID" style={{ width: '120px' }} />
            </CCol>
            <CCol xs="auto">
              <CFormInput size="sm" placeholder="ID Card" style={{ width: '120px' }} />
            </CCol>
            <CCol xs="auto">
              <CFormInput size="sm" placeholder="Bank Account" style={{ width: '120px' }} />
            </CCol>
            <CCol xs="auto">
              <CFormInput size="sm" placeholder="Pan No" style={{ width: '120px' }} />
            </CCol>
            <CCol xs="auto">
              <CFormInput size="sm" placeholder="E-mail" style={{ width: '120px' }} />
            </CCol>
          </CRow>
          <CRow className="mt-3 justify-content-end">
            <CCol xs="auto">
              <CButton size="sm" color="primary">Search</CButton>
            </CCol>
            <CCol xs="auto">
              <CButton size="sm" color="secondary">Reset</CButton>
            </CCol>
          </CRow>
        </CForm>
      </CCardBody>
    </CCard>
  )
}

export default Dashboard