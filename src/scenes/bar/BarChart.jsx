import React from 'react'
import { Box } from '@mui/material'
import {Header , BarCharts} from '../../components/imports'
const BarChart = () => {

  return (
    <Box margin='20px'>
      <Header title='BARCHART' subTitle='chart' />
      <Box height='70vh'>
        <BarCharts />
      </Box>
    </Box>
  )
}

export default BarChart