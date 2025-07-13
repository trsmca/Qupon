// src/screens/AdminPanel/UsersListScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function UsersListScreen() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Replace with real API call
        const dummyUsers = [
            { id: "1", name: "Raj Sekhar", email: "raj@example.com", level: "Level 2", uploaded: 10, bought: 5 },
            { id: "2", name: "John Doe", email: "john@example.com", level: "Level 1", uploaded: 3, bought: 7 },
        ];
        setUsers(dummyUsers);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>All Users</Text>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text>Email: {item.email}</Text>
                        <Text>Level: {item.level}</Text>
                        <Text>Uploaded: {item.uploaded} | Bought: {item.bought}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    heading: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
    card: {
        padding: 12,
        marginBottom: 12,
        backgroundColor: "#f4f4f4",
        borderRadius: 8,
    },
    name: { fontSize: 18, fontWeight: "bold" },
});
