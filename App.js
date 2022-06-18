import Main from './src/components/Main';
import { NavigationContainer  } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </>
  );
}
