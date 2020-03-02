import React from 'react';
import {
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import User from '../../assets/images/User.png';
import {
    ViewPerfil,
    NomeUsuario,
    BtnPerfil,
    ImagemUsuaro,
    TxtBtnPerfil,
    ConteudoMenu,
    ViewBntSingOut
} from './styles';

export default function DrawerContent({props, navigation}) {
  return (
    <DrawerContentScrollView {...props}>

        <ViewPerfil>
            <ImagemUsuaro source={User}/>
            <NomeUsuario>Samuel</NomeUsuario>
        </ViewPerfil>
        <BtnPerfil>
            <TxtBtnPerfil>
                Editar Perfil
            </TxtBtnPerfil>
        </BtnPerfil>
        <ConteudoMenu>
            <DrawerItem {...props}
            label="Home"
            onPress={() => navigation.navigate('Home')}
            labelStyle={{ color: '#5EE0B6', fontSize: 17, marginLeft: 30} }
          />
          <DrawerItem
            label="Minhas Guias"
            onPress={() => navigation.navigate('Guias')}
            labelStyle={{ color: '#5EE0B6', fontSize: 17, paddingLeft: 30} }
          />
            <DrawerItem
                label="Financeiro"
                onPress={() => navigation.navigate('Financeiro') }
                labelStyle={{ color: '#5EE0B6', fontSize: 17, paddingLeft: 30} }
            />
              <DrawerItem
            label="Rede Médica"
            onPress={() => navigation.navigate('RedeMedica') }
            labelStyle={{ color: '#5EE0B6', fontSize: 17, paddingLeft: 30} }
          />
              <DrawerItem
            label="Emitir Guia"
            onPress={() => navigation.navigate('EmitirGuia') }
            labelStyle={{ 
                backgroundColor: '#5EE0B6', 
                color: '#FFF',  
                fontSize: 17, 
                marginTop: 20,
                marginLeft: 30, 
                width: 200,
                height: 50,
                paddingLeft: 50,
                paddingTop: 10,
                borderRadius: 9,
            }}
          />
        </ConteudoMenu>

        <ViewBntSingOut>
          <DrawerItem {...props}
            label="Sign Out"
            onPress={() => navigation.pop()}
            labelStyle={{ color: '#5EE0B6', fontSize: 17, paddingLeft: 85} }
          />
        </ViewBntSingOut>
    </DrawerContentScrollView>
  );
}