/**
 * Created by 高雄辉 on 16/8/22.
 */
'use strict';

import React, {Component, Children} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
}from 'react-native';
import * as Constants from '../../constants/Constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PropTypes} from 'prop-types';

export default class BottomTab extends Component {

    static defaultProps = {
        iconName: 'github-alt',
        iconSize: 25,
        defaultSelect: false,
    }

    static propTypes = {
        tabIndex: PropTypes.number,
        title: PropTypes.string,
        iconName: PropTypes.string,
        iconSize: PropTypes.number,
        onTabClick: PropTypes.func,
        defaultSelect: PropTypes.bool,
    }

    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.defaultSelect,
        };
    }

    _onTabPress() {
        if (this.props.onTabClick) {
            this.props.onTabClick(this.props.tabIndex);
        }
    }

    setTabSelect(select) {
        this.setState({selected: select});
    }

    render() {

        return (
            <TouchableOpacity onPress={this._onTabPress.bind(this)} style={styles.tab}>
                <View>
                    <Icon name={this.props.iconName}
                          color={this.state.selected ? Constants.TabColorSelected : Constants.TabColor}
                          size={this.props.iconSize}></Icon>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

