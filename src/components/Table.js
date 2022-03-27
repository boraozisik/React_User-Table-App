import React, { useMemo,useState} from 'react'
import { useTable,usePagination,useGlobalFilter,useSortBy } from 'react-table'
import user_data from './user_data.json'
import { COLUMNS, } from './columns'
import './table.css'
import { GlobalFilter } from './GlobalFilter'
import { Button,Stack,IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContactPageIcon from '@mui/icons-material/ContactPage';



export const Table = () => {


    const [userList,setUserList] = useState(user_data);
    
    const setUserListMethod = setUserList;

    const columns = useMemo(() => COLUMNS, [])
    

   
    const tableInstance = useTable({ columns: columns,data: userList},useGlobalFilter,useSortBy,usePagination)
        

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,        
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        
        prepareRow,
        
        state,
        setGlobalFilter

    } = tableInstance

    
    const {globalFilter,pageIndex} = state
    
    
    
    
    
    

    const handleDeleteClick = (row) => {
    
      const newList = [...userList];
      const index = userList.findIndex((rowContact) => rowContact.id === row.original.id);
      
      newList.splice(index,1)
      setUserListMethod(newList)
      
    
    }

    const handleEditClick = () => {
        console.log("Edit Clicked")
        
        
        
          
  
      
      }

    return (
        
        <>
        
        <GlobalFilter filter={globalFilter} setFilter = {setGlobalFilter}/>
        
        <table {...getTableProps()}>
            
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                        <span>
                                            {column.isSorted
                                            ? column.isSortedDesc
                                            ? <i className="fa-solid fa-sort-down"></i>
                                            : <i className="fa-solid fa-sort-up"></i>
                                            : ''}
                                        </span>
                                    
                                    </th>
                                ))
                            }
                            <th>Actions</th>
                        </tr> 
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    page.map(row => {
                        prepareRow(row)
                        return(
                            <tr  {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }

                                
                                <td>
                                    <IconButton aria-label='edit' color='info' size='small' onClick = {() => handleEditClick()} >
                                        
                                        <EditIcon/>
                                    </IconButton>    
                                    
                                    <IconButton aria-label='delete' color='error' size='small' onClick = {() => handleDeleteClick(row)} >
                                        <DeleteIcon  />
                                        
                                    </IconButton>    
                                </td>
                            
                            </tr>
                        )
                    })
                }
            </tbody>
            
        </table>
             
        <div>
            
            <Button variant = 'contained' color='success' startIcon = {<FirstPageIcon/>}  onClick = {() => gotoPage(0)} disabled = {!canPreviousPage} ></Button>
            <Button variant = 'contained' color='info' startIcon = {<ArrowBackIcon/>}  onClick = {() => previousPage()} disabled = {! canPreviousPage} size='small'>Previous</Button>
            <Button variant = 'contained' color='info' startIcon = {<ArrowForwardIcon/>}  onClick = {() => nextPage()} disabled = {! canNextPage} size='small'>Next</Button>    
            <Button variant = 'contained' color='success' startIcon = {<LastPageIcon/>}  onClick = {() => gotoPage(pageCount - 1)} disabled = {!canNextPage} ></Button>
        </div>

        <div>
            <Button variant = 'contained' color='warning' startIcon = {<ContactPageIcon/>} disableRipple>
                Page: {' '}<strong> {pageIndex + 1} / {pageOptions.length}</strong>{' '}
            </Button>
            
        </div>
        
        </>    
    )
}
