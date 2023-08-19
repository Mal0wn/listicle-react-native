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
      <Text style={styles.themeHeader} onPress={()=> setTheme('dark')}>Make Theme Dark</Text>
      <View>
        <Chair theme={theme}/>
        <Table/>
      </View>
    </SafeAreaView>
     
  );
}


/**
 *  When we not depend a state we put style in a object style and we called them in a components with this syntax : 
 * style={styles.nameOfProperty}
 */
const styles = StyleSheet.create({
  themeHeader : {margin: 16, fontSize : 16},
});

export default App;
