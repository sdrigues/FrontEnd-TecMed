import React from 'react';
import { Animated } from 'react-native';

import {
    Container,
    ViewTop,
    Title,
    LogoImg,
    ViewCard,
    TitleCard,
    SubTitleCard,
    TotalText,
    ValCard,
    ViewConteudo,
    ViewTitle,
    ViewSubTitle,
    ValConsultas,
    ConsText,
    ViewButtonMenu,
    BtnMenu,
    BtnSubMenu,


} from './styles';
import FabButton from '../../components/FabButton';

import Logo from '../../assets/images/Logo.jpg';

export default function TelaInicial(){
    return(
       <Container>
           <ViewTop>
               <Title>DashBoard</Title>
               <LogoImg source={Logo}/>
           </ViewTop>

           <ViewCard>
                <ViewTitle>
                    <TitleCard>Consultas</TitleCard>
                </ViewTitle>
                <ViewSubTitle>
                    <SubTitleCard>Ultimos 30 Dias</SubTitleCard>
                </ViewSubTitle>
                
                <ViewConteudo>
                    <ConsText>Total: </ConsText>
                    <ValConsultas>999</ValConsultas>  
                </ViewConteudo>
                 
            </ViewCard>
            <ViewCard>
                <ViewTitle>
                    <TitleCard>Coparticipação</TitleCard>
                </ViewTitle>
                
                <ViewSubTitle>
                    <SubTitleCard>Ultimos 30 Dias</SubTitleCard>
                </ViewSubTitle>
                
                <ViewConteudo>
                    <TotalText>Total: R$ </TotalText>
                    <ValCard>123456,90</ValCard>  
                </ViewConteudo>
            </ViewCard>
            <ViewButtonMenu>
                <FabButton />
            </ViewButtonMenu>
       </Container>
    );
}