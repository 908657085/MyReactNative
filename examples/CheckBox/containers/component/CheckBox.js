'use strict'

import React, {Component} from 'react';
import{
    View,
    Text,
    TouchableHighlight,
    StyleSheet
}from 'react-native';
import { PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

export  default  class CheckBox extends Component {
    static defaultProps = {
        iconName: "square-o",
        iconNameChecked: "check-square-o",
        checked: false,
        value: ""
    }

    static propTypes = {
        iconName: PropTypes.string,
        iconNameChecked: PropTypes.string,
        checked: PropTypes.bool,
        value: PropTypes.any,
        onChange: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked
        }
    }

    getChecked() {
        return this.state.checked;
    }

    changeChecked(checked) {
        this.setState({checked: checked});
        this.props.onChange(checked);
    }

    toggle() {
        let checkState = !this.state.checked;
        this.setState({checked: checkState});
        this.props.onChange(checkState);
    }


    render() {
        return (
            <TouchableHighlight onPress={this.toggle.bind(this)} underlayColor='white'>
                <View style={styles.container}>
                    <Icon name={this.state.checked ? this.props.iconNameChecked : this.props.iconName} size={16}
                          color="#00B4F7" style={styles.checkbox}/>
                </View>
            </TouchableHighlight>

        );

    }

}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
    },
    checkbox: {
        width: 16,
        height: 16
    },
});
