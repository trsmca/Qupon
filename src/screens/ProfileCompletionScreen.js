// src/screens/ProfileCompletionScreen.js
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function ProfileCompletionScreen({ navigation }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [email, setEmail] = useState("");
    const [upi, setUpi] = useState("");

    const calculateAge = (birthDate) => {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const handleSubmit = () => {
        if (!firstName || !lastName || !email) {
            Alert.alert("Error", "Please fill all required fields.");
            return;
        }

        const age = calculateAge(dob);
        if (age < 13) {
            Alert.alert("Error", "You must be at least 13 years old to register.");
            return;
        }

        // ✅ You can send this data to backend here

        // Navigate to Home after successful profile completion
        navigation.replace("Home");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Complete Your Profile</Text>

            <TextInput
                style={styles.input}
                placeholder="First Name *"
                value={firstName}
                onChangeText={setFirstName}
            />

            <TextInput
                style={styles.input}
                placeholder="Last Name *"
                value={lastName}
                onChangeText={setLastName}
            />

            <TouchableOpacity
                style={styles.datePickerButton}
                onPress={() => setShowDatePicker(true)}
            >
                <Text style={styles.datePickerText}>
                    DOB: {dob.toDateString()}
                </Text>
            </TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker
                    value={dob}
                    mode="date"
                    display="default"
                    maximumDate={new Date()}
                    onChange={(event, selectedDate) => {
                        setShowDatePicker(false);
                        if (selectedDate) setDob(selectedDate);
                    }}
                />
            )}

            <TextInput
                style={styles.input}
                placeholder="Email Address *"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <Text style={styles.note}>
                Your coupon codes will be sent to this email.
            </Text>

            <TextInput
                style={styles.input}
                placeholder="UPI ID (optional)"
                value={upi}
                onChangeText={setUpi}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#fff" },
    heading: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
    },
    note: { fontSize: 12, color: "#555", marginBottom: 16 },
    datePickerButton: {
        padding: 12,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        marginBottom: 12,
    },
    datePickerText: { fontSize: 16, color: "#333" },
    button: {
        backgroundColor: "#B71C1C",
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 16,
    },
    buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
