import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Navigator
} from 'react-native';
import NavigationBar from '../common/NavigationaBar';
import HomePage from './HomePage';
export default class  WelcomePage extends Component{
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigator.resetTo({
                component:HomePage
            })
        },2000);
    }
    componentWillUnmount(){
        this.timer&&clearTimeout(this.timer);
    }
    render(){
        return <View>
            <NavigationBar
                title={'欢迎'}/>
            <Text>欢迎</Text>
        </View>
    }
}