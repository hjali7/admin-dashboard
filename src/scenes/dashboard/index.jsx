import React from 'react'
import {Header , ProgressCircle ,StatBox , GeograpyCharts,BarCharts,LineCharts} from '../../components/imports'
import { Box , useTheme , Button , IconButton , Typography, Icon } from '@mui/material'
import { tokens } from '../../theme'
import { mockTransactions } from '../../data/mockData'
import { DownloadOutlined , Email , PointOfSaleRounded , PersonAdd , Traffic} from '@mui/icons-material'
const Dashboard = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box margin='0 15px' height='70vh'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title='DASHBORAD' subTitle='Welcome to your dashboard' />
      <Box>
        <Button sx={{background:colors.blueAccent[700] , color:colors.grey[100] ,fontSize:'14px' , fontWeight:'bold' , padding:'10px 20px'}}>
           <DownloadOutlined sx={{mr:'10px'}} />
           Download Reports
        </Button>
      </Box>
      </Box>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="133px" gap="15px" >
        <Box gridColumn='span 3' sx={{background:colors.primery[400]}} display='flex' justifyContent='center' alignItems='center'>
          <StatBox icon={<Email sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />} title='12,361' subTitle='EmailSents'progress='.75' increase='+14%'/>
        </Box>  
        <Box gridColumn='span 3' sx={{background:colors.primery[400]}} display='flex' justifyContent='center' alignItems='center'>
          <StatBox icon={<PointOfSaleRounded sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />} title='431,225' subTitle='SalesObtained'progress='.55' increase='+21%'/>
        </Box>  
        <Box gridColumn='span 3' sx={{background:colors.primery[400]}} display='flex' justifyContent='center' alignItems='center'>
          <StatBox icon={<PersonAdd sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />} title='32,441' subTitle='NewClient'progress='.35' increase='+7%'/>
        </Box>  
        <Box gridColumn='span 3' sx={{background:colors.primery[400]}} display='flex' justifyContent='center' alignItems='center'>
          <StatBox icon={<Traffic sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />} title='1,335,123' subTitle='Traffic Recived'progress='.80' increase='+47%'/>
        </Box>
        <Box gridColumn='span 8' gridRow='span 2' sx={{background:colors.primery[400]}}>
          <Box display='flex' justifyContent='space-between' alignItems='center' mt='14px' p='0 25px'>
            <Box>
               <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}>
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}>
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlined sx={{fontSize:'26px',color:colors.greenAccent[500]}} />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineCharts isDashboard={true} />
          </Box>
        </Box> 
        <Box gridColumn='span 4' overflow='auto' gridRow='span 2' sx={{background:colors.primery[400]}} >
          <Box display='flex' justifyContent='space-between' flexDirection='column' margin='10px' >
            <Typography mb='5px' borderBottom={`2px solid ${colors.grey[400]}`} variant='h5' color={colors.primery[100]}>Recent Transactions</Typography>
            <Box>
              {mockTransactions.map(trans => {
                const {txId , user , date ,cost} = trans
                return (
                  <Box key={txId} display='flex' justifyContent='space-between' borderBottom={`2px solid ${colors.grey[300]}`} >
                     <Box>
                       <Typography variant='h6' color={colors.greenAccent[500]}>{txId}</Typography>
                      <Typography variant='caption'>{user}</Typography>
                     </Box>
                     <Box>
                        <Typography variant='caption' color={colors.primery[200]}>{date}</Typography>
                     </Box>
                     <Box width='25%' m='4px 0' display='flex' justifyContent='center' alignItems='center' sx={{background:colors.greenAccent[500] , borderRadius:'5px'  }}>
                        {cost}
                     </Box>
                  </Box>
                )
              })}
            </Box>
          </Box>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primery[400]}
          p="8px"
          gridRow='span 2'
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="18px"
            textAlign='center'
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h6"
              color={colors.greenAccent[500]}
              sx={{ mt: "5px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography variant='caption'>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box gridColumn='span 5' sx={{background:colors.primery[400]}} gridRow='span 2' p='8px'>
          <Typography variant='h5' fontWeight='600'>Sales Quality</Typography>
          <Box  height="250px" mt="-20px" width='100%'>
            <BarCharts isDashboard={true} />
          </Box>
        </Box>
        <Box gridColumn='span 4' sx={{background:colors.primery[400]}} gridRow='span 2' p='8px'>
          <Typography variant='h5' fontWeight='600'>Sales Quality</Typography>
          <Box height='200px' mt='10px'>
            <GeograpyCharts isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard