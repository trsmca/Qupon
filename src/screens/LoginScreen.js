// src/screens/LoginScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "../styles";

export default function LoginScreen({ navigation }) {
    const [phone, setPhone] = useState("");

    const handleGetOtp = () => {
        if (phone.length !== 10) {
            Alert.alert("Invalid Phone Number");
            return;
        }
        // Navigate to OTP Screen
        navigation.navigate("Otp", { phone });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Q</Text>
            <Text style={styles.appName}>Qupon</Text>
            <Text style={styles.subtitle}>
                Because every deal deserves a second chance.
            </Text>

            <View style={styles.phoneContainer}>
                <Text style={styles.countryCode}>+91</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter phone number"
                    keyboardType="numeric"
                    value={phone}
                    maxLength={10}
                    onChangeText={setPhone}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleGetOtp}>
                <Text style={styles.buttonText}>Get OTP</Text>
            </TouchableOpacity>

            <Text style={styles.terms}>
                By continuing, you agree to Terms & Conditions
            </Text>
        </View>
    );
}
