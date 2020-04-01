import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
//pages
import Login from '../pages/Login';
import Cadastrar from '../pages/Cadastrar';
import Qrcode from '../pages/QrCode_Guias';
import Clinicas from '../pages/Guias/Clinicas';
import Agendamento from '../pages/Guias/Agendamento';
import LocalAtendimento from '../pages/Guias/Local_Atendimento';
import TipoConsulta from '../pages/Guias/Tipo_Consulta';
import Guia from '../pages/Guias/Emissao_Guias';

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
      <Stack.Screen name="Clinicas" component={Clinicas} />
      <Stack.Screen name="Agendamento" component={Agendamento}/>
      <Stack.Screen name="LocalAtendimento" component={LocalAtendimento} /> 
      <Stack.Screen name="TipoConsulta" component={TipoConsulta}/>
      <Stack.Screen name="Guia" component={Guia}/>
    </Stack.Navigator>
  );
}