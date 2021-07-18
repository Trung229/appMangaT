import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList
} from 'react-native';
import styles from '../../styling/setting'
const Settings = () =>{
    return(
        <FlatList style={[styles.container]} 
        nestedScrollEnable={true}
        ListHeaderComponent={
            <View></View>
        }/>
    )
}

export default Settings;