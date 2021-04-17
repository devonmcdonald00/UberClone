import React from "react";
import {View, Text, Dimensions} from "react-native";
import Map from '../../components/Map';
import CovidMessage from '../../components/CovidMessage';
import Search from '../../components/Search';


const Homescreen = (props) => {
    return (
        <View>
            <View style={{height: Dimensions.get('window').height-400}}>
                <Map/>
            </View>
            <CovidMessage/>
            <Search/>
        </View>
    )
}

export default Homescreen;