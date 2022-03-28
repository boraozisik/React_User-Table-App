import React from 'react';
import './App.css';
import { Table } from './components/Table';
import { Typography,Stack,TextField,Grid,Card, CardContent,CardActions,CardMedia,AppBar,Toolbar,IconButton} from '@mui/material'
import {useState} from 'react';
import TableChartIcon from '@mui/icons-material/TableChart';

function App() {

  const[valueEmail,setValueEmail] = useState('')
  const[valueName,setValueName] = useState('')

  return (
    
  <Stack className="App">
      <AppBar position='static'>
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                <TableChartIcon/>
            </IconButton>
                <Typography variant ='h6' component='div'>User Table App</Typography>
          </Toolbar>
      </AppBar>
      
      <hr />
    <Grid container spacing={2}>
        
        

        <Grid item xs={10}>
          <Card>
            <CardContent>
              <Table /> 
            </CardContent>  
            
          </Card>
        </Grid>
        <Grid item xs={2} >
        
          <Card>
          <CardContent >
          <CardMedia
            component='img'
            height='140'
            image='https://cdn3.vectorstock.com/i/1000x1000/26/52/write-edit-text-concept-writing-editing-documents-vector-25082652.jpg'
            />
            <Typography variant = 'h5' marginTop={5} color='#2E86C1'>Edit User</Typography>
            <hr />
          </CardContent>  
          <CardActions >
              <Stack spacing={2}  >

                <TextField  label='Full Name'
                 variant='outlined'
                 color='success'
                 value={valueName}
                 onChange = {e => setValueName(e.target.value)}
                 required 
                 error = {!valueName}
                 helperText="Enter name and surname"/>                
                <TextField  
                 label='Email'
                 variant='outlined'
                 color='success'
                 value={valueEmail}
                 onChange = {e => setValueEmail(e.target.value)}
                 required 
                 error = {!valueEmail}
                 helperText={!valueEmail ? 'Required' : "Please enter a valid e-mail"}
                 />
                 
                <TextField  label='Favorite Game' variant='outlined' color='success'  helperText="Enter a favorite game"/>
                <TextField  label='Favorite Book' variant='outlined' color='success' helperText="Enter a favorite book"/>
                <TextField  label='Favorite Film' variant='outlined' color='success' helperText="Enter a favorite film"/>
                
              </Stack>
              
          </CardActions>  
          </Card>
          
        
        </Grid>


      </Grid>
    </Stack>

     
    
  
    
  );
}

export default App;
