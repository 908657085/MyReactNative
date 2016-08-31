'use strict'

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight
}from 'react-native';

export default class SecondPage extends Component {

    static LeftButton(){
       return (<TouchableHighlight onPress={() => navigator.pop()}>
            <Text style={{flex: 1}}>right</Text>
        </TouchableHighlight>);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>第二页:{this.props.name}</Text>
                </View>


                <TouchableOpacity style={{marginTop: 20}} onPress={()=>this.props.navigator.pop()}>
                    <View style={styles.button}><Text style={styles.buttonText}>跳转第二页(右侧出现)</Text></View>
                </TouchableOpacity>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        backgroundColor: 'red',
        alignItems: 'center'
    },
    headerText: {
        margin: 10,
        fontSize: 25,
        color: 'white'
    },
    button: {
        margin: 10,
        alignItems: 'center',
        backgroundColor: 'gray'
    },
    buttonText: {
        margin: 5,
        fontSize: 20,
        color: 'white'
    },
})