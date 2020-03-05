import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

//paginas 

import GuiasEfetuadas from '../pages/Minhas_Guias/Guias Realizadas';
import GuiasPendentes from '../pages/Minhas_Guias/Guias_Pendentes';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="GuiasPendentes"
      activeColor="#FFF"
      inactiveColor="#FAFAFA"

      barStyle={{ backgroundColor: '#5EE0B6' }}
    >
      <Tab.Screen name="GuiasEfetuadas" component={GuiasEfetuadas} options={{
        tabBarLabel: 'Efetuadas',
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color="#FFF" size={23} />
        ),
      }}
      />
      <Tab.Screen name="GuiasPendentes" component={GuiasPendentes} options={{
        tabBarLabel: 'Pendentes',
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color="#FFF" size={23} />
        ),
      }}
      />
    </Tab.Navigator>
  );
}