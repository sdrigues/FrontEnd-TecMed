import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//paginas
import Home from '../pages/Tela Inicial';
import SignOut from '../pages/Login';
import Financeiro from '../pages/Financeiro';
import RedeMedica from '../pages/Rede_Medica';
import EmitirGuia from '../pages/Emitir_Guia';

//custom drawer
import DrawerContent from '../components/customDrawer';

//custom TopButtom
import Guias from './ButtonMenuGuias.routes';

const Drawer = createDrawerNavigator();


export default function RootNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Guias" component={Guias} />
      <Drawer.Screen name="Financeiro" component={Financeiro} />
      <Drawer.Screen name="RedeMedica" component={RedeMedica} />
      <Drawer.Screen name="EmitirGuia" component={EmitirGuia} />
      <Drawer.Screen name="SignOut" component={SignOut} />
    </Drawer.Navigator>
  );
};