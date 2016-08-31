/**
 * Created by 高雄辉 on 16/8/24.
 */
'use strict';

import React, {Component} from 'react';
import {
    View,
    StyleSheet,
}from 'react-native';

const _paintColor = "black";
const _paintSize = 10;

export default class TouchView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            positionX: 100,
            positionY: 100,
        };
    }

    componentWillMount() {
        this._gestureHandlers = {
            onStartShouldSetResponder: () => true,  //对触摸进行响应
            onMoveShouldSetResponder: ()=> true,  //对滑动进行响应
            onResponderGrant: (evt)=> {
                console.log("parent onResponseGrant");
                this.setState({positionX:evt.nativeEvent.locationX,positionY: evt.nativeEvent.locationY});
            }, //激活时做的动作
            onResponderMove: (evt)=> {
                this.setState({positionX:evt.nativeEvent.locationX,positionY: evt.nativeEvent.locationY});
            },  //移动时作出的动作
            onResponderRelease: (evt)=> {
                this.setState({positionX:evt.nativeEvent.locationX,positionY: evt.nativeEvent.locationY});
            }, //动作释放后做的动作
        }
    }


    render() {
        return (
            <View style={styles.container}
                  {...this._gestureHandlers}
            >
                <View
                    style={{
                        width: _paintSize,
                        height: _paintSize,
                        backgroundColor: _paintColor,
                        position: 'absolute',
                        top: this.state.positionY,
                        left: this.state.positionX,
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 3,
    }
});

