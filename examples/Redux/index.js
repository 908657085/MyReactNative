'use strict'

import React, {Component} from 'react';
import MainPage from './containers/MainPage';
import {Provider} from 'react-redux';
import configStore from './store';

const store=configStore();

export default class Index extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainPage/>
            </Provider>
        );
    }
}