// src/components/QIcon.js
import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function QIcon({ size = 28, style = {} }) {
  return (
    <Image
      source={require('../assets/logo.jpg')} // replace with the correct path to your logo
      style={[styles.image, { width: size, height: size }, style]}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 4,
  },
});
