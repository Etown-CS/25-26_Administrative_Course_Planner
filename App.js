import { StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen'; 
import calendarScreen from './screens/calendarScreen'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = "Calendar"> component={calendarScreen}</Stack.Screen>
        <Stack.Screen name="Home" component={HomeScreen}
        options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
