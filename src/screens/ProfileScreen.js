import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const mockPersonalInfo = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  dob: '1990-01-01',
  upi: 'john@upi',
};

const mockUploadedCoupons = [
  { id: '1', title: '50% OFF Starbucks', code: 'SAVE50' },
  { id: '2', title: '30% OFF Amazon', code: 'AMZ30' },
];

const mockBoughtCoupons = [
  { id: '1', title: '20% OFF Myntra', code: 'MYN20' },
  { id: '2', title: '₹100 Cashback Zomato', code: 'ZOM100' },
];

const TABS = [
  { key: 'personal', label: 'Personal Info' },
  { key: 'uploaded', label: 'Uploaded Coupons' },
  { key: 'bought', label: 'Bought Coupons' },
];

export default function ProfileScreen() {
  const [selectedTab, setSelectedTab] = useState('personal');

  const renderTabContent = () => {
    if (selectedTab === 'personal') {
      return (
        <View style={styles.section}>
          <Text style={styles.infoLabel}>
            First Name:{' '}
            <Text style={styles.infoValue}>{mockPersonalInfo.firstName}</Text>
          </Text>
          <Text style={styles.infoLabel}>
            Last Name:{' '}
            <Text style={styles.infoValue}>{mockPersonalInfo.lastName}</Text>
          </Text>
          <Text style={styles.infoLabel}>
            Email:{' '}
            <Text style={styles.infoValue}>{mockPersonalInfo.email}</Text>
          </Text>
          <Text style={styles.infoLabel}>
            DOB: <Text style={styles.infoValue}>{mockPersonalInfo.dob}</Text>
          </Text>
          <Text style={styles.infoLabel}>
            UPI: <Text style={styles.infoValue}>{mockPersonalInfo.upi}</Text>
          </Text>
        </View>
      );
    } else if (selectedTab === 'uploaded') {
      return (
        <FlatList
          data={mockUploadedCoupons}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.couponCard}>
              <Text style={styles.couponTitle}>{item.title}</Text>
              <Text style={styles.couponCode}>Code: {item.code}</Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No uploaded coupons.</Text>
          }
        />
      );
    } else if (selectedTab === 'bought') {
      return (
        <FlatList
          data={mockBoughtCoupons}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.couponCard}>
              <Text style={styles.couponTitle}>{item.title}</Text>
              <Text style={styles.couponCode}>Code: {item.code}</Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No bought coupons.</Text>
          }
        />
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {TABS.map(tab => (
          <TouchableOpacity
            key={tab.key}
            style={[styles.tab, selectedTab === tab.key && styles.tabSelected]}
            onPress={() => setSelectedTab(tab.key)}
          >
            <Text
              style={[
                styles.tabLabel,
                selectedTab === tab.key && styles.tabLabelSelected,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.content}>{renderTabContent()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f7f7f7',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  tabSelected: {
    backgroundColor: '#B71C1C',
  },
  tabLabel: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
  tabLabelSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 18,
  },
  section: {
    marginTop: 10,
  },
  infoLabel: {
    fontSize: 16,
    color: '#444',
    marginBottom: 6,
  },
  infoValue: {
    fontWeight: 'bold',
    color: '#222',
  },
  couponCard: {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  couponTitle: { fontSize: 16, fontWeight: 'bold', color: '#222' },
  couponCode: { fontSize: 14, color: '#B71C1C', marginTop: 4 },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 30,
    fontSize: 16,
  },
});
