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
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#7a1116',
        overflow: 'hidden',
        height: 300,
        zIndex:4,
      },
      bar: {
        marginTop: 30,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 20,
        fontWeight:"700"
      },
      row: {
        height: 40,
        margin: 16,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
      },
      backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: 300,
        resizeMode: 'cover',
      },
      contentTile:{
          paddingHorizontal:10,
          paddingVertical:10,
      },
      nameManga:{
          fontSize:25,
          fontWeight:"800",
          color:"white"
      },
      nameAuthor:{
        fontSize:15,
        fontWeight:"200",
        color:"white",
        marginTop:10
      },
      moreDetails:{
          flexDirection:"row",
          paddingVertical:18,
          paddingHorizontal:30,
          backgroundColor:"#151515",
          borderRadius:4,
          alignItems: 'center',
          minWidth:170,
      },
      Favorite:{
        flexDirection:"row",
        paddingVertical:18,
        paddingHorizontal:30,
        backgroundColor:"#151515",
        borderRadius:4,
        alignItems: 'center',
        minWidth:170,
      },
      contentButton:{
          flexDirection:"row",
          justifyContent:"space-between",
          marginTop:10,
      },
      myText:{
          marginLeft:10,
          color:"white",
          fontSize:15,
          fontWeight:"bold",
      },
      icon:{
          fontSize:20,
      },
      dateRelease:{
          alignItems:"center",
          paddingVertical:20,
      },
      containTextChap:{
          paddingVertical:10,
          paddingHorizontal:5,
          backgroundColor:"#191919",
          
      },
      containerChap:{
          flexDirection:"row",
          paddingVertical:10,
          paddingHorizontal:10,
          marginBottom:10,
          backgroundColor:"#181818",
          
      },
      containerChapDetails:{
        paddingVertical:10,
        paddingHorizontal:5,
        backgroundColor:"#191919",
        marginLeft:10,
      },
      img:{
          width:100,
          height:80,
      },
      containerHeader:{
          flexDirection:"row",
      }
});

export default styles;