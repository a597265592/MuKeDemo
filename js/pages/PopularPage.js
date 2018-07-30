import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ListView
} from 'react-native';
import NavigationBar from '../common/NavigationaBar';
import DataRepository from '../expand/dao/DataRepository'
import ScrollableTabView ,{ScrollableTabBar} from "react-native-scrollable-tab-view";
import RepositoryCell from "../common/RepositoryCell"
const URL = 'http://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=starts';
export default class PopularPage extends Component {
    render() {
        return <View style={styles.container}>
            <NavigationBar
             title={'最热'}/>
            <ScrollableTabView
                renderTabBar={()=><ScrollableTabBar/>}>
                <PopularTab tabLabel="Java" >Java</PopularTab>
                <PopularTab tabLabel="IOS" >Ios</PopularTab>
                <PopularTab tabLabel="Android" >Android</PopularTab>
                <PopularTab tabLabel="JavaScript" >JavaScript</PopularTab>
            </ScrollableTabView>
        </View>
    }
}

class PopularTab extends Component{
    constructor(props) {
        super(props);
        this.dataRepository = new DataRepository();
        this.state = {
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}),
            result: ''
        }
    }

    onLoad() {
        let url = this.genUrl(this.text);
        this.dataRepository.fetchNetRepository(url)
            .then(result => {
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(result.items)
                })
            })
            .catch(error => {
                this.setState({
                    result: JSON.stringify(error)
                })
            })
    }
    genUrl() {
        return URL + this.props.tabLabel + QUERY_STR;
    }
    componentDidMount(){
        this.onLoad()
    }
    renderRow(data){
        return <RepositoryCell data={data}/>
    }
    render(){
        return <View>
            <ListView dataSource={this.state.dataSource}
            renderRow={(data)=>this.renderRow(data)}>
            </ListView>
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
});