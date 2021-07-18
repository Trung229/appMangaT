import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from '../../../styling/myFlatList'


const MyFlatList = (props) => {
    const renderItems = ({ item }) => {
        return (
            <TouchableOpacity onPress={()=>{props.events("Detail",{item})}}>
                <View style={{ marginRight: 10 }} >
                <Image source={{ uri: item.thumbnail }} style={{ width: 100, height: 150 }} />
                <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: "white", marginTop: 4, width: 100 }}>{item.name}</Text>
            </View>
            </TouchableOpacity>
        )
    }
    return (
        <FlatList
            data={props.data}
            keyExtractor={(item) => item.id}
            renderItem={renderItems}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default MyFlatList;