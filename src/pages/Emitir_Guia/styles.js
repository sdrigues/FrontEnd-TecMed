import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const ViewTop = styled.View`
    flex-direction: row;
`;
export const BtnVoltar = styled.TouchableOpacity`
    margin-left: 7%;
    margin-top: 10%;
`;
export const Title = styled.Text`
    margin-left: 3%;
    margin-top: 20%;
    font-size: 25px;
    color: #5EE0B6;
`;
export const ViewCorpo = styled.View`

`;
export const ViewSolicitante = styled.View`
    border-width: 1px;
    border-color: rgba(0,0,0,0.6);
    width: 80%;
    height: 70px;
    margin-left:10%;
    margin-top: 10%;
    border-radius: 5px;
`;
export const TitleSolicitante = styled.Text`
    color: rgba(0,0,0,0.9);
    font-size: 15px;
    margin-left: 5%;
    margin-top: 2%;
`;
export const Solicitante = styled.Text`
    margin-left: 10%;
    font-size: 17px;
`;

export const ViewTitle = styled.View`
    flex-direction: row;
`;

export const BtnAdd = styled.TouchableOpacity`
    margin-left: 45%;
    margin-top: 1%;
`;

export const ViewPrestador = styled.View`
 border-width: 1px;
    border-color: rgba(0,0,0,0.6);
    width: 80%;
    height: 60px;
    margin-left:10%;
    margin-top: 5%;
    border-radius: 5px;
`;
export const ViewAgendamento = styled.View``;
export const ViewLocalAtendimento = styled.View``;
export const ViewTipoConsulta = styled.View``;