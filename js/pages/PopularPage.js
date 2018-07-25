import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput
} from 'react-native';
import NavigationBar from '../common/NavigationaBar';
import DataRepository from'../expand/dao/DataRepository'
export default class  PopularPage extends Component{
    constructor(props){
        super(props);
        this.dataRepository = new DataRepository();
    }
    onLoad(){
        this.dataRepository.fetchNetRepository(url)
    }
    render(){
        return <View>
            <NavigationBar
                title={'最热'}
            style={{backgroundColor:'#6495ed'}}/>
            <Text onPress={()=>{
                this.onLoad()
            }}
                style={styles.tips}>获取数据</Text>
            <TextInput
                style={{height:20}}
                onChangeText={text=>this.text=text}
                />
        </View>
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    tips:{
        fontSize:29
    }
})