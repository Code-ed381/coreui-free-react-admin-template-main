/* eslint-disable */
import React from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCardText,
    CButton,
    CCardFooter,
    CContainer,
    CRow,
    CCol,
    CForm,
    CFormInput
} from '@coreui/react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const Students = ()=> {
    const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

    const rows: GridRowsProp = [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
    ];
      
    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
    ];


    return(
        <>
            {/* <CContainer>
            <CRow>
                <CCol sm={6}>
                    <CForm>
                        <CFormInput
                            type="email"
                            id="exampleFormControlInput1"
                            label="Email address"
                            placeholder="name@example.com"
                            text="Must be 8-20 characters long."
                            aria-describedby="exampleFormControlInputHelpInline"
                        />
                    </CForm>
                </CCol>
                <CCol sm={6}>col-sm-4</CCol>
            </CRow>
            </CContainer> */}
            <CContainer>
            <CCard className="text-center">
                <CCardHeader><strong>List of students</strong></CCardHeader>
                    <CCardBody>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid rows={rows} columns={columns} slots={{ toolbar: GridToolbar }}/>
                        </div>
                    </CCardBody>
                <CCardFooter className="text-medium-emphasis">2 days ago</CCardFooter>
            </CCard>
            </CContainer>
        </>
    )
}

export default Students