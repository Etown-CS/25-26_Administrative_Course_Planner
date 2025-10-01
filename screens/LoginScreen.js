import { TextInput, View, Text, Alert, StyleSheet } from "react-native";
import { useState } from "react";

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
}