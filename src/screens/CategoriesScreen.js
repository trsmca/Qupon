// src/screens/CategoriesScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Example categories with local icons and offer counts
const categories = [
  {
    id: '1',
    name: 'Food & Dining',
    image: require('../assets/food.png'),
  },
  {
    id: '2',
    name: 'Fashion',
    image: require('../assets/fashion.png'),
  },
  {
    id: '3',
    name: 'Travel',
    image: require('../assets/travel.png'),
  },
  {
    id: '4',
    name: 'Beauty & Health',
    image: require('../assets/vlog.png'),
  },
  { id: '5', name: 'Tech', image: require('../assets/tech.png') },
  {
    id: '6',
    name: 'TV, Audio/Video & Movies',
    image: require('../assets/tech.png'),
  },
  {
    id: '7',
    name: 'Entertainment',
    image: require('../assets/vlog.png'),
  },
  {
    id: '8',
    name: 'Mobiles & Tablets',
    image: require('../assets/tech.png'),
  },
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
  {
    id: '11',
    name: 'Appliances',
    image: require('../assets/food.png'),
  },
  {
    id: '12',
    name: 'Recharge',
    image: require('../assets/tech.png'),
  },
  {
    id: '13',
    name: 'Cameras & Accessories',
    image: require('../assets/vlog.png'),
  },
];

export default function CategoriesScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  const handleCategoryPress = category => {
    navigation.navigate('CategoryCoupons', { category });
  };

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(search.toLowerCase()),
  );

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() => handleCategoryPress(item)}
      activeOpacity={0.8}
    >
      <View style={styles.iconWrapper}>
        <Image
          source={item.image}
          style={styles.iconImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.categoryName}>{item.name}</Text>
      </View>
      <Text style={styles.chevron}>{'>'}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search categories..."
        value={search}
        onChangeText={setSearch}
        placeholderTextColor="#888"
      />
      <FlatList
        data={filteredCategories}
        renderItem={renderCategory}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.noResults}>No categories found.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fafafa' },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 18,
    marginBottom: 6,
    marginLeft: 18,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    margin: 14,
    marginBottom: 0,
    color: '#222',
  },
  noResults: {
    textAlign: 'center',
    color: '#888',
    marginTop: 30,
    fontSize: 16,
  },
  listContent: {
    paddingVertical: 12,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 14,
    marginVertical: 6,
    paddingVertical: 14,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  iconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconImage: {
    width: 28,
    height: 28,
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  chevron: {
    fontSize: 22,
    color: '#bbb',
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
