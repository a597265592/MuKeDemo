import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    Alert
} from 'react-native';
import NavigationBar from '../../common/NavigationaBar';
import ViewUtil from "../../utils/ViewUtil";
import LanguageDao, {FLAG_LANGUAGE} from "../../expand/dao/LanguageDao";
import CheckBox from "react-native-check-box";
import ArrayUtils from "../../utils/ArrayUtil";

export default class CustomKeyPage extends Component {
    constructor(props) {
        super(props);
        this.language = new LanguageDao(FLAG_LANGUAGE.flag_key);
        this.changeValues = [];
        this.isRemoveKey = this.props.isRemoveKey?true:false;
        this.state = {
            dataArray: []
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        this.language.fetch()
            .then(result => {
                this.setState({
                    dataArray: result
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    renderView() {
        if (!this.state.dataArray || this.state.dataArray.length === 0) return null;
        let len = this.state.dataArray.length;
        let views = [];
        for (let i = 0, l = len - 2; i < l; i += 2) {
            views.push(
                <View key={i}>
                    <View style={styles.item}>
                        {this.renderCheckBox(this.state.dataArray[i])}
                        {this.renderCheckBox(this.state.dataArray[i + 1])}
                    </View>
                    <View style={styles.line}/>
                </View>
            )
        }
        views.push(
            <View key={len - 1}>
                <View style={styles.item}>
                    {len % 2 === 0 ? this.renderCheckBox(this.state.dataArray[len - 2]) : null}
                    {this.renderCheckBox(this.state.dataArray[len - 1])}
                </View>
                <View style={styles.line}/>
            </View>
        )
        return views
    }

    renderCheckBox(data) {
        let leftText = data.name;
        return (<CheckBox
            style={{flex: 1, padding: 3}}
            onClick={() => this.onClick(data)}
            isChecked={this.isRemoveKey ? false : data.checked}
            leftText={leftText}
            checkedImage={<Image
                source={require('./images/ic_check_box.png')}
                style={{tintColor: '#6495ed'}}/>}
            unCheckImage={<Image
                source={require('./images/ic_check_box_outline_blank.png')}
                style={{tintColor: '#6495ed'}}/>}/>)
    }

    onClick(data) {
        if(!this.isRemoveKey)data.checked = !data.checked;
        ArrayUtils.updateArray(this.changeValues, data)
    }


    render() {
        let rightButtonTitle = this.isRemoveKey ? '移除' : '保存';
        let title = this.isRemoveKey ? '标签移除' : '自定义标签';
        title = this.props.flag === FLAG_LANGUAGE.flag_language ? '自定义语言' : title;
        let navigationBar = <NavigationBar
            title={title}
            leftButton={ViewUtil.getLeftButton(() => this.onBack())}
            style={{backgroundColor: '#6495ed'}}
            rightButton={ViewUtil.getRightButton(rightButtonTitle, () => this.onSave())}/>;
        return (
            <View style={styles.container}>
                {navigationBar}
                <ScrollView>
                    {this.renderView()}
                </ScrollView>
            </View>
        )
    }


    onSave() {
        if (this.changeValues.length === 0) {
            this.props.navigator.pop();
            return;
        }
        if(this.isRemoveKey){
            for(let i=0,l=this.changeValues.length;i<l;i++){
                ArrayUtils.remove(this.state.dataArray,this.changeValues[i]);
            }
        }
        this.language.save(this.state.dataArray);
        this.props.navigator.pop();
    }

    onBack() {
        if (this.changeValues.length === 0) {
            this.props.navigator.pop();
            return
        }
        Alert.alert('提示', '要保存修改吗？', [
            {
                text: '不保存', onPress: () => {
                this.props.navigator.pop();
            }, style: 'cancel'
            },
            {
                text: '保存', onPress: () => {
                this.onSave();
            }
            }
        ])
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tips: {
        fontSize: 20
    },
    title: {
        color: 'white',
        fontSize: 18
    },
    line: {
        height: 0.3,
        backgroundColor: 'darkgray'
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})