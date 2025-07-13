// src/screens/LoginScreen.js

import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth'; // make sure you installed this!

export default function LoginScreen() {
    const [phone, setPhone] = useState('');
    const navigation = useNavigation();

    const handleGetOtp = async () => {
        if (phone.length !== 10) {
            Alert.alert('Invalid Phone Number', 'Please enter a 10-digit phone number.');
            return;
        }

        try {
            // Start OTP verification
            const confirmation = await auth().signInWithPhoneNumber(`+91${phone}`);
            // Navigate to Otp screen, pass confirmation object
            navigation.navigate('Otp', { confirmation, phone });
        } catch (error) {
            console.error('Firebase OTP error:', error);
            Alert.alert('Error', error.message);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.outerContainer}>
                    <View style={styles.card}>
                        <Image
                            source={require('../assets/logo.jpg')}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                        <Text style={styles.appName}>Qupon</Text>
                        <Text style={styles.subtitle}>
                            Because every deal deserves a second chance.
                        </Text>

                        <View style={styles.inputContainer}>
                            <View style={styles.phoneInputBox}>
                                <Text style={styles.countryCode}>+91</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter phone number"
                                    keyboardType="numeric"
                                    value={phone}
                                    maxLength={10}
                                    onChangeText={setPhone}
                                    placeholderTextColor="#888"
                                />
                            </View>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={handleGetOtp}>
                            <Text style={styles.buttonText}>Get OTP</Text>
                        </TouchableOpacity>

                        <Text style={styles.terms}>
                            By continuing, you agree to{' '}
                            <Text
                                style={styles.termsLink}
                                onPress={() => navigation.navigate('Terms')}
                            >
                                Terms and Conditions
                            </Text>
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F9F8',
    },
    card: {
        width: '90%',
        backgroundColor: '#F9F9F9',
        borderRadius: 28,
        paddingVertical: 36,
        paddingHorizontal: 24,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 4,
    },
    logo: {
        width: 90,
        height: 90,
        marginBottom: 10,
    },
    appName: {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 4,
        letterSpacing: 0.5,
    },
    subtitle: {
        fontSize: 16,
        color: '#444',
        textAlign: 'center',
        marginBottom: 28,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 18,
    },
    phoneInputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 8,
        width: '100%',
    },
    countryCode: {
        fontSize: 16,
        color: '#222',
        marginRight: 6,
        fontWeight: '500',
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#222',
        paddingVertical: 0,
    },
    button: {
        backgroundColor: '#B71C1C',
        borderRadius: 8,
        paddingVertical: 14,
        width: '100%',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 18,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    terms: {
        fontSize: 13,
        color: '#888',
        textAlign: 'center',
        marginBottom: 2,
    },
    termsLink: {
        fontSize: 13,
        color: '#222',
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontWeight: '500',
    },
});
