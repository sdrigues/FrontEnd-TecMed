import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;


//Top 
export const TopView = styled.KeyboardAvoidingView`
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


export const FlatList = styled.FlatList``;

export const Logo = styled.Text`
    font-size: 23px;
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
    font-size: 25px;
    padding-top: 5%;
    padding-left: 30%;
`;

export const Button = styled.TouchableOpacity`
    width: 9%;
    margin-left: 1%;
`;

export const TextInput = styled.TextInput`
    width: 90%;
    background-color: #FFF;
    elevation: 4px;
    padding-left: 15px;
    border-radius: 5px;
`;


//FlatListItems

export const ViewItem = styled.View`
    background-color: rgba(0,0,0,0.1);
    margin-top: 10px; 
    margin-left: 3%;
    border-radius: 10px;
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
    font-size: 18px;
`;
export const TextNomePrest = styled.Text`
    color: rgba(0,0,0,0.8);
    font-size: 16px;
    padding-top: 1%;
    padding-left: 10;
`;

//FlatListItems View
export const ViewConteudo= styled.View`
    flex-direction: row;
    margin-left: 5%;
    margin-top: 2%;
`;

//FlatListItems View 1


export const TextEspecialidade = styled.Text`
    font-weight: bold;
    font-size: 13px;
    padding-left: 8px;
`;

export const TextTipoEspecialidade = styled.Text`
    font-size: 13px;
    padding-left: 4px;
    padding-top: 0.5%;
`;




//FlatListItems View 2

export const TextEnd = styled.Text`
    font-weight: bold;
    padding-left: 8px;
    font-size: 11px;
`;

export const TextEndPrestador = styled.Text`
    font-size: 10px;
    padding-left: 4px;
    padding-top: 0.5%;
`;

export const TextNum = styled.Text`
    font-weight: bold;
    font-size: 11px;
    padding-left: 10px;
`;

export const TextNumPrest = styled.Text`
    font-size: 10px;
    padding-left: 4px;
    padding-top: 0.5%;
`;

//FlatListItems View 3 - datas

export const TextCep = styled.Text`
    font-weight: bold;
    padding-left: 8px;
    font-size: 11px;
`;
export const TextCepPrest = styled.Text`
    font-size: 10px;
    padding-left: 4px;
    padding-top: 0.5%;
`;

export const TextBairro = styled.Text`
    font-weight: bold;
    padding-left: 4px;
    font-size: 11px;
`;
export const TextBairroPrest = styled.Text`
    font-size: 10px;
    padding-left: 4px;
    padding-top: 0.5%;
`;

export const TextCidade = styled.Text`
    font-weight: bold;
    padding-left: 4px;
    font-size: 11px;
`;
export const TextCidadePrest = styled.Text`
    font-size: 10px;
    padding-left: 4px;
    padding-top: 0.5%;
`;

// view 4

export const TextTel = styled.Text`
    font-weight: bold;
    padding-left: 8px;
    font-size: 11px;
    margin-bottom: 3%;
`;

export const TextTelPrest =  styled.Text`
    font-size: 10px;
    padding-left: 4px;
    padding-top: 0.5%;
`;

export const TextCel = styled.Text`
    font-weight: bold;
    padding-left: 4px;
    font-size: 11px;
`;

export const TextCelPrest =  styled.Text`
    font-size: 10px;
    padding-left: 4px;
    padding-top: 0.5%;
`; 

// fim View 4
export const ViewFlatList = styled.View`
    flex: 1; 
`;
