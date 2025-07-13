// PaymentScreen.js

import React, { useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import RazorpayCheckout from "react-native-razorpay";

export default function PaymentScreen({ route, navigation }) {
    const { coupon } = route.params;

    useEffect(() => {
        // Configure payment options
        const options = {
            description: "Purchase Coupon",
            image: "https://yourdomain.com/logo.png", // Optional: your logo URL
            currency: "INR",
            key: "qdnlanVThq62KleXZzs2kOYS", // Replace with your Razorpay API key
            amount: coupon.price * 100, // Amount in paise (e.g., Rs 10 = 1000 paise)
            name: "Qupon",
            prefill: {
                email: "trsmca35@gmail.com",
                contact: "9666600016",
                name: "Customer Name",
            },
            theme: { color: "#B71C1C" },
        };

        RazorpayCheckout.open(options)
            .then((data) => {
                // Payment Success
                console.log("Payment Success:", data);
                navigation.replace("PurchaseSuccess", {
                    coupon,
                    paymentId: data.razorpay_payment_id,
                });
            })
            .catch((error) => {
                // Payment Failure
                console.error("Payment Failed:", error);
                Alert.alert("Payment Failed", error.description || "Something went wrong.");
                navigation.goBack();
            });
    }, [coupon, navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Initializing Payment...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    text: { fontSize: 18, color: "#333" },
});
