import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { API, graphqlOperation } from 'aws-amplify'
import { listCars } from '../../graphql/queries'

const Map = (props) => {
    
    const [cars, setCars] = useState([]);
    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await API.graphql(
                    graphqlOperation(
                        listCars
                    )
                )
                console.log(response.data.listCars.items)
                setCars(response.data.listCars.items);
                console.log(cars)
            }
            catch (e) {
                console.error(e)
            }
        }
        fetchCars()
        
    }, [])

    const getImageName = (type) => {
        console.log(cars)
        if(type === 'UberX'){
            console.log("here")

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