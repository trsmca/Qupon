import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

export default function PaymentScreen({ route, navigation }) {
    const { coupon } = route.params;

    useEffect(() => {
        // Simulate payment processing delay
        const timer = setTimeout(() => {
            // After payment, navigate to success screen
            navigation.replace("PurchaseSuccess", { coupon });
        }, 2000);

        return () => clearTimeout(timer);
    }, [coupon, navigation]);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#388E3C" />
            <Text style={styles.text}>Processing Payment...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    text: { marginTop: 20, fontSize: 18, color: "#333" },
});
