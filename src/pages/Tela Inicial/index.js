import React from 'react';
import { Animated } from 'react-native';

import {
    Container,
    ViewTop,
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

} from './styles';
import FabButton from '../../components/FabButton/FabButton';

import Logo from '../../assets/images/Logo.jpg';

export default function TelaInicial(){
    return(
       <Container>
           <ViewTop>
           <LogoImg source={Logo}/>
           <Title>Bem Vindo Samuel{}</Title>
            <SubTitleTop>Resumo Proxmos 30 Dias</SubTitleTop>
            </ViewTop>

           <ViewCard>
                <ViewTitle>
                    <TitleCard>Consultas Pendetes</TitleCard>
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
                <FabButton />
            </ViewButtonMenu>
       </Container>
    );
}