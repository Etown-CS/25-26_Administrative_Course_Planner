import {Text, View, StyleSheet, TextInput} from 'react-native';
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  return (
            <View style={styles.container}>
            <TextInput 
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.logininput}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                style={styles.logininput}
            />
        </View>
  );
};






export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#fff',
    },
    logininput: {
        height: 40,
        borderColor: 'gray', 
        borderWidth: 1, 
        marginBottom: 10, 
        paddingLeft: 8
    }

});