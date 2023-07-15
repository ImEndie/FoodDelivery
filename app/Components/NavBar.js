
import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Icon,Avatar } from 'react-native-ios-kit';

export default class NavBar extends React.Component {
    constructor(props){
        super(props);
        
    }
    render() {
        return (
        <View style={styles.container}>
            <Pressable onPress={this.props.navigateAccount}>
                <Avatar initials="A" size={40} />
            </Pressable>
            <Text style={styles.title} onPress={this.props.navigateHome}>Food Delivery</Text>
        </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        height: "12%",
        backgroundColor: '#fff',
        marginTop: "4%",
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row-reverse',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 37,
        fontFamily: 'Fasthand'
    }
})