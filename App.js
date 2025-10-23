import HomeScreen from './screens/HomeScreen';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  LoginScreen  from './screens/LoginScreen';
//import CoursePlannerScreen  from './screens/CoursePlannerScreen'; removed for now for mine to work
//import CoursePlannerScreen from './screens/CoursePlannerScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}
        options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




