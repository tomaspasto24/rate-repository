import { Text, FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem.jsx';
import useRepositories from '../hooks/useRepositories.js';

const RepositoryList = ({ route }) => {
    const { repositories } = useRepositories()
    
    // Parámetro ingresado a la ruta.
    console.log(route.params);
    
    return (
        <FlatList 
            data={ repositories }
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={ ({ item: repo }) => ( 
                <RepositoryItem { ...repo } />
            )}
        />

    )
}

export default RepositoryList;