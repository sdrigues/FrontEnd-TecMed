import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const FlatList = styled.FlatList``;

export const Logo = styled.Text`
    font-size: 23;
    margin-top: 4%;
    margin-left: 70%;
`;

export const ViewTop = styled.View`
    flex-direction: row;
    margin-left: 5%;
    margin-top: 5%;
    height: 9%;
`;

export const TextButton = styled.Text`
    font-size: 25;
    padding-top: 5%;
    padding-left: 30%;
`;

export const Button = styled.TouchableOpacity`
    width: 9%;
    margin-left: 1%;
`;

export const TextInput = styled.TextInput`
    width: 80%;
    background-color: #FFF;
    elevation: 4;
    padding-left: 5;
    border-radius: 5;
`;

export const Descricao = styled.Text`
    font-size: 25;
    color: #5EE0B6;
    margin-top: 3%;
    margin-left: 5%;
`;

//FlatListItems

export const ViewItem = styled.View`
    background-color: rgba(0,0,0,0.1);
    margin-top: 10; 
    /* elevation: 1.5; */
    border-radius: 0;
    margin-left: 3%;
    border-radius: 10;
    width: 95%;
`;

//FlatListItems Title

export const ViewTitle = styled.View`
   flex-direction: row;
   margin-top: 2%;
   margin-left: 5%;
`;
export const TextTitle = styled.Text`
    color: #000;
    font-size: 22;
`;
export const TextNGuia = styled.Text`
    color: #5EE0B6;
    font-size: 20;
    padding-top: 1%;
`;


//FlatListItems View
export const ViewConteudo= styled.View`
    flex-direction: row;
    margin-left: 5%;
    margin-top: 2%;
`;

//FlatListItems View 1

export const TextPrestador = styled.Text`
    font-weight: bold;
    font-size: 12;
`;

export const TextNomePrestador =  styled.Text`
    font-size: 11;
    padding-left: 4;
    padding-top: 0.4%;
`;

export const TextGuia = styled.Text`
    font-weight: bold;
    padding-left: 4;
    font-size: 12;
`;

export const TextTipoGuia = styled.Text`
    font-size: 11;
    padding-left: 4;
    padding-top: 0.5%;
`;

//FlatListItems View 2

export const TextStatus = styled.Text`
    font-weight: bold;
    font-size: 12;
    padding-left: 4;
`;

export const TextTipoStatus = styled.Text`
    font-size: 11;
    padding-left: 4;
    padding-top: 0.5%;
`;

export const TextEspecialidade = styled.Text`
    font-weight: bold;
    font-size: 12;
`;

export const TextTipoEspecialidade = styled.Text`
    font-size: 11;
    padding-left: 4;
    padding-top: 0.5%;
`;

//FlatListItems View 3 - datas
export const TextDtCad = styled.Text`
    font-weight: bold;
    font-size: 12;
    margin-bottom: 3%;
`;
export const TextData = styled.Text`
    font-size: 11;
    padding-left: 4;
    padding-top: 0.5%;
    margin-bottom: 3%;
`;
export const TextDtConsultaEfetuada = styled.Text`
    font-weight: bold;
    font-size: 12;
    padding-left: 4;
    margin-bottom: 3%;
`;
export const TextTipoDtConsultaEfetuada = styled.Text`
    font-size: 11;
    padding-top: 0.5%;
    padding-left: 4;
    margin-bottom: 3%;
`;
export const ViewFlatList = styled.View`
    flex: 1; 
`;
