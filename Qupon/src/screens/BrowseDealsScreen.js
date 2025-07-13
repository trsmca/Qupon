import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  StyleSheet,
  ScrollView,
} from 'react-native';

// Categories (same as CategoriesScreen.js, with icons)
const categories = [
  { id: '1', name: 'Food & Dining', image: require('../assets/food.png') },
  { id: '2', name: 'Fashion', image: require('../assets/fashion.png') },
  { id: '3', name: 'Travel', image: require('../assets/travel.png') },
  { id: '4', name: 'Beauty & Health', image: require('../assets/vlog.png') },
  { id: '5', name: 'Tech', image: require('../assets/tech.png') },
  {
    id: '6',
    name: 'TV, Audio/Video & Movies',
    image: require('../assets/tech.png'),
  },
  { id: '7', name: 'Entertainment', image: require('../assets/vlog.png') },
  { id: '8', name: 'Mobiles & Tablets', image: require('../assets/tech.png') },
  {
    id: '9',
    name: 'Computers, Laptops & Gaming',
    image: require('../assets/tech.png'),
  },
  {
    id: '10',
    name: 'Home Furnishing & Decor',
    image: require('../assets/food.png'),
  },
  { id: '11', name: 'Appliances', image: require('../assets/food.png') },
  { id: '12', name: 'Recharge', image: require('../assets/tech.png') },
  {
    id: '13',
    name: 'Cameras & Accessories',
    image: require('../assets/vlog.png'),
  },
];

export default function BrowseDealsScreen({ navigation }) {
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const coupons = [
    {
      id: '1',
      brand: 'Starbucks',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/45/Starbucks_Coffee_Logo.svg',
      expiry: '2025-12-31',
      discount: 40,
      originalPrice: 1000,
      terms: 'Valid at all outlets. Not combinable with other offers.',
    },
    {
      id: '2',
      brand: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      expiry: '2025-10-15',
      discount: 30,
      originalPrice: 2000,
      terms: 'Applicable only on electronics category.',
    },
    {
      id: '3',
      brand: 'Zomato',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png',
      expiry: '2025-09-01',
      discount: 25,
      originalPrice: 500,
      terms: 'Valid for dine-in only.',
    },
    {
      id: '4',
      brand: 'Swiggy',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Swiggy_logo.svg',
      expiry: '2025-12-15',
      discount: 20,
      originalPrice: 400,
      terms: 'Valid for new users only.',
    },
    {
      id: '5',
      brand: 'Myntra',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Myntra_Logo.png',
      expiry: '2025-08-30',
      discount: 35,
      originalPrice: 1500,
      terms: 'Applicable on fashion category.',
    },
    {
      id: '6',
      brand: 'Flipkart',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Flipkart_logo.png',
      expiry: '2025-11-20',
      discount: 50,
      originalPrice: 3000,
      terms: 'Valid on select electronics.',
    },
    {
      id: '7',
      brand: "Domino's",
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Dominos_pizza_logo.svg',
      expiry: '2025-07-31',
      discount: 15,
      originalPrice: 600,
      terms: 'Minimum order ₹500.',
    },
    {
      id: '8',
      brand: 'Uber',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png',
      expiry: '2025-10-01',
      discount: 10,
      originalPrice: 800,
      terms: 'Valid for first ride only.',
    },
    {
      id: '9',
      brand: 'Spotify',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
      expiry: '2025-09-15',
      discount: 60,
      originalPrice: 1200,
      terms: 'Applicable for 3-month premium subscription.',
    },
    {
      id: '10',
      brand: 'Apple',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      expiry: '2025-12-31',
      discount: 5,
      originalPrice: 5000,
      terms: 'Valid on accessories only.',
    },
  ];

  // For demo, filter by brand name containing category name (case-insensitive)
  const filteredCoupons = selectedCategory
    ? coupons.filter(c =>
        c.brand
          .toLowerCase()
          .includes(selectedCategory.name.split(' ')[0].toLowerCase()),
      )
    : coupons;

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.catItem,
        selectedCategory?.id === item.id && styles.catItemSelected,
      ]}
      onPress={() =>
        setSelectedCategory(item.id === selectedCategory?.id ? null : item)
      }
      activeOpacity={0.7}
    >
      <Image source={item.image} style={styles.catIcon} />
      <Text
        style={[
          styles.catLabel,
          selectedCategory?.id === item.id && styles.catLabelSelected,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.logo }} style={styles.logo} />
      <View style={{ flex: 1 }}>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.code}>Coupon Code: ****</Text>
        <Text style={styles.expiry}>Expiry: {item.expiry}</Text>
        <Text style={styles.discount}>Discount: {item.discount}% off</Text>
        <Text style={styles.price}>
          Price: ₹{(item.originalPrice * 0.25).toFixed(2)}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.buyButton}
        onPress={() => setSelectedCoupon(item)}
      >
        <Text style={styles.buyText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Horizontal categories nav (commented out for now)
      <View style={styles.catNavWrapper}>
          <FlatList
              data={categories}
              renderItem={renderCategory}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.catNav}
          />
      </View>
      */}
      <FlatList
        data={filteredCoupons}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <Modal
        visible={selectedCoupon !== null}
        transparent
        animationType="slide"
        onRequestClose={() => setSelectedCoupon(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Terms & Conditions</Text>
            <Text style={styles.modalText}>{selectedCoupon?.terms}</Text>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => {
                setSelectedCoupon(null);
                navigation.navigate('Payment', { coupon: selectedCoupon });
              }}
            >
              <Text style={styles.confirmText}>Agree & Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setSelectedCoupon(null)}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  catNavWrapper: {
    marginBottom: 10,
  },
  catNav: {
    paddingVertical: 6,
    paddingHorizontal: 2,
  },
  catItem: {
    alignItems: 'center',
    marginRight: 16,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#f7f7f7',
    flexDirection: 'column',
    minWidth: 80,
  },
  catItemSelected: {
    backgroundColor: '#B71C1C',
  },
  catIcon: {
    width: 28,
    height: 28,
    marginBottom: 2,
    resizeMode: 'contain',
  },
  catLabel: {
    fontSize: 12,
    color: '#222',
    textAlign: 'center',
  },
  catLabelSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
  },
  logo: { width: 50, height: 50, resizeMode: 'contain', marginRight: 12 },
  brand: { fontSize: 18, fontWeight: 'bold' },
  code: { fontSize: 14, color: '#555' },
  expiry: { fontSize: 14, color: '#555' },
  discount: { fontSize: 14, color: '#555' },
  price: { fontSize: 14, color: '#333', fontWeight: 'bold' },
  buyButton: {
    backgroundColor: '#B71C1C',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  buyText: { color: '#fff', fontWeight: 'bold' },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
  },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  modalText: { fontSize: 16, marginBottom: 20 },
  confirmButton: {
    backgroundColor: '#388E3C',
    paddingVertical: 10,
    borderRadius: 4,
    marginBottom: 10,
  },
  confirmText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  cancelButton: {
    backgroundColor: '#B71C1C',
    paddingVertical: 10,
    borderRadius: 4,
  },
  cancelText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});
