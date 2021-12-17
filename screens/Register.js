import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';

export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");


    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }}>Create a Signal Account</Text>
            <View style={styles.inputContainer}>
                <Input placeholder="Full Name" autoFocus type="text" onChangeText={text => setName(text)} />
                <Input placeholder="Email" type="email" onChangeText={text => setEmail(text)} />
                <Input placeholder="Email" type="password" secureTextEntry onChangeText={text => setPassword(text)} />
                
            </View>
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
