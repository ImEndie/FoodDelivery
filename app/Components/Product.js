


import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Icon,Avatar, NavigationRow } from 'react-native-ios-kit';
import { Image } from 'expo-image';

export default class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={this.props.img}
                    contentFit="cover"
                    transition={1000}
                />
                <Text style={{padding: 7,fontStyle: 'italic', color: 'gray'}}>{this.props.desc}</Text>
                <NavigationRow title={this.props.checkout?"Checkout":"Details"} info="" theme={{barColor: 'white', dividerColor: "white"}}/>
                
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      width: 250,
      height: 250,
    //   padding: 10,
      borderRadius: 15,
      borderWidth: 1,
    paddingBottom: 12,
    margin: 10
    },
    image: {
      flex: 1,
      width: 248,
      backgroundColor: '#gray',
      height: 180,
      borderTopLeftRadius: 14,
      borderTopRightRadius: 15
    },
  });