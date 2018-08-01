/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import {
    StyleSheet,
    Image,
    View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import PopularPage from "./PopularPage";
import MyPages from "./my/MyPages";
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'tb_popular',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                <TabNavigator.Item
                selected={this.state.selectedTab === 'tb_popular'}
                title="最热"
                selectedTitleStyle={{color:'red'}}
                renderIcon={() => <Image style = {styles.image} source={require('../../res/images/ic_polular.png')}/>}
                renderSelectedIcon={() => <Image style = {[styles.image,{tintColor:'red'}]} source={require('../../res/images/ic_polular.png')}/>}
                onPress={() => this.setState({selectedTab: 'tb_popular'})}>
                <PopularPage style = {styles.page1}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                selected={this.state.selectedTab === 'tb_trending'}
                title="趋势"
                selectedTitleStyle={{color:'yellow'}}
                renderIcon={() => <Image style = {styles.image} source={require('../../res/images/ic_trending.png')}/>}
                renderSelectedIcon={() => <Image style = {[styles.image,{tintColor:'yellow'}]} source={require('../../res/images/ic_trending.png')}/>}
                onPress={() => this.setState({selectedTab: 'tb_trending'})}>
                <View style = {styles.page2}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                selected={this.state.selectedTab === 'tv_favorite'}
                title="收藏"
                selectedTitleStyle={{color:'red'}}
                renderIcon={() => <Image style = {styles.image} source={require('../../res/images/ic_favorite.png')}/>}
                renderSelectedIcon={() => <Image style = {[styles.image,{tintColor:'red'}]} source={require('../../res/images/ic_favorite.png')}/>}
                onPress={() => this.setState({selectedTab: 'tv_favorite'})}>
                <View style = {styles.page1}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                selected={this.state.selectedTab === 'tb_my'}
                title="我的"
                selectedTitleStyle={{color:'yellow'}}
                renderIcon={() => <Image style = {styles.image} source={require('../../res/images/ic_my.png')}/>}
                renderSelectedIcon={() => <Image style = {[styles.image,{tintColor:'yellow'}]} source={require('../../res/images/ic_my.png')}/>}
                onPress={() => this.setState({selectedTab: 'tb_my'})}>
                <MyPages style = {styles.page2} {...this.props}/>
                </TabNavigator.Item>
                </TabNavigator>
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

