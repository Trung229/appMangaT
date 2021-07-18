import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList
} from 'react-native';
import styles from '../../styling/favourite'
const Favorites = () =>{
    return(
        <FlatList style={[styles.container]} 
        nestedScrollEnable={true}
        ListHeaderComponent={
            <View></View>
        }/>
    )
}

export default Favorites;