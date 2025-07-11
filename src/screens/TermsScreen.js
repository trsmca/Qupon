import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function TermsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Terms & Conditions</Text>

      <Text style={styles.text}>
        Qupon – Terms and Conditions{'\n\n'}
        Welcome to Qupon! By accessing or using our app and services, you agree
        to comply with and be bound by the following Terms and Conditions.
        Please read them carefully.{'\n\n'}
        1. Definitions{'\n'}• “Qupon”: The mobile application/platform operated
        by [Your Company Name].{'\n'}• “User”: Anyone who registers and uses the
        app.{'\n'}• “Coupon”: A valid and transferable promotional code.{'\n'}•
        “Admin”: The Qupon backend team that verifies coupons.{'\n\n'}
        2. Eligibility{'\n'}• Users must be 13+ years old (18+ under
        supervision).{'\n'}• UPI or bank linking is required for transactions.
        {'\n'}• Users must provide accurate and current information.{'\n\n'}
        3. User Account{'\n'}• Register via Google or mobile with OTP.{'\n'}•
        Maintain confidentiality of credentials.{'\n'}• UPI/bank is required for
        buying or selling.{'\n\n'}
        4. Coupon Uploading{'\n'}• Provide: Code, Expiry Date, Brand,
        Description, Screenshot or Terms.{'\n'}• Only valid and transferable
        coupons accepted.{'\n'}• Not accepted: IP/mobile locked, expired or used
        codes.{'\n\n'}
        5. Verification & Approval{'\n'}• All coupons are tested before listing.
        {'\n'}• Hidden until purchase.{'\n\n'}
        6. Purchase & Refunds{'\n'}• Admin verifies in real-time post-purchase.
        {'\n'}• Refunds issued if coupon is invalid/sold.{'\n'}• Payments go to
        Qupon’s official account.{'\n\n'}
        7. Profile Levels{'\n'}• Level 1: Default.{'\n'}• Level 2: 30+
        transactions → 1% discount/upload benefit.{'\n'}• Level 3: 67+ total →
        3% upload / 2% buy benefit.{'\n\n'}
        8. Admin Panel{'\n'}• Admin can reject invalid coupons.{'\n'}• Can
        withhold approval or notify users.{'\n\n'}
        9. User Obligations{'\n'}• No fake/reused/restricted coupons.{'\n'}•
        Fraud = ban, legal action, or suspension.{'\n\n'}
        10. Limitation of Liability{'\n'}• Not responsible for brand-side errors
        or user mistakes.{'\n\n'}
        11. Intellectual Property{'\n'}• All content is owned by Qupon. No reuse
        allowed.{'\n\n'}
        12. Modifications{'\n'}• Qupon can update terms anytime without notice.
        {'\n'}• Continued use = consent.{'\n\n'}
        13. Governing Law{'\n'}• Governed under Indian Law – Telangana
        jurisdiction.{'\n'}• Resolved by courts or arbitration.{'\n\n'}
        14. Contact{'\n'}
        Email: businessqupon@gmail.com{'\n'}
        Phone: [Insert Support Number]{'\n'}
        Address: [Insert Company Address]{'\n'}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});
