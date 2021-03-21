import React from 'react';
import {Text, View } from 'react-native';
import styles from './Styles'

const Task = (props)=>{
    return(
        <View style = {styles.item}>
            <View style = {styles.contentLeft}>
                <View style = {styles.square}></View>
                <Text style = {styles.itemText}>{props.text}</Text>
            </View>
            <View style = {styles.circular}></View>
        </View>
    )
}



export default Task;