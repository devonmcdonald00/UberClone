import React, { useState } from 'react'
import {View, Text, Dimensions, Alert} from 'react-native'
import Map from '../../components/Map'
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes'
import { useRoute, useNavigation } from '@react-navigation/native'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { createOrder } from '../../graphql/mutations'

const SearchResult = (props) =>  {
    const navigation = useNavigation();
    const typeState = useState();
    const route = useRoute();
    console.log(route.params)
    const {originPlace, destinationPlace} = route.params;
    const onSubmit = async () => {
        const [type] = typeState;
        if(!type) {
            return;
        }
        try {
            const userInfo = await Auth.currentAuthenticatedUser();
            const date = new Date();
            const input = {
                createdAt: date.toISOString(),
                type: type,
                originLatitude: originPlace.details.geometry.location.lat,
                originLongitude: originPlace.details.geometry.location.lng,
                destinationLatitude: destinationPlace.details.geometry.location.lat,
                destinationLongitude: destinationPlace.details.geometry.location.lng,
                userId: userInfo.attributes.sub,
                carId: "1",
            }
            const response = await API.graphql(
                graphqlOperation(
                    createOrder, {
                        input
                    }
                )
            )
            console.log(response);
            Alert.alert("Order Successful", "Your order has been placed successfully", [{text: "Go home", onPress: () => navigation.navigate("Home")}]);
        }
        catch (e) {
            console.error(e);
        }
    }

    return (
        <View style={{display: 'flex', justifyContent: 'space-between'}}>
            <View style={{height: Dimensions.get('window').height-400}}>
                <RouteMap origin={originPlace} destination={destinationPlace}/>
            </View>
            <View style={{height: 400}}>
                <UberTypes typeState={typeState} onSubmit={onSubmit}/>
            </View>
        </View>
    )
}

export default SearchResult;
