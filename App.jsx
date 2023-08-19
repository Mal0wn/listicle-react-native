/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView
} from 'react-native';
import Chair from './Chair';
import Table from './Table';

function App() {

  return (
    <SafeAreaView>
      <View>
        <Chair/>
        <Table/>
      </View>
    </SafeAreaView>
     
  );
}

const styles = StyleSheet.create({
  
});

export default App;
