'use strict'

import React, {Component} from 'react';
import{
    View,
    Navigator,
    Text,
    TouchableHighlight,
    StatusBar,
    StyleSheet,
}from 'react-native';
import FirstPage from './components/FirstPage';

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
        return <route.component navigator={navigator} {...route.passProps} />;
    }

    render() {
        return (
                <Navigator
                    style={{flex: 1}}
                    initialRoute={{component: FirstPage, title: "第一页"}}
                    configureScene={this._configureScene}
                    renderScene={this._renderScene}
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
            if(route.component.LeftButton){
                return (route.component.LeftButton());
            }else{
                return (
                    <TouchableHighlight onPress={() => navigator.pop()}>
                        <Text style={{flex: 1}}>Back</Text>
                    </TouchableHighlight>
                );
            }
        }
    },
    RightButton: (route, navigator, index, navState) => {
        return (<Text>right</Text>);
    },
    Title: (route, navigator, index, navState) => {
        return (<Text>{route.title}</Text>);
    },
}

const styles = StyleSheet.create({
    navigationBar: {
        flex: 1,
        backgroundColor: 'gray',
        height: 30,
        alignItems: 'center'
    },
})
