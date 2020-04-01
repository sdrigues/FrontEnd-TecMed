import React from 'react';
import {StatusBar} from 'react-native';
import { 
    Container,
    ViewTop,
    BtnVoltar,
    Title,
    ViewCard,
    ViewTitle,
    TitleCard,
    ViewSubTitle,
    SubTitleCard,
    ViewConteudo,
    ConsText,
    ValConsultas,
    TotalText,
    ValCard,
} from './styled';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TelaInicial({ navigation }){


    return(
       <Container>
           <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
           <ViewTop>
               <BtnVoltar onPress={() => navigation.goBack()}>
                   <Icon name="keyboard-arrow-left" size={30} color="#000" />
               </BtnVoltar>
               <Title>DashBoard</Title>
           </ViewTop>

           <ViewCard>
                <ViewTitle>
                    <TitleCard>Consultas Realizadas</TitleCard>
                </ViewTitle>
                <ViewSubTitle>
                    <SubTitleCard>Ultimos 30 Dias</SubTitleCard>
                </ViewSubTitle>
                
                <ViewConteudo>
                    <ConsText>Total: </ConsText>
                    <ValConsultas>2</ValConsultas>  
                </ViewConteudo>
            </ViewCard>

            <ViewCard>
                <ViewTitle>
                    <TitleCard>Guias Disponíveis:</TitleCard>
                </ViewTitle>
                
                <ViewSubTitle>
                </ViewSubTitle>
                
                <ViewConteudo>
                    <TotalText>Total:</TotalText>
                    <ValCard>3</ValCard>  
                </ViewConteudo>
            </ViewCard>
           
       </Container>
    );
}