import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo & Title */}
      <View style={styles.logoContainer}>
        <View style={styles.logoRow}>
          <Image
            source={require('../assets/logo.jpg')}
            style={styles.logoImg}
          />
          <Text style={styles.logoText}>Qupon</Text>
        </View>
        <Text style={styles.tagline}>
          Because every deal deserves a second chance.
        </Text>
      </View>

      {/* Main CTA */}
      <Text style={styles.mainHeading}>
        Sell unused coupons.{'\n'}Buy deals for less.
      </Text>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => navigation.navigate('UploadCoupon')}
        >
          <Text style={styles.uploadText}>Upload Coupon</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.browseButton}
          onPress={() => navigation.navigate('BrowseDeals')}
        >
          <Text style={styles.browseText}>Browse Deals</Text>
        </TouchableOpacity>
      </View>

      {/* How it Works */}
      <Text style={styles.howHeading}>How it works</Text>

      <View style={styles.stepsContainer}>
        <View style={styles.step}>
          <Icon name="upload" size={36} style={styles.stepIcon} />
          <Text style={styles.stepTitle}>Upload</Text>
          <Text style={styles.stepDesc}>
            Submit your unused coupon to our platform.
          </Text>
        </View>

        <View style={styles.step}>
          <MaterialIcon
            name="currency-rupee"
            size={36}
            style={styles.stepIcon}
          />
          <Text style={styles.stepTitle}>Get Paid</Text>
          <Text style={styles.stepDesc}>
            Sellers receive 20 %{'\n'}of the coupon value after it is sold.
          </Text>
        </View>

        <View style={styles.step}>
          <Icon name="tag" size={36} style={styles.stepIcon} />
          <Text style={styles.stepTitle}>Score a Deal</Text>
          <Text style={styles.stepDesc}>
            Buyers get 75% OFF the coupon’s value and save big.
          </Text>
        </View>
      </View>

      {/* Contact Info */}
      <View style={styles.contactRow}>
        <View style={styles.contactLeft}>
          <Text style={styles.contactTitle}>Contact:</Text>
          <Text style={styles.email}>info@qupon.com</Text>
        </View>
        <View style={styles.contactRight}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://www.facebook.com/share/1FFdNCkPm4/?mibextid=wwXIfr',
              )
            }
            accessibilityLabel="Facebook"
          >
            <Icon name="facebook" size={24} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://x.com/_qupon?s=21&t=QXETnOLLjTYYRM5cun62Xw',
              )
            }
            accessibilityLabel="X"
          >
            <Icon name="twitter" size={24} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://www.instagram.com/qupon.india/profilecard/?igsh=MTVjb25vMW55Z2xyMA==',
              )
            }
            accessibilityLabel="Instagram"
          >
            <Icon name="instagram" size={24} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    minHeight: '100%',
    justifyContent: 'flex-start',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  logoImg: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginRight: 8,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#111',
    letterSpacing: 0.5,
  },
  tagline: {
    fontSize: 14,
    color: '#444',
    marginTop: 2,
    textAlign: 'center',
    marginBottom: 10,
  },
  mainHeading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 24,
    color: '#111',
    lineHeight: 36,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
    gap: 16,
  },
  uploadButton: {
    backgroundColor: '#B71C1C',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    marginRight: 10,
    minWidth: 160,
    alignItems: 'center',
  },
  uploadText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  browseButton: {
    borderColor: '#111',
    borderWidth: 2,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    minWidth: 160,
    alignItems: 'center',
  },
  browseText: { color: '#111', fontWeight: 'bold', fontSize: 16 },
  howHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    alignSelf: 'center',
    color: '#111',
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 60,
    width: '90%',
    alignSelf: 'center',
  },
  step: {
    width: '30%',
    alignItems: 'center',
  },
  stepIcon: {
    marginBottom: 8,
    color: '#111',
  },
  stepTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 2,
    color: '#111',
    textAlign: 'center',
  },
  stepDesc: {
    textAlign: 'center',
    fontSize: 13,
    marginTop: 6,
    color: '#444',
    lineHeight: 18,
  },
  contactRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: 30,
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
  },
  contactLeft: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  contactRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 28,
  },
  contactTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 6,
    color: '#111',
  },
  email: {
    fontSize: 15,
    color: '#444',
    marginBottom: 0,
  },
  socialIcon: {
    marginLeft: 0,
    marginRight: 18,
    color: '#111',
  },
});
