import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

//Top

export const TopView = styled.View`
    flex-direction: row;
`;

export const Descricao = styled.Text`
    font-size: 25px;
    color: #5EE0B6;
    margin-top: 4%;
    margin-left: 2%;
`;

export const BtnVoltar = styled.TouchableOpacity`
    margin-top: 5%;
    margin-left: 7%;
`;
//title

export const ViewTop = styled.View`
    flex-direction: row;
    margin-left: 5%;
`;

export const TextInput = styled.TextInput`
    width: 95%;
    margin-top: 8%;
    background-color: #FFF;
    elevation: 4px;
    padding-left: 15px;
    border-radius: 5px;
`;

//Conteudo
export const ViewFlatList = styled.View`
    flex: 1; 
`;

export const FlatList = styled.FlatList`
`;



//FlatListItems

export const ViewItem = styled.TouchableOpacity`
    background-color: rgba(0,0,0,0.1);
    margin-top: 10px; 
    margin-left: 3%;
    border-radius: 10px;
    width: 95%;
    height: 170px;
`;

//FlatListItems Title

export const ViewTitle = styled.View`
   flex-direction: row;
   margin-top: 3%;
   margin-left: 5%;
`;
export const TextTitle = styled.Text`
    color: #000;
    font-size: 23px;
`;
export const TextNGuia = styled.Text`
    color: rgba(0,0,0,0.7);
    font-size: 21px;
    padding-top: 1%;
    margin-right: 5%;
`;

//FlatListItems View
export const ViewConteudo= styled.View`
    flex-direction: row;
    margin-left: 5%;
    margin-top: 3%;
`;

//FlatListItems View 1

export const TextPrestador = styled.Text`
    font-weight: bold;
    font-size: 13px;
`;

export const TextNomePrestador =  styled.Text`
    font-size: 11px;
    padding-left: 4px;
    padding-top: 0.4%;
`;

export const TextGuia = styled.Text`
    font-weight: bold;
    padding-left: 4px;
    font-size: 12px;
`;

export const TextTipoGuia = styled.Text`
    font-size: 11px;
    padding-left: 4px;
    padding-top: 0.5%;
`;

//FlatListItems View 2

export const TextStatus = styled.Text`
    font-weight: bold;
    font-size: 12px;
    padding-left: 4px;
`;

export const TextTipoStatus = styled.Text`
    font-size: 11px;
    padding-left: 4px;
    padding-top: 0.5%;
`;

export const TextEspecialidade = styled.Text`
    font-weight: bold;
    font-size: 12px;
`;

export const TextTipoEspecialidade = styled.Text`
    font-size: 11px;
    padding-left: 4px;
    padding-top: 0.5%;
`;

//FlatListItems View 3 - datas
export const TextDtCad = styled.Text`
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 3%;
`;
export const TextData = styled.Text`
    font-size: 11px;
    padding-left: 4px;
    padding-top: 0.5%;
    margin-bottom: 3%;
`;
export const TextDtConsultaEfetuada = styled.Text`
    font-weight: bold;
    font-size: 12px;
    padding-left: 4px;
    margin-bottom: 3%;
`;
export const TextTipoDtConsultaEfetuada = styled.Text`
    font-size: 11px;
    padding-top: 0.5%;
    padding-left: 4px;
    margin-bottom: 3%;
`;
