import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput
} from 'react-native';
import NavigationBar from '../common/NavigationaBar';
import DataRepository from '../expand/dao/DataRepository'
import ScrollableTabView ,{ScrollableTabBar} from "react-native-scrollable-tab-view";

const URL = 'http://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=starts';
export default class PopularPage extends Component {
    constructor(props) {
        super(props);
        this.dataRepository = new DataRepository();
        this.state = {
            result: ''
        }
    }

    onLoad() {
        let url = this.genUrl(this.text);
        this.dataRepository.fetchNetRepository(url)
            .then(result => {
                this.setState({
                    result: JSON.stringify(result)
                })
            })
            .catch(error => {
                this.setState({
                    result: JSON.stringify(error)
                })
            })
    }

    genUrl(key) {
        return URL + key + QUERY_STR;
    }

    render() {
        return <View style={styles.container}>
            <NavigationBar
             title={'最热'}/>
            <ScrollableTabView
                renderTabBar={()=><ScrollableTabBar/>}
            >
                <Text tabLabel="Java" >Java</Text>
                <Text tabLabel="Ios" >Ios</Text>
                <Text tabLabel="Android" >Android</Text>
                <Text tabLabel="JavaScript" >JavaScript</Text>
            </ScrollableTabView>
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