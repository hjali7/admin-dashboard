import React from 'react'
import {Header , PieCharts} from '../../components/imports'
import {Box , useTheme} from '@mui/material'
import { tokens } from '../../theme'

const PieChart = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
    <Box margin='20px'>
        <Header title='Pie Chart' subTitle='Simple Pie Chart'/>
        <Box height='70vh'>
            <PieCharts />
        </Box>
    </Box>
  )
}

export default PieChart