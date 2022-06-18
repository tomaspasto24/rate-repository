import { Formik, useField } from 'formik'
import { View, TextInput, Button } from 'react-native'
import StyleTextInput from '../components/StyledTextInput'
import { StyleSheet } from 'react-native'
import StyledText from '../components/StyledText'
import { loginValidationSchema } from '../validationSchemas/login.js'

const styles = StyleSheet.create({
    form: {
        margin: 12
    },
    error: {
        color: 'red',
        fontSize: 10,
        marginBottom: 20,
        marginTop: -30
    }
})


const initialValues = {
    email: '',
    password: ''
}

const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name)

    return (
        <>
            <StyleTextInput
                error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            />
            {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>
    )
}

const Login = () => {
    return (
        <Formik
            validationSchema={loginValidationSchema}
            initialValues={initialValues}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleSubmit, values }) => {
                return (
                    <View style={styles}>
                        <FormikInputValue
                            name='email'
                            placeholder='E-mail'
                            style={{ marginTop: 20 }}
                        />
                        <FormikInputValue
                            name='password'
                            placeholder='Password'
                            secureTextEntry
                        />
                        <Button onPress={handleSubmit} title={'LogIn'} />
                    </View>
                )
            }}
        </Formik>
    )
}

export default Login