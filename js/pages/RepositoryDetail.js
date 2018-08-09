/**
 * RepositoryDetail
 * @flow
 **/
'use strict'
import React, {Component} from 'react'
import {
    Image,
    StyleSheet,
    WebView,
    TouchableOpacity,
    View,
} from 'react-native'
import NavigationBar from '../common/NavigationaBar';
import ViewUtils from '../utils/ViewUtil';
const TRENDING_URL = 'https://github.com/';
export default class RepositoryDetail extends Component {
    constructor(props) {
        super(props);
       this.url = this.props.item.html_url;
       let title = this.props.item.full_name;
        this.state = {
            url: this.url,
            canGoBack: false,
            title: title,
        }
    }


    onBack() {
        if (this.state.canGoBack) {
            this.webView.goBack();
        } else {
            this.props.navigator.pop();
        }
    }

    onNavigationStateChange(navState) {
        this.setState({
            canGoBack: navState.canGoBack,
            url: navState.url,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    leftButton={ViewUtils.getLeftButton(()=>this.onBack())}
                    title={this.state.title}
                    style={{backgroundColor:'#6495ED'}}
                />
                <WebView
                    ref={webView=>this.webView = webView}
                    startInLoadingState={true}
                    onNavigationStateChange={(e)=>this.onNavigationStateChange(e)}
                    source={{uri: this.state.url}}/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
})