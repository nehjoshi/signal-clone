import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

export default function CustomListItem({id, chatName, enterChat}) {
    return (
        <ListItem>
            <Avatar rounded source={{ uri: "https://www.logolynx.com/images/logolynx/b4/b4ef8b89b08d503b37f526bca624c19a.jpeg" }} />
            <ListItem.Content>
                <ListItem.Title style={{fontWeight: "800"}}>Chat!</ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>This is a test subtitle.</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}
