import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigation} from '@react-navigation/stack';
import homeScreen from './assets/screen/homeScreen';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

const App = createStackNavigation({
  // <View></View>
  {//hdhjdjd}
  Home:{screen}
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
