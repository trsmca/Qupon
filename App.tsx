/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
//import * as React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import LoginScreen from './src/screens/LoginScreen';
//import OtpScreen from './src/screens/OtpScreen';   

//export type RootStackParamList = {
//    Login: undefined;
//    Otp: { phone: string };
//};

//const Stack = createNativeStackNavigator<RootStackParamList>();

//export default function App() {
//    return (
//        <NavigationContainer>
//            <Stack.Navigator initialRouteName="Login">
//                <Stack.Screen
//                    name="Login"
//                    component={LoginScreen}
//                    options={{ headerShown: false }}
//                />
//                <Stack.Screen
//                    name="Otp"
//                    component={OtpScreen}
//                    options={{ headerShown: false }}
//                />
//            </Stack.Navigator>
//        </NavigationContainer>
//    );
//}
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
}
