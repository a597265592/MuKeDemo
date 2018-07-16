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
                    }}></Navigator>>
                {/*<TabNavigator>*/}
                {/*<TabNavigator.Item*/}
                {/*selected={this.state.selectedTab === 'tb_popular'}*/}
                {/*title="最热"*/}
                {/*selectedTitleStyle={{color:'red'}}*/}
                {/*renderIcon={() => <Image style = {styles.image} source={require('./res/images/ic_polular.png')}/>}*/}
                {/*renderSelectedIcon={() => <Image style = {[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_polular.png')}/>}*/}
                {/*onPress={() => this.setState({selectedTab: 'tb_popular'})}>*/}
                {/*<View style = {styles.page1}></View>*/}
                {/*</TabNavigator.Item>*/}
                {/*<TabNavigator.Item*/}
                {/*selected={this.state.selectedTab === 'tb_trending'}*/}
                {/*title="趋势"*/}
                {/*selectedTitleStyle={{color:'yellow'}}*/}
                {/*renderIcon={() => <Image style = {styles.image} source={require('./res/images/ic_trending.png')}/>}*/}
                {/*renderSelectedIcon={() => <Image style = {[styles.image,{tintColor:'yellow'}]} source={require('./res/images/ic_trending.png')}/>}*/}
                {/*onPress={() => this.setState({selectedTab: 'tb_trending'})}>*/}
                {/*<View style = {styles.page2}></View>*/}
                {/*</TabNavigator.Item>*/}
                {/*<TabNavigator.Item*/}
                {/*selected={this.state.selectedTab === 'tv_favorite'}*/}
                {/*title="收藏"*/}
                {/*selectedTitleStyle={{color:'red'}}*/}
                {/*renderIcon={() => <Image style = {styles.image} source={require('./res/images/ic_favorite.png')}/>}*/}
                {/*renderSelectedIcon={() => <Image style = {[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_favorite.png')}/>}*/}
                {/*onPress={() => this.setState({selectedTab: 'tv_favorite'})}>*/}
                {/*<View style = {styles.page1}></View>*/}
                {/*</TabNavigator.Item>*/}
                {/*<TabNavigator.Item*/}
                {/*selected={this.state.selectedTab === 'tb_my'}*/}
                {/*title="我的"*/}
                {/*selectedTitleStyle={{color:'yellow'}}*/}
                {/*renderIcon={() => <Image style = {styles.image} source={require('./res/images/ic_my.png')}/>}*/}
                {/*renderSelectedIcon={() => <Image style = {[styles.image,{tintColor:'yellow'}]} source={require('./res/images/ic_my.png')}/>}*/}
                {/*onPress={() => this.setState({selectedTab: 'tb_my'})}>*/}
                {/*<View style = {styles.page2}></View>*/}
                {/*</TabNavigator.Item>*/}
                {/*</TabNavigator>*/}
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
