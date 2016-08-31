'use strict'

import React, {Component} from 'react';
import{
    View,
    Text,
    ListView,
    StyleSheet
}from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from '../../CheckBox/containers/component/CheckBox';
import listData from '../mock/mock';

const Button = React.createClass({
    propTypes: {
        text: React.PropTypes.string,
        onPress: React.PropTypes.func
    },

    render(){
        return (
            <View style={{
                flex: 1,
                margin: 5,
            }}>
                <Icon.Button name="google-wallet" backgroundColor="#3b5998" onPress={() => this.props.onPress()}>
                    <View style={{
                        flex: 1,
                        alignItems: 'center'
                    }}>
                        <Text style={{fontFamily: 'Arial', fontSize: 15}}>{this.props.text}</Text>
                    </View>
                </Icon.Button>
            </View>
        );
    }
});
var checkBoxData = [];
export default class MyPage extends Component {


    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(listData),
        }
    }

    getTitle() {
        return 'listView示例';
    }

    _selectAllItem() {
        console.log("全选");
        for (var i = 0; i < checkBoxData.length; i++) {
            if (checkBoxData[i] != null) {
                checkBoxData[i].changeChecked(true);
            }
        }
    }

    _unSelectAllItem() {
        console.log("取消全选");
        for (var i = 0; i < checkBoxData.length; i++) {
            if (checkBoxData[i] != null) {
                checkBoxData[i].changeChecked(false);
            }
        }
    }

    initCheckBox(c) {
        checkBoxData.push(c);
    }

    _renderRow(rowData, sectionID, rowID) {
        return (
            <View style={styles.row} key={rowID}>
                <View>
                    <CheckBox
                        ref={(c)=> this.initCheckBox(c)}
                        value={rowID}
                        checked={false}
                        onChange={(checked)=>this.checkSelect(rowID, checked)}
                    />
                </View>
                <View>
                    <Text style={styles.rowTextTitle}>{rowData.title}{rowID}</Text>
                    <Text style={styles.rowTextInfo}>{rowData.info}{rowID}</Text>
                </View>
            </View>
        );
    }

    _renderSeparator() {
        return (
            <View style={styles.line}/>
        );
    }



    checkSelect(rowId, checked) {
        console.log(rowId + checked);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.getTitle()}</Text>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Button text="全选" onPress={()=>this._selectAllItem()}/>
                    <Button text="取消全选" onPress={()=>this._unSelectAllItem()}/>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow.bind(this)}
                        initialListSize={20}
                        contentContainerStyle={styles.item}
                      //  horizontal={true}
                    />
                </View>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    item:{
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    title: {
        fontSize: 25,
        margin: 5
    },
    row: {
        justifyContent: 'center',
        backgroundColor: '#F6F6F6',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#CCC',
        width:150,
        height:60,
        margin:5,
    },
    rowTextTitle: {
        fontSize: 20,
        color: 'red'
    },
    rowTextInfo: {
        fontSize: 15,
        color: '#123133'
    },
    separator: {
        height: 0.5,
        backgroundColor: 'black',
    }
})


