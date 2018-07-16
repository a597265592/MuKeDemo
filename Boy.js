import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import Girl from './Girl'

export default class Boy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>I am a boy</Text>
                <Text style={styles.text}
                      onPress{() => {
                    this.props.navigator.push({
                        component: Girl,
                        params: {
                            word: '一枝玫瑰',
                            onCallBack: (word) => {
                                this.setState({
                                    word: word
                                })
                            }
                        }
                    })
                }}>送女孩一枝玫瑰</Text>
                <Text style={styles.text}>{this.state.word}</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
    }
})