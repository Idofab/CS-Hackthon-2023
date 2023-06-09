import React, { useState } from 'react';
import { Button, Linking, TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import findCode from './Comanies'

const Link = () => {
    const [companyName, setCompanyName] = useState('')
    const [companyCode, setCompanyCode] = useState('');
    const [org, setOrg] = useState([]);

    const handleOrg = () => {
        const company = findCode(companyCode);
        const newOrg = { name: company, code: companyCode };
        const updatedOrg = [...org, newOrg];
        setOrg(updatedOrg);
        setCompanyName('');
        setCompanyCode('');

    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Link to Organization</Text>
            <Text style={styles.label}>Organization Code:</Text>
            <TextInput
                style={styles.input}
                value={companyCode}
                onChangeText={setCompanyCode}
            />
            <TouchableOpacity style={styles.button} onPress={handleOrg}>
                <Text style={styles.buttonText}>Link</Text>
            </TouchableOpacity>
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

export default Link;
