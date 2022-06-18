import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 30, 
    },
    error: {
        borderColor: 'red'
    }
})

const StyleTextInput = ({style = {}, error, ...props}) => {
    const inputStyle = [
        styles.textInput,
        style,
        error && styles.error,
    ]
    
    return <TextInput style={ inputStyle } { ...props } />
}

export default StyleTextInput