import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';




const Ride = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>You're ride will arrive in 6 minutes!</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 100,
    },
    text: {
        color: "purple",
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default Ride;



