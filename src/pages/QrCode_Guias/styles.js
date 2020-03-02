import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
`;

export const Image = styled.Image`
    width: 110px;
    height: 110px;
    margin-left: 65%;
`;
export const ViewTop = styled.View`
    /* flex-direction: row; */
`;

export const Title = styled.Text`
    font-size: 35px;
    color: #5EE0B6;
    margin-top: 3%;
    margin-left: 40%;
`;
export const TitleGuia = styled.Text`
    font-size: 20px;
    color: rgba(0,0,0,0.5);
    margin-top: 5%;
    margin-left: 35%;
`;

export const TextQrcode = styled.Text`
    color: rgba(0,0,0,0.5);
    margin-left: 8%;
    font-size: 17px;
    margin-top: 5%;
    margin-bottom: 5%;
`;
export const ViewQrCode = styled.View`
    margin-top: 5%;
    margin-left: 25%;
    width: 30%;
    height: 30%;
`;

export const ViewBody = styled.View`

`;

export const BtnVoltar = styled.TouchableOpacity`
    width: 30%;
    height: 35px;
    margin-top: 30%;
    margin-left: 43%;
`;

export const TextBtnVoltar = styled.Text`
    color: #5EE0B6;
    margin-top: 15px;
    font-size: 18px;
`;