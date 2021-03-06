import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

export default class ArrayUtil {
    static updateArray(array, item) {
        for (let i=0,len=array.length;i<len;i++){
            let temp=array[i];
            if (temp === item){
                array.splice(i,1);
                return
            }
        }
        array.push(item);
    }

    static clone(from){
        if(!from){
            return [];
        }
        let newArray = [];
        for (let i=0;i<from.length;i++){
            newArray[i] = from[i];
        }
        return newArray;
    }

    static isEqual(arr1,arr2){
        if (!(arr1 && arr2)){
            return false;
        }
        if (arr1.length !== arr2.length){
            return false;
        }
        for (let i=0;i<arr1.length;i++){
            if (arr1[i] !== arr2[i]){
                return false;
            }
        }
        return true;
    }

    /**
     * 将数组中指定元素移除
     * **/
    static remove(array,item){
        if (!array)return;
        for(var i=0,l=array.length;i<l;i++){
            if (item===array[i])array.splice(i,1);
        }
    }
}