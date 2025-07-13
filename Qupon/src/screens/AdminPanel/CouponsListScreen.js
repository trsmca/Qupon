import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Modal,
    TextInput,
    TouchableOpacity,
    Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker"; // Install: npm i @react-native-picker/picker

export default function CouponsListScreen() {
    const [coupons, setCoupons] = useState([]);
    const [selectedCoupon, setSelectedCoupon] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [editCommission, setEditCommission] = useState("");
    const [editStatus, setEditStatus] = useState("");

    useEffect(() => {
        const dummyCoupons = [
            {
                id: "101",
                brand: "Amazon",
                discount: "40%",
                expiry: "2025-12-31",
                status: "Active",
                commission: 10,
            },
            {
                id: "102",
                brand: "Flipkart",
                discount: "50%",
                expiry: "2023-11-01",
                status: "Sold",
                commission: 12,
            },
            {
                id: "103",
                brand: "Myntra",
                discount: "30%",
                expiry: "2024-05-30",
                status: "Active",
                commission: 8,
            },
        ];

        const today = new Date();
        const processedCoupons = dummyCoupons.map((coupon) => {
            const expiryDate = new Date(coupon.expiry);
            let newStatus = coupon.status;

            if (coupon.status === "Sold" || expiryDate < today) {
                newStatus = "Blocked";
            }

            return { ...coupon, status: newStatus };
        });

        setCoupons(processedCoupons);
    }, []);

    const openEditModal = (coupon) => {
        setSelectedCoupon(coupon);
        setEditCommission(coupon.commission.toString());
        setEditStatus(coupon.status);
        setModalVisible(true);
    };

    const saveUpdates = () => {
        if (!selectedCoupon) return;

        const updatedCoupons = coupons.map((c) =>
            c.id === selectedCoupon.id
                ? { ...c, commission: parseFloat(editCommission), status: editStatus }
                : c
        );

        setCoupons(updatedCoupons);
        setModalVisible(false);
    };

    const getStatusStyle = (status) => {
        switch (status) {
            case "Active":
                return styles.statusActive;
            case "Sold":
                return styles.statusSold;
            case "Blocked":
                return styles.statusBlocked;
            default:
                return styles.statusDefault;
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>All Coupons</Text>
            <FlatList
                data={coupons}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.brand}>{item.brand}</Text>
                        <Text>Discount: {item.discount}</Text>
                        <Text>Expiry: {item.expiry}</Text>
                        <Text>Commission: {item.commission}%</Text>
                        <View style={[styles.statusBadge, getStatusStyle(item.status)]}>
                            <Text style={styles.statusText}>{item.status}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.editButton}
                            onPress={() => openEditModal(item)}
                        >
                            <Text style={styles.editButtonText}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

            {/* Modal for editing */}
            <Modal visible={modalVisible} animationType="slide" transparent>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Edit Coupon</Text>

                        <Text>Status:</Text>
                        <Picker
                            selectedValue={editStatus}
                            style={styles.picker}
                            onValueChange={(itemValue) => setEditStatus(itemValue)}
                        >
                            <Picker.Item label="Active" value="Active" />
                            <Picker.Item label="Sold" value="Sold" />
                            <Picker.Item label="Blocked" value="Blocked" />
                        </Picker>

                        <Text>Commission (%):</Text>
                        <TextInput
                            style={styles.input}
                            value={editCommission}
                            keyboardType="numeric"
                            onChangeText={(text) => setEditCommission(text)}
                        />

                        <View style={styles.modalButtons}>
                            <Button title="Save" onPress={saveUpdates} />
                            <Button title="Cancel" onPress={() => setModalVisible(false)} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    heading: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
    card: {
        padding: 12,
        marginBottom: 12,
        backgroundColor: "#f1f8e9",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#cfd8dc",
    },
    brand: { fontSize: 18, fontWeight: "bold" },
    statusBadge: {
        marginTop: 6,
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 4,
        alignSelf: "flex-start",
    },
    statusText: { color: "white", fontWeight: "bold" },
    statusActive: { backgroundColor: "#388e3c" },
    statusSold: { backgroundColor: "#fbc02d" },
    statusBlocked: { backgroundColor: "#d32f2f" },
    statusDefault: { backgroundColor: "#9e9e9e" },
    editButton: {
        marginTop: 8,
        backgroundColor: "#1976d2",
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
        alignSelf: "flex-start",
    },
    editButtonText: { color: "white", fontWeight: "bold" },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 8,
        width: "80%",
    },
    modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        padding: 8,
        marginVertical: 10,
    },
    modalButtons: { flexDirection: "row", justifyContent: "space-between" },
    picker: { height: 50, width: "100%" },
});
