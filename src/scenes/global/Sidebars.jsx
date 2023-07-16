import React , {useState} from 'react'
import {Sidebar ,Menu , MenuItem ,SubMenu } from 'react-pro-sidebar'
import { Box ,IconButton , Typography , useTheme } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { tokens } from '../../theme'
import { HomeOutlined , PeopleOutlined , ContactsOutlined ,ReceiptOutlined , PersonOutlined , CalendarTodayOutlined ,HelpOutline , BarChartOutlined ,PieChartOutlineOutlined ,TimelineOutlined ,MenuOutlined , MapOutlined } from '@mui/icons-material'
import user from '../../assets/user.png'
const Item = ({to , title , selected , setSelected , icon}) => {

  return (
    <MenuItem icon={icon} active={selected === title} onClick={setSelected(title)}
    component={<NavLink to={to}/>}>
        <Typography >{title}</Typography>
    </MenuItem>
  )
}

const Sidebars = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapse , setIsCollapse] = useState(false)
  const [selected , setSelected] = useState('Dashboard')
  
  return (
      <Sidebar collapsed={isCollapse} className='sidebarClasses' backgroundColor={`${colors.primery[400]}`} rootStyles={{border:'none'}}>
        <Box height='100vh' display='flex' justifyContent='space-between' flexDirection='column'>
        <Menu iconShape="square" menuItemStyles={{
      button: {
        [`&:hover`]: {
          backgroundColor: 'transparent !important',
          color: '#868dfb',
        },
        [`&.active`]: {
          color: `${colors.blueAccent[300]} !important`},
          }}}>
          <MenuItem
          onClick={()=> setIsCollapse(!isCollapse)}
          icon={isCollapse ? <MenuOutlined /> : undefined}
          style={{margin: '10px 0', color : colors.grey[100]}}>
            {!isCollapse && <Box display="flex" justifyContent="space-between" alignItems="center"  marginLeft="15px" >
              <Typography variant='h3' color={colors.grey[300]} >
                ADMINIS
              </Typography>
              <IconButton color={colors.grey[300]}  onClick={()=> setIsCollapse(!isCollapse)}>
                <MenuOutlined />
              </IconButton>
            </Box>}
          </MenuItem>
          {/* USER  */}
          {!isCollapse && (
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
              <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <img src={user} alt="user_image" width='90px'  height='90px' style={{cursor: "pointer" , borderRadius: "50%"}} />
              </Box>
              <Box textAlign={'center'}>
                <Typography variant='h3' mt={'10px'} color={colors.grey[100]} fontWeight={'bold'} >Mark Zaker</Typography>
                <Typography variant='caption' color={colors.greenAccent[500]}>VP Fancy Admin</Typography>
              </Box>
            </Box>
          )}
          {/* MENU ITEMS*/}
          <Box padding={isCollapse ? undefined: '3% 10%'}>
            <Item to='/' icon={<HomeOutlined />} title='Dashboard'   selected={selected} setSelected={setSelected}/>
            <Typography variant='h5' color={colors.grey[300]}  sx={{textAlign:'center' , mt: "15px"}} >Data</Typography>
            <Item to='/team' icon={<PeopleOutlined />} title='Manage Team' selected setSelected={setSelected} />
            <Item to='/contacts' title="Contacts Information" icon={<ContactsOutlined />} selected={selected} setSelected={setSelected} />
            <Item to='/invoices' icon={<ReceiptOutlined />} title="Invoices Balances" selected={selected} setSelected={setSelected} />
            <Typography variant="h5" color={colors.grey[300]} sx={{textAlign:'center' , mt: "15px"}} >Pages</Typography>
            <Item title="Profile Form" to="/form" icon={<PersonOutlined />} selected={selected} setSelected={setSelected} />
            <Item title="Calendar" to='/calendar' icon={<CalendarTodayOutlined />} selected={selected} setSelected={setSelected} />
            <Item title="FAQ Page" to="/faq" icon={<HelpOutline />} selected={selected} setSelected={setSelected} />
            <Typography variant='h5' sx={{textAlign:'center' , mt: "15px"}} color={colors.grey[300]}>Charts</Typography>
            <Item title="Bar Chart" to='/chart' icon={<BarChartOutlined />} selected={selected} setSelected={setSelected} />
            <Item title="Pie Chart" to="/pie" icon={<PieChartOutlineOutlined />} selected={selected} setSelected={setSelected} />
            <Item title="Line Chart" to="/line" icon={<TimelineOutlined />} selected={selected} setSelected={setSelected} />
            <Item  title="Geography Chart "to="/geography" icon={<MapOutlined />} selected={selected} setSelected={setSelected} />
          </Box>
        </Menu>
      </Box>
      </Sidebar>
    
  )
}

export default Sidebars