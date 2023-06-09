import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CompanyUser = () => {
    const [companyName, setCompanyName] = useState('')
    const [address, setAddress] = useState('')
    const handleSubmit = () => {
        setCompanyName('');
        setAddress('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Company Registration</Text>
            <View style={styles.form}>
                <Text style={styles.label}>Company Name:</Text>
                <TextInput
                    style={styles.input}
                    value={companyName}
                    onChangeText={setCompanyName}
                />
                <Text style={styles.label}>Address:</Text>
                <TextInput
                    style={styles.input}
                    value={address}
                    onChangeText={setAddress}
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Register Company</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    form: {
        width: '80%',
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'pink',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default CompanyUser;
