import React, { useState } from 'react'
import {Header} from '../../components/imports'
import { DataGrid , GridToolbar } from '@mui/x-data-grid'
import { mockDataTeam } from '../../data/mockData'
import { Box , useTheme , Typography } from '@mui/material'
import { tokens } from '../../theme'
import { AdminPanelSettingsOutlined , LockOpenOutlined , SecurityOutlined } from '@mui/icons-material'

const Team = () => {
  const {data , loading} = useState({
    dataSet : 'name',
    rowLenght : 6 ,
    maxColumns : 6 ,
  })
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const columns = [
    {field : 'id' , headerName: 'ID',sortable: false ,editable: true } ,
    {field : 'name' , headerName : "NAME" , cellClassName : 'name-column--cell' , flex : 1 , sortable: false ,editable: true} ,
    {field : 'email' , headerName : "EMAIL", flex:1 ,sortable: false ,editable: true} ,
    {field : 'age' , headerName : 'AGE' , headerAlign: 'center' , align:'center' ,sortable: false ,editable: true},
    {field : 'phone' , headerName : "PHONE NUMBER" , flex:1 ,sortable: false ,editable: true} ,
    {field: 'access' , headerName : "ACCESSLEVEL" ,headerAlign : 'center',sortable: false ,editable: true , flex: 1 , align:'center' , renderCell : ({row : {access}})=> {
      return (
        <Box display='flex' justifyContent='center'  flexWarp = "warp" alignItems='cneter' backgroundColor={colors.greenAccent[600]} border= "none" sx={{outline:'none' , '&:hover':{
          backgroundColor : `${colors.greenAccent[500]}`
        }}} padding='5px' width='100%' margin='0 auto' textAlign='cneter' borderRadius='5px'>
          {access === "admin" ? <AdminPanelSettingsOutlined /> : undefined} 
          {access === "user" ? <LockOpenOutlined /> : undefined}
          {access === 'manager' ? <SecurityOutlined /> : undefined}
          <Typography variant='caption'>{access}</Typography>
        </Box>
      )
    }}
  ]
  return (
    <Box margin='20px' >
      <Header title='TEAM' subTitle='Managing the Team Members' />
      <Box marginTop='30px' heigth='80vh' >
        <DataGrid {...mockDataTeam} loading={loading} slots={{toolbar: GridToolbar}} sx={{
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

      }} rows={mockDataTeam} columns={columns} checkboxSelection />
      </Box>
    </Box>
  )
}

export default Team