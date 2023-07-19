import React from 'react'
import ProgressCircle from './ProgressCircle'
import { Box , useTheme , Typography } from '@mui/material'
import { tokens } from '../theme'

const StatBox = ({icon , title , subTitle , progress , increase}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
    <Box width='100%' margin='0 30px'>
        <Box display='flex' justifyContent='space-between' >
            <Box>
                {icon}
                <Typography variant='h4' fontWeight='bold' sx={{color:colors.grey[100] }} >{title}</Typography>
            </Box>
            <Box>
                <ProgressCircle progress={progress} />
            </Box>
        </Box>
        <Box display='flex' justifyContent='space-between'>
            <Typography variant='h5' sx={{color:colors.greenAccent[500]}}>{subTitle}</Typography>
            <Typography variant='h5' sx={{color:colors.greenAccent[600]}}>{increase}</Typography>
        </Box>
    </Box>
  )
}

export default StatBox