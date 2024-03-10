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

const Salaries = ()=> {
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
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
    ];
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    return(
        <>
            <CContainer>
                <CCard >
               
                    <CCardHeader className="text-center"><strong>Salaries</strong></CCardHeader>
                        <CCardBody>
                        <Tabs value={value} onChange={handleChange} aria-label="icon tabs example" centered>
                            <Tab icon={<FormatListBulletedIcon />} aria-label="phone" />
                            <Tab icon={<GridViewIcon />} aria-label="favorite" />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <Button className="mb-4" startIcon={<AddIcon />} size="small" onClick={handleOpen}>
                                New Teacher
                            </Button>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid rows={rows} columns={columns} slots={{ toolbar: GridToolbar }}/>
                            </div>

                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Button className="mb-4" startIcon={<AddIcon />} size="small" onClick={handleOpen}>
                                New Teacher
                            </Button>

                            <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
                                <CCol xs>
                                <Card sx={{ maxWidth: 270, minHeight: 220 }}>
                                    <CardActionArea >
                                        <CardMedia
                                        component="img"
                                        height="140"
                                        image={image1}
                                        alt="green iguana"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="title" component="div">
                                            Cindy Thompson humper Jumpec Hendrixx
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    </Card>
                                    
                                </CCol>
                            </CRow>
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

export default Salaries