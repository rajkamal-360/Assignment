import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Dashboard from './src/screens/Dashboard';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Dashboard />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});

export default App;
