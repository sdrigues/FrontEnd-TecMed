import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;
export const ViewTitle = styled.View`
    flex-direction: row;
`;
export const BtnVoltar = styled.TouchableOpacity`
    margin-top: 10%;
    margin-left: 7%;
`;
export const Title = styled.Text`
    margin-top: 20%;
    font-size: 30px;
    color: #5EE0B6;
`;



//body

//comum
export const ViewMenu = styled.View`
    flex-direction: row;
`;

export const BtnAdd = styled.TouchableOpacity`
    margin-top: 2%;
    margin-left: 60%;
`;


// clinica 
export const CardClinica = styled.View`
    margin-top: 10%;
    margin-left: 5%;
    width: 90%;
    height: 10%;
    border-color: rgba(0,0,0,0.5);
    border-bottom-width: 1px;
    border-radius: 8px;
`;

export const ClinicaTitle = styled.Text`
    margin-left: 5%;
    margin-top: 2%;
    font-size: 14px;
`;
export const Clinica = styled.Text`
    margin-left: 8%;
    margin-top: 0%;
    font-size: 18px;
`;

//Agendamento
export const CardAgendamento = styled.View`
    margin-top: 5%;
    margin-left: 5%;
    width: 90%;
    height: 10%;
    border-color: rgba(0,0,0,0.5);
    border-bottom-width: 1px;
    border-radius: 8px;
`;

export const AgendamentoTitle = styled.Text`
    margin-left: 5%;
    margin-top: 2%;
    font-size: 14px;
`;
export const BtnAddAgendamento = styled.TouchableOpacity`
    margin-top: 2%;
    margin-left: 44%;
`;

export const Agendamento = styled.Text`
    margin-left: 8%;
    margin-top: 0%;
    font-size: 18px;
`;


//Local Atendimento

export const CardLocalAtendimento = styled.View`
    margin-top: 5%;
    margin-left: 5%;
    width: 90%;
    height: 10%;
    border-color: rgba(0,0,0,0.5);
    border-bottom-width: 1px;
    border-radius: 8px;
`;

export const LocalAtendimentoTitle = styled.Text`
    margin-left: 5%;
    margin-top: 2%;
    font-size: 14px;
`;
export const BtnAddLocalAtendimento = styled.TouchableOpacity`
    margin-top: 2%;
    margin-left: 27%;
`;

export const LocalAtendimento = styled.Text`
    margin-left: 8%;
    margin-top: 0%;
    font-size: 18px;
`;

//Tipo Consulta

export const CardTipoConsulta = styled.View`
    margin-top: 5%;
    margin-left: 5%;
    width: 90%;
    height: 10%;
    border-color: rgba(0,0,0,0.5);
    border-bottom-width: 1px;
    border-radius: 8px;
`;

export const TipoConsultaTitle = styled.Text`
    margin-left: 5%;
    margin-top: 2%;
    font-size: 14px;
`;
export const BtnAddTipoConsulta  = styled.TouchableOpacity`
    margin-top: 2%;
    margin-left: 37%;
`;

export const TipoConsulta  = styled.Text`
    margin-left: 8%;
    margin-top: 0%;
    font-size: 18px;
`;