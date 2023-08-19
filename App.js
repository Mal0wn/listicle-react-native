/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView, 
  Text
} from 'react-native';
import Chair from './Chair';
import Table from './Table';

const App = () => {

  const [theme, setTheme] = useState('light')

  return (
    <SafeAreaView>
      <Text style={{margin: 16, fontSize : 16}} onPress={()=> setTheme('dark')}>Make Theme Dark</Text>
      <View>
        <Chair theme={theme}/>
        <Table/>
      </View>
    </SafeAreaView>
     
  );
}

const styles = StyleSheet.create({
  
});

export default App;
