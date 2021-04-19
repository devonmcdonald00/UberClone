import React from "react";
import {View, Text} from "react-native";
import styles from "./styles"

const CovidMessage = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style={styles.text}>We all play a role in helping keep each other safe. That’s why as part of our Door-to-Door Safety Standard, riders and drivers are required to wear a face cover or mask, even when vaccinated.</Text>
            <Text style={styles.learnMore}>Learn more</Text>
        </View>
    )
}

export default CovidMessage;