import { TextInput, View, Text, Alert, StyleSheet } from "react-native";
import { useState } from "react";
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
        <Login></Login>
    );

}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    logininput: {
        height: 40,
        borderColor: 'gray', 
        borderWidth: 1, 
        marginBottom: 10, 
        paddingLeft: 8
    }

});