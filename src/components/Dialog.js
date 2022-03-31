import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { Stack,TextField} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from 'react';
import { COLUMNS } from './columns'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({editRow,userList}) {
  const [open, setOpen] = React.useState(false);
  const[valueLastName,setValueLastName] = useState('')
  const[valueFirstName,setValueFirstName] = useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChanges = () => {
    console.log("Dialog submit clicked")
   
  }

  return (
    <div>
      
                                        
      <EditIcon onClick = {handleClickOpen} />
        
     
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit User
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Stack spacing={2}  >

          <TextField  label='First Name'
          variant='outlined'
          color='success'
          value={valueFirstName}
          onChange = {e => setValueFirstName(e.target.value)}
          required 
          error = {!valueFirstName}
          helperText={!valueFirstName ? 'First Name: Reguired' : "Enter first name"}/>                
          <TextField  
          label='Last Name'
          variant='outlined'
          color='success'
          value={valueLastName}
          onChange = {e => setValueLastName(e.target.value)}
          required 
          error = {!valueLastName}
          helperText={!valueLastName ? 'Last Name: Reguired' : "Enter last name"}
          />
 
          <TextField  label='Gender' variant='outlined' color='success'  helperText="Enter a gender"/>
          <TextField  label='Date of Birth' variant='outlined' color='success' helperText="Enter date of birth"/>
          <Button onClick={handleChanges} variant = 'contained' color='info'>Save Changes</Button>

        </Stack>
        </DialogContent>
        
      </BootstrapDialog>
    </div>
  );
}
