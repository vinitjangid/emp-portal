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


function Home() {

  const [open, setOpen] = useState(false);
  const [name ,setName] = useState("");
  const [email,setEmail] = useState("");
  const [age,setAge] = useState("");
  const [mobile, setMobile] = useState("");
  //const [array, setArray] = useState([]);
  var array = [];
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleSubmit = () => {
    console.log(array)
    const person = {
      key: array.length,
      name: name,
      email: email,
      age: age,
      mobile : mobile
    }


    if (array.length = 0 ) {
      array = [person]
    } else {
      array.push(person)
    }
    console.log(array)



    //setArray([prevArray, person])
    setOpen(false);
  };

  // const HandleDelete = () => {
  //   //console.log(e)
  //   //array.splice(e);
  // };
    


  return (
    <div className="Home">
          <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add new employee
      </Button>
      {array.length > 0 ? 
      <TextField
          id="outlined-basic"
          variant="filled"
          fullWidth
          label="Search"
        /> : null }
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
                        <TableCell >S.no</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell >Email</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Mobile</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                {array.map((row , key) => (
                        <TableRow key={key}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      > 
                      <TableCell>{key + 1}</TableCell>
                        
                        {row !== '' ? <TableCell component="th" scope="row">
                            {name}
                    </TableCell> : null}
                    {row !== '' ? <TableCell component="th" scope="row">
                            {email}
                    </TableCell> : null}
                    {row !== '' ? <TableCell component="th" scope="row">
                            {age}
                    </TableCell> : null}
                    {row !== '' ? <TableCell component="th" scope="row">
                            {mobile}
                    </TableCell> : null}
                    {/*<TableCell>
                      <Button onClick={HandleDelete}>
                      <DeleteIcon />
                      </Button>
                </TableCell> */}
                    </TableRow>
                      
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                : null }
                </div>
        
    </div>
  );
}

export default Home;
