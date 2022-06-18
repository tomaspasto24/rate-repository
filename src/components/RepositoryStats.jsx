import {View} from 'react-native';
import StyledText from './StyledText';

const parseThousands = (value) => {
    return value >= 1000
        ? Math.round(value / 100) / 10 + 'k'
        : String(value)
}
    
const RepositoryStats = ( props ) => {
    return (
        // flexDirection en row para que queden los items alineados en filas. Por defecto siempre quedan en columnas.
        <View style={ {flexDirection: 'row', justifyContent: 'space-around'} }>
            {/* Cada view tiene flexDirection column. */}
            <View>
                <StyledText aling={'center'} fontWeight={'bold'}>{ parseThousands(props.stargazersCount) }</StyledText>
                <StyledText aling={'center'}>Stars</StyledText>
            </View>
            <View>
                <StyledText aling={'center'} fontWeight={'bold'}>{ props.forksCount }</StyledText>
                <StyledText aling={'center'}>Forks</StyledText>
            </View>
            <View>
                <StyledText aling={'center'} fontWeight={'bold'}>{ props.reviewCount }</StyledText>
                <StyledText aling={'center'}>Review</StyledText>
            </View>
            <View>
                <StyledText aling={'center'} fontWeight={'bold'}>{ props.ratingAverage }</StyledText>
                <StyledText aling={'center'}>Rating</StyledText>
            </View>
        </View>
    )
} 

export default RepositoryStats;