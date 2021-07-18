import React, { useRef } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    FlatList,
    Animated,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from '../../styling/detail'
import Icon from 'react-native-vector-icons/FontAwesome5';
const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const DetailScreen = (props) => {
    const { route: { params: { item } } } = props;
    console.log(item);
    const scrollY = useRef(new Animated.Value(0)).current;
    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp',
    })
    const imageOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [1, 1, 0],
        extrapolate: 'clamp',
    });
    const imageTranslate = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, -50],
        extrapolate: 'clamp',
    });
    const titleTranslate = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [0, 0, -1],
        extrapolate: 'clamp',
    });
    const titleOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [0, 0, 1],
        extrapolate: 'clamp',
    });
    
    const titleOpacity2 = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [1, 1, 0],
        extrapolate: 'clamp',
    });
    


    return (
        <View style={{ flex: 1 }}>
            <Animated.FlatList style={[styles.container]}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
                ListHeaderComponent={
                    <View style={styles.scrollViewContent,{marginTop: HEADER_MAX_HEIGHT}}>
                    <View style={styles.contentTile}>
                        <Animated.Text style={[styles.nameManga,{opacity:titleOpacity2}]}>{item.name}</Animated.Text>
                        <Text style={styles.nameAuthor}>{item.author}</Text>
                        <View style={styles.contentButton}>
                            <TouchableOpacity style={styles.moreDetails}>
                                <Icon style={[styles.icon,{color:'white'}]} name="info-circle"></Icon>
                                <Text style={styles.myText}>More Details</Text>
                                </TouchableOpacity>
                            <TouchableOpacity style={styles.Favorite}>
                                <Icon style={[styles.icon,{color:'white'}]} name="bookmark"></Icon>
                                <Text style={styles.myText}>My Favorite</Text>
                                </TouchableOpacity>
                        </View>
                        <View style={styles.dateRelease}>
                            <Text numberOfLines={2} style={{width:200, color:"white", fontSize:15, fontWeight:"700", textAlign:"center"}}>New chapter arrives on Sunday, July 18, 23:00</Text>
                        </View>
                    </View>
                    <View style={styles.containTextChap}>
                        <Text style={{color:"white",textTransform:"uppercase"}}>Chapters</Text>
                    </View>
                    <FlatList
                    data={item.chaps}
                    keyExtractor={(item)=>{return item.id_chap}}
                    renderItem = {({item})=>{
                        console.log(item);
                        return(
                            <View style={styles.containerChap}>
                                <View style={styles.thumbnail_chap}>
                                    <Image source={{uri:item.thumbnail_chap}} style={styles.img}></Image>
                                </View>
                                <View style={styles.containerChapDetails}>
                                    <View style={styles.containerHeader}>
                                        <Text style={{color:"white", fontWeight:"700"}}>#{item.numberChap}</Text>
                                        <Text style={{color:"white", marginLeft:20, fontWeight:"200"}}>{item.dateRelease}</Text>
                                    </View>
                                    <View>
                                        <Text style={{color:"white", marginTop:20}}>{item.nameChap}</Text>
                                    </View>
                                </View>
                                <View style={styles.contentIconCommentChap}>
                                    <Icon></Icon>
                                </View>
                            </View>
                        )
                    }}
                    />
                </View>
                }
                >
                
            </Animated.FlatList>
            <Animated.View style={[styles.header, { height: headerHeight }]}>
                <Animated.Image
                    style={[
                        styles.backgroundImage,
                        { opacity: imageOpacity, transform: [{ translateY: imageTranslate }] },
                    ]}
                    source={{ uri: item.thumbnail }}
                />
                 <Animated.View
                style={[
                    styles.bar,
                    {
                        transform: [
                            { translateY: titleTranslate },
                        ],
                        opacity:titleOpacity,
                    },
                ]}
            >
                <Text style={styles.title}>{item.name}</Text>
            </Animated.View>
            </Animated.View>
           
        </View>
    )
}

export default DetailScreen;