import React from 'react';
import { Text } from 'react-native';
import { View, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Menu } from 'react-native-paper';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import OtpVerificationScreen from '../screens/OtpScreen';
import ProfileCompletionScreen from '../screens/ProfileCompletionScreen';
import HomeScreen from '../screens/HomeScreen';
import BrowseDealsScreen from '../screens/BrowseDealsScreen';
import UploadCouponScreen from '../screens/UploadCouponScreen';
import PaymentScreen from '../screens/PaymentScreen';
import PurchaseSuccessScreen from '../screens/PurchaseSuccessScreen';
import UsersListScreen from '../screens/AdminPanel/UsersListScreen';
import CouponsListScreen from '../screens/AdminPanel/CouponsListScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import TermsScreen from '../screens/TermsScreen';
import CategoryCouponsScreen from '../screens/CategoryCouponsScreen';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeDrawer({ navigation }) {
  const [menuVisible, setMenuVisible] = React.useState(false);

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#000' },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitle: () => (
          <View
            style={{ backgroundColor: '#000', borderRadius: 24, padding: 4 }}
          >
            <Image
              source={require('../assets/logo.jpg')}
              style={{
                width: 40,
                height: 40,
                resizeMode: 'contain',
                backgroundColor: '#000',
                borderRadius: 20,
              }}
            />
          </View>
        ),
        headerRight: () => (
          <View style={{ marginRight: 12 }}>
            <Menu
              visible={menuVisible}
              onDismiss={() => setMenuVisible(false)}
              anchor={
                <TouchableOpacity onPress={() => setMenuVisible(true)}>
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
                    }}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 14,
                    }}
                  />
                </TouchableOpacity>
              }
            >
              <Menu.Item
                onPress={() => {
                  setMenuVisible(false);
                  navigation.navigate('ProfileCompletion');
                }}
                title="Go to Profile"
              />
              <Menu.Item
                onPress={() => {
                  setMenuVisible(false);
                  navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                  });
                }}
                title="Log out"
              />
            </Menu>
          </View>
        ),
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="BrowseDeals" component={BrowseDealsScreen} />
      <Drawer.Screen name="UploadCoupon" component={UploadCouponScreen} />
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Users" component={UsersListScreen} />
      <Drawer.Screen name="Coupons" component={CouponsListScreen} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      {/* <Stack.Screen name="Home" component={HomeDrawer} /> */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Otp" component={OtpVerificationScreen} />
      <Stack.Screen
        name="ProfileCompletion"
        component={ProfileCompletionScreen}
      />
      <Stack.Screen name="Home" component={HomeDrawer} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="PurchaseSuccess" component={PurchaseSuccessScreen} />
      <Stack.Screen name="Terms" component={TermsScreen} />
      <Stack.Screen
        name="CategoryCoupons"
        component={CategoryCouponsScreen}
        options={{ headerShown: true, title: '' }}
      />
    </Stack.Navigator>
  );
}
