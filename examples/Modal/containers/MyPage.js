'use strict'

import React, {Component} from 'react';
import{
    View,
    Text,
    TouchableHighlight,
    Picker,
    Slider,
    StyleSheet
}from 'react-native';

import CenterDialog from './components/CenterDialog';

export default class MyPage extends Component {

    _hiddenModalVisible() {
        this.refs.dialog.setModalVisible(false);
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <TouchableHighlight underlayColor="gray" style={styles.button}
                                    onPress={()=> this.refs.dialog.setModalVisible(true)}>
                    <Text style={styles.buttonText}>显示dialog</Text>
                </TouchableHighlight>

                <Picker
                    selectedValue="java"
                    onValueChange={(lang) => console.log(lang)}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>

                <Slider
                    onValueChange={(value) =>console.log(value)} />


                <CenterDialog
                    ref="dialog"
                    title="提示框标题"
                    info="这太TM丑了!!!!!!"
                    type="confirm"
                    onCancel={()=> {
                        console.log("取消了显示窗");
                        this._hiddenModalVisible();
                    }}
                    onConfirm={()=> {
                        console.log("用户点击了确定弹窗");
                        this._hiddenModalVisible();
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'gray',
        height: 40,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 15,
        color: 'white'
    }
});


