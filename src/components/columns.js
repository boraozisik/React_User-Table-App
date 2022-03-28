import { Avatar } from "@mui/material"

export const COLUMNS = [
    {
        Header: 'Image',
        accessor: 'icon',
        
        disableFilters: true,

        Cell: tableProps => (
            <Avatar src={tableProps.row.original.icon} />      
          )
    },
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        

    },
    {
        Header: 'Name',
        Footer: 'Name',
        accessor: 'name',
    },  
    {
        Header: 'E-mail',
        Footer: 'E-mail',
        accessor: 'email',
    },
    {
        Header: 'Favorite Game',
        Footer: 'Favorite Game',
        accessor: 'favorite_game',
    },
    {
        Header: 'Favorite Book',
        Footer: 'Favorite Book',
        accessor: 'favorite_book',
    },
    {
        Header: 'Favorite Film',
        Footer: 'Favorite Film',
        accessor: 'favorite_film',
    },
    


]
