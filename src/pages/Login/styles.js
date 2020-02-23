import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
   flex: 1;
   background-color: #FFF;
`;

export const TitleLogo = styled.Text`
    font-family: Rufina;
    font-style: normal;
    font-weight: normal;
    font-size: 45px;
    line-height: 56px;
    font-size: 40;
    color: #5EE0B6;
    margin-top: 60;
    margin-left: 75;
    margin-bottom: 10;
`;

export const LogoImg = styled.Image`
    width: 50%;
    height: 25%;
    margin-left: 90px;
`;

export const BoxInput = styled.TextInput`
    height: 75%;
    width: 89%;
    background-color: #FFF;
    padding-left: 15;
    border-bottom-width: 1;
    border-color: rgba(0,0,0,0.5);
    font-size: 14;

`;
export const InputView = styled.View`
    flex-direction: row;
    margin-left: 35;
    margin-top: 20
`;

export const ViewButton = styled.View`
    flex-direction: row;
    margin-top: 20;
    margin-left: 50;
`;
export const BtnCadastrar = styled.TouchableOpacity`
    width: 110;
    height: 35;
    border-color: rgba(0,0,0,0.5);
    border-radius: 3;
    align-items: center;
    align-content: center;
`;
export const TxtBtnCadastrar = styled.Text`
    color: rgba(0,0,0,0.5);
    margin-top: 20;
    font-size: 19;
`;

export const BtnEntrar = styled.TouchableOpacity`
    width: 70;
    height: 70;
    border-width: 1;
    border-color: #5EE0B6;
    margin-left: 50;
    border-radius: 35;
    align-items: center;
    align-content: center;
    background-color: #5EE0B6;
`;
export const ImgEntrar = styled.Image`
    color: #FFF;
    width: 20;
    height: 20;
    margin-top: 23;
    margin-left: 2;
    align-items: center;
    align-content: center;
`;
export const ViewBtnEsqueceuSenha = styled.View`
    flex-direction: row;
    margin-left: 60;
    margin-top: 50;
`;
export const BtnEsqueceuSenha = styled.TouchableOpacity`
width: 70%;
height: 35;
border-color: #FFF;
border-radius: 3;
align-items: center;
align-content: center;
`;
export const TxtBtnEsqueceuSenha = styled.Text`
    color: #5EE0B6;
    margin-top: 15;
    font-size: 18;
`;