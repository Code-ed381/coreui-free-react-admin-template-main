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
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(name, calories, fat, carbs, protein, price) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
      price,
      history: [
        {
          date: '2020-01-05',
          customerId: '11091700',
          amount: 3,
        },
        {
          date: '2020-01-02',
          customerId: 'Anonymous',
          amount: 1,
        },
      ],
    };
  }
  
  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.calories}</TableCell>
          <TableCell align="right">{row.fat}</TableCell>
          <TableCell align="right">{row.carbs}</TableCell>
          <TableCell align="right">{row.protein}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Customer</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell align="right">Total price ($)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell component="th" scope="row">
                          {historyRow.date}
                        </TableCell>
                        <TableCell>{historyRow.customerId}</TableCell>
                        <TableCell align="right">{historyRow.amount}</TableCell>
                        <TableCell align="right">
                          {Math.round(historyRow.amount * row.price * 100) / 100}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
  Row.propTypes = {
    row: PropTypes.shape({
      calories: PropTypes.number.isRequired,
      carbs: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      history: PropTypes.arrayOf(
        PropTypes.shape({
          amount: PropTypes.number.isRequired,
          customerId: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        }),
      ).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      protein: PropTypes.number.isRequired,
    }).isRequired,
  };
  
  const rows = [
    createData('Creche', 159, 6.0, 24, 4.0, 3.99),
    createData('Nursery 1', 237, 9.0, 37, 4.3, 4.99),
    createData('Nursery 2', 262, 16.0, 24, 6.0, 3.79),
    createData('KG', 305, 3.7, 67, 4.3, 2.5),
    createData('Class 1', 356, 16.0, 49, 3.9, 1.5),
    createData('Class 2', 356, 16.0, 49, 3.9, 1.5),
    createData('Class 3', 356, 16.0, 49, 3.9, 1.5),
    createData('Class 4', 356, 16.0, 49, 3.9, 1.5),
    createData('Class 5', 356, 16.0, 49, 3.9, 1.5),
    createData('Class 6', 356, 16.0, 49, 3.9, 1.5),
    createData('Form 1', 356, 16.0, 49, 3.9, 1.5),
    createData('Form 2', 356, 16.0, 49, 3.9, 1.5),
    createData('Form 3', 356, 16.0, 49, 3.9, 1.5),
  ];
  
  const Fees = ()=> {
    return (
        <>
            <CContainer>
                <CCard>
                    <CCardHeader className="text-center"><strong>Fees</strong></CCardHeader>
                    <CCardBody>
                        <TableContainer component={Paper}>
                            <Table aria-label="collapsible table" stickyHeader>
                            <TableHead>
                                <TableRow>
                                <TableCell />
                                <TableCell><h5><strong>Class</strong></h5></TableCell>
                                <TableCell align="right"><strong>Total Fees</strong></TableCell>
                                <TableCell align="right"><strong>Amount Paid</strong></TableCell>
                                <TableCell align="right"><strong>Arrears</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                <Row key={row.name} row={row} />
                                ))}
                            </TableBody>
                            </Table>
                        </TableContainer>   
                    </CCardBody>
                </CCard>
            </CContainer>
        </>
    );
  }

  export default Fees