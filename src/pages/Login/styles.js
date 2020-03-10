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
    font-size: 40px;
    color: #5EE0B6;
    margin-top: 60px;
    margin-left: 75px;
    margin-bottom: 10px;
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
    padding-left: 15px;
    border-bottom-width: 1px;
    border-color: rgba(0,0,0,0.5);
    font-size: 14px;

`;
export const InputView = styled.View`
    flex-direction: row;
    margin-left: 35px;
    margin-top: 20px;
`;

export const ViewButton = styled.View`
    flex-direction: row;
    margin-top: 20px;
    margin-left: 50px;
`;
export const BtnCadastrar = styled.TouchableOpacity`
    width: 110px;
    height: 35px;
    border-color: rgba(0,0,0,0.5);
    border-radius: 3px;
    align-items: center;
    align-content: center;
`;
export const TxtBtnCadastrar = styled.Text`
    color: rgba(0,0,0,0.5);
    margin-top: 20px;
    font-size: 19px;
`;

export const BtnEntrar = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    border-width: 1px;
    border-color: #5EE0B6;
    margin-left: 50px;
    border-radius: 35px;
    padding-top:5%;
    padding-left: 6%;
    background-color: #5EE0B6;
`;
export const ViewBtnEsqueceuSenha = styled.View`
    flex-direction: row;
    margin-left: 26%;
    margin-top: 50px;
`;
export const BtnEsqueceuSenha = styled.TouchableOpacity`
    width: 100%;
    height: 35px;
    border-color: #FFF;
    border-radius: 3px;
`;
export const TxtBtnEsqueceuSenha = styled.Text`
    color: #5EE0B6;
    margin-top: 15px;
    font-size: 18px;
`;