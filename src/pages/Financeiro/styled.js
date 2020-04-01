import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
`;
export const ViewTop = styled.View`
    flex-direction: row;
`;

export const BtnVoltar = styled.TouchableOpacity`
    margin-left: 10%;
    margin-top: 10%;
`;

export const Title  = styled.Text`
    font-size: 25px;
    margin-top: 20%;
    margin-left: 13%;
    margin-bottom: 5%;
    color: rgba(0,0,0,0.5);
`;

export const ViewCard = styled.TouchableOpacity`
    margin-left: 11%;
    margin-top: 8%;
    background-color: rgba(202, 202, 202, 0.2);
    width: 80%;
    height: 23%;
    border-radius: 10px;
    border-color: #CACACA; 
    border-width: 1px;
    border-top-width: 2px;
`;

export const ViewTitle = styled.View`
    margin-top: 5px;
    padding-left: 10px;
`;
export const TitleCard = styled.Text`
    font-size: 23px;
    padding-top: 10px;
    color: rgba(0, 0, 0, 0.5);
`;
export const ViewSubTitle = styled.View`
    margin-top: 10px;
    margin-left: 40px;
`;

export const SubTitleCard = styled.Text`
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
`;
export const ViewConteudo = styled.View`
    flex-direction: row;
    margin-top: 30px;
    margin-left: 35px;
`;

export const TotalText = styled.Text`
    font-size: 25px;
    margin-left: 50%;
    margin-top: 8%;
    color: rgba(0, 0, 0, 0.5);
`;

export const ValCard = styled.Text`
    margin-top: 8.5%;
    margin-left: 1.5%;
    font-size: 25px;
    color: rgba(0, 0, 0, 0.5);
`;

export const ValConsultas = styled.Text`
    margin-top: 2%;
    margin-left:5px;
    font-size: 25px;
    color: rgba(0, 0, 0, 0.5);
`;

export const ConsText = styled.Text`
    font-size: 25px;
    margin-top: 2%;
    margin-left: 50%;
    color: rgba(0, 0, 0, 0.5);
`;

export const ViewButtonMenu = styled.View`
    flex: 1;   
`;