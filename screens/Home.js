import React from 'react';
import {
    SafeAreaView,
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import UpdateScreen from './components/Update';
import FeatureScreen from './components/Featured';
import BrowseScreen from './components/Browse';
import FavoriteScreen from './components/Favorites';
import SettingScreen from './components/Settings';

const Tab = createMaterialBottomTabNavigator();
const Home = () => {
    return (
        <Tab.Navigator
            initialRouteName="Update"
            activeColor="#ffd600"
            inactiveColor="#696969"
            barStyle={{ backgroundColor: '#191919' }}
        >
            <Tab.Screen name="Update" component={UpdateScreen} options={{
                tabBarLabel: 'Update',
                tabBarIcon: ({ color }) => (
                    <Icon name="calendar" color={color} size={20}></Icon>
                ),
            }} 
            />
            <Tab.Screen name="Featured" component={FeatureScreen} options={{
                tabBarLabel: 'Featured',
                tabBarIcon: ({ color }) => (
                    <Icon name="galactic-republic" color={color} size={20}></Icon>
                ),
            }} />
            <Tab.Screen name="Browse" component={BrowseScreen} options={{
                tabBarLabel: 'Browse',
                tabBarIcon: ({ color }) => (
                    <Icon name="bars" color={color} size={20}></Icon>
                ),
            }} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
                tabBarLabel: 'Favorites',
                tabBarIcon: ({ color }) => (
                    <Icon name="bookmark" color={color} size={20}></Icon>
                ),
            }} />
            <Tab.Screen name="Settings" component={SettingScreen} options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color }) => (
                    <Icon name="cog" color={color} size={20}></Icon>
                ),
            }} />
        </Tab.Navigator>
    )
}

export default Home;