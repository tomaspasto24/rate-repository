import { StyleSheet } from "react-native";
import theme from "../theme";
import StyledText from "./StyledText";
import Constants from "expo-constants";
import { View } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    text: {
        color: theme.appBar.textPrimary,
    }
})


const AppBar = () => {
    return (
        <View style={styles.container}>
            <StyledText fontWeight={'bold'} content={'center'} style={styles.text}>
                Repositories (default)
            </StyledText>
        </View>
    )
}

export default AppBar;