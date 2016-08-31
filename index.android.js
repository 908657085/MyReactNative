'use strict'


import React, {Component} from 'react';

import{
    AppRegistry
}from 'react-native';

import CheckBoxExample from './examples/CheckBox';
import ListViewExample from './examples/ListView';
import NavigatorExample from './examples/Navigator';
import ActivityIndicatorExamole from './examples/ActivityIndicator'
import ModalExample from './examples/Modal'
import ReduxExample from './examples/Redux'
import TouchExample from './examples/Touch'
import ScrollTab from './examples/Touch/containers/ScrollTabPage';
import NavigationExperimentalExample from './examples/NavigationExperimental/NavigationExperimentalExample';

AppRegistry.registerComponent('MyProject', () => NavigationExperimentalExample);
