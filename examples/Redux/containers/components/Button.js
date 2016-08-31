'use strict'

import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
}from 'react-native';

export default class Button extends Component {

    static defaultProps = {
        text: "",
    }

    static propTypes = {
        text: React.PropTypes.string,
    }

    constructor(props) {
        super(props);
    }

    render() {
        let {text, ...btnProps}=this.props;
        return (
            <TouchableHighlight style={styles.button} underlayColor="gray" {...btnProps}>
                <View style={styles.container}>
                <Text style={styles.text}>{this.props.text}</Text>
                    </View>
            </TouchableHighlight>
        );

    }
}

const styles = StyleSheet.create({
    button: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        padding: 10,
        margin: 10,
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 15,
        color: 'white'
    }
});