import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  FlatList,
  Image
} from 'react-native';
import styles from '../../../styling/hottest'
const DATA = [
    {
        id: 1,
        thumbnail:"https://mangaplus.shueisha.co.jp/drm/title/100017/title_thumbnail_portrait_list/8008.jpg?key=af376c7152f598cf57e4d91b17ad00fc&duration=86400",
        name:"My Hero Academia",
        author:"KOHEI HORIKOSHI",
        views:"646 897",
    },
    {
        id: 2,
        thumbnail:"https://mangaplus.shueisha.co.jp/drm/title/100020/title_thumbnail_portrait_list/10711.jpg?key=396654340be0e56c2bbd4f96b1de70f4&duration=86400",
        name:"One Piece",
        author:"EIICHIRO ODA",
        views:"592 861",
    },
    {
        id: 3,
        thumbnail:"https://mangaplus.shueisha.co.jp/drm/title/100006/title_thumbnail_portrait_list/7975.jpg?key=6ea34e3fd71d859bcc6e44a1829514ac&duration=86400",
        name:"Boruto: Naruto Next Generations",
        author:"MASASHI KISHIMOTO / MIKIO IKEMOTO / UKYO KODACHI",
        views:"582,627",
    },
    {
        id: 4,
        thumbnail:"https://mangaplus.shueisha.co.jp/drm/title/100110/title_thumbnail_portrait_list/139068.jpg?key=4801da775115c7c3e459863da870ff2b&duration=86400",
        name:"Monster #8",
        author:"NAOYA MATSUMOTO",
        views:"437,878",
    },
]

const renderItems=({item})=>{
    return(
        <View style={{flexDirection:"row", marginTop:10, backgroundColor:"#0e0e0e", position: "relative"}}>
            <Image source={{uri:item.thumbnail}} style={{width:100, height:150}}/>
            <View style={{ width:"100%", justifyContent:"center", marginLeft:20}}>
                <Text numberOfLines={2} style={{color:"white", width:200, marginBottom:10, fontWeight:"700", fontSize:20}}>{item.name}</Text>
                <Text numberOfLines={2} style={{color:"white", width:200,fontSize:10}}>{item.author}</Text>
            </View>
            <View style={{position:"absolute",bottom:4, right:4}}>
                <Text style={{color:"white"}}>{item.views}</Text>
            </View>
        </View>
    )
}
const Hottest = (props) =>{
    
    return(
        <FlatList style={[styles.container]} nestedScrollEnable={true}
        ListHeaderComponent={
            <View>
                <FlatList
                data={DATA}
                keyExtractor={(item)=> item.id}
                renderItem={renderItems}
                />
            </View>
        }
        ></FlatList>
    )
}

export default Hottest;