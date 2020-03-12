import React from 'react';

import {
    Container,
    ViewTop,
    HeaderView,
    BtnOpenDrawer,
    Title,
    LogoImg,
    SubTitleTop,
    ViewCard,
    TitleCard,
    SubTitleCard,
    ViewConteudo,
    ViewTitle,
    ViewSubTitle,
    ValConsultas,
    ConsText,
    ViewButtonMenu,
    Image,

} from './styles';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../../assets/images/Logo.jpg';

export default function TelaInicial({ navigation }) {
    return (
        <Container>
            <HeaderView>
                <BtnOpenDrawer onPress={() => navigation.openDrawer()} >
                    <Icon name="reorder" size={35} color="rgba(0,0,0,0.5)" />
                </BtnOpenDrawer>
                <LogoImg source={Logo} />
            </HeaderView>
            <ViewTop>
                <Title>Bem-vindo Samuel{}</Title>
                <SubTitleTop>Resumo Próximos 30 Dias</SubTitleTop>
            </ViewTop>

            <ViewCard onPress={() => navigation.navigate('Guias') } >
                <ViewTitle>
                    <TitleCard>Consultas Pendentes</TitleCard>
                </ViewTitle>
                <ViewSubTitle>
                    <SubTitleCard>próximos 30 Dias</SubTitleCard>
                </ViewSubTitle>

                <ViewConteudo>
                    <ConsText>Total: </ConsText>
                    <ValConsultas>1</ValConsultas>
                </ViewConteudo>
            </ViewCard>
            <ViewButtonMenu>
                <ActionButton buttonColor="#5EE0B6" hideShadow={true} >
                    <ActionButton.Item buttonColor='#5EE0B6' title="Minhas Guias" onPress={() => navigation.navigate('Guias')}>
                        <Icon name="assignment" size={30} color="rgba(255,255,255,0.9)" />

                    </ActionButton.Item >

                    <ActionButton.Item buttonColor='#5EE0B6' title="Financeiro" onPress={() => navigation.navigate('Financeiro')}>
                        <Icon name="monetization-on" size={30} color="rgba(255,255,255,0.9)"/>

                    </ActionButton.Item>

                    <ActionButton.Item buttonColor='#5EE0B6' title="Rede Credenciada" onPress={() => navigation.navigate('RedeMedica')}>
                        <Icon name="search" size={30} color="rgba(255,255,255,0.9)"/>

                    </ActionButton.Item>
                </ActionButton>
            </ViewButtonMenu>
        </Container>
    );
}