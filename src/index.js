/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Routes from './routes/routes';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App(){
  return(
    <PaperProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </PaperProvider>
    
  );
}