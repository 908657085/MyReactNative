'use strict'

import React, {Component} from 'react';
import{
    View,
    Navigator,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
}from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Constants from '../constants/Constants';
import FirstPage from './FirstPage';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class MainPage extends Component {

    /**
     * 配置场景动画
     * @param route 路由
     * @param routeStack 路由栈
     * @returns {*} 动画
     */
    _configureScene(route, routeStack) {
        switch (route.type) {
            case "PushFromRight":
                return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
                break;
            case "FloatFromRight":
                return Navigator.SceneConfigs.FloatFromRight; // 右侧弹出
                break;
            case "FloatFromBottom":
                return Navigator.SceneConfigs.FloatFromBottom; // 右侧弹出
                break;
            case "HorizontalSwipeJump":
                return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
                break;
            case "HorizontalSwipeJumpFromRight":
                return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
                break;
            case "VerticalUpSwipeJump":
                return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
                break;
            case "VerticalDownSwipeJump":
                return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
                break;
            default:
                return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
                break;
        }
    }

    /**
     * 使用动态页面加载
     * @param route 路由
     * @param navigator 导航器
     * @returns {XML} 页面
     */
    _renderScene(route, navigator) {
        return <route.component navigator={navigator} {...route.params} />;
    }

    render() {
        console.log(deviceHeight);
        console.log(deviceWidth);
        return (
            <Navigator
                styles={styles.container}
                initialRoute={{component: FirstPage, title: "第一页"}}
                configureScene={this._configureScene}
                renderScene={this._renderScene}
                sceneStyle={styles.sceneStyle}
                navigationBar={
                    <Navigator.NavigationBar
                        style={styles.navigationBar}
                        routeMapper={NavigationBarRouteMapper}/>}
            />
        );
    }

}

var NavigationBarRouteMapper = {
    LeftButton: (route, navigator, index, navState) => {
        if (index == 0) {
            return null;
        } else {
            if (route.component.LeftButton) {
                return (route.component.LeftButton());
            } else {
                return (
                    <TouchableOpacity onPress={() => navigator.pop()}>
                        <View style={styles.navigationBarLeftButton}>
                            <Icon name="arrow-back" color="white" size={30}/>
                        </View>
                    </TouchableOpacity>
                );
            }
        }
    },

    RightButton: (route, navigator, index, navState) => {
        return (
            <TouchableOpacity onPress={() => navigator.pop()}>
                <View style={styles.navigationBarRightButton}>
                    <Icon name="more-vert" color="white" size={30}/>
                </View>
            </TouchableOpacity>
        );
    },
    Title: (route, navigator, index, navState) => {
        return (
            <View style={styles.navigationBarTitle}><Text
                style={styles.navigationBarTitleText}>{route.title}</Text></View>);
    },
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sceneStyle: {
        marginTop: Constants.NavigationBarHeight,
    },
    navigationBar: {
        height: Constants.NavigationBarHeight,
        backgroundColor: '#03a9f4',
    },
    navigationBarLeftButton: {
        width: Constants.NavigationBarLeftButtonWidth,
        height: Constants.NavigationBarHeight,
        justifyContent: 'center',
        paddingLeft: 5,
    },

    navigationBarRightButton: {
        width: Constants.NavigationBarLeftButtonWidth,
        height: Constants.NavigationBarHeight,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 5,
    },
    navigationBarTitle: {
        width: Constants.NavigationBarTitleWidth,
        height: Constants.NavigationBarHeight,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 6,
        marginLeft: (deviceWidth / 2 - 72 - Constants.NavigationBarTitleWidth / 2),
    },
    navigationBarTitleText: {
        fontSize: 20,
        color: "white",
    },
})
