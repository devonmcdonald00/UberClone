/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
  StatusBar,
  PermissionsAndroid,
  Platform,
  Pressable
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';
import Homescreen from './src/screens/Homescreen';
import DestinationSearch from './src/screens/DestinationSearch';
import SearchResult from './src/screens/SearchResult';
import Geolocation from '@react-native-community/geolocation';
import Router from './src/navigation/Root'
import {withAuthenticator} from 'aws-amplify-react-native'
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

navigator.geolocation = require('@react-native-community/geolocation');


const App: () => Node = () => {


  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Uber app location permission",
          message:
            "Uber App needs access to your location ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    console.log(Platform.OS)
    if(Platform.OS === 'android'){
      console.log("Calling effect")
      androidPermission();
    }
    else{
      Geolocation.requestAuthorization();
    }
  }, [])
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default withAuthenticator(App);
