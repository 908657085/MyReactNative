'use strict'

import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    ActivityIndicator,
    StyleSheet,
}from 'react-native';
import Button from './components/Button';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchAction from '../actions/fetchAction';
import ActionTypes from '../constants/ActionType';


class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'http://101.132.38.194:9090/jsonData',
        };
    }


    _fetchUrl() {
        console.log(this.state.text);
        this.props.actions(ActionTypes.ACTION_TYPE_FETCH.LOADING);
        fetch(this.state.text)
            .then((data)=> {
                data.text()
                    .then((result)=>{
                        this.props.actions(ActionTypes.ACTION_TYPE_FETCH.SUCCESS,result);
                    })
            })
            .catch((e)=>{
                this.props.actions(ActionTypes.ACTION_TYPE_FETCH.ERROR,e);
            });
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator animating={true} color="red" size="large"/>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <View style={{flexDirection: "row"}}>
                        <TextInput
                            style={{flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, margin: 10}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />
                    </View>
                    <Text style={styles.text}>{this.props.data}</Text>

                    <Button text="加载数据" onPress={()=>this._fetchUrl()}/>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
    },
});

export default connect(state => ({
    loading: state.fetch.loading,
    data: state.fetch.data,
}), dispatch => ({
    actions: bindActionCreators(fetchAction, dispatch),
}))(MainPage);
