import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//paginas
import Home from '../pages/Tela Inicial';
import SignOut from '../pages/Login';
import Financeiro from '../pages/Financeiro';

//custom drawer
import DrawerContent from '../components/customDrawer';

//custom TopButtom
import Guias from './TopButtonNavigation.routes';

const Drawer = createDrawerNavigator();


export default function RootNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Guias" component={Guias} />
      <Drawer.Screen name="Financeiro" component={Financeiro} />
      <Drawer.Screen name="SignOut" component={SignOut} />
    </Drawer.Navigator>
  );
};