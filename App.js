import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './app/screens/homeScreen';

const App = createStackNavigator({
  Home: {screen:HomeScreen},,,,,
},
{
  headerMode:'none',
  navigationOptions:{
    headerVisible:false,
  }
}
)
export default App;

