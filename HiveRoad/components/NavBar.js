import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
    const navigation = useNavigation();
    const com1 = { name: "TAU", code: 1234, Location: "Haim Lebanon 50" }
    const com2 = { name: "WeWork Tel Aviv", code: 7834, Location: "Yigal Allon" }
    const orgs = [com1, com2];

    const handleOrganizationNavigation = (organization) => {
        navigation.navigate('User', { company: organization.name, companyLoc: organization.Location });
    };



    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Home")}>
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>

            {orgs.map((org) => (
                <TouchableOpacity
                    key={org.name}
                    style={styles.button}
                    onPress={() => handleOrganizationNavigation(org)}
                >
                    <Text style={styles.buttonText}>{org.name}</Text>
                </TouchableOpacity>
            ))
            }
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Link")}>
                <Text style={styles.buttonText}>Link Organization</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Ride")}>
                <Text style={styles.buttonText}>Current Ride</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        padding: 10,
        justifyContent: 'flex-start',
    },
    button: {
        padding: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'dark pink',
    },
});

export default NavBar;
