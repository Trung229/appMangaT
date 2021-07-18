import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Dimensions,
    StatusBar,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../components/subBrowse/Home';
import HottestScreen from '../components/subBrowse/Hottest'

const Tab = createMaterialTopTabNavigator();
StatusBar.setBarStyle('light-content', true);
const Browse = () => {
    return (
        <View style={{flex: 1, backgroundColor:"#920f15"}}>
            <SafeAreaView style={{flex: 1}}>
             <Tab.Navigator
            tabBarOptions={{
                labelStyle: { fontSize: 15, color: 'white', fontWeight:"700"},
                style: { backgroundColor: '#920f15', color: 'white'},
                indicatorStyle: {
                    borderBottomColor: 'white',
                    borderBottomWidth: 2,
                }
              }}
            >
                <Tab.Screen name="All" component={HomeScreen} />
                <Tab.Screen name="Hottest" component={HottestScreen} />
            </Tab.Navigator>
        </SafeAreaView>
        </View>
    )
}

export default Browse;