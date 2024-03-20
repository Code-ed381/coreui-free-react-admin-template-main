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
    CFormInput,
    CCardImage,
    CTable,
    CListGroup,
    CListGroupItem
} from '@coreui/react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Tabs from '@mui/material/Tabs';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import image1 from "../../../src/assets/images/avatars/1.jpg"
import Button from '@mui/material/Button';
import NavigationIcon from '@mui/icons-material/Navigation';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Heatmap } from "contribution-heatmap"



const class_columns = [
    {
      key: 'Subject',
      _props: { scope: 'col' },
    },
    {
      key: 'Test 1 (10% )',
      _props: { scope: 'col' },
    },
    {
        key: 'Test 2 (10% )',
        _props: { scope: 'col' },
    },
    {
    key: 'Test 3 (10% )',
    _props: { scope: 'col' },
    },
    {
      key: 'Assignment (20%   )',
      _props: { scope: 'col' },
    },
    {
      key: 'Exams (50% )',
      _props: { scope: 'col' },
    },
    {
        key: 'Total (100%   )',
        _props: { scope: 'col' },
    },
]
  
const class_items = [
    {
      id: 1,
      class: 'Mark',
      heading_1: 'Otto',
      heading_2: '@mdo',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      class: 'Jacob',
      heading_1: 'Thornton',
      heading_2: '@fat',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 3,
      class: 'Larry the Bird',
      heading_2: '@twitter',
      _cellProps: { id: { scope: 'row' }, class: { colSpan: 2 } },
    },
]

const fees_columns = [
    {
      key: 'Receipt no.',
      _props: { scope: 'col' },
    },
    {
      key: 'Amount',
      _props: { scope: 'col' },
    },
    {
      key: 'Paid',
      _props: { scope: 'col' },
    },
    {
      key: 'Balance',
      _props: { scope: 'col' },
    },
    {
        key: 'Arrears',
        _props: { scope: 'col' },
      },
]
  
const fees_items = [
    {
      id: 1,
      class: 'Mark',
      heading_1: 'Otto',
      heading_2: '@mdo',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      class: 'Jacob',
      heading_1: 'Thornton',
      heading_2: '@fat',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 3,
      class: 'Larry the Bird',
      heading_2: '@twitter',
      _cellProps: { id: { scope: 'row' }, class: { colSpan: 2 } },
    },
]



const Students = ()=> {
    return(
        <>
            <CContainer>
                <CCard >
               
                    <CCardHeader className="text-center"><strong>Student Details</strong></CCardHeader>
                        <CCardBody>
                            <CRow className="mb-2">
                                <CCol md={4} className="my-2">
                                    <CCardImage src={image1} />
                                </CCol>
                                
                                <CCol md={8}>
                                    <CRow>
                                        <CCol>
                                            <CListGroup flush>
                                                <CListGroupItem>
                                                    <h6><strong>First name</strong></h6>
                                                    <span>John</span>
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CCol>
                                        <CCol>
                                            <CListGroup flush>
                                                <CListGroupItem>
                                                    <h6><strong>Other name(s)</strong></h6>
                                                    <span>Nii Junior</span>
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CCol>
                                        <CCol>
                                            <CListGroup flush>
                                                <CListGroupItem>
                                                    <h6><strong>Last name</strong></h6>
                                                    <span>Doe</span>
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CCol>
                                    </CRow>
                                    <Divider/>
                                    <CRow>
                                        <CCol>
                                            <CListGroup flush>
                                                <CListGroupItem>
                                                    <h6><strong>Age</strong></h6>
                                                    <span>13</span>
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CCol>
                                        <CCol>
                                            <CListGroup flush>
                                                <CListGroupItem>
                                                    <h6><strong>Class</strong></h6>
                                                    <span>6</span>
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CCol>
                                        <CCol>
                                            <CListGroup flush>
                                                <CListGroupItem>
                                                    <h6><strong>House</strong></h6>
                                                    <span>Akita</span>
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CCol>
                                        <CCol>
                                            <CListGroup flush>
                                                <CListGroupItem>
                                                    <h6><strong>Position</strong></h6>
                                                    <span>Akita Prefect</span>
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CCol>
                                    </CRow>
                                    <Divider/>
                                    <CRow>
                                        <CCol>
                                            <CListGroup flush>
                                                <CListGroupItem>
                                                    <h6><strong>Father</strong></h6>
                                                    <span>Mr. Jonathan D. Doe</span><br/>
                                                    <span>0557897673 | 0277654234</span>
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CCol>
                                        <CCol>
                                            <CListGroup flush>
                                                <CListGroupItem>
                                                    <h6><strong>Mother</strong></h6>
                                                    <span>Mrs. Jane F. Doe</span><br/>
                                                    <span>0557897673 | 0277654234</span>
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CCol>
                                    </CRow>
                                    <Divider/>
                                    <CListGroup flush>
                                        <CListGroupItem>
                                            <h6><strong>Medical Issues</strong></h6>
                                            <span>None</span>
                                        </CListGroupItem>
                                    </CListGroup>
                                    <CListGroup flush>
                                    <Divider/>
                                    <CListGroupItem>
                                            <h6><strong>Summary</strong></h6>
                                            <span>None</span>
                                        </CListGroupItem>
                                    </CListGroup>
                                </CCol>
                            </CRow>
                            <Divider className="my-4"/>
                            <CRow className="mb-4">
                                {/* Fees report */}
                                <CCol md={6} className="mb-4">
                                    <CCard >
                                        <CCardHeader className="text-center"><strong>Fees Report</strong></CCardHeader>
                                        <CCardBody>
                                            <CTable responsive columns={fees_columns} items={fees_items} />
                                        </CCardBody>
                                    </CCard >
                                </CCol>
                                
                                <CCol md={6} className="mb-2">
                                <CCard >
                                    <CCardHeader className="text-center"><strong>Class Report</strong></CCardHeader>
                                        <CCardBody>
                                            <CTable stripedColumns responsive columns={class_columns} items={class_items} />
                                        </CCardBody>
                                    </CCard >
                                </CCol>
                            </CRow>

                            {/* Attendance Card */}
                            <CCard>
                                <CCardHeader className="text-center"><strong>Attendance</strong></CCardHeader>
                                <CCardBody>
                                    <Heatmap
                                        colour={['#ebedf0', '#c6e48b', '#40c463', '#30a14e', '#216e39']} 
                                        squareNumber={365} 
                                        count={[3, 2, 20, 1, 14]}
                                        squareGap='4px'
                                        squareSize='15px'
                                    />
                                </CCardBody>
                            </CCard>
                        </CCardBody>
                    <CCardFooter className="text-medium-emphasis text-center">2 days ago</CCardFooter>
                </CCard>
            </CContainer>             
        </>
    )
}

export default Students