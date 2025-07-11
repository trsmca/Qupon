// src/components/QIcon.js
import React from "react";
import { Text } from "react-native";

export default function QIcon({ size = 28, color = "#fff", style = {} }) {
    return (
        <Text style={[{ fontSize: size, fontWeight: "bold", color }, style]}>
            Q
        </Text>
    );
}
