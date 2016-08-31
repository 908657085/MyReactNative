/**
 * Created by 高雄辉 on 16/8/18.
 */
'use strict';

import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
}from 'react-native';
import * as Constants from '../constants/Constants';
import SecondPage from './SecondPage';
import ScrollTabPage from './ScrollTabPage';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class FirstPage extends Component {


    _navigate(component = SecondPage, title = "", params = {}) {
        this.props.navigator.push({
            component: component,
            title: title,
            params: params,
            type: "FloatFromRight",
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#03a9f4"
                    barStyle="light-content"
                />
                <ScrollView>

                    <View style={{marginTop: 20}}>
                        <TouchableOpacity onPress={()=>this._navigate(ScrollTabPage, "滑动菜单栏")}>
                            <View style={styles.button}><Text style={styles.buttonText}>滑动菜单栏</Text></View>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
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
        backgroundColor: '#00bcd4'
    },
    buttonText: {
        margin: 5,
        fontSize: 20,
        color: 'white'
    },
})

