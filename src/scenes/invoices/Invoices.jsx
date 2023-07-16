import React, { useState } from 'react'
import { Box , Typography, useTheme } from '@mui/material'
import { mockDataInvoices } from '../../data/mockData'
import { DataGrid , GridToolbar } from '@mui/x-data-grid'
import {Header} from '../../components/imports'
import { tokens } from '../../theme'

const Invoices = () => {
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
        {field : 'phone' , headerName : 'PHONE NUMBER' , flex : 1 , align : 'left'} ,
        {field : 'cost' , headerName : 'COST' , flex: 1 , align: 'left' , renderCell : params => {
            return (
                <Typography color={colors.greenAccent[500]}>
                    ${params.row.cost}
                </Typography>
            )
        }} , 
        {field : 'date' , headerName : 'DATE' , flex: 1 , align : 'left'} ,
    ]
  return (
    <Box margin="20px">
        <Header title='INVOICES' subTitle='List of Invoices Balances' />
        <Box margin="30px" height='70vh'>
            <DataGrid rows={mockDataInvoices} columns={columns} slots={{toolbar: GridToolbar}} loading={loading} {...mockDataInvoices} sx={{
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
            }}  checkboxSelection />
        </Box>
    </Box>
  )
}

export default Invoices