/**
 * Created by 高雄辉 on 16/8/22.
 */
'use strict';

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
}from 'react-native';

import BottomTabView from './components/BottomTabView';

import TouchView from './components/TouchView';
import BoxShadowPage from './BoxShadowPage';

export default class ScrollTabBar extends Component {
    static defaultProps = {}

    static propTypes = {}

    constructor(props) {
        super(props);
        this.state = {};
    }

    _renderTab() {
        return {}
    }

    _renderTabView() {

    }


    render() {
        return (
            <View style={styles.container}>
                <BottomTabView defaultSelectTab={1}>
                    <View title="好友" tabIconName="reddit-alien">
                        <TouchView/>
                    </View>
                    <View title="测试" tabIconName="optin-monster">
                        <BoxShadowPage/>
                    </View>
                    <View tabIconName="tripadvisor">
                        <Text>第三页</Text>
                    </View>
                    <View tabIconName="drupal">
                        <Text>第四页</Text>
                    </View>
                </BottomTabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

