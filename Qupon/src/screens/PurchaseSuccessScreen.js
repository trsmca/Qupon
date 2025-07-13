import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function PurchaseSuccessScreen({ route, navigation }) {
    const { coupon } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Purchase Successful!</Text>
            <Text style={styles.subtitle}>Here is your coupon code:</Text>
            <Text style={styles.code}>{coupon.code}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("BrowseDeals")}
            >
                <Text style={styles.buttonText}>Back to Deals</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 10, color: "#388E3C" },
    subtitle: { fontSize: 18, marginBottom: 20 },
    code: { fontSize: 22, fontWeight: "bold", color: "#B71C1C", marginBottom: 40 },
    button: { backgroundColor: "#B71C1C", paddingVertical: 12, paddingHorizontal: 20, borderRadius: 4 },
    buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
