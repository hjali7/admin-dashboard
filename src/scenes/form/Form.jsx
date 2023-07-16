import React from 'react'
import { Box ,Button ,TextField } from '@mui/material'
import * as yup from 'yup'
import { Formik } from 'formik'
import useMediaQuery from '@mui/material/useMediaQuery'
import {Header} from '../../components/imports'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme'

const initialValues = {
    firstName : '' ,
    lastName : '' ,
    email : '' ,
    contact : '' ,
    address1: '',
    address2: '' ,
}
const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
    firstName : yup.string().required('required'),
    lastName : yup.string().required("required") ,
    email : yup.string().email('invalid email').required('required'),
    contact : yup.string().matches(phoneRegExp , 'phone number in not valid').required('required') ,
    address1:  yup.string().required('required'),
    address2:  yup.string().required('required'),
})



const Form = () => {
    const NonisMobile = useMediaQuery('min-width :600px ')
    const handleSubmit = values => console.log(values);
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
    <Box margin='20px'>
        <Header title='CREATE USER' subTitle='Create a New User Profile' />
        <Formik
         initialValues={initialValues}
         onSubmit={handleSubmit}
         validationSchema={checkoutSchema}
        >
            {({values , handleBlur , handleChange ,errors , handleSubmit , touched })=> {
                return (

                <form onSubmit={handleSubmit}>
                    <Box
                        display='grid'
                        gridTemplateColumns='repeat(4 ,minmax(0 , 1fr))'
                        gap="30px"
                        sx={{
                            '& > input' : {gridColumn : NonisMobile ? undefined : 'span 4'}
                        }}
                        >
                    <TextField name='firstName' label='FistName' helperText={touched.firstName && errors.firstName} value={values.firstName} onChange={handleChange} onBlur={handleBlur} placeholder='john' fullWidth variant='filled' type='text'  error={!!touched.firstName && !! errors.firstName} sx={{gridColumn : 'span 2'}}   />                
                    <TextField name='lastName' label='lastName' helperText={touched.lastName && errors.lastName} value={values.lastName} onChange={handleChange} onBlur={handleBlur} placeholder='smigla' fullWidth variant='filled' type='text'  error={!!touched.lastName && !! errors.lastName} sx={{gridColumn : 'span 2'}} />                
                    <TextField name='email' label='email' helperText={touched.email && errors.email} value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder='example@gmail.com' fullWidth variant='filled' type='email'  error={!!touched.email && !! errors.email} sx={{gridColumn : 'span 4'}} />                
                    <TextField name='contact' label='contact number' helperText={touched.lastName && errors.lastName} value={values.contact} onChange={handleChange} onBlur={handleBlur} placeholder='123456789' fullWidth variant='filled' type='text'  error={!!touched.contact && !! errors.contact} sx={{gridColumn : 'span 4'}} />                
                    <TextField name='address1' label='address 1' helperText={touched.address1 && errors.address1} value={values.address1} onChange={handleChange} onBlur={handleBlur} placeholder='exampleStreet1' fullWidth variant='filled' type='text'  error={!!touched.address1 && !! errors.address1} sx={{gridColumn : 'span 4'}} />                
                    <TextField name='address2' label='address2' helperText={touched.address2 && errors.address2} value={values.address2} onChange={handleChange} onBlur={handleBlur} placeholder='exampleStreet2' fullWidth variant='filled' type='text'  error={!!touched.address2 && !! errors.address2} sx={{gridColumn : 'span 4'}} />                
                    </Box>
                    <Box display='flex' justifyContent='end' marginTop='20px'>
                        <Button variant='contained'type='submit'color='success'>
                            Create New User
                        </Button>
                    </Box>
                </form>
                )
            }}

        </Formik>
    </Box>
  )
}

export default Form