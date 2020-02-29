import React from 'react';
import {StatusBar} from 'react-native';
import { 
    Container,
    ViewTop,
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
    ViewGrafico,
    TitleGrafico

} from './styled';

import { AreaChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape'

export default function TelaInicial(){
    const data = [1, 2, 3, 4, 5 ]

    return(
       <Container>
           <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
           <ViewTop>
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
                    <TitleCard>Valor Coparticipação</TitleCard>
                </ViewTitle>
                
                <ViewSubTitle>
                    <SubTitleCard>Ultimos 30 Dias</SubTitleCard>
                </ViewSubTitle>
                
                <ViewConteudo>
                    <TotalText>Total: R$ </TotalText>
                    <ValCard>123,45</ValCard>  
                </ViewConteudo>
            </ViewCard>
            <ViewGrafico>
                <TitleGrafico>Consultas</TitleGrafico>
            <AreaChart 
                    style={{ 
                        height: 180, 
                        width: 300,
                        elevation: 4,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                        marginBottom: 3,
                        backgroundColor: '#FFF'
                     }}
                    data={ data }
                    contentInset={{ top: 20, bottom: 0, left: 1, right: 2 }}
                    curve={ shape.curveNatural }
                    svg={{ fill: '#5EE0B6' }}>

                    <Grid/>
                </AreaChart>
            </ViewGrafico>
       </Container>
    );
}