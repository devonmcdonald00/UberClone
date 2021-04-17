import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import cars from '../../assets/data/cars'

const Map = (props) => {
    const getImageName = (type) => {
        if(type === 'UberX'){
            return require('../../assets/images/top-UberX.png');
        }
        if(type === 'UberXL'){
            return require('../../assets/images/top-UberXL.png')
        }
        if(type === 'Comfort'){
            return require('../../assets/images/top-Comfort.png')
        }
    }
    return (
        <View style={{ 
            backgroundColor: "#a0abff",
            justifyContent: 'center',
            alignItems: 'center'    
        }}>
            <MapView
                style={{height: '100%', width: '100%'}}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialRegion={{
                    latitude: 28.456208,
                    longitude: -16.258658,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {cars.map((car) => {
                    return(
                        <Marker
                            key={car.id}
                            coordinate={{latitude: car.latitude, longitude: car.longitude}}
                        >
                            <Image 
                                style={{
                                    width: 70,
                                    height: 70,
                                    resizeMode: 'contain',
                                    transform: [{
                                        rotate: `${car.heading}deg`
                                    }]
                                }}
                                source={getImageName(car.type)}/>
                        </Marker>
                    )
                })}
            </MapView>
        </View>
    )
}

export default Map;