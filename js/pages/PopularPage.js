import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    ListView,
    RefreshControl
} from 'react-native';
import NavigationBar from '../common/NavigationaBar';
import DataRepository from '../expand/dao/DataRepository'
import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";
import RepositoryCell from "../common/RepositoryCell";
import LanguageDao,{FLAG_LANGUAGE} from '../expand/dao/LanguageDao';

const URL = 'http://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=starts';
export default class PopularPage extends Component {
    constructor(props){
        super(props);
        this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_key);
        this.state = {
            languages :[],
        }
    }
    componentDidMount(){
        this.loadData();
    }
    loadData(){
        this.languageDao.fetch()
            .then(result=>{
                this.setState({
                    languages:result
                })
            })
            .catch(error=>{
                console.log(error)
            })
    }
    render() {
        let content = this.state.languages.length>0?<ScrollableTabView
            tabBarBackgroundColor="#2196F3"
            tabBarInactiveTextColor="mintcream"
            tabBarActiveTextColor="white"
            tabBarUnderlineStyle={{backgroundColor: '#e7e7e7', height: 2}}
            renderTabBar={() => <ScrollableTabBar/>}>
            {this.state.languages.map((result,i,arr)=>{
                let lan = arr[i];
                return lan.checked? <PopularTab tabLabel={lan.name} key={i}>{lan.name}</PopularTab>:null;
            })}
        </ScrollableTabView>:null;
        return <View style={styles.container}>
            <NavigationBar
                title={'最热'}
            statusBar={{
                backgroundColor:'#2196F3'
            }}/>
            {content}
        </View>
    }
}

class PopularTab extends Component {
    constructor(props) {
        super(props);
        this.dataRepository = new DataRepository();
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            result: '',
            isLoading: false
        }
    }

    onLoad() {
        this.setState({
            isLoading: true
        });
        let url = this.genUrl(this.text);
        this.dataRepository.fetchNetRepository(url)
            .then(result => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(result.items),
                    isLoading: false,
                })
            })
            .catch(error => {
                this.setState({
                    result: JSON.stringify(error),
                    isLoading: false,
                })
            })
    }

    genUrl() {
        return URL + this.props.tabLabel + QUERY_STR;
    }

    componentDidMount() {
        this.onLoad()
    }

    renderRow(data) {
        return <RepositoryCell data={data}/>
    }

    render() {
        return <View style={{flex: 1}}>
            <ListView dataSource={this.state.dataSource}
                      renderRow={(data) => this.renderRow(data)}
                      refreshControl={
                          <RefreshControl
                              refreshing={this.state.isLoading}
                              onRefresh={() => this.onLoad()}
                              color={['#2196F3']}
                              tintColor={'#2196F3'}
                              title={'loading...'}
                              titleColor={'#2196F3'}/>
                      }/>
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