// src/screens/OtpScreen.js

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';

export default function OtpScreen({ route, navigation }) {
    const { confirmation, phone } = route.params;
    const [code, setCode] = useState('');

    const handleVerifyCode = async () => {
        if (code.length !== 6) {
            Alert.alert('Invalid Code', 'Please enter the 6-digit code.');
            return;
        }

        try {
            await confirmation.confirm(code);
            Alert.alert('Success', 'Phone number verified successfully!');
            // Navigate to next screen here if needed
        } catch (error) {
            console.error('Verification failed:', error);
            Alert.alert('Error', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.instructions}>Enter OTP sent to +91 {phone}</Text>
            <TextInput
                placeholder="6-digit code"
                keyboardType="numeric"
                value={code}
                onChangeText={setCode}
                style={styles.input}
                maxLength={6}
            />
            <TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
                <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    instructions: {
        fontSize: 16,
        marginBottom: 12,
        textAlign: 'center',
        color: '#333'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 16
    },
    button: {
        backgroundColor: '#B71C1C',
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
});
