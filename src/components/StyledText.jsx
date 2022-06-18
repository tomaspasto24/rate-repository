import { StyleSheet, Text } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.secondary
    },
    alingCenter: {
        textAlign: 'center'
    },
});

// Componente que ingresa un children (que es el contenido que se ingrese entre los corchetes) y varias
// propiedades (color, fontSize, etc), en caso de que se ingrese alguna, se estila el children. 
const StyledText = ( {content, aling, children, color, fontSize, fontWeight, style, ... restOfProps } ) => {
    // Es un array de estilos para aplicar.
    const textStyles = [
        styles.text,
        aling == 'center' && styles.alingCenter,
        color == 'primary' && styles.colorPrimary,
        color == 'secondary' && styles.colorPrimary,
        fontSize == 'subheading' && styles.subheading,
        fontWeight == 'bold' && styles.bold,
        style
    ];

    return (
        // restOfProps son el resto de propiedades que se envían al componente.
        <Text style={textStyles} { ...restOfProps }>
            {children}
        </Text>
    )
}

export default StyledText;