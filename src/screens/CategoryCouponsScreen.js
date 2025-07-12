import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';

export default function CategoryCouponsScreen({ route }) {
  const { category } = route.params;
  const [search, setSearch] = useState('');

  // Placeholder coupons for demonstration
  const coupons = [
    { id: '1', title: '50% OFF at ' + category.name, code: 'SAVE50' },
    { id: '2', title: 'Buy 1 Get 1 Free at ' + category.name, code: 'B1G1' },
    { id: '3', title: '₹100 Cashback on ' + category.name, code: 'CASH100' },
  ];

  const filteredCoupons = coupons.filter(
    c =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{category.name} Coupons</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search coupons..."
        value={search}
        onChangeText={setSearch}
        placeholderTextColor="#888"
      />
      <FlatList
        data={filteredCoupons}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.couponCard}>
            <Text style={styles.couponTitle}>{item.title}</Text>
            <Text style={styles.couponCode}>Code: {item.code}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.noResults}>No coupons found.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  searchBar: {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 12,
    color: '#222',
  },
  noResults: {
    textAlign: 'center',
    color: '#888',
    marginTop: 30,
    fontSize: 16,
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
});
