'use strict'

import React, {Component} from 'react';
import{
    View,
    ActivityIndicator,
    StyleSheet,
}from 'react-native';

export default class MainPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            animating: true,
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    style={styles.centering}
                    animating={this.state.animating}
                    size="large"
                />
                <ActivityIndicator
                    style={styles.horizontal}
                    animating={this.state.animating}
                    size="large"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection:'column',
        justifyContent: 'center',
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    gray: {
        backgroundColor: '#cccccc',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
    },
});

