import React, { useState } from 'react'
import { Box ,useTheme ,List ,ListItem, Typography, ListItemText } from '@mui/material'
import { tokens } from '../../theme'
import {Header} from '../../components/imports'
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'

const handleDateSelect = (selectInfo) => {
    const  title = prompt('Please enter a new title for your event')
    const  calendarApi = selectInfo.view.calendar
    calendarApi.unselect() 
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
}

const handleClickEvent = select => {
    if(window.confirm(`Are you sure you want to delete the event ${select.event.title} `)) {
        select.event.remove()
    }
}

const Calendar = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [CurrentEvents , setCurrentEvents] = useState([])
  return (
    <Box margin='20px' >
        <Box>
            <Header title='Calendar' subTitle='Full Calendar Interactive Page' />
        </Box>
        <Box display='flex' justifyContent='space-between' alignItems='flex-start'>
            {/* calendar sidebar */}
            <Box flex='1 1 20%' textAlign='center' padding='15px' borderRadius='20px' sx={{backgroundColor : `${colors.primery[400]}`}}>
                <Typography variant='h5'>EVENTS</Typography>
                <List>
                   {CurrentEvents.map(event => (
                    <ListItem key={createEventId} sx={{borderRadius:'2px' , backgroundColor:`${colors.greenAccent[500]}`,margin:'10px 0'}}>
                        <ListItemText primary={event.title} secondary={<Typography>{formatDate(event.start ,{
                            year: 'numeric',
                            month : 'short' ,
                            day : 'numeric',
                        })}</Typography>} />
                    </ListItem>
                   ))} 
                </List>
            </Box>
            {/* calendar */}
            <Box flex='1 1 100%' margin='20px' ml='15px' sx={{'& button' : {backgroundColor: `${colors.primery[500]}`}}}>
                <FullCalendar
                plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                initialEvents={INITIAL_EVENTS}
                select={handleDateSelect}
                eventClick={handleClickEvent}
                eventsSet={events => setCurrentEvents(events)}
                height='70vh'
            />
            </Box>
        </Box>
    </Box>
  )
}

export default Calendar