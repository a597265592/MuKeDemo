import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import NavigationBar from './NavigationaBar';

export default class Girl extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderButton(image) {
        return <TouchableOpacity
        onPress={()=>{
            this.props.navigator.pop();
        }}>
            <Image style={{width: 22, height: 22, margin:5}} source={image}/>
        </TouchableOpacity>
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'Girl'}
                    style={{
                        backgroundColor: '#EE6363'
                    }}
                    leftButton={
                        this.renderButton(require('./res/images/ic_arrow_back_white_36pt.png'))}
                    rightButton={
                    this.renderButton(require('./res/images/ic_star.png'))
                    }/>
                <Text style={styles.tips}>I am Girls</Text>
                <Text style={styles.tips}>我收到了男孩送的:{this.props.word}</Text>
                <Text style={styles.tips} onPress={() => {
                    this.props.onCallBack('一盒巧克力');
                    this.props.navigator.pop();
                }}>回赠巧克力</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tips: {
        fontSize: 19,
    }
})