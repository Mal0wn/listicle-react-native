/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView, 
} from 'react-native';
import Splash from './src/screens/auth/Splash';
import SignUp from './src/screens/auth/Signup';

const App = () => {

  return (
    <SafeAreaView>
     <SignUp/>
    </SafeAreaView>
     
  );
}

export default App;
