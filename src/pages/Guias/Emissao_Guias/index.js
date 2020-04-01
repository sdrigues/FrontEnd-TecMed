import React, { useEffect, useState, useLayoutEffect } from 'react'
import {
    Container,
    ViewTitle,
    BtnVoltar,
    Title,
    CardSuperior,
    ViewMenu,
    TxtCliente,
    Cliente,
    BtnAdd,


    //clinica
    CardClinica,
    ClinicaTitle,
    Clinica,

    //Agendamento
    CardAgendamento,
    AgendamentoTitle,
    BtnAddAgendamento,
    Agendamento,

    //localAtendimento
    CardLocalAtendimento,
    LocalAtendimentoTitle,
    BtnAddLocalAtendimento,
    LocalAtendimento,

    //
    CardTipoConsulta,
    TipoConsultaTitle,
    BtnAddTipoConsulta,
    TipoConsulta,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function PDV({ navigation, route }) {
    const [titleClinica, setTitleClinica] = useState();
    useEffect(() => {
            setTitleClinica(route.params?.Clinica.title)
      }, [route.params?.Clinica, route.params?.Agendamento, route.params?.LocalAtendimento, route.params?.TipoConsulta]);
    return (
        <Container>
            <ViewTitle>
                <BtnVoltar onPress={() => navigation.navigate('Home')} >
                    <Icon name="navigate-before" size={30} color="#000" />
                </BtnVoltar>
                <Title>Emissão de Guias</Title>
            </ViewTitle>

            <CardClinica>
                <ViewTitle>
                    <ClinicaTitle>
                        Clínica
                    </ClinicaTitle>
                    <BtnAdd onPress={() => navigation.navigate('Clinicas')}>
                        <Icon name="add-circle-outline" size={30} color="#5EE0B6" />
                    </BtnAdd>
                </ViewTitle>
                <Clinica>
                  {titleClinica}
                </Clinica>
            </CardClinica>


            <CardAgendamento>
                <ViewMenu>
                    <AgendamentoTitle>
                        Agendamento
                    </AgendamentoTitle>
                    <BtnAddAgendamento onPress={() => navigation.navigate('Agendamento')}>
                        <Icon name="add-circle-outline" size={30} color="#5EE0B6" />
                    </BtnAddAgendamento>
                </ViewMenu>
                <Agendamento>
                  {route.params?.Agendamento}
                </Agendamento>
            </CardAgendamento>

            <CardLocalAtendimento>
                <ViewMenu>
                    <LocalAtendimentoTitle>
                        Local de Atendimento
                    </LocalAtendimentoTitle>
                    <BtnAddLocalAtendimento onPress={() => navigation.navigate('LocalAtendimento')}>
                        <Icon name="add-circle-outline" size={30} color="#5EE0B6" />
                    </BtnAddLocalAtendimento>
                </ViewMenu>
                <LocalAtendimento>
                  {route.params?.LocalAtendimento}
                </LocalAtendimento>
            </CardLocalAtendimento>

            <CardTipoConsulta>
                <ViewMenu>
                    <TipoConsultaTitle>
                        Tipo de Consulta
                    </TipoConsultaTitle>
                    <BtnAddTipoConsulta onPress={() => navigation.navigate('TipoConsulta')}>
                        <Icon name="add-circle-outline" size={30} color="#5EE0B6" />
                    </BtnAddTipoConsulta>
                </ViewMenu>
                <TipoConsulta>
                  {route.params?.TipoConsulta}
                </TipoConsulta>
            </CardTipoConsulta>
        </Container>
    );
}