import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    ListView
} from 'react-native';
import NavigationBar from './NavigationaBar';
import Toast,{DURATION} from 'react-native-easy-toast'
var data = {
    "result": [
        {
            "email": " 123@qq.com",
            "fullName": " 张三"
        },
        {
            "email": " 123@qq.com",
            "fullName": " 张三"
        },
        {
            "email": " 123@qq.com",
            "fullName": " 张三"
        },
        {
            "email": " 123@qq.com",
            "fullName": " 张三"
        },
        {
            "email": " 123@qq.com",
            "fullName": " 张三"
        },
        {
            "email": " 123@qq.com",
            "fullName": " 张三"
        },
        {
            "email": " 123@qq.com",
            "fullName": " 张三"
        },
        {
            "email": " 123@qq.com",
            "fullName": " 张三"
        },
        {
            "email": " 123@qq.com",
            "fullName": " 张三"
        },
        {
            "email": " 123@qq.com",
            "fullName": " 张三"
        },
        {
            "email": " 123@qq.com",
            "fullName": " 张三"
        },
        {
            "email": " 123@qq.com",
            "fullName": " 张三"
        },
        {
            "email": " 123@qq.com",
            "fullName": " 张三"
        },
        {
            "email": " 123@qq.com",
            "fullName": " 张三"
        },
        {
            "email": " 123@qq.com",
            "fullName": " 张三"
        },
        {
            "email": " 123@qq.com",
            "fullName": " 张三"
        },
        {
            "email": " 123@qq.com",
            "fullName": " 张三"
        },
        {
            "email": " 123@qq.com",
            "fullName": " 张三"
        },
        {
            "email": " 123@qq.com",
            "fullName": " 张三"
        },
        {
            "email": " 123@qq.com",
            "fullName": " 张三"
        }
    ],
    "statusCode": 23181
};
export default class Girl extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(data.result)
        }
    }

    renderRow(item) {
        return <View>
            <TouchableOpacity
            onPress={()=>{
                this.toast.show('你单击了:'+item.fullName,DURATION.LENGTH_SHORT);
            }}></TouchableOpacity>
            <Text style={styles.row}>{item.fullName}</Text>
            <Text style={styles.row}>{item.email}</Text>
        </View>
    }
    renderSeparator(sectionID, rowID, adjacentRowHighlighted){
        return <View style={styles.line}></View>
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'ListView'}/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(item) => this.renderRow(item)}
                    renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this.renderSeparator=(sectionID, rowID, adjacentRowHighlighted)}
                />
                <Toast ref={toast=>{this.toast = toast}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tips: {
        fontSize: 18,
    },
    row: {
        height:50
    },
    line:{
        height:1,
        backgroundColor:'black'
    }
});