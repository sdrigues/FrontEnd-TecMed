import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
//pages
import Login from '../pages/Login';
import Cadastrar from '../pages/Cadastrar';

//custom component
import Guias from './TopButtonNavigation.routes';
//Routes
import Home from './Drawer_Menu';



const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Login"  component={Login}  options={{ title: null }} />
      <Stack.Screen name="Cadastrar" component={Cadastrar} />
      <Stack.Screen name="Home"  component={Home}/>
      <Stack.Screen name="Guias" component={Guias} />
      
    </Stack.Navigator>
  );
}