import React, { useState } from "react";
import { TextInput, View, Text, Alert, StyleSheet, Image } from "react-native";
import Login from "../components/Login";

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      navigation.navigate("CoursePlanner");
    } else {
      Alert.alert("Invalid credentials", "Please try again.");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Image
          source = {require('../assets/nestlogo.png')}
          style={styles.overlayImage}
        />
      <Text style={styles.title}>The Nest Planner!</Text>
      <Text style={styles.subtitle}>Ready to take Flight!</Text>
      <Text style={styles.logintext}>Login</Text>
      <Login
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        onLogin={handleLogin}
      />
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  title: {
    color: '#004B98',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 40,
    fontWeight: '900',
    lineHeight: 41.5,
    marginTop: 300,
    marginBottom: 5,
  },
  subtitle: {
    color: '#3DB5E6',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 41.5,
    marginBottom: 20,
  },
  logintext: {
    color: '#0A2240',
    fontFamily: 'Roboto',
    fontSize: 29,
    textAlign: 'left',
    fontWeight: '800',
    lineHeight: 32,
    marginTop: 40,
    alignSelf: 'flex-start',
    marginLeft: 35,
  },
  logininput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});
