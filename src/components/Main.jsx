import { Text, View, Button } from 'react-native';
import RepositoryList from './RepositoryList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppBar from './AppBar';
import Login from '../pages/Login';

// Forma de usar un componente u otro según si es android, ios o web.
// const AppBar = Platform.select({
//     ios: () => require('./IOSAppBar.jsx').default,
//     default: () => require('./AppBar.jsx').default
// })()

const Stack = createNativeStackNavigator();

const Main = () => {
    return (
        <View style={ { flex: 1 } }>
            <AppBar />
            <Stack.Navigator>

                <Stack.Screen 
                    name="Test2"
                    component={ HomeScreen }
                    options={{ title: 'Home' }}
                />

                <Stack.Screen 
                    name="RepositoryList"
                    component={ RepositoryList }
                    options={{ title: 'Repository List' }}
                />

                <Stack.Screen 
                    name="Login"
                    component={ Login }
                    options={{ title: 'Login' }}
                />

            </Stack.Navigator>
        </View>
    )
}


function HomeScreen( { navigation } ) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button 
                title="Go to home"
                onPress={() => navigation.navigate('RepositoryList', "Parámetro ingresado")}
        />

        <Button 
                title="Login"
                onPress={() => navigation.navigate('Login')}
        />
      
      </View>
    );
}

export default Main;