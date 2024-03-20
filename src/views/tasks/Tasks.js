/* eslint-disable */
import React, {useState, useEffect} from 'react';
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
    CListGroupItem,
    CCallout,
    CFormCheck,
    CFormTextarea,
    CFormSelect,
    CTooltip,
} from '@coreui/react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditNoteIcon from '@mui/icons-material/EditNote';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Swal from 'sweetalert2'
import { createClient } from '@supabase/supabase-js'
const supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4bXdwY3VsdXJ4dGFhdmpxdGVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyMjI2OTcsImV4cCI6MjAyNDc5ODY5N30.6uhlDSEhVHHA0-CMHdPLRDQVrMZ6yz8cd5HvrIan7Xo"
const supabaseUrl = 'https://pxmwpculurxtaavjqted.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)



const Tasks = ()=> {
    const [data, setData] = useState([])
    const [notes, setNotes] = useState([])
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [title, setTitle] = useState('')
    const [noteTitle, setNoteTitle] = useState('')
    const [description, setDescription] = useState('')
    const [note, setNote] = useState('')
    const [colour, setColour] = useState('')
    const [open, setOpen] = useState(false);
    const [openNote, setOpenNote] = useState(false);
    const [callout, setCallout] = useState('danger');

    const getTasks = async () => {
        let { data: tasks, error } = await supabase
        .from('tasks')
        .select('*')  
        setData(tasks)

        console.log(tasks)
    }

    const getNotes = async () => {
        let { data: notes, error } = await supabase
        .from('notes')
        .select('*')  
        setNotes(notes)

        console.log(notes)
    }

    useEffect(() => {
        const controller = new AbortController();
        var isMounted = true
        
        getTasks()
        getNotes()
   
        return () => {
            isMounted = false
            controller.abort();
        }
    }, [])

    const handleClose = () => {
      setOpen(false);
    };

    const handleCloseNote = () => {
        setOpenNote(false);
    };

    const handleOpen = () => {
      setOpen(true);
    };

    const handleOpenNote = () => {
        setOpenNote(true);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const handleCheckChange = (event) => {
        event.preventDefault();

        setChecked(event.target.checked);
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I'm done!"
        }).then( async (result) => {

            const { data, error } = await supabase
            .from('tasks')
            .update({ complete: checked })
            .eq(id, )
            .select()
        
        }).then(()=> {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Completed!",
                text: "You completed your task.",
                icon: "success"
              });
            }
            
        })
        
        
        // callout == 'danger' ? setCallout('success') : setCallout('danger');
        console.log(checked)
    };

    const handleSubmit = async (e)=> {
        e.preventDefault();
    
        try {
            const { data, error } = await supabase
            .from('tasks')
            .insert([
            { title: title, 
              description: description,
              date: date,
              time: time,
              user_id: 2
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
                    title: "Task Created!",
                    icon: "success"
                });
                getTasks()
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
            title: "Task Created!",
            icon: "success"
        });
    }

    const handleNoteSubmit = async (e)=> {
        e.preventDefault();
    
        try {
            const { data, error } = await supabase
            .from('notes')
            .insert([
            { title: noteTitle, 
              note: note,
              colour: colour,
              user_id: 2
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
                    title: "Note Created!",
                    icon: "success"
                });

                getNotes()
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
            title: "Note Created!",
            icon: "success"
        });
    }



    return(
        <>
            <CContainer>
                <CRow>
                    {/* Tasks */}
                    <CCol sm={7}>
                        <CCard>
                            <CCardHeader className='text-center'>
                                <Typography><strong>Tasks</strong></Typography>
                            </CCardHeader>
                            <CCardBody>
                                <Button  startIcon={<AddIcon />} size="small" onClick={handleOpen}>
                                    New Task
                                </Button>
                                {data?.map(item => 
                                    <>
                                        <Divider />
                                        <CCallout color={item?.complete == true ? 'success' : 'danger   '} >
                                            <div className="d-flex w-100 justify-content-between">
                                            <Typography className="mb-1" variant='h6'><strong>{item.title}</strong></Typography>
                                            <Stack direction="row" spacing={1}>
                                                <CTooltip content='Completed'>
                                                    <Checkbox 
                                                        checked={item.complete}
                                                        onChange={
                                                            (e)=> {
                                                                e.preventDefault();

                                                                Swal.fire({
                                                                    title: "Are you sure?",
                                                                    text: "You won't be able to revert this!",
                                                                    icon: "warning",
                                                                    showCancelButton: true,
                                                                    confirmButtonColor: "#3085d6",
                                                                    cancelButtonColor: "#d33",
                                                                    confirmButtonText: "Yes, I'm done!"
                                                                }).then(async (result) => {
                                                                    if (result.isConfirmed) {
                                                                        const { data, error } = await supabase
                                                                        .from('tasks')
                                                                        .update({ complete: !item.complete })
                                                                        .eq('id', item.id)
                                                                        .select()
    
                                                                        if (error) {
                                                                            Swal.fire({
                                                                                icon: "error",
                                                                                title: "Oops...",
                                                                                text: "Something went wrong!",
                                                                                footer: '<a href="#">Why do I have this issue?</a>'
                                                                            });
                                                                        }
                                                                        else{
                                                                            if (result.isConfirmed) {
                                                                              Swal.fire({
                                                                                title: "Completed!",
                                                                                text: "You completed your task.",
                                                                                icon: "success"
                                                                              });
                                                                            }
    
                                                                            getTasks();
                                                                        }

                                                                    }
                                                                })
                                                            }
                                                        }
                                                    />
                                                </CTooltip>
                                                <CTooltip content='Edit'>
                                                    <IconButton aria-label="edit" color='light'>
                                                        <EditNoteIcon />
                                                    </IconButton>
                                                </CTooltip>
                                                <CTooltip content='Delete'>
                                                    <IconButton 
                                                        aria-label="delete" 
                                                        color='light'
                                                        onClick={(e)=> {
                                                            e.preventDefault();

                                                            Swal.fire({
                                                                title: "Are you sure?",
                                                                text: "You won't be able to revert this!",
                                                                icon: "warning",
                                                                showCancelButton: true,
                                                                confirmButtonColor: "#3085d6",
                                                                cancelButtonColor: "#d33",
                                                                confirmButtonText: "Yes, delete it!"
                                                            }).then(async (result) => {
                                                                if (result.isConfirmed) {
                                                                    try {
                                                                        const { error } = await supabase
                                                                        .from('tasks')
                                                                        .delete()
                                                                        .eq('id', item.id)
                                                                      Swal.fire({
                                                                        title: "Deleted!",
                                                                        text: "Your task has been deleted.",
                                                                        icon: "success"
                                                                      });

                                                                      getTasks()
                                                                    } catch (error) {
                                                                        Swal.fire({
                                                                            icon: "error",
                                                                            title: "Oops...",
                                                                            text: "Something went wrong!",
                                                                            footer: '<a href="#">Why do I have this issue?</a>'
                                                                        });
                                                                    }
                                                                }
                                                            })
                                                        }}
                                                    >
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </CTooltip>
                                            </Stack>
                                            </div>
                                            <h5 className="mb-1">
                                            {item.description}
                                            </h5>
                                            <Typography variant='h6'><strong>Date:</strong> {item.date}</Typography>
                                            <Typography variant='h6'><strong>Time:</strong> {item.time}</Typography>
                                        </CCallout>
                                    </>
                                )}
                            </CCardBody>
                        </CCard>
                    </CCol>

                    {/* Notes */}
                    <CCol>
                        <CCard>
                            <CCardHeader className='text-center'>
                                <Typography><strong>Notes</strong></Typography>
                            </CCardHeader>
                            <CCardBody>
                                <Button  startIcon={<AddIcon />} size="small" onClick={handleOpenNote}>
                                    New Note
                                </Button>
                                {notes?.map(note => 
                                    <>
                                        <Divider />
                                            <CCard
                                                color={note.colour}
                                                textColor="light"
                                                className="my-3"
                                                >
                                                <CCardHeader>
                                                    <Stack direction="row" spacing={1}>
                                                        <CTooltip content='Edit'>
                                                            <IconButton aria-label="edit" color='light'>
                                                                <EditNoteIcon />
                                                            </IconButton>
                                                        </CTooltip>
                                                        <CTooltip content='Delete'>
                                                            <IconButton 
                                                                aria-label="delete" 
                                                                color='light'
                                                                onClick={(e)=> {
                                                                    e.preventDefault();

                                                                    Swal.fire({
                                                                        title: "Are you sure?",
                                                                        text: "You won't be able to revert this!",
                                                                        icon: "warning",
                                                                        showCancelButton: true,
                                                                        confirmButtonColor: "#3085d6",
                                                                        cancelButtonColor: "#d33",
                                                                        confirmButtonText: "Yes, delete it!"
                                                                    }).then(async (result) => {
                                                                        if (result.isConfirmed) {
                                                                            try {
                                                                                const { error } = await supabase
                                                                                .from('notes')
                                                                                .delete()
                                                                                .eq('id', note.id)
                                                                              Swal.fire({
                                                                                title: "Deleted!",
                                                                                text: "Your note has been deleted.",
                                                                                icon: "success"
                                                                              });

                                                                              getNotes()
                                                                            } catch (error) {
                                                                                Swal.fire({
                                                                                    icon: "error",
                                                                                    title: "Oops...",
                                                                                    text: "Something went wrong!",
                                                                                    footer: '<a href="#">Why do I have this issue?</a>'
                                                                                });
                                                                            }
                                                                        }
                                                                    })
                                                                }}
                                                            >
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </CTooltip>
                                                    </Stack>
                                                </CCardHeader>
                                                <CCardBody>
                                                    <CCardTitle>{note.title}</CCardTitle>
                                                    <CCardText>{note.note}</CCardText>
                                                </CCardBody>
                                            </CCard>
                                    </>    
                                )}
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>


            {/* Modal for Tasks */}
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
                    <div>
                        <CForm className='mb-4'>
                            <CFormInput
                                type="email"
                                id="exampleFormControlInput1"
                                label="Title"
                                placeholder="eg. Update monthly fees"
                                aria-describedby="exampleFormControlInputHelpInline"
                                onChange={(e)=> setTitle(e.target.value)}
                            />
                        </CForm>
                        <CForm className='mb-4'>
                            <CFormTextarea
                                id="exampleFormControlTextarea1"
                                label="Description"
                                rows={3}
                                placeholder="eg. Update every fees paid during a specified time"
                                onChange={(e)=> setDescription(e.target.value)}
                            ></CFormTextarea>
                        </CForm>
                        <CRow className='mb-4'>
                            <CCol sm={4}>
                                <span>Date</span>
                                <input type='date' onChange={(e)=> setDate(e.target.value)}/>
                            </CCol>
                            <CCol sm={3}>
                                <span>Time</span>
                                <input type='time' onChange={(e)=> setTime(e.target.value)}/>

                            </CCol>
                        </CRow>
                    </div>
        
                   
                    <div className="text-end">
                        <Button 
                            variant="contained"
                            onClick={(e)=> {handleSubmit(e), handleClose()}}
                        >Add Task</Button>
                    </div>
                </Box>
                </Fade>
            </Modal> 


            {/* Modal for notes */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openNote}
                onClose={handleCloseNote}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                backdrop: {
                    timeout: 500,
                },
                }}
            >
                <Fade in={openNote}>
                <Box sx={style}>
                    <div>
                        <CForm className='mb-4'>
                            <CFormInput
                                type="email"
                                id="exampleFormControlInput1"
                                label="Title"
                                placeholder="eg. Update monthly fees"
                                aria-describedby="exampleFormControlInputHelpInline"
                                onChange={(e)=> setNoteTitle(e.target.value)}
                            />
                        </CForm>
                        <CForm className='mb-4'>
                            <CFormTextarea
                                id="exampleFormControlTextarea1"
                                label="Note"
                                rows={3}
                                placeholder="eg. Update every fees paid during a specified time"
                                onChange={(e)=> setNote(e.target.value)}
                            ></CFormTextarea>
                        </CForm>
                        <CFormSelect 
                            className='w-50'
                            aria-label="Choose card colour"
                            onChange={(e)=> setColour(e.target.value)}
                            options={[
                                'Choose card colour',
                                { label: 'Blue', value: 'primary' },
                                { label: 'Grey', value: 'secondary' },
                                { label: 'Green', value: 'success' },
                                { label: 'Red', value: 'danger' },
                                { label: 'Yellow', value: 'warning' },
                                { label: 'Sky', value: 'info' },
                                { label: 'Dark', value: 'dark' },
                                { label: 'Light', value: 'light' },
                            ]}
                        />
                    </div>
        
                   
                    <div className="text-end">
                        <Button 
                            variant="contained"
                            onClick={(e)=> {handleNoteSubmit(e), handleCloseNote()}}
                        >Add Note</Button>
                    </div>
                </Box>
                </Fade>
            </Modal> 
        </>


    )
}

export default Tasks;