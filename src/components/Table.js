import React, { useMemo} from 'react'
import { useTable,usePagination,useGlobalFilter,useSortBy } from 'react-table'
import { COLUMNS, } from './columns'
import './table.css'
import { GlobalFilter } from './GlobalFilter'
import { Button,IconButton,ButtonGroup } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CustomizedDialogs from './Dialog'



export const Table = ({userList,setUserListMethod}) => {


    
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
    
    const editRow = page.map(row => {return row})
    
    
    
    

    const handleDeleteClick = (row) => {
      if(window.confirm('Are you sure to delete this user?')){
        const newList = [...userList];
        const index = userList.findIndex((rowContact) => rowContact.id === row.original.id);      
        newList.splice(index,1)
        setUserListMethod(newList)
      }
     
      
    
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
                                    <IconButton aria-label='edit' color='info' size='small'   >
                                        
                                        <CustomizedDialogs editRow={editRow} userList={userList}/>
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
            <ButtonGroup size='medium'>
            <Button variant = 'contained' color='success' startIcon = {<FirstPageIcon/>}  onClick = {() => gotoPage(0)} disabled = {!canPreviousPage} ></Button>
            <Button variant = 'contained' color='info' startIcon = {<ArrowBackIcon/>}  onClick = {() => previousPage()} disabled = {! canPreviousPage} >Previous</Button>
            <Button variant = 'contained' color='info' endIcon = {<ArrowForwardIcon/>}  onClick = {() => nextPage()} disabled = {! canNextPage} >Next</Button>    
            <Button variant = 'contained' color='success' startIcon = {<LastPageIcon/>}  onClick = {() => gotoPage(pageCount - 1)} disabled = {!canNextPage} ></Button>
            </ButtonGroup>
        </div>

        <div>
            <Button variant = 'contained' style={{backgroundColor: '#EC7063', color: '#f2f2f2'}} startIcon = {<ContactPageIcon/>} disableRipple size='medium'>
                Page: {' '}<strong> {pageIndex + 1} / {pageOptions.length}</strong>{' '}
            </Button>
            
        </div>
        
        </>    
    )
}
