import React, { useState } from "react";
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Box } from "@mui/material";
import uuid from "react-uuid";

function Home() {
  const [open, setOpen] = useState(false);
  const [openBar, setOpenBar] = useState(false);
  const [name ,setName] = useState("");
  const [email,setEmail] = useState("");
  const [age,setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [array, setArray] = useState([]);
  const [originalArray, setOriginalArray] = useState([]);
  const [render, setRender] = useState();
  
  const HandleClickOpen = () => {
    setOpen(true);
    HandleSnackBar();
  };
  
  const HandleClose = () => {
    setOpen(false);
    HandleSnackBar();
  };

  const HandleSnackBar = () => {
    setOpenBar(false);
  };

  const HandleSearch = (e) => {
    const input = e.target.value.toLowerCase();
    const filteredArray = originalArray.filter((item) => {
      return (
        item.name.includes(input).toLowerCase()
      )
    });
    setArray(filteredArray)
    HandleSnackBar();
  };
  
  const HandleSubmit = () => {
    const person = {
      name: name,
      email: email,
      age: age,
      mobile : mobile
    }

    if (originalArray.length === 0 ) {
      setOriginalArray([person])
      setArray([person])
    } else {
      setOriginalArray([...originalArray, person])
      setArray([...array, person])
    }
    setOpen(false);
    setOpenBar(true);
  };

  const HandleDelete = (row) => {
    if (array.length === 1 ) {
      setArray([]);
      setOriginalArray([]);
    } else {
      const myIndex = originalArray.indexOf(row);
      originalArray.splice(myIndex, 1);
      array.splice(myIndex, 1);
    }
    HandleSnackBar();
    setRender(uuid);
  };
    
  return (
    <div className="Home">
      <div>
        <Box mb={ 4}>
      <Button variant="outlined" onClick={HandleClickOpen}>
        Add new employee
          </Button>
          </Box>
          <Box className="box" mt={4}>
      <TextField
            id="outlined-basic"
            className="basic"
          variant="filled"
          width='40px'
          label="Search"
            onChange={(event) => HandleSearch(event)}
          /></Box>
      <Dialog open={open} onClose={HandleClose}>
        <DialogTitle>Enter employee information</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Please add info to create record
         </DialogContentText>
          <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              required
              type="text"
              fullWidth
              variant="standard"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
              fullWidth
              required
              variant="standard"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <TextField
            autoFocus
            margin="dense"
            id="age"
              label="Age"
              required
            type="text"
            fullWidth
              variant="standard"
              value={age}
              onChange={({ target }) => setAge(target.value)}
            />
            <TextField
            autoFocus
            margin="dense"
            id="mobile"
            label="Contact Number"
            type="number"
              fullWidth
              required
              variant="standard"
              value={mobile}
              onChange={({ target }) => setMobile(target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={HandleClose}>Cancel</Button>
          <Button onClick={HandleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
          
      <Box sx={{ m: 2 }}></Box>
    <div className='container' >
      {array.length > 0 ? 
              <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table" mt={4 }>
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell >Email</TableCell>
                        <TableCell>Age</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>Delete</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                {array.map((row, id ) => (
                        <TableRow key={id}>
                    <TableCell component="th" scope="row">{row.name}</TableCell>
                    <TableCell component="th" scope="row">{row.email}</TableCell>
                    <TableCell component="th" scope="row">{row.age}</TableCell> 
                    <TableCell component="th" scope="row">{row.mobile} </TableCell>
                    <TableCell>
                      <Button onClick={(e) => HandleDelete(row)}><DeleteIcon /></Button>
                    </TableCell> 
                    </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                : <h5> No data found</h5> }
      </div>
      {openBar ?
        <Box mt={4}>
        <Stack sx={{ width: '100%' }} spacing={8}>
          <Alert onClose={HandleSnackBar}>Employee added successfully</Alert>
        </Stack></Box> : null}
    </div>
  );
}

export default Home;
