


import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Icon,Avatar, TableView } from 'react-native-ios-kit';
import Product from '../Components/Product';

export default class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (<ScrollView style={styles.container}>
            <TableView header="Suggested">
                <ScrollView horizontal style={styles.suggested}>
                    <Product desc={"Get this burger for only $3.99 from Food Delivery app!"} img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg"/>
                    <Product desc={"Get this burger for only $3.99 from Food Delivery app!"} img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg"/>
                </ScrollView>
            </TableView>
            <TableView header="New">
                <ScrollView horizontal style={styles.suggested}>
                    <Product desc={"Get this burger for only $3.99 from Food Delivery app!"} img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg"/>
                    <Product desc={"Get this burger for only $3.99 from Food Delivery app!"} img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg"/>
                </ScrollView>
            </TableView>
            <TableView header="Popular">
                <ScrollView horizontal style={styles.suggested}>
                    <Product desc={"Get this burger for only $3.99 from Food Delivery app!"} img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg"/>
                    <Product desc={"Get this burger for only $3.99 from Food Delivery app!"} img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg"/>
                </ScrollView>
            </TableView>
                    
        </ScrollView>)
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        marginBottom: 20
    },
    suggested:{
        backgroundColor: '#fff'
    }
})