//import React from "react";
//import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
//import Icon from "react-native-vector-icons/MaterialCommunityIcons";

//export default function HomeScreen({ navigation }) {
//    return (
//        <View style={styles.container}>
//            {/* Top bar */}
//            <View style={styles.topBar}>
//                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//                    <Icon name="menu" size={28} color="#333" />
//                </TouchableOpacity>
//                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
//                    <Icon name="account-circle" size={28} color="#333" />
//                </TouchableOpacity>
//            </View>

//            {/* Center buttons */}
//            <View style={styles.centerContent}>
//                <TouchableOpacity
//                    style={styles.button}
//                    onPress={() => navigation.navigate("UploadCoupon")}
//                >
//                    <Text style={styles.buttonText}>Upload Coupon</Text>
//                </TouchableOpacity>
//                <TouchableOpacity
//                    style={styles.button}
//                    onPress={() => navigation.navigate("BrowseDeals")}
//                >
//                    <Text style={styles.buttonText}>Browse Deals</Text>
//                </TouchableOpacity>
//            </View>
//        </View>
//    );
//}

//const styles = StyleSheet.create({
//    container: { flex: 1, padding: 16, backgroundColor: "#fff" },
//    topBar: {
//        flexDirection: "row",
//        justifyContent: "space-between",
//        alignItems: "center",
//    },
//    centerContent: { flex: 1, justifyContent: "center", alignItems: "center" },
//    button: {
//        backgroundColor: "#B71C1C",
//        padding: 20,
//        borderRadius: 8,
//        marginVertical: 10,
//        width: 220,
//        alignItems: "center",
//    },
//    buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
//});
// src/screens/HomeScreen.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Qupon</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("BrowseDeals")}
            >
                <Text style={styles.buttonText}>Browse Deals</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("UploadCoupon")}
            >
                <Text style={styles.buttonText}>Upload Coupon</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
    button: {
        backgroundColor: "#B71C1C",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginVertical: 10,
    },
    buttonText: { color: "#fff", fontSize: 16 },
});
