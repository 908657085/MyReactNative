'use strict'

import React, {Component} from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    ScrollView
}from 'react-native';
import SecondPage from './SecondPage';


export default class FirstPage extends Component {


       static test123(){
            return "123123";
        }


    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headerText}>第一页</Text>
                </View>
                <ScrollView>

                    <View style={{marginTop: 20}}>
                        <TouchableOpacity onPress={()=>this._navigate("参数一", "FloatFromRight")}>
                            <View style={styles.button}><Text style={styles.buttonText}>跳转第二页(右侧出现)</Text></View>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginTop: 20}}>
                        <TouchableOpacity onPress={()=>this._navigate("参数二", "FloatFromRight")}>
                            <View style={styles.button}><Text
                                style={styles.buttonText}>跳转第二页(FloatFromRight)</Text></View>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginTop: 20}}>
                        <TouchableOpacity onPress={()=>this._navigate("参数二", "FloatFromLeft")}>
                            <View style={styles.button}><Text
                                style={styles.buttonText}>跳转第二页(FloatFromLeft)</Text></View>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginTop: 20}}>
                        <TouchableOpacity onPress={()=>this._navigate("参数二", "FloatFromBottom")}>
                            <View style={styles.button}><Text
                                style={styles.buttonText}>跳转第二页(FloatFromBottom)</Text></View>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginTop: 20}}>
                        <TouchableOpacity onPress={()=>this._navigate("参数二", "HorizontalSwipeJump")}>
                            <View style={styles.button}><Text
                                style={styles.buttonText}>跳转第二页(HorizontalSwipeJump)</Text></View>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginTop: 20}}>
                        <TouchableOpacity onPress={()=>this._navigate("参数二", "HorizontalSwipeJumpFromRight")}>
                            <View style={styles.button}><Text
                                style={styles.buttonText}>跳转第二页(HorizontalSwipeJumpFromRight)</Text></View>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginTop: 20}}>
                        <TouchableOpacity onPress={()=>this._navigate("参数二", "VerticalUpSwipeJump")}>
                            <View style={styles.button}><Text
                                style={styles.buttonText}>跳转第二页(VerticalUpSwipeJump)</Text></View>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginTop: 20}}>
                        <TouchableOpacity onPress={()=>this._navigate("参数二", "VerticalDownSwipeJump")}>
                            <View style={styles.button}><Text
                                style={styles.buttonText}>跳转第二页(VerticalDownSwipeJump)</Text></View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }

    _navigate(name, type = 'FloatFromRight') {
        this.props.navigator.push({
            component: SecondPage,
            title: '第二页',
            passProps: {
                name: name
            },
            type: type
        });
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

