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

function Home() {

  const [open, setOpen] = useState(false);
  const [name ,setName] = useState("");
  const [email,setEmail] = useState("");
  const [age,setAge] = useState("");
  const [mobile, setMobile] = useState("");
  
  const [array, setArray] = useState([]);
  var car = [];
  

  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  const handleSubmit = () => {
    
  //   setArray((prevState) => {
  //     return {
  //       ...prevState,
  //       {name: name, age:  age, mobile, email
  //     }
  //   })
    
    
    //setArray(...array, [name: name, age: age])
    const person = {
      name: name,
      email: email,
      age: age,
      mobile : mobile
    }
    car.push(person);
    console.log(car)
  };
    


  return (
    <div className="Home">
          <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add new employee
      </Button>
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
              <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table" mt={4 }>
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell >Email</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Mobile</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                {car.map((row) => (
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        
                        {row !== '' ? <TableCell component="th" scope="row">
                            {name}
                    </TableCell> : null}
                    <TableCell>{age}</TableCell>
                        {/* row !== '' ?  <TableCell align="right"> $ {row}</TableCell> : null */}
                    </TableRow>
                      
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                </div>
        
    </div>
  );
}

export default Home;
