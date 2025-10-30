import HomeScreen from './screens/HomeScreen';
import { StyleSheet, Text, View } from 'react-native';
//import CoursePlannerScreen  from './screens/CoursePlannerScreen'; removed for now for mine to work
//import  LoginScreen  from './screens/LoginScreen';   uncomment when login is finished
import  LoginScreen  from './screens/LoginScreen';
//import CoursePlannerScreen from './screens/CoursePlannerScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalendarScreen from './screens/calendarScreen';
// import Login from './components/Login';



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}
        options={{headerShown:false}} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
        {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}




