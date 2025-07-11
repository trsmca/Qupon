// src/screens/OtpScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "../styles";

export default function OtpScreen({ route, navigation }) {
    const { phone } = route.params;
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);

    const handleChange = (text, index) => {
        if (/^\d*$/.test(text)) {
            const newOtp = [...otp];
            newOtp[index] = text;
            setOtp(newOtp);
        }
    };

    const handleVerify = () => {
        if (otp.join("").length !== 6) {
            Alert.alert("Enter 6-digit OTP");
            return;
        }
        Alert.alert("OTP Verified!");
        navigation.replace("ProfileCompletion")    };

    return (
        <View style={styles.container}>
            <Text style={styles.appName}>OTP Verification</Text>
            <Text style={{ textAlign: "center", marginTop: 8 }}>
                Code sent to +91 {phone.slice(0, 2)}****{phone.slice(-2)}
            </Text>

            <View style={styles.otpBoxesContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpBox}
                        keyboardType="numeric"
                        maxLength={1}
                        value={digit}
                        onChangeText={(text) => handleChange(text, index)}
                    />
                ))}
            </View>

            <TouchableOpacity style={styles.button} onPress={handleVerify}>
                <Text style={styles.buttonText}>Verify OTP</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.resend}>Resend OTP</Text>
            </TouchableOpacity>
        </View>
    );
}
