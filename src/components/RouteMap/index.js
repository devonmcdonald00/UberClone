import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import cars from '../../assets/data/cars'
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = ({origin, destination}) => {
    const originLoc = {latitude: origin.details.geometry.location.lat, longitude: origin.details.geometry.location.lng};
    const destinationLoc = {latitude: destination.details.geometry.location.lat, longitude: destination.details.geometry.location.lng};

    return (
        <MapView
            style={{height: '100%', width: '100%'}}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
            latitude: 28.450127,
            longitude: -16.263045,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
            }}
        >
            <MapViewDirections
                origin={originLoc}
                destination={destinationLoc}
                strokeWidth={5}
                apikey={'AIzaSyAkj7ebaeKlnCnTN76NoSbDoLVRuzJD5Io'}
            />
            <Marker
                coordinate={originLoc}
                title={'Origin'}
            />
            <Marker
                coordinate={destinationLoc}
                title={'Destination'}
            />
            
        </MapView>
    )
}

export default RouteMap;