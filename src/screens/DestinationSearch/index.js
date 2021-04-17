import React, {useEffect, useState} from "react";
import {View, Text, TextInput, SafeAreaView} from "react-native";
import styles from './styles'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow'
import { useNavigation } from "@react-navigation/native";

const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };
  

const DestinationSearch = (props) => {

    const [originPlace, setOriginPlace] = useState('');
    const [destinationPlace, setDestinationPlace] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        if(originPlace && destinationPlace){
            console.warn('redirect to result');
            navigation.navigate("SearchResult", {
                originPlace,
                destinationPlace,
            });
        }
    }, [originPlace, destinationPlace])

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder='Where from?'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        setOriginPlace({data, details})
                        console.log(data, details);
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyAkj7ebaeKlnCnTN76NoSbDoLVRuzJD5Io',
                        language: 'en',
                    }}
                    suppressDefaultStyles
                    enablePoweredByContainer={false}
                    styles={{
                        textInput: styles.textInput,
                        container: {
                            position: 'absolute',
                            top: 0,
                            left: 10,
                            right: 10,
                        },
                        listView: styles.listView,
                        separator: styles.seperator,

                    }}
                    renderRow={(data) => <PlaceRow data={data}/>}
                    currentLocation={true}
                    currentLocationLabel='Current Location'
                    renderDescription={(data)=> data.description || data.vicinity}
                    predefinedPlaces={[homePlace, workPlace]}
                />
                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        setDestinationPlace({data, details})
                        console.log(data, details);
                    }}
                    enablePoweredByContainer={false}
                    fetchDetails
                    suppressDefaultStyles
                    query={{
                        key: 'AIzaSyAkj7ebaeKlnCnTN76NoSbDoLVRuzJD5Io',
                        language: 'en',
                    }}
                    styles={{
                        textInput: styles.textInput,
                        container: {
                            position: 'absolute',
                            top: 60,
                            left: 10,
                            right: 10,
                        },
                        separator: styles.seperator,
                    }}
                    renderRow={(data) => <PlaceRow data={data}/>}
                />

                <View style={styles.circle}/>
                <View style={styles.line}/>
                <View style={styles.square}/>
            </View>
        </SafeAreaView>
    )
}

export default DestinationSearch;