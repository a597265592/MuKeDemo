import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import NavigationBar from '../../common/NavigationaBar';
import ViewUtil from "../../utils/ViewUtil";
import LanguageDao ,{FLAG_LANGUAGE} from "../../expand/dao/LanguageDao";

export default class CustomKeyPage extends Component {
    constructor(props) {
        super(props);
        this.language = new LanguageDao(FLAG_LANGUAGE.flag_key);
        this.state ={
            dataArray:[]
        }
    }
    componentDidMount(){
        this.loadData();
    }
    loadData(){
        this.language.fetch()
            .then(result=>{``
                this.setState({
                    dataArray:result
                })
            })
            .catch(error=>{
            console.log(error)
        })
    }
    renderView(){
        return <Text style={{height:400,width:400}}>
            {JSON.stringify(this.state.dataArray)}</Text>
    }
    render() {
        let rightButton = <TouchableOpacity>
            <View style={{margin:10}}>
                <Text style={styles.title}>保存</Text>
            </View>
        </TouchableOpacity>;
        return <View style={styles.container}>
            <NavigationBar
                title='我的'
                style={{backgroundColor: '#6495ed'}}
                rightButton={rightButton}
                leftButton={ViewUtil.getLeftButton(() => {
                    this.onSave()
                })}/>
            <ScrollView>
                {this.renderView()}
            </ScrollView>
        </View>
    }

    onSave() {
        this.props.navigator.pop();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tips: {
        fontSize: 20
    },
    title:{
        color:'white',
        fontSize:18
    }
})