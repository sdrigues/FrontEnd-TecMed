import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Home from './pages/Tela Inicial';


const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
     }}
     >
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ title: null }}
      />
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: null }}
      />
    </Stack.Navigator>
  );
}