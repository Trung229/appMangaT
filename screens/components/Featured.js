import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    ScrollView,
    Image,
    Dimensions,
    StatusBar,
} from 'react-native';
import MyText from '../components/subComponents/myText';
import MyFlatList from './subComponents/myFlatList';
const Weekly = [
    {
        id:1,
        name: "blue box",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100157/title_thumbnail_portrait_list/172705.jpg?key=3f39a6ec07f505606caa6b86c7a6695c&duration=86400",
        author:"KOUJI MIURA",
        chaps:[
            {
                id_chap:1,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
            {
                id_chap:2,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
            {
                id_chap:3,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
            {
                id_chap:4,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
            {
                id_chap:5,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
        ]
    },
    {
        id:2,
        name: "Dr stone",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100010/title_thumbnail_portrait_list/7987.jpg?key=8231316038efd1ea9e2ba3d7aa1362c1&duration=86400",
        author:"RIICHIRO INAGAKI / BOICHI",
        chaps:[
            {
                id_chap:1,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
            {
                id_chap:2,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
        ]
    },
    {
        id:3,
        name: "The Elusive Samurai",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100139/title_thumbnail_portrait_list/159739.jpg?key=9dbc25f9454e3761d7f7cdf6a4f2dfa4&duration=86400",
        author:"YUSEI MATSUI",
        chaps:[
            {
                id_chap:1,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
            {
                id_chap:2,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
        ]
    },
    {
        id:4,
        name: "Neru: Way of the Martial Artist",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100166/title_thumbnail_portrait_list/174160.jpg?key=26f6b4f54d70b56bfd824b26a2982a22&duration=86400",
        author:"MINYA HIRAGA",
        chaps:[
            {
                id_chap:1,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
            {
                id_chap:2,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
        ]
    },
]
const JumpPlus = [
    {
        id:1,
        name: "blue box",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100157/title_thumbnail_portrait_list/172705.jpg?key=3f39a6ec07f505606caa6b86c7a6695c&duration=86400",
        author:"KOUJI MIURA",
        chaps:[
            {
                id_chap:1,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
            {
                id_chap:2,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
        ]
    },
    {
        id:2,
        name: "Dr stone",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100010/title_thumbnail_portrait_list/7987.jpg?key=8231316038efd1ea9e2ba3d7aa1362c1&duration=86400",
        author:"RIICHIRO INAGAKI / BOICHI",
        chaps:[
            {
                id_chap:1,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
            {
                id_chap:2,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
        ]
    },
    {
        id:3,
        name: "The Elusive Samurai",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100139/title_thumbnail_portrait_list/159739.jpg?key=9dbc25f9454e3761d7f7cdf6a4f2dfa4&duration=86400",
        author:"YUSEI MATSUI",
        chaps:[
            {
                id_chap:1,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
            {
                id_chap:2,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
        ]
    },
    {
        id:4,
        name: "Neru: Way of the Martial Artist",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100166/title_thumbnail_portrait_list/174160.jpg?key=26f6b4f54d70b56bfd824b26a2982a22&duration=86400",
        author:"MINYA HIRAGA",
        chaps:[
            {
                id_chap:1,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
            {
                id_chap:2,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
        ]
    },
]
const others = [
    {
        id:1,
        name: "blue box",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100157/title_thumbnail_portrait_list/172705.jpg?key=3f39a6ec07f505606caa6b86c7a6695c&duration=86400",
        author:"KOUJI MIURA",
        chaps:[
            {
                id_chap:1,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
            {
                id_chap:2,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
        ]
    },
    {
        id:2,
        name: "Dr stone",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100010/title_thumbnail_portrait_list/7987.jpg?key=8231316038efd1ea9e2ba3d7aa1362c1&duration=86400",
        author:"RIICHIRO INAGAKI / BOICHI",
        chaps:[
            {
                id_chap:1,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
            {
                id_chap:2,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
        ]
    },
    {
        id:3,
        name: "The Elusive Samurai",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100139/title_thumbnail_portrait_list/159739.jpg?key=9dbc25f9454e3761d7f7cdf6a4f2dfa4&duration=86400",
        author:"YUSEI MATSUI",
        chaps:[
            {
                id_chap:1,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
            {
                id_chap:2,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
        ]
    },
    {
        id:4,
        name: "Neru: Way of the Martial Artist",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100166/title_thumbnail_portrait_list/174160.jpg?key=26f6b4f54d70b56bfd824b26a2982a22&duration=86400",
        author:"MINYA HIRAGA",
        chaps:[
            {
                id_chap:1,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
            {
                id_chap:2,
                nameChap:"return of the king",
                numberChap:"001",
                thumbnail_chap:"https://i.pinimg.com/564x/e2/0b/50/e20b50d338827426907550d550fcd4bd.jpg",
                dateRelease:"20/07/2021",
            },
        ]
    },
]

import styles from '../../styling/featured';
const Featured = (props) => {
    const {navigation:{navigate}} = props;
    return (
        <ScrollView style={[styles.container]} nestedScrollEnable={true}>
            <View style={styles.contentAdvertisement, { paddingTop: StatusBar.currentHeight || 42 }}>
                <View style={styles.header}>
                    <Image source={{ uri: "https://mangaplus.shueisha.co.jp/drm/top_banner/174946.jpg?key=d416d6081c6917a46ddbdd4d2d523b88&duration=86400" }} style={styles.img}></Image>
                </View>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                    <Image source={{ uri: "https://mangaplus.shueisha.co.jp/drm/featured_top_banner/173965.jpg?key=990e0cfb086cb60bd5ca8def6d35d02d&duration=86400" }} style={{ width: "50%", height: 100, marginRight: 5 }}></Image>
                    <Image source={{ uri: "https://mangaplus.shueisha.co.jp/drm/featured_top_banner/173980.jpg?key=b2c3c2a838b275f76ab09bd93e06230a&duration=86400" }} style={{ width: "50%", height: 100, marginLeft: 5 }}></Image>
                </View>
                <View>
                    <Image source={{ uri: "https://mangaplus.shueisha.co.jp/drm/top_banner/174586.jpg?key=d4185fde42893325cfab793be348ff8d&duration=86400" }} style={{ width: "100%", height: 150, marginTop: 15 }} />
                </View>
            </View>
            <View style={{ backgroundColor: "#161616", marginTop: 5 }}>
                <MyText content="Weekly shonen Jump"></MyText>
                <MyFlatList data={Weekly} events={navigate}></MyFlatList>
                <MyText content="Jump plus"></MyText>
                <MyFlatList data={Weekly} events={navigate}></MyFlatList>
                <MyText content="Others"></MyText>
                <MyFlatList data={Weekly} events={navigate}></MyFlatList>
            </View>
            <View>
                <Image source={{ uri: "https://mangaplus.shueisha.co.jp/drm/featured_banner/25140.jpg?key=a1223a5f1051ab3a5c8cd1cd9151d6d7&duration=86400" }} style={{ width: "100%", height: 130, marginVertical: 10 }} />
            </View>
            <View>
                <Image source={{ uri: "https://mangaplus.shueisha.co.jp/drm/featured_banner/37143.jpg?key=36c9b1a35c6bd772049929fc9bb9fc1e&duration=86400" }} style={{ width: "100%", height: 130, marginVertical: 10 }} />
            </View>
            <View>
                <Image source={{ uri: "https://mangaplus.shueisha.co.jp/drm/featured_banner/16738.jpg?key=4cc4a4bfcd6fb8f0328c6bd26e7cb4b6&duration=86400" }} style={{ width: "100%", height: 130, marginVertical: 10 }} />
            </View>
        </ScrollView>
    )
}

export default Featured;