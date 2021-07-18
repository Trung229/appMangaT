import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  FlatList,
  TextInput,
  Image
} from 'react-native';
import styles from '../../../styling/home'
import Icon from 'react-native-vector-icons/FontAwesome5';
const DATA = [
    {
        id:1,
        name: "blue box",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100157/title_thumbnail_portrait_list/172705.jpg?key=3f39a6ec07f505606caa6b86c7a6695c&duration=86400",
    },
    {
        id:2,
        name: "Dr stone",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100010/title_thumbnail_portrait_list/7987.jpg?key=8231316038efd1ea9e2ba3d7aa1362c1&duration=86400",
    },
    {
        id:3,
        name: "The Elusive shueisha",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100139/title_thumbnail_portrait_list/159739.jpg?key=9dbc25f9454e3761d7f7cdf6a4f2dfa4&duration=86400",
    },
    {
        id:4,
        name: "Nerr: way of creating",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100166/title_thumbnail_portrait_list/174160.jpg?key=26f6b4f54d70b56bfd824b26a2982a22&duration=86400",
    },
    {
        id:5,
        name: "Nisekoi",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100019/title_thumbnail_portrait_list/8014.jpg?key=c2cb7df639750a35b05db7523591c738&duration=86400",
    },
    {
        id:6,
        name: "Blue Exorcist",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100005/title_thumbnail_portrait_list/7972.jpg?key=8dcf3e71af791261a168647dfb945b3e&duration=86400",
    },
    {
        id:7,
        name: "My Hero Academia",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100017/title_thumbnail_portrait_list/8008.jpg?key=af376c7152f598cf57e4d91b17ad00fc&duration=86400",
    },
    {
        id:8,
        name: "Demon Slayer: Kimetsu no Yaiba",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100009/title_thumbnail_portrait_list/7984.jpg?key=4ecc872baac52a5aba8506f75d0ed044&duration=86400",
    },
    {
        id:9,
        name: "JoJo's Bizarre Adventure: Part 2--Battle Tendency",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100072/title_thumbnail_portrait_list/47145.jpg?key=48041ebb5c97142a43c0264045b524a2&duration=86400",
    },
]
const renderItems=({item})=>{
    return(
        <View style={{marginRight:10, marginVertical:10}}> 
            <Image source={{uri:item.thumbnail}} style={{width:126, height:180}}></Image>
            <Text numberOfLines={1} ellipsizeMode="tail" style={{color:"white", marginTop:4, width:100}}>{item.name}</Text>
        </View>
    )
}
const Home = (props) =>{  
    return(
        <FlatList style={[styles.container]} 
        nestedScrollEnable={true}
        ListHeaderComponent={
            <>
                <View style={{flexDirection:"row", flex: 1}}>
                    <Icon name="search" style={{position: "absolute", bottom:25, left:25, zIndex:3, fontSize:20}}/>
                    <TextInput
                    style={styles.input}
                    placeholder="Search by title or author"
                    ></TextInput>
                </View>
                <View>
                    <FlatList
                    data={DATA}
                    keyExtractor={(item)=> item.id}
                    renderItem={renderItems}
                    numColumns={3}
                    ></FlatList>
                </View>
            </>
        }
        >
            
        </FlatList>
    )
}

export default Home;