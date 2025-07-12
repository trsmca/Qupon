// src/screens/OtpScreen.js
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

export default function OtpScreen({ route, navigation }) {
  const { phone } = route.params;
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (/^\d*$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      if (text && index < 5) {
        inputs.current[index + 1].focus();
      }
      if (!text && index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  const handleVerify = () => {
    if (otp.join('').length !== 6) {
      Alert.alert('Enter 6-digit OTP');
      return;
    }
    Alert.alert('OTP Verified!');
    navigation.replace('ProfileCompletion');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1, backgroundColor: '#F9F9F9' }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.outerContainer}>
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backArrow}>{'\u2190'}</Text>
            </TouchableOpacity>
            <Text style={styles.heading}>OTP Verification</Text>
            <Text style={styles.codeSent}>
              Code sent to +91 {phone.slice(0, 2)}****{phone.slice(-2)}
            </Text>
            <View style={styles.otpBoxesContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={el => (inputs.current[index] = el)}
                  style={styles.otpBox}
                  keyboardType="numeric"
                  maxLength={1}
                  value={digit}
                  onChangeText={text => handleChange(text, index)}
                  returnKeyType="next"
                />
              ))}
            </View>
            <TouchableOpacity style={styles.button} onPress={handleVerify}>
              <Text style={styles.buttonText}>Verify OTP</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.resend}>Resend OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 28,
    paddingVertical: 36,
    paddingHorizontal: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 18,
    top: 18,
    zIndex: 2,
    padding: 4,
  },
  backArrow: {
    fontSize: 22,
    color: '#222',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
    marginTop: 0,
    textAlign: 'center',
  },
  codeSent: {
    fontSize: 14,
    color: '#444',
    marginBottom: 28,
    textAlign: 'center',
  },
  otpBoxesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 28,
    marginTop: 8,
  },
  otpBox: {
    width: 44,
    height: 44,
    borderWidth: 1.5,
    borderColor: '#ddd',
    borderRadius: 10,
    marginHorizontal: 6,
    fontSize: 22,
    color: '#222',
    textAlign: 'center',
    backgroundColor: '#fafafa',
  },
  button: {
    backgroundColor: '#B71C1C',
    borderRadius: 8,
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center',
    marginBottom: 18,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  resend: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginTop: 10,
  },
});
