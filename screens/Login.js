import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Image, Button } from 'react-native-elements';

export default function Login({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {
        navigation.navigate('Register');

    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image source={{
                uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
            }} style={{ width: 200, height: 200 }} />

            <View style={styles.inputContainer}>
                <Input placeholder="Email" autoFocus type="email" onChangeText={text => setEmail(text)} />
                <Input placeholder="Password" type="password" secureTextEntry onChangeText={text => setPassword(text)} />
            </View>
            <Button title="Login" containerStyle={styles.button} onPress={signIn} />
            <Button title="Register" containerStyle={styles.button} type="outline" onPress={() => navigation.navigate("Register")} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "#fff"
    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10
    }
})
