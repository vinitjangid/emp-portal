import React ,{ useState }  from "react";
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
import uuid from "react-uuid";


function Home() {

  const [open, setOpen] = useState(false);
  const [name ,setName] = useState("");
  const [email,setEmail] = useState("");
  const [age,setAge] = useState();
  const [mobile, setMobile] = useState("");
  //const [array, setArray] = useState([]);
  const [array, setArray] = useState([]);
  const [originalArray, setOriginalArray] = useState([]);

  const [render, setRender] = useState(1);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const HandleSearch = (e) => {
    debugger
    const input = e.target.value;
    const fixarray = originalArray
    console.log(fixarray)
    const filteredArray = fixarray.filter((item) => {
      return (
        item.name.includes(input)
      )
    });
    setArray(filteredArray)

  }
  
  const handleSubmit = () => {
    const person = {
      id: originalArray.length,
      name: name,
      email: email,
      age: age,
      mobile : mobile
    }


    if (originalArray.length === 0 ) {
      setOriginalArray([person])
      setArray([person])
      console.log(array)
    } else {
      setOriginalArray([...originalArray, person])
      setArray([...array, person])
      console.log(array)
    }
    setOpen(false);
  };

  const HandleDelete = (row) => {
    console.log(row, 'row')
    var myIndex = originalArray.indexOf(row);
    originalArray.splice(myIndex, 1);
    setArray(originalArray)
    console.log(originalArray)
  };
    
  return (
    <div className="Home">
          <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add new employee
        </Button>
        <div className='container' >
      <TextField
          id="outlined-basic"
          variant="filled"
          fullWidth
            label="Search"
            onChange={(event) => HandleSearch(event)}
          />
          </div>
      <Dialog open={open} onClose={handleClose}>
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
              variant="standard"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <TextField
            autoFocus
            margin="dense"
            id="age"
              label="Age"
              
            type="number"
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
              variant="standard"
              value={mobile}
              onChange={({ target }) => setMobile(target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
          
      
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
                        <TableRow key={id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      > 
                        {row !== '' ? <TableCell component="th" scope="row">
                            {row.name}
                    </TableCell> : null}
                    {row !== '' ? <TableCell component="th" scope="row">
                            {row.email}
                    </TableCell> : null}
                    {row !== '' ? <TableCell component="th" scope="row">
                            {row.age}
                    </TableCell> : null}
                    {row !== '' ? <TableCell component="th" scope="row">
                            {row.mobile}
                    </TableCell> : null}
                    <TableCell>
                      <Button onClick={(e) => HandleDelete(row)}>
                        <DeleteIcon />
                      </Button>
                </TableCell> 
                    </TableRow>
                      
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                : <h3> No data found</h3> }
                </div>
        
    </div>
  );
}

export default Home;
