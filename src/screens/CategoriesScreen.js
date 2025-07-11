// src/screens/CategoriesScreen.js
import React from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
} from "react-native";

const screenWidth = Dimensions.get("window").width;
const numColumns = 3;
const itemSize = screenWidth / numColumns - 24;

// Example categories with local icons (replace with your images)
const categories = [
    { id: "1", name: "Food", image: require("../assets/food.png") },
    { id: "2", name: "Travel", image: require("../assets/travel.png") },
    { id: "3", name: "Fashion", image: require("../assets/fashion.png") },
    { id: "4", name: "Tech", image: require("../assets/tech.png") },
    { id: "5", name: "Vlogs", image: require("../assets/vlog.png") },
];

export default function CategoriesScreen() {
    const handleCategoryPress = (category) => {
        console.log("Selected category:", category.name);
        // Navigate to category screen if needed
    };

    const renderCategory = ({ item }) => (
        <TouchableOpacity
            style={styles.categoryContainer}
            onPress={() => handleCategoryPress(item)}
        >
            <View style={styles.iconCircle}>
                <Image source={item.image} style={styles.iconImage} resizeMode="contain" />
            </View>
            <Text style={styles.categoryName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Promo Banner */}
            <View style={styles.banner}>
                <Text style={styles.bannerTitle}>Beauty & Grooming</Text>
                <Text style={styles.bannerSubtitle}>Essentials For All Your Skin Woes</Text>
                <TouchableOpacity style={styles.bannerButton}>
                    <Text style={styles.bannerButtonText}>TRY NOW</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={categories}
                renderItem={renderCategory}
                keyExtractor={(item) => item.id}
                numColumns={numColumns}
                contentContainerStyle={styles.grid}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    banner: {
        backgroundColor: "#f8bbd0",
        padding: 16,
        alignItems: "center",
    },
    bannerTitle: { fontSize: 20, fontWeight: "bold", color: "#880e4f" },
    bannerSubtitle: { fontSize: 14, color: "#6a1b9a", marginVertical: 4 },
    bannerButton: {
        backgroundColor: "#ff4081",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 4,
        marginTop: 6,
    },
    bannerButtonText: { color: "white", fontWeight: "bold" },
    grid: {
        paddingHorizontal: 12,
        paddingTop: 12,
    },
    categoryContainer: {
        alignItems: "center",
        margin: 6,
        width: itemSize,
    },
    iconCircle: {
        width: itemSize,
        height: itemSize,
        borderRadius: itemSize / 2,
        backgroundColor: "#f3f3f3",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 6,
    },
    iconImage: {
        width: "60%",
        height: "60%",
    },
    categoryName: {
        textAlign: "center",
        fontSize: 14,
        marginTop: 2,
    },
});
