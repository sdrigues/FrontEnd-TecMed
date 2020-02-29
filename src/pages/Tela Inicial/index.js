import React from 'react';

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
    Image,

} from './styles';
import ActionButton from 'react-native-action-button';
import Arrow from '../../assets/images/arrow.png';

import Logo from '../../assets/images/Logo.jpg';

export default function TelaInicial({navigation}){
    return(
       <Container>
           <ViewTop>
           <LogoImg source={Logo}/>
           <Title>Bem Vindo Samuel{}</Title>
            <SubTitleTop>Resumo Proximos 30 Dias</SubTitleTop>
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
                <ActionButton buttonColor="#5EE0B6" hideShadow={true} >
                    <ActionButton.Item buttonColor='#5EE0B6' title="Minhas Guias" onPress={() => navigation.navigate('Guias') }>
                        <Image source={Arrow}/>
                    </ActionButton.Item >

                    <ActionButton.Item buttonColor='#5EE0B6'  title="Financeiro" onPress={() => navigation.navigate('Financeiro') }>
                        <Image source={Arrow}/>
                    </ActionButton.Item>

                    <ActionButton.Item buttonColor='#5EE0B6' title="Rede Credenciada" onPress={() => navigation.navigate('RedeMedica') }>
                        <Image source={Arrow} />
                    </ActionButton.Item>
        </ActionButton>
            </ViewButtonMenu>
       </Container>
    );
}