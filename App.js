import HomeScreen from './screens/HomeScreen';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  LoginScreen  from './screens/LoginScreen';
//import CoursePlannerScreen from './screens/CoursePlannerScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (

      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          {/*<Stack.Screen name="CoursePlanner" component={CoursePlannerScreen} />*/}
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
