'use strict'

import React, {Component} from 'react';
import{
    View,
    Text,
    Modal,
    StyleSheet,
    TouchableHighlight,
}from 'react-native';
import { PropTypes} from 'prop-types';

export default class CenterDialog extends Component {
    static defaultProps = {
        title: "信息",
        info: "消息内容",
        type: "msg",
    }

    static propTypes = {
        title: PropTypes.string,
        info: PropTypes.string,
        type: PropTypes.oneOf(["msg", "confirm"]),
        onCancel: PropTypes.func,
        onConfirm: PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            animationType: 'fade',
            modalVisible: false,
            transparent: true,
        };
    }

    setAnimationType(animationType) {
        this.setState({animationType: animationType});
    }

    setModalVisible(modalVisible) {
        this.setState({modalVisible: modalVisible});
    }



    _getBtnView() {
        if (this.props.type == "confirm") {
            return (
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <TouchableHighlight style={styles.btnLeft} underlayColor="white"
                                        onPress={this.props.onCancel}>
                        <Text style={styles.txInfo}>取消</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.btnRight} underlayColor="white"
                                        onPress={this.props.onConfirm}>
                        <Text style={styles.txInfo}>确定</Text>
                    </TouchableHighlight>
                </View>

            );
        } else {
            return (
                <View style={styles.btnView}>
                    <TouchableHighlight style={{flex: 1, alignItems: 'center'}} underlayColor="white"
                                        onPress={()=> this.setModalVisible(false)}>
                        <Text style={styles.txInfo}>确定</Text>
                    </TouchableHighlight>
                </View>
            );
        }
    }


    render() {
        return (
            <Modal
                animationType={this.state.animationType}
                transparent={this.state.transparent}
                visible={this.state.modalVisible}
                onRequestClose={()=>this.setModalVisible(false)}
            >
                <View style={styles.container}>
                    <View style={styles.centerDialog}>
                        <View style={styles.titleView}>
                            <Text style={styles.txTitle}>{this.props.title}</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.txInfo}>{this.props.info}</Text>
                        </View>
                        {this._getBtnView()}
                    </View>
                </View>
            </Modal>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#43000000'
    },
    centerDialog: {
        flexDirection: 'column',
        width: 200,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 0.5,
        alignItems: 'center',
    },
    line: {
        width: 200,
        height: 0.5,
        backgroundColor: 'black',
    },

    info: {
        minHeight: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txTitle: {
        flex: 1,
        fontSize: 20,
        margin: 5,
        textAlign: 'center'
    },
    txInfo: {
        fontSize: 15,
        margin: 5
    },
    titleView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.5,
    },
    btnView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 0.5,
    },
    btnLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 0.5,
        borderRightWidth: 0.5,
    },
    btnRight: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 0.5,
    },
});