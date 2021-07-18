import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#0e0e0e",
    },
    image: {
        width: "100%",
        height: 150,
        resizeMode: "cover",
    },
    pagination:{
        position: "absolute",
        top:200,
        flexDirection: "row",
        justifyContent: "center"
    },
    dot:{
        width: 8,
        height: 8,
        borderRadius:8,
        backgroundColor:"#191919",
        marginRight:8,
    },
    dotActive:{
        width: 8,
        height: 8,
        borderRadius:8,
        backgroundColor:"#ffd600",
        marginRight:8,
    },
    contentBody:{
        paddingHorizontal:10,
    },
    imgBox:{
        width:"100%",
        height:"100%",
    }
});

export default styles;