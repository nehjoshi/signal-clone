import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import CustomListItem from '../components/CustomListItem';

export default function Home() {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>This is the home screen!</Text>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})