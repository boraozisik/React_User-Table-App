import React, { useMemo,useState} from 'react'
import { useTable,usePagination,useGlobalFilter,useSortBy } from 'react-table'
import user_data from './user_data.json'
import { COLUMNS, } from './columns'
import './table.css'
import { GlobalFilter } from './GlobalFilter'




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
                                    
                                    <i  className="fa-solid fa-pen actions"  onClick={() => handleEditClick()} ></i> 
                                    <i className="fa-solid fa-trash actions"  onClick={() => handleDeleteClick(row)}></i>        
                                </td>
                            
                            </tr>
                        )
                    })
                }
            </tbody>
            
        </table>
             
        <div>
            
            <button className='pageButtonArrow' onClick={() => gotoPage(0)} disabled = {!canPreviousPage}> <i className="fa-solid fa-backward-fast"></i> </button>
            <button className='pageButton' onClick={() => previousPage()} disabled = {! canPreviousPage}> <i className="fa-solid fa-circle-arrow-left"></i> Previous</button>
            <button className='pageButton' onClick={() => nextPage()} disabled = {! canNextPage}>Next <i className="fa-solid fa-circle-arrow-right"></i></button>
            <button className='pageButtonArrow' onClick={() => gotoPage(pageCount - 1)} disabled = {!canNextPage}> <i className="fa-solid fa-forward-fast"></i> </button>
            
        </div>

        <div>
            <button className='pageInfoButton' disabled = {true}> 
                
                <i className="fa-solid fa-pager pageIcon"></i> 
                   
                Page: {' '}<strong> {pageIndex + 1} / {pageOptions.length}</strong>{' '}

                
                
            </button>
        </div>
        
        </>    
    )
}