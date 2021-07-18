import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    Dimensions,
    FlatList,
    Image,
    Animated,
    ScrollView,
    SectionList
} from 'react-native';


import styles from '../../styling/update';
import MyText from '../components/subComponents/myText'

const DATA = [
    'https://mangaplus.shueisha.co.jp/drm/top_banner/174946.jpg?key=d416d6081c6917a46ddbdd4d2d523b88&duration=86400',
    'https://mangaplus.shueisha.co.jp/drm/top_banner/95745.jpg?key=0ebde6bd413e3abfa2478c3cb8dd48d5&duration=86400',
    'https://mangaplus.shueisha.co.jp/drm/top_banner/174586.jpg?key=d4185fde42893325cfab793be348ff8d&duration=86400',
]

const Weekly = [
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
        name: "Dr stone",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100010/title_thumbnail_portrait_list/7987.jpg?key=8231316038efd1ea9e2ba3d7aa1362c1&duration=86400",
    },
    {
        id:6,
        name: "The Elusive shueisha",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100139/title_thumbnail_portrait_list/159739.jpg?key=9dbc25f9454e3761d7f7cdf6a4f2dfa4&duration=86400",
    },
    {
        id:7,
        name: "Nerr: way of creating",
        thumbnail: "https://mangaplus.shueisha.co.jp/drm/title/100166/title_thumbnail_portrait_list/174160.jpg?key=26f6b4f54d70b56bfd824b26a2982a22&duration=86400",
    },
]
const { width, height } = Dimensions.get('screen');

const Update = () => {
    const [imgActive, setImgActive] = React.useState(0);
    onChange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide !== imgActive) {
                setImgActive(slide);
            }
        }
    }
    return (
        <FlatList style={[styles.container,{flex: 1}]} nestedScrollEnable={true}
        ListHeaderComponent={
            <>
             <View style={{ height: 200 }}>
                <FlatList
                    data={DATA}
                    keyExtractor={(_, index) => index.toString()}
                    horizontal
                    pagingEnabled
                    scrollEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                    contentContainerStyle={{
                        paddingTop: StatusBar.currentHeight || 42
                    }}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ width }}>
                                <Image source={{ uri: item }} style={styles.image}></Image>
                            </View>
                        )
                    }}
                    style={{ height: 20 }}
                ></FlatList>
                <View style={[styles.pagination, { width }]}>
                    {DATA.map((e, i) => {
                        return <View
                            key={i}
                            style={imgActive === i ? styles.dotActive : styles.dot}
                        >
                        </View>
                    })}
                </View>
            </View>
            <View style={[styles.contentBody, { marginTop: 20 }]}>
                <MyText content="LasTest 24h"></MyText>
                <FlatList
                    data={Weekly}
                    scrollEnabled={false}
                    horizontal={false}
                    numColumns ={2}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ backgroundColor: "red", width: 180, height: 150, marginBottom: 30, position: "relative", marginHorizontal:4}} >
                            <Image style={{ width: 180, height: 150 }} source={{ uri: item.thumbnail }} />
                            <View style={{marginTop:5,  textAlign:"center"}}>
                            <Text style={{color: "white", fontWeight:"500", marginLeft:"auto", marginRight:"auto"}}>{item.name}</Text>
                            </View>
                            <View style={{backgroundColor:"black", position:"absolute",bottom:0, fontSize:15, right:0, opacity:.5, paddingLeft:10}}>
                                <Text style={{color: "#f3f3f3", fontWeight:"500"}}>#{item.chapter}</Text>
                            </View>
                            </View>

                        )
                    }}
                />
                
              
            </View>
            </>
        }
        >
           
        </FlatList>
    )
}

export default Update;