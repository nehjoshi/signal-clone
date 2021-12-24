import { StatusBar } from 'expo-status-bar';
import React, { useState, useLayoutEffect, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Input, Image } from 'react-native-elements';
import { auth } from "../firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

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
        createUserWithEmailAndPassword(auth, email, password)
            .then(authUser => {
                updateProfile(authUser.user, {
                    displayName: name,
                    photoURL: imageUrl ? imageUrl : "https://www.logolynx.com/images/logolynx/b4/b4ef8b89b08d503b37f526bca624c19a.jpeg"
                })
                    .then(() => {
                        navigation.navigate("Home")
                    })
                    .catch(err => {
                        alert(err.message);
                    })
                
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
