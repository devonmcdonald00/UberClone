import React from 'react'
import {View, Text, Pressable} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Auth } from 'aws-amplify';

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{backgroundColor: '#212121', padding: 15}}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <View style={{
                        backgroundColor: '#cacaca',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        marginRight: 10,
                    }}/>
                    <View>
                        <Text style={{color: 'white', fontSize: 24}}>Devon McDonald</Text>
                        <Text style={{color: 'lightgrey'}}>5.00 *</Text>
                    </View>
                </View>
                <View style={{borderBottomWidth: 1, borderTopWidth: 1, borderTopColor: '#919191', borderBottomColor: '#919191', paddingVertical: 5, marginVertical: 10}}>
                    <Pressable onPress={() => console.warn("Messages")}>
                        <Text style={{color: '#dddddd', paddingVertical: 5}}>Messages</Text>
                    </Pressable>
                </View>
                <Pressable onPress={() => console.warn("Do more with your account")}>
                    <Text style={{color: '#dddddd', paddingVertical: 5}}>Do more with your account</Text>
                </Pressable>
                <Pressable onPress={() => console.warn("make money driving")}>
                    <Text style={{color: 'white'}}>Make money driving</Text>
                </Pressable>
            </View>
            <DrawerItemList {...props}/>
            <Pressable onPress={() => {Auth.signOut()}}>
                <Text style={{padding: 5, paddingLeft: 20}}>Logout</Text>
            </Pressable>
        </DrawerContentScrollView>
    )
}

export default CustomDrawer
