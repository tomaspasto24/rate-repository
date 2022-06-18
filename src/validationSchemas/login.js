import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required('Email es requerida'),
    password: yup
        .string()
        .min(5, 'Muy corto!')
        .max(1000, 'Muy largo')
        .required('Password es requerida')
})