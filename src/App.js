import React from 'react';
import './App.css';
import { Table } from './components/Table';
import { Typography,Stack,Grid,Card, CardContent,CardMedia,AppBar,Toolbar,IconButton,Button} from '@mui/material'
import {useState} from 'react';
import TableChartIcon from '@mui/icons-material/TableChart';
import user_data from './components/user_data.json'
import PersonAddIcon from '@mui/icons-material/PersonAdd';



function App() {

  
  const [userList,setUserList] = useState(user_data);
    
  const setUserListMethod = setUserList;
  
  

  const fetchUser = async () => {
    
    const res = await fetch("https://random-data-api.com/api/users/random_user");
    const data = await res.json();   
    setUserListMethod([...userList,data])


  }
  
  return (
    
  <Stack className="App">
      <AppBar position='static'>
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo' href='http://localhost:3000/'> 
                <TableChartIcon />
            </IconButton>
                <Typography variant ='h5' component='div'>User Table App</Typography>
          </Toolbar>
      </AppBar>
      
      <hr />
    <Grid container spacing={2}>
        
        

        <Grid item xs={10}>
          <Card>
            <CardContent>
              <Table userList={userList} setUserListMethod={setUserListMethod}/> 
            </CardContent>  
            
          </Card>
        </Grid>
        <Grid item xs={2} >
          <Card>
            <CardContent>
            <CardMedia
            component='img'
            height='140'
            image='https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-add-user-icon-png-image_762930.jpg'
            />
              
            </CardContent>
          </Card>
          <Card style={{marginTop: 50}}>
            <CardContent>
            <Button variant = 'contained' color='info' endIcon={<PersonAddIcon/>} onClick={fetchUser}>Add User</Button>
            </CardContent>
          </Card>

          <Card style={{marginTop: 50}}>
          <CardContent >
          
          
          <CardMedia
            component='img'
            height='140'
            image='https://www.kindpng.com/picc/m/22-220676_code-icon-code-icon-png-transparent-png.png'
            />
            
            
          </CardContent>  
         

          </Card>
          
        
        </Grid>


      </Grid>
    </Stack>

     
    
  
    
  );
}

export default App;

