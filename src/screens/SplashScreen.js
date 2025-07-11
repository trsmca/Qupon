// //import React, { useEffect, useRef } from "react";
// //import { View, Animated, StyleSheet, Text } from "react-native";

// //export default function SplashScreen({ navigation }) {
// //    const scaleAnim = useRef(new Animated.Value(1)).current;
// //    const opacityAnim = useRef(new Animated.Value(1)).current;

// //    useEffect(() => {
// //        Animated.sequence([
// //            Animated.timing(scaleAnim, {
// //                toValue: 0.5,
// //                duration: 1000,
// //                useNativeDriver: true,
// //            }),
// //            Animated.timing(opacityAnim, {
// //                toValue: 0,
// //                duration: 500,
// //                useNativeDriver: true,
// //            }),
// //        ]).start(() => {
// //            navigation.replace("Home");
// //        });
// //    }, []);

// //    return (
// //        <View style={styles.container}>
// //            <Animated.Text
// //                style={[
// //                    styles.qText,
// //                    { transform: [{ scale: scaleAnim }], opacity: opacityAnim },
// //                ]}
// //            >
// //                Q
// //            </Animated.Text>
// //            <Text style={styles.appName}>Qupon</Text>
// //        </View>
// //    );
// //}

// //const styles = StyleSheet.create({
// //    container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff" },
// //    qText: { fontSize: 120, fontWeight: "bold", color: "#B71C1C" },
// //    appName: { fontSize: 28, marginTop: 16, color: "#333" },
// //});
// // import React, { useEffect, useRef } from "react";
// // import {
// //     View,
// //     Text,
// //     Animated,
// //     StyleSheet,
// //     Dimensions
// // } from "react-native";

// // export default function SplashScreen({ navigation }) {
// //     const scaleAnim = useRef(new Animated.Value(3)).current; // Start large
// //     const opacityAnim = useRef(new Animated.Value(0)).current; // App name hidden

// //     useEffect(() => {
// //         // Start animation
// //         Animated.sequence([
// //             Animated.timing(scaleAnim, {
// //                 toValue: 1,
// //                 duration: 1500,
// //                 useNativeDriver: true,
// //             }),
// //             Animated.timing(opacityAnim, {
// //                 toValue: 1,
// //                 duration: 800,
// //                 useNativeDriver: true,
// //             }),
// //         ]).start();

// //         // Navigate after 3 seconds
// //         const timeout = setTimeout(() => {
// //             navigation.replace("Login");
// //         }, 3000);

// //         return () => clearTimeout(timeout);
// //     }, [navigation]);

// //     return (
// //         <View style={styles.container}>
// //             <Animated.Text
// //                 style={[
// //                     styles.logo,
// //                     { transform: [{ scale: scaleAnim }] }
// //                 ]}
// //             >
// //                 Q
// //             </Animated.Text>
// //             <Animated.Text style={[styles.appName, { opacity: opacityAnim }]}>
// //                 Qupon
// //             </Animated.Text>
// //         </View>
// //     );
// // }

// // const { width, height } = Dimensions.get("window");

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         backgroundColor: "#B71C1C", // Deep red
// //         alignItems: "center",
// //         justifyContent: "center",
// //     },
// //     logo: {
// //         fontSize: 120,
// //         color: "#fff",
// //         fontWeight: "bold",
// //     },
// //     appName: {
// //         fontSize: 28,
// //         color: "#fff",
// //         marginTop: 20,
// //         fontWeight: "600",
// //     },
// // });

// import React, { useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   Animated,
//   StyleSheet,
//   Dimensions,
//   Image,
// } from 'react-native';

// export default function SplashScreen({ navigation }) {
//   const scaleAnim = useRef(new Animated.Value(3)).current; // Start large
//   const opacityAnim = useRef(new Animated.Value(0)).current; // App name hidden

//   useEffect(() => {
//     // Start animation
//     Animated.sequence([
//       Animated.timing(scaleAnim, {
//         toValue: 1,
//         duration: 1500,
//         useNativeDriver: true,
//       }),
//       Animated.timing(opacityAnim, {
//         toValue: 1,
//         duration: 800,
//         useNativeDriver: true,
//       }),
//     ]).start();

//     // Navigate after 3 seconds
//     const timeout = setTimeout(() => {
//       navigation.replace('Login');
//     }, 3000);

//     return () => clearTimeout(timeout);
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
//       <Animated.Image
//         source={require('../assets/logo.png')} // ✅ Adjust the path if needed
//         style={[
//           styles.logo,
//           {
//             transform: [{ scale: scaleAnim }],
//           },
//         ]}
//         resizeMode="contain"
//       />
//       <Animated.Text style={[styles.appName, { opacity: opacityAnim }]}>
//         Qupon
//       </Animated.Text>
//     </View>
//   );
// }

// const { width, height } = Dimensions.get('window');

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#B71C1C', // Deep red
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logo: {
//     width: 120,
//     height: 120,
//     marginBottom: 10,
//   },
//   appName: {
//     fontSize: 28,
//     color: '#fff',
//     marginTop: 20,
//     fontWeight: '600',
//   },
// });
import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
// import logo from "../assets/logo.png";
export default function SplashScreen({ navigation }) {
  const scaleAnim = useRef(new Animated.Value(3)).current; // Start large
  const opacityAnim = useRef(new Animated.Value(0)).current; // App name hidden

  useEffect(() => {
    // Start animation
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    // Navigate after 3 seconds
    const timeout = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/logo.jpg')} // ✅ Adjust the path if needed
        style={[
          styles.logo,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
        resizeMode="contain"
      />
      <Animated.Text style={[styles.appName, { opacity: opacityAnim }]}>
        Qupon
      </Animated.Text>
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B71C1C', // Deep red
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  appName: {
    fontSize: 28,
    color: '#fff',
    marginTop: 20,
    fontWeight: '600',
  },
});
