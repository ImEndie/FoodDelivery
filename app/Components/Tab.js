

import React from 'react';
import {  View, StyleSheet } from 'react-native';
import { TabBar } from 'react-native-ios-kit';


export default class TabBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
      selectTab=(i,v)=>{
        this.props.changeTab(i,v)
      }
    render(){
        return(
            <View style={styles.container}>
                <TabBar
                    tabs={[
                        {
                        icon: 'ios-home',
                        title: 'Home',
                        onPress: ()=>this.selectTab(0,'home'),
                        isActive: this.props.activeId === 0,
                        },
                        {
                        icon: 'search',
                        title: 'Search',
                        onPress: ()=>this.selectTab(1,'search'),
                        isActive: this.props.activeId === 1,
                        },
                        {
                        icon: 'cart',
                        title: 'Cart',
                        onPress: ()=>this.selectTab(2,'cart'),
                        isActive: this.props.activeId === 2,
                        }
                    ]}
                    theme={{
                        barColor: 'white',
                        dividerColor: "white"
                    }}
                />
                    
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: '7%',
        backgroundColor: '#fff',
        width: '100%',
    },
    tabBtn:{
        width: '40%',
        alignItems: 'center',
    },
    tabBtnActive:{
        width: '40%',
        alignItems: 'center',
        borderBottomWidth: 2
    },
    tabTxt:{
        fontSize: 18,
        fontWeight: 500
    }
})