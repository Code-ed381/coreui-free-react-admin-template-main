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
    CCardImage
} from '@coreui/react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Tabs from '@mui/material/Tabs';
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
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

const Fees = ()=> {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen = () => {
      setOpen(true);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };


    const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

    const rows: GridRowsProp = [
        { id: 1, 
            col1: <h1>Name</h1>, 
            col2: 'World' 
        },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
    ];
      
    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Name', width: 400 },
        { field: 'col2', headerName: 'Total Fees', width: 200 },
        { field: 'col3', headerName: 'Amount Paid', width: 200 },
        { field: 'col4', headerName: 'Balance', width: 200 },
        { field: 'col5', headerName: 'Arrears', width: 200 },
    ];
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    return(
        <>
            <CContainer>
                <CCard >
               
                    <CCardHeader className="text-center"><strong>Fees</strong></CCardHeader>
                        <CCardBody>
                        <Tabs value={value} onChange={handleChange} variant="scrollable" aria-label="icon tabs example" centered>
                            <Tab label="Creche" />
                            <Tab label="Nursery 1" />
                            <Tab label="Nursery 2" />
                            <Tab label="KG" />
                            <Tab label="Class 1" />
                            <Tab label="class 2" />
                            <Tab label="class 3" />
                            <Tab label="class 4" />
                            <Tab label="class 5" />
                            <Tab label="class 6" />
                            <Tab label="JHS 1" />
                            <Tab label="JHS 2" />
                            <Tab label="JHS 3" />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid rows={rows} columns={columns} slots={{ toolbar: GridToolbar }}/>
                            </div>

                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid rows={rows} columns={columns} slots={{ toolbar: GridToolbar }}/>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid rows={rows} columns={columns} slots={{ toolbar: GridToolbar }}/>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid rows={rows} columns={columns} slots={{ toolbar: GridToolbar }}/>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid rows={rows} columns={columns} slots={{ toolbar: GridToolbar }}/>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid rows={rows} columns={columns} slots={{ toolbar: GridToolbar }}/>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={6}>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid rows={rows} columns={columns} slots={{ toolbar: GridToolbar }}/>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={7}>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid rows={rows} columns={columns} slots={{ toolbar: GridToolbar }}/>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={8}>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid rows={rows} columns={columns} slots={{ toolbar: GridToolbar }}/>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={9}>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid rows={rows} columns={columns} slots={{ toolbar: GridToolbar }}/>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={10}>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid rows={rows} columns={columns} slots={{ toolbar: GridToolbar }}/>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={11}>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid rows={rows} columns={columns} slots={{ toolbar: GridToolbar }}/>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={12}>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid rows={rows} columns={columns} slots={{ toolbar: GridToolbar }}/>
                            </div>
                        </TabPanel>
                        </CCardBody>
                    <CCardFooter className="text-medium-emphasis text-center">2 days ago</CCardFooter>
                </CCard>
            </CContainer>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                backdrop: {
                    timeout: 500,
                },
                }}
            >
                <Fade in={open}>
                <Box sx={style}>
                    {/* <Typography id="transition-modal-title" variant="h6" component="h2">
                        Add new teacher
                    </Typography> */}
                    <TextField fullWidth size="small" label="fullWidth" id="fullWidth" variant="filled"/>
                    <TextField fullWidth size="small" label="fullWidth" id="fullWidth" variant="filled"/>
                    <TextField fullWidth size="small" label="fullWidth" id="fullWidth" variant="filled"/>
                    <TextField fullWidth size="small" label="fullWidth" id="fullWidth" variant="filled"/>
                    <TextField fullWidth size="small" label="fullWidth" id="fullWidth" variant="filled"/>
                </Box>
                </Fade>
            </Modal>  
        </>
    )
}

export default Fees