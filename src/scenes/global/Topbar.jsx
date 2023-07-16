import React, { useContext } from 'react'
import { Box , IconButton , useTheme } from '@mui/material'
import { ColorModeContext , tokens } from '../../theme'
import InputBase from '@mui/material/InputBase'
import { LightModeOutlined ,DarkModeOutlined , NotificationsOutlined ,SettingsOutlined ,PersonOutlined ,SearchOutlined  } from '@mui/icons-material'

const Topbar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  
  return (
    <Box display='flex' justifyContent='space-between' padding={2}>
      {/* search box */}
      <Box display='flex' backgroundColor={colors.primery[400]} borderRadius='3px'>
        <InputBase placeholder='search' sx={{marginLeft : 2 ,flex : 1}} />
        <IconButton sx={{padding : 1}} type='button'>
          <SearchOutlined />
        </IconButton>
      </Box>
      {/* icons */}
      <Box display={'flex'}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar