import React from 'react'
import '../RegisterForm/RegisterForm'
import { useFormik } from 'formik';
import { TextField, Card, Grid, Button, CardContent } from '@material-ui/core';
import { Post } from '../../services/HttpService';
import {alertInfo} from '../../elements/Alert';
import {useHistory} from 'react-router-dom';

const button = {
    color: '#fff',
    background: '#18A0FB',
    borderRadius: '6px',
    '&:hover': {
        background: '#fff',
        color: '#18A0FB',
    }
}

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

const validate = (values) => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'El campo nombre es obligatorio'
    }
    if (!values.lastName) {
        errors.lastName = 'El campo apellido es obligatorio'
    }
    if (!values.email) {
        errors.email = 'El campo email es obligatorio'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'El email ingresado es incorrecto'
    }
    if (!values.password) {
        errors.password = 'El campo contraseña es obligatorio'
    } else if (values.password.length < 6) {
        errors.password = 'La contraseña tiene que ser mayor a 6'
    }

    return errors
}

// const onSubmit = values => {
// }
const RegisterForm = () => {
    const history = useHistory();

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit : values => {
            try {
                Post("/auth/register", values)
                .then(res => {
                    if(res){
                        history.push('/');
                    } else{
                        alertInfo({title: 'Something went wrong', text: 'Please try again'})
                    }
                })
            } catch (error) {
                alertInfo({title: 'Something went wrong', text: 'Please try again'})
            }
        }
    })
    return (
        <form onSubmit={formik.handleSubmit} style={{ padding: '5px', marginTop: "15px" }} className='d-flex justify-content-center' >
            <Card style={{ maxWidth: '49rem', margin: "0 auto" }} className='d-flex justfy-content-center' >
                <CardContent>
                    <h4 className='text-center'> Formulario de Registro </h4>
                    <Grid container spacing={3}>
                        <Grid item xs={6} md={6}>

                            {
                                formik.touched.name && formik.errors.name ?
                                    (<TextField
                                        error
                                        required
                                        label="Nombre"
                                        name='firstName'
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
                                        fullWidth
                                        helperText={formik.errors.firstName}
                                    />)
                                    : <TextField
                                        required
                                        label="Nombre"
                                        name='firstName'
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
                                        fullWidth
                                    />
                            }
                        </Grid>
                        <Grid item xs={6} md={6}>

                            {
                                formik.touched.lastName && formik.errors.lastName ?
                                    (<TextField
                                        error
                                        required
                                        label="Apellido"
                                        name='lastName'
                                        onChange={formik.handleChange}
                                        value={formik.values.lastName}
                                        fullWidth
                                        helperText={formik.errors.lastName}
                                    />)
                                    : <TextField
                                        required
                                        label="Apellido"
                                        name='lastName'
                                        fullWidth
                                        onChange={formik.handleChange}
                                        value={formik.values.lastName}
                                    />
                            }
                        </Grid>
                        <Grid item xs={12} >

                            {
                                formik.touched.email && formik.errors.email ?
                                    (<TextField
                                        error
                                        required
                                        label="Email"
                                        name='email'
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        fullWidth
                                        helperText={formik.errors.email}
                                    />)
                                    : <TextField
                                        required
                                        label="Email"
                                        type='email'
                                        name='email'
                                        fullWidth
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                    />
                            }
                        </Grid>
                        <Grid item xs={12} md={12}>

                            {
                                formik.touched.password && formik.errors.password ?
                                    (<TextField
                                        error
                                        required
                                        type='password'
                                        label="Password"
                                        name='password'
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                        fullWidth
                                        helperText={formik.errors.password}
                                    />)
                                    : <TextField
                                        required
                                        label='Password'
                                        type='password'
                                        name='password'
                                        fullWidth
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                    />
                            }
                        </Grid>
                        <Grid item md={12}>
                            <Button style={button} type='submit' >
                                Enviar
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </form>
    )
}

export default RegisterForm;