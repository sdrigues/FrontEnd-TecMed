import React from 'react';
import {StatusBar} from 'react-native';
import {Container} from './styled';

import { AreaChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape'

export default function TelaInicial(){
    const data =[];
    return(
       <Container>
           <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
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
            <AreaChart 
                    style={{ 
                        height: 180, 
                        width: 300,
                        elevation: 4,
                        borderRadius: 15,
                        marginBottom: 3,
                        backgroundColor: '#FFF'
                     }}
                    data={ data }
                    contentInset={{ top: 20, bottom: 20, left: 1, right: 2 }}
                    curve={ shape.curveNatural }
                    svg={{ fill: '#3498db' }}>
                <Grid/>
            </AreaChart>
       </Container>
    );
}