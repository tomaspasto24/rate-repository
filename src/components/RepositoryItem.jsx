import {Image, View, StyleSheet, Platform} from 'react-native'; 
import StyledText from './StyledText';
import RepositoryStats from './RepositoryStats';
import theme from '../theme';

// styleSheet es como un conjunto de objetos que definen propiedades para estilar.
const style = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    strong: {
        color: '#09f',
        fontWeight: 'bold',
        marginBottom: 5
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: Platform.select({
            ios: 'orange',
            android: 'blue',
            default: theme.colors.primary
        }),
        alignSelf: 'flex-start',
        borderRadius: 4,
        marginTop: 4,
        marginBottom: 4,
        overflow: 'hidden'
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
})

const RepositoryItemHeader = ( { ownerAvatarUrl, fullName, description, language} ) => (
        <View style={ { flexDirection: 'row', paddingBottom: 2 } }>
            <View style={ {paddingRight: 10} }>
                <Image style={ style.image } source={ { uri: ownerAvatarUrl } }/>
              </View>
            {/* flex: 1 hace que ocupe todo el espacio y haga salto de linea en caso de que el texto ocupe todo. */}
            <View style={ {flex: 1} }>
                <StyledText fontSize='subheading' fontWeight='bold'>{ fullName }</StyledText>
                <StyledText color='secondary'>{ description }</StyledText>
                <StyledText style={style.language}>{ language }</StyledText>
            </View>
        </View>
)

const RepositoryItem = (props) => (
    <View key={props.id} style={ style.container }>
        <RepositoryItemHeader { ...props } />
        <RepositoryStats { ...props } />
    </View>
    )

export default RepositoryItem;