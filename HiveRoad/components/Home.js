import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';




const Home = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>VAN.ish</Text>
            <Ionicons name="bus" size={60} color="purple" style={styles.icon} />

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: "purple",
        fontSize: 60,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default Home;



