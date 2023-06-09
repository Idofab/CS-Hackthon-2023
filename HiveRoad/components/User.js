import React, { useState, } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';




const User = () => {
    const [isFrequent, setIsFrequent] = useState(false);
    const [selectedDays, setSelectedDays] = useState([]);
    const route = useRoute();
    const { company, companyLoc } = route.params;
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');

    const handleDestinationChange = (text) => {
        setDestination(text);
    };

    const handleFrequentChange = () => {
        setIsFrequent(!isFrequent);
    };

    const handleDateChange = (text) => {
        setDate(text);
    };

    const handleSubmit = () => {
        if (destination === '') {
            Alert.alert('Validation Error', 'Please enter your location.');
            return;
        }
        if (date === '') {
            Alert.alert('Validation Error', 'Please select a date.');
            return;
        }

        setDestination('');
        setDate('');
    };

    const handleDaySelection = (day) => {
        if (selectedDays.includes(day)) {
            setSelectedDays(selectedDays.filter((d) => d !== day));
        } else {
            setSelectedDays([...selectedDays, day]);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}> {company}</Text>
            <Text style={styles.heading}>Hello Rider!</Text>
            <View style={styles.form}>
                <Text>My Place *</Text>
                <TextInput
                    style={styles.input}
                    value={destination}
                    onChangeText={handleDestinationChange}
                    required
                />
                <Text>Their Place:</Text>
                <TextInput
                    style={styles.input}
                    value={companyLoc}
                    editable={false}
                    selectTextOnFocus={false}
                />
                <Text>Date *</Text>
                <DatePicker
                    useNativeDriver={true}
                    style={styles.datePicker}
                    date={date}
                    mode="date"
                    placeholder="Select date"
                    format="YYYY-MM-DD"
                    minDate={new Date()}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    onDateChange={handleDateChange}

                />


                <CheckBox
                    title="Frequent User"
                    checked={isFrequent}
                    onPress={handleFrequentChange}
                    containerStyle={styles.checkboxContainer}
                    textStyle={styles.checkboxText}
                />
                {isFrequent && (
                    <View style={styles.weekDaysContainer}>
                        <Text style={styles.weekDaysText}>Select Days:</Text>
                        <View style={styles.weekDays}>
                            <TouchableOpacity
                                style={[
                                    styles.weekDayButton,
                                    selectedDays.includes('Sun') && styles.selectedWeekDayButton,
                                ]}
                                onPress={() => handleDaySelection('Sun')}
                            >
                                <Text style={styles.buttonText}>Sun</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.weekDayButton,
                                    selectedDays.includes('Mon') && styles.selectedWeekDayButton,
                                ]}
                                onPress={() => handleDaySelection('Mon')}
                            >
                                <Text style={styles.buttonText}>Mon</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.weekDayButton,
                                    selectedDays.includes('Tue') && styles.selectedWeekDayButton,
                                ]}
                                onPress={() => handleDaySelection('Tue')}
                            >
                                <Text style={styles.buttonText}>Tue</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.weekDayButton,
                                    selectedDays.includes('Wed') && styles.selectedWeekDayButton,
                                ]}
                                onPress={() => handleDaySelection('Wed')}
                            >
                                <Text style={styles.buttonText}>Wed</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.weekDayButton,
                                    selectedDays.includes('Thu') && styles.selectedWeekDayButton,
                                ]}
                                onPress={() => handleDaySelection('Thu')}
                            >
                                <Text style={styles.buttonText}>Thu</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.weekDayButton,
                                    selectedDays.includes('Fri') && styles.selectedWeekDayButton,
                                ]}
                                onPress={() => handleDaySelection('Fri')}
                            >
                                <Text style={styles.buttonText}>Fri</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.weekDayButton,
                                    selectedDays.includes('Sat') && styles.selectedWeekDayButton,
                                ]}
                                onPress={() => handleDaySelection('Sat')}
                            >
                                <Text style={styles.buttonText}>Sat</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Request Ride</Text>
            </TouchableOpacity>

        </View>);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        padding: 0,
        marginVertical: 10,
    },
    checkboxText: {
        fontSize: 16,
        marginLeft: 8,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    form: {
        width: '80%',
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        paddingHorizontal: 10,
    },

    button: {
        backgroundColor: 'pink',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'grey',
        fontSize: 16,
    },

});

export default User;
