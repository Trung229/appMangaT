import React from 'react';
import {
  SafeAreaView,
  View,
  Text
} from 'react-native';
import styles from '../../../styling/mytext'
const MyText = (props) =>{
    
    return(
        <Text style={styles.MyText}>{props.content}</Text>
    )
}

export default MyText;