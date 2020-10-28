import React from 'react';
import { View } from 'react-native';
import MainNavigator from "./src/router";

export default function App() {
  return (
    <View style={{flex: 1}}>
      <MainNavigator/>
    </View>
  );
}