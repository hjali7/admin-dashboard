import React from 'react'
import { Box , useTheme , Typography } from '@mui/material'
import {tokens} from '../theme'
const Header = ({title , subTitle}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box sx={{margin:'20px'}}>
      <Typography variant='h2' color={colors.grey[100]} style={{marginBottom:'5px'}} fontWeight={'bold'}>{title}</Typography>
      <Typography variant='h5' color={colors.greenAccent[400]}>{subTitle}</Typography>
    </Box>
  )
}

export default Header