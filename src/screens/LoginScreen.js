import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { styles } from '../styles';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();

  const handleGetOtp = () => {
    if (phone.length !== 10) {
      Alert.alert(
        'Invalid Phone Number',
        'Please enter a 10-digit phone number.',
      );
      return;
    }
    navigation.navigate('Otp', { phone });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image
            source={require('../assets/logo.jpg')}
            style={[
              styles.image,
              {
                width: 120,
                height: 120,
                alignSelf: 'center',
              },
            ]}
            resizeMode="contain"
          />

          <Text style={styles.appName}>Qupon</Text>
          <Text style={styles.subtitle}>
            Because every deal deserves a second chance.
          </Text>

          <View style={styles.phoneContainer}>
            <Text style={styles.countryCode}>+91</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter phone number"
              keyboardType="numeric"
              value={phone}
              maxLength={10}
              onChangeText={setPhone}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleGetOtp}>
            <Text style={styles.buttonText}>Get OTP</Text>
          </TouchableOpacity>

          <Text style={styles.terms}>
            By continuing, you agree to{' '}
            <Text
              style={{ color: 'blue', textDecorationLine: 'underline' }}
              onPress={() => navigation.navigate('Terms')}
            >
              Terms and Conditions
            </Text>
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
