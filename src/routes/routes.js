import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
//pages
import Login from '../pages/Login';
import Cadastrar from '../pages/Cadastrar';
//Routes
import Home from './Drawer_Menu';



const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Login"  component={Login}/>
      <Stack.Screen name="Cadastrar" component={Cadastrar} />
      <Stack.Screen name="Home"  component={Home}/>
      
    </Stack.Navigator>
  );
}