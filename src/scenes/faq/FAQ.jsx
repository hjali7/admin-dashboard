import React , {useState} from 'react'
import {Header} from '../../components/imports'
import { useTheme , Box , Typography } from '@mui/material'
import { tokens } from '../../theme'
import {Accordion , AccordionDetails , AccordionSummary} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

const FAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [expanded , setExpanded] = useState(false)
    const handleChange = (panel) => (event , isExpanded) => {
        setExpanded(isExpanded ?  panel : false)
    }
    
  return (
    <Box margin='20px'>
        <Box>
            <Header title='FAQ' subTitle='Frequently Asked Questions Page' />
        </Box>
        <Box>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMore />}
                aria-controls="panel1bh-content" id="panel1bh-header">
                    <Typography variant='h3' color={`${colors.greenAccent[500]}`}>
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails  >
                    <Typography colo={`${colors.primery[300]}`} variant='caption' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam deserunt id deleniti temporibus velit molestias.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMore />}
                aria-controls="panel2bh-content" id="panel2bh-header">
                    <Typography variant='h3' color={`${colors.greenAccent[500]}`}>
                        Another Important Questions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails  >
                    <Typography colo={`${colors.primery[300]}`} variant='caption' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam deserunt id deleniti temporibus velit molestias.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMore />}
                aria-controls="panel3bh-content" id="panel3bh-header">
                    <Typography variant='h3' color={`${colors.greenAccent[500]}`}>
                        Your Favorite Questions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails  >
                    <Typography colo={`${colors.primery[300]}`} variant='caption' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam deserunt id deleniti temporibus velit molestias.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMore />}
                aria-controls="panel4bh-content" id="panel4bh-header">
                    <Typography variant='h3' color={`${colors.greenAccent[500]}`}>
                        Some Random Questions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails  >
                    <Typography colo={`${colors.primery[300]}`} variant='caption' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam deserunt id deleniti temporibus velit molestias.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMore />}
                aria-controls="panel5bh-content" id="panel5bh-header">
                    <Typography variant='h3' color={`${colors.greenAccent[500]}`}>
                        The Final Qestions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails  >
                    <Typography colo={`${colors.primery[300]}`} variant='caption' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam deserunt id deleniti temporibus velit molestias.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    </Box>
  )
}

export default FAQ