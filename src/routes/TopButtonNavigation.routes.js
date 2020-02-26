import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//paginas 

import GuiasEfetuadas from '../pages/Minhas_Guias/Guias Realizadas';
import GuiasPendentes from '../pages/Minhas_Guias/Guias_Pendentes';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="GuiasEfetuadas" component={GuiasEfetuadas} options={{ tabBarLabel: 'Efetuadas' }} />
      <Tab.Screen name="GuiasPendentes" component={GuiasPendentes} options={{ tabBarLabel: 'Pendentes' }} />
    </Tab.Navigator>
  );
}