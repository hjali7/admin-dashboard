import React from 'react'
import {Header , GeograpyCharts} from '../../components/imports'
import {Box} from '@mui/material'

const GeograpyChart = () => {
  return (
    <Box margin='20px'>
        <Header title='Geography Chart' subTitle='simple Geography chart' />
        <Box>
            <GeograpyCharts/>
        </Box>
    </Box>
  )
}
export default GeograpyChart