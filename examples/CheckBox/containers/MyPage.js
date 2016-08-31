'use strict'

import React, {Component} from 'react';
import{
    View,
    Text,
    StyleSheet
}from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from './component/CheckBox';


export default class MyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxState: "false"
        };
    }

    _changeCheckBox() {
        this.refs.checkbox.toggle();
    }

    render() {
        return (
            <View>
                <View style={styles.myPage}>
                    <CheckBox
                        ref="checkbox"
                        onChange={(checked) => {
                            console.log("当前状态" + checked);
                            this.setState({checkboxState: checked ? "true" : "false"})
                        }}/>
                    <Text style={styles.leftText} ref="text">checkbox示例代码,当前状态:{this.state.checkboxState}</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={() => this._changeCheckBox()}>
                        <Text style={{fontFamily: 'Arial', fontSize: 15}}>改变checkbox状态</Text>
                    </Icon.Button>
                </View>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    myPage: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20
    },
    leftText: {
        flex: 1,
        marginLeft: 20
    }
})


