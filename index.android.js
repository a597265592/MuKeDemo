/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Navigator,
    Image,
    View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Boy from './Boy'

export default class MuKeDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'tb_popular',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Navigator
                    initialRoute = {{component: Boy}}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return <Component navigator={navigator}{...route.params}/>
                    }}></Navigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    page1: {
        flex: 1,
        backgroundColor: 'red',
    },
    page2: {
        flex: 1,
        backgroundColor: 'yellow',
    },
    image: {
        height: 22,
        width: 22
    }
});

AppRegistry.registerComponent('MuKeDemo', () => MuKeDemo);
