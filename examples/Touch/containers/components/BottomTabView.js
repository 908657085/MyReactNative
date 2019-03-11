/**
 * Created by 高雄辉 on 16/8/22.
 */
'use strict';

import React, {Component, Children} from 'react';
import {
    View,
    Text,
    StyleSheet,
}from 'react-native';
import * as Constants from '../../constants/Constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomTab from './BottomTab';
import { PropTypes} from 'prop-types';

const TAG_TAB = "tab_";
const TAG_TAB_VIEW = "tabView_";




export default class BottomTabView extends Component {

    static defaultProps = {
        defaultSelectTab: 0,
    }

    static propTypes = {
        defaultSelectTab: PropTypes.number,
    }

    constructor(props) {
        super(props);
        this.state = {
            selectTab: this.props.defaultSelectTab,
        }
    }


    _setSelect(index) {
        // console.log("选中了" + index);
        let oldSelect = TAG_TAB + this.state.selectTab;
        let newSelect = TAG_TAB + index;
        this.refs[oldSelect].setTabSelect(false);
        this.refs[newSelect].setTabSelect(true);
        this.setState({selectTab: index});
    }

    _renderTab() {
        let _tabs = [];
        Children.forEach(this.props.children, (child, index)=> {
            let _tabTitle = child.props.tabTitle ? child.props.tabTitle : "";
            let _tabIconName = child.props.tabIconName ? child.props.tabIconName : "slideshare";
            _tabs.push(
                <BottomTab
                    ref={TAG_TAB + index}
                    style={{flex: 1,}}
                    key={TAG_TAB + index}
                    iconName={_tabIconName}
                    iconSize={25}
                    title={_tabTitle}
                    defaultSelect={this.props.defaultSelectTab == index ? true : false}
                    onTabClick={()=> {
                        this._setSelect(index)
                    }}
                />
            );
        });
        return (
            <View style={styles.tabContainer}>
                {_tabs}
            </View>
        );
    }

    _renderTabView() {
        let _tabViews = [];
        Children.forEach(this.props.children, (child, index)=> {
            let {tabTitle, tabIconName, ...childProps}=child.props;
            // console.log(childProps);
            _tabViews.push(
                <View
                    ref={TAG_TAB_VIEW + index}
                    key={TAG_TAB_VIEW + index}
                    style={this.state.selectTab == index ? styles.sceneContainer : styles.hiddenSceneContainer}
                    {...childProps}
                />
            );
        });
        return (
            <View style={styles.tabViewContainer}>
                {_tabViews}
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderTabView()}
                {this._renderTab()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabContainer: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: 'gray',
    },
    tabViewContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 50,
    },
    sceneContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    hiddenSceneContainer: {
        overflow: 'hidden',
        opacity: 0,
    },

});

