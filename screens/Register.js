import { StatusBar } from 'expo-status-bar';
import React, { useState, useLayoutEffect, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Input, Image } from 'react-native-elements';
import { new_auth } from "../firebase.js";

export default function Register({ navigation }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Back',
        })
    }, [navigation])

    const Submit = () => {
        new_auth.createUserWithEmailAndPassword(email, password)
            .then(authUser => {
                // authUser.user.updateProfile({
                //     displayName: name,
                //     photoURL: imageUrl
                // })
                //     .then(() => {
                //         navigation.navigate("Home")
                //     })
                //     .ca
                alert("Successfully registered")
            })
            .catch(err => {
                alert(err);
            })
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text style={{ marginBottom: 50, fontSize: 20 }}>Create a Signal Account</Text>
            <View style={styles.inputContainer}>
                <Input placeholder="Full Name" autoFocus type="text" onChangeText={text => setName(text)} />
                <Input placeholder="Email" type="email" onChangeText={text => setEmail(text)} />
                <Input placeholder="Password" type="password" secureTextEntry onChangeText={text => setPassword(text)} />
                <Input placeholder="Profile Picture URL (Optional)" type="text" onChangeText={text => setImageUrl(text)} />
                <View style={styles.button}>
                    <Button title="Submit" onPress={Submit} />
                </View>

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
        width: 300,
        alignItems: "center",
    },
    button: {
        width: 200,
        marginTop: 10
    }
})
