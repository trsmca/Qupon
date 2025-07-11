// src/screens/UploadCouponScreen.js
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

export default function UploadCouponScreen() {
    const [brand, setBrand] = useState("");
    const [expiry, setExpiry] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [discount, setDiscount] = useState("");
    const [code, setCode] = useState("");
    const [terms, setTerms] = useState("");

    const handleSubmit = () => {
        if (!brand || !discount || !code || !terms) {
            Alert.alert("Error", "Please fill all fields.");
            return;
        }

        // Validate discount is a number between 1 and 100
        const discountNumber = parseInt(discount);
        if (isNaN(discountNumber) || discountNumber <= 0 || discountNumber > 100) {
            Alert.alert("Error", "Discount must be between 1 and 100.");
            return;
        }

        // Validate expiry date
        if (expiry < new Date()) {
            Alert.alert("Error", "Expiry date cannot be in the past.");
            return;
        }

        // Here you would call your backend API for verification:
        // Example:
        // verifyCoupon({ brand, expiry, discount, code, terms });

        Alert.alert(
            "Submitted",
            "Coupon submitted successfully! Backend verification will proceed."
        );

        // Reset form
        setBrand("");
        setExpiry(new Date());
        setDiscount("");
        setCode("");
        setTerms("");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Upload Coupon</Text>

            <TextInput
                style={styles.input}
                placeholder="Brand Name"
                value={brand}
                onChangeText={setBrand}
            />

            <TouchableOpacity
                onPress={() => setShowDatePicker(true)}
                style={styles.dateButton}
            >
                <Text style={styles.dateButtonText}>
                    Expiration Date: {expiry.toDateString()}
                </Text>
            </TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker
                    value={expiry}
                    mode="date"
                    display="default"
                    onChange={(event, selectedDate) => {
                        setShowDatePicker(false);
                        if (selectedDate) setExpiry(selectedDate);
                    }}
                />
            )}

            <TextInput
                style={styles.input}
                placeholder="Discount Percentage (1–100)"
                value={discount}
                keyboardType="numeric"
                onChangeText={setDiscount}
            />

            <TextInput
                style={styles.input}
                placeholder="Coupon Code"
                value={code}
                onChangeText={setCode}
            />

            <TextInput
                style={styles.input}
                placeholder="Terms & Conditions (paste link to screenshot)"
                value={terms}
                onChangeText={setTerms}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit Coupon</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#fff" },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 6,
        padding: 10,
        marginBottom: 15,
    },
    dateButton: {
        backgroundColor: "#eee",
        padding: 12,
        borderRadius: 6,
        marginBottom: 15,
    },
    dateButtonText: { color: "#333" },
    button: {
        backgroundColor: "#B71C1C",
        paddingVertical: 14,
        borderRadius: 6,
        marginTop: 10,
    },
    buttonText: { color: "#fff", fontSize: 16, textAlign: "center" },
});
