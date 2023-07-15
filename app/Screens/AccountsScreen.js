


import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { NavigationRow,Avatar, InfoRow, SwitchRow, Button, DefaultTheme,  } from 'react-native-ios-kit';

export default class AccountScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
        <ScrollView>
        <View style={styles.container}>
                    <Avatar
                    initials='A'
                    size={170}
                    />
                    <Text style={styles.welcome}>Welcome Abbos!</Text>
                    <View style={{alignSelf: 'stretch',marginTop: 30}}>
                        <InfoRow title="ID" info="#18247" />
                        <NavigationRow title="First name" info="Abbos" />
                        <NavigationRow title="Last name" info="Abdusattorov" />
                        <NavigationRow title="Age" info="15" />
                        <NavigationRow title="Email" info="a-ab*@outlook.com" />
                        <NavigationRow title="Phone" info="+998 88 523 02**" />
                        <InfoRow title="Bought Products" info="4" />
                        <InfoRow title="Joined Date" info="05.04.2020" />
                        <NavigationRow title="Log out" info=""  />
                        <NavigationRow title="Delete account" info="" last/>
                    </View>
                    
        </View>
        </ScrollView>
        )
    }
}

const styles= StyleSheet.create({
    container: {
        paddingTop: 20,
        alignItems: 'center',
        marginBottom: '5%'
    },
    welcome: {
        fontSize: 38,
        textAlign: 'center',
        fontFamily: 'Dancing Script Regular',
        margin: 10
    },
    deleteText: {
        color: '#CD0003',
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
        // fontFamily: 'Fa',
        fontWeight: 700
    }
})