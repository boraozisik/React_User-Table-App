import { Avatar } from "@mui/material"

export const COLUMNS = [
    {
        Header: 'Image',
        accessor: 'avatar',
        disableFilters: true,
        Cell: tableProps => (
            <Avatar src={tableProps.row.original.avatar} />      
          )
    },
    
    {
        Header: ' First Name',
        Footer: 'First Name',
        accessor: 'first_name',
    },  
    {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name',
    },
    {
        Header: 'Gender',
        Footer: 'Gender',
        accessor: 'gender',
    },
    {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth',
    },
   
    


]

