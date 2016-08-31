/**
 * Created by 高雄辉 on 16/8/24.
 */
'use strict';

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
}from 'react-native';

export default class BoxShadowPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>取消</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
    },
    button: {
        margin: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#03a9f4',
        elevation:5,

    },
    buttonText:{
        color:'white',
        fontSize:20,
    }
});

