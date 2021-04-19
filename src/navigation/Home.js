import React from 'react';
import Homescreen from '../screens/Homescreen';
import { createStackNavigator } from '@react-navigation/stack'
import DestinationSearch from '../screens/DestinationSearch';
import SearchResult from '../screens/SearchResult';

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={"Home"} component={Homescreen}/>
            <Stack.Screen name={"DestinationSearch"} component={DestinationSearch}/>
            <Stack.Screen name={"SearchResult"} component={SearchResult}/>
        </Stack.Navigator>
    )
}

export default HomeNavigator;