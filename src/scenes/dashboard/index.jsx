import React from 'react'
import {Header} from '../../components/imports'
import { Box } from '@mui/material'
const Dashboard = () => {
  return (
    <Box margin={'20px'}>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Header title={'Dashboard'} subTitle={'Welcome to your dashboard'} />
      </Box>
    </Box>
  )
}

export default Dashboard