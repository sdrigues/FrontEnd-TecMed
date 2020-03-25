import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
//pages
import Login from '../pages/Login';
import Cadastrar from '../pages/Cadastrar';
import Qrcode from '../pages/QrCode_Guias';
import Solicitante from '../pages/Emitir_Guia/Solicitante';
import Prestador from '../pages/Emitir_Guia/Prestador';

//Routes
import Home from './Drawer_Menu';



const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Login"  component={Login}/>
      <Stack.Screen name="Cadastrar" component={Cadastrar} />
      <Stack.Screen name="Home"  component={Home}/>
      <Stack.Screen name="Qrcode" component={Qrcode} />
      <Stack.Screen name="Solicitante" component={Solicitante} initialParams={{solicitante: 'escolha' }}/>
      <Stack.Screen name="Prestador" component={Prestador} initialParams={{prestador: 'escolha' }}/>
    </Stack.Navigator>
  );
}