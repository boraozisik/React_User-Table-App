import React from 'react'
import { TextField,InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';


export const GlobalFilter = ({filter, setFilter}) => {
  return (
        <span>
            
            <TextField label='Search'
              variant='outlined' 
              color='secondary' 
              helperText="Search for a user..." 
              InputProps={{

                startAdornment: <InputAdornment position='start'><SearchIcon/></InputAdornment>
              }}
              fullWidth
              size='small'
              value={filter || ''} onChange = {e => setFilter(e.target.value)}/>
            
            
        </span>

    
  )
}
