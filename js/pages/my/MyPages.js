import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Navigator
} from 'react-native';
import NavigationBar from '../../common/NavigationaBar';
import CustomKeyPage from "./CustomKeyPage";
import SortKeyPage from "./SortkeyPage";

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
                  }}>我的标签</Text>
            <Text style={styles.tips}
                  onPress={() => {
                      this.props.navigator.push({
                          component:SortKeyPage,
                          params:{...this.props}
                      })
                  }}>排序标签</Text>
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