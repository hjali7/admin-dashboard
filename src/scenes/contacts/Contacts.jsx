import React, { useState } from 'react'
import { Box , useTheme } from '@mui/material'
import { mockDataContacts } from '../../data/mockData'
import { DataGrid , GridToolbar } from '@mui/x-data-grid'
import {Header} from '../../components/imports'
import { tokens } from '../../theme'

const Contacts = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const {data , loading} = useState({
        dataSet: 'name' ,
        rowLenght : 10 ,
        maxColumns : 7 ,
    })
    const columns = [
        {field : 'id' , headerName: 'ID' , flex: 1 , align: 'left' } ,
        {field : 'name' , headerName : 'Name'  , flex: 1 , align: 'left'} ,
        {field : 'email' , headerName : 'EMAIL' , flex: 1 , align: 'left'} ,
        {field : 'age' , headerName : 'AGE' , flex: 1 , align:'left'},
        {field : 'phone' , headerName : 'PHONE NUMBER' , flex : 1 , align : 'left'} ,
        {field : 'address', headerName : 'ADDRESS'  , flex :1 , align : 'left'} ,
        {field : 'city' , headerName : 'CITY' , flex: 1 ,align : 'left'} ,
        {field : 'zipCode' , headerName : 'ZIPCODE' , flex: 1 , align: 'left'} , 
        {field : 'registrarId' , headerName : 'REGISTATID' , flex: 1 , align : 'left'} ,
    ]
  return (
    <Box margin="20px">
        <Header title='CONTACTS' subTitle='List of Contacts for Future Refrence' />
        <Box margin="30px" height='70vh'>
            <DataGrid rows={mockDataContacts} columns={columns} slots={{toolbar: GridToolbar}} loading={loading} {...mockDataContacts} sx={{
                '.MuiDataGrid-row:hover' : {
          backgroundColor : `${colors.blueAccent[800]}` ,
        },
        '&.MuiDataGrid-root' : {
          border: 'none' ,
          outline: 'none' ,
          boxShadow : "5px 5px 10px #000",
        } ,
        '.MuiDataGrid-row' : {
          border:"none !importatn" , 
          outline : "none !importatn"
        },
        '.MuiDataGrid-columnHeadersInner' : {
          backgroundColor : `${colors.blueAccent[600]}` ,
          border : "none !important" ,
        },
        '	.MuiSvgIcon-root ' : {
          color: `${colors.primery[100]}`
        },
        '.MuiDataGrid-menuIcon' : {
          display: 'none'
        } ,
        ' .MuiDataGrid-footerContainer': {
          backgroundColor : `${colors.blueAccent[600]}` ,
          border: "none !importatn" ,
          borderBottomRadius: '1rem' ,
        },
        '.MuiDataGrid-cell': {
          borderBottom : 'none'
        }
            }} />
        </Box>
    </Box>
  )
}

export default Contacts