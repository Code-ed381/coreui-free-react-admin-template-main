/* eslint-disable */
import React, { useEffect, useState } from 'react';
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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Swal from 'sweetalert2'
import { createClient } from '@supabase/supabase-js'
const supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4bXdwY3VsdXJ4dGFhdmpxdGVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyMjI2OTcsImV4cCI6MjAyNDc5ODY5N30.6uhlDSEhVHHA0-CMHdPLRDQVrMZ6yz8cd5HvrIan7Xo"
const supabaseUrl = 'https://pxmwpculurxtaavjqted.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

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

const Users = ()=> {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [resetPassword, setResetPassword_] = useState('');
    const [status, setStatus] = useState('');
    const newJsonObject = []
    
    useEffect(() => {
        const controller = new AbortController();
        var isMounted = true
    
        const getUsers = async () => {
            let { data: users, error } = await supabase
            .from('users')
            .select('*')  
            setData(users)
    
            console.log(users)
        }
    
        getUsers()
   
        return () => {
            isMounted = false
            controller.abort();
        }
    }, [])
    
    const handleRole = (event) => {
      setRole(event.target.value);
    };
    
    const handleChangeTwo = (event) => {
        setStatus(event.target.value);
    };
    
    const handleSubmit = async (e)=> {
        e.preventDefault();
    
        try {
            const { data, error } = await supabase
            .from('users')
            .insert([
            { username: username, 
              email: email,
              password: password,
              role: role
            },
            ])
            .select('*')
    
            if(error){
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
            }
            else {
                Swal.fire({
                    title: "User Created!",
                    icon: "success"
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
        Swal.fire({
            title: "User Created!",
            icon: "success"
        });
    }
    
    data.map(item => {
        newJsonObject.push({id: item['id'], 
                            col1: item['id'], 
                            col2: item['username'], 
                            col3: item['email'], 
                            col4: item['password'], 
                            col5: item['role']}
                        )
    })
    
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
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    // const rows: GridRowsProp = newJsonObject[0];

    // console.log(newJsonObject);
      
    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'ID', width: 100 },
        { field: 'col2', headerName: 'Username', width: 200 },
        { field: 'col3', headerName: 'Email', width: 200 },
        { field: 'col4', headerName: 'Password', width: 200 },
        { field: 'col5', headerName: 'Role', width: 200 },
    ];
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    return(
        <>
            <CContainer>
                <CCard >
               
                    <CCardHeader className="text-center"><strong>Users</strong></CCardHeader>
                        <CCardBody>
                            <Button className="mb-4" startIcon={<AddIcon />} size="small" onClick={handleOpen}>
                                New User
                            </Button>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid rows={newJsonObject} columns={columns} slots={{ toolbar: GridToolbar }}/>
                            </div>
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
                    <TextField 
                        fullWidth 
                        size="small" 
                        label="Username" 
                        id="fullWidth" 
                        className='mb-3' 
                        variant="filled" 
                        onChange={(e)=> setUsername(e.target.value)}
                    />
                    <TextField 
                        fullWidth 
                        size="small" 
                        label="Email" 
                        id="fullWidth" 
                        className='mb-3' 
                        variant="filled"
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                    <TextField 
                        fullWidth 
                        size="small" 
                        label="Password" 
                        id="fullWidth" 
                        className='mb-3' 
                        variant="filled"
                        onChange={(e)=> setPassword(e.target.value)}
                    />

                    <FormControl size="small" variant="filled" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={role}
                        onChange={(e)=> setRole(e.target.value)}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'Admin'}>Admin</MenuItem>
                        <MenuItem value={'Parent'}>Parent</MenuItem>
                        <MenuItem value={'Student'}>Student</MenuItem>
                        <MenuItem value={'Teacher'}>Teacher</MenuItem>
                        </Select>
                    </FormControl>             
                   
                    <div className="text-end">
                        <Button variant="contained" onClick={(e)=> {handleSubmit(e), handleClose()}}>Submit</Button>
                    </div>
                </Box>
                </Fade>
            </Modal>  
        </>
    )
}

export default Users