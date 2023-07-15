import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-ios-kit';
import Product from '../Components/Product';

export default class SearchScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
            text: ''
        }
    }
    valueChanged=(text)=>{
        this.setState({
            text: text,
            products: [
                    {desc:'Get this burger for only $3.99 from Food Dlivery app!',id:'1',img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg"},
                    {desc:'Get this burger for only $3.99 from Food Dlivery app!',id:'2',img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg"},
                    {desc:'Get this burger for only $3.99 from Food Dlivery app!',id:'3',img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg"},
                    {desc:'Get this burger for only $3.99 from Food Dlivery app!',id:'4',img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg"}
            ]
        })
    }
    render(){
        return(
            <View>
                <SearchBar
                    value={this.state.text}
                    onValueChange={this.valueChanged}
                    withCancel
                    animated
                />
                <ScrollView style={styles.container}>
                
                    {
                        this.state.products.map(
                            x=>{console.log(this.state.products);return (<Product key={x.id} desc={x.desc} img={x.img} />)}
                        )
                    }
                
            </ScrollView>
            </View>
            
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#000"
    },
})