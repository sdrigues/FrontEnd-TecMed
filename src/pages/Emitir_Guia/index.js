import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Container,
    ViewTop,
    BtnVoltar,
    Title,


    ViewCorpo,

    ViewSolicitante,
    ViewTitle,
    TitleSolicitante,
    Solicitante,
    BtnAdd,

    ViewPrestador,
    ViewAgendamento,
    ViewLocalAtendimento,
    ViewTipoConsulta



} from './styles';

export default function EmitirGuia({ navigation, route }) {
    const { solicitante, idSolicitante } = route.params;
    const { prestador, idPrestador } = route.params;

    return (
        <Container>
            <ViewTop>
                <BtnVoltar onPress={() => navigation.navigate('Home')}>
                    <Icon name="keyboard-arrow-left" size={30} color="#000" />
                </BtnVoltar>
                <Title>Emissão de Guias</Title>
            </ViewTop>

            <ViewCorpo>
                <ViewSolicitante>
                    <ViewTitle>
                        <TitleSolicitante>Solicitante</TitleSolicitante>
                        <BtnAdd onPress={() => navigation.navigate('Solicitante')}>
                            <Icon name="add-circle-outline" size={30} color="#5EE0B6" />
                        </BtnAdd>
                    </ViewTitle>
                    <Solicitante>{solicitante}</Solicitante>
                </ViewSolicitante>

                <ViewPrestador>
                    <ViewTitle>
                        <TitleSolicitante>Prestador </TitleSolicitante>
                        <BtnAdd onPress={() => navigation.navigate('Prestador')}>
                            <Icon name="add-circle-outline" size={30} color="#5EE0B6" />
                        </BtnAdd>
                    </ViewTitle>
                    <Solicitante>{prestador}</Solicitante>
                </ViewPrestador>

                <ViewAgendamento>
                    <ViewTitle>
                        <TitleSolicitante>Agendamento</TitleSolicitante>
                        <BtnAdd onPress={() => navigation.navigate('')}>
                            <Icon name="add-circle-outline" size={30} color="#5EE0B6" />
                        </BtnAdd>
                    </ViewTitle>
                    <Solicitante>{}</Solicitante>
                </ViewAgendamento>

                <ViewLocalAtendimento>
                    <ViewTitle>
                        <TitleSolicitante>Local Atendimento</TitleSolicitante>
                        <BtnAdd onPress={() => navigation.navigate('')}>
                            <Icon name="add-circle-outline" size={30} color="#5EE0B6" />
                        </BtnAdd>
                    </ViewTitle>
                    <Solicitante>{}</Solicitante>
                </ViewLocalAtendimento>

                <ViewTipoConsulta>
                    <ViewTitle>
                        <TitleSolicitante>Tipo de Consulta </TitleSolicitante>
                        <BtnAdd onPress={() => navigation.navigate('')}>
                            <Icon name="add-circle-outline" size={30} color="#5EE0B6" />
                        </BtnAdd>
                    </ViewTitle>
                    <Solicitante>{}</Solicitante>
                </ViewTipoConsulta>

            </ViewCorpo>
        </Container>
    );
}
