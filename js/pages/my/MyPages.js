import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Navigator
} from 'react-native';
import NavigationBar from '../../common/NavigationaBar';
import CustomKeyPage from "./CustomKeyPage";

export default class MyPages extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return <View style={styles.container}>
            <NavigationBar
                title='我的'
                style={{backgroundColor: '#6495ed'}}/>
            <Text style={styles.tips}
                  onPress={() => {
                      this.props.navigator.push({
                          component:CustomKeyPage,
                          params:{...this.props}
                      })
                  }}>自定义标签</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tips: {
        fontSize: 20
    }
})