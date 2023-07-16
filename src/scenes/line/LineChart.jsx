import React from 'react'
import {Header , LineCharts} from '../../components/imports'
import { Box } from '@mui/material'

const LineChart = () => {
  return (
    <Box margin='20px'>
        <Header title='Line Chart' subTitle='"Simple Line Chart' />
        <Box heigth='75vh' width='100%' >
            <LineCharts />
        </Box>
    </Box>
  )
}

export default LineChart


