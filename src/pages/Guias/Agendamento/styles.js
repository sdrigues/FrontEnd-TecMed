import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

// Title

export const TitleView = styled.View`
    flex-direction: row;
`;

export const BtnHome = styled.TouchableOpacity`
    margin-left: 5%;
    margin-top: 9%;
`;

export const Descricao = styled.Text`
    font-size: 25px;
    color: #5EE0B6;
    margin-top: 10%;
    margin-left: 7%;
`;


//Input + Btn Add

export const ViewTop = styled.KeyboardAvoidingView`
    flex-direction: row;
`;

export const TextInput = styled.TextInput`
    width: 90%;
    margin-top: 8%;
    background-color: #FFF;
    elevation: 4px;
    padding-left: 15px;
    border-radius: 5px;
    margin-left: 5%;
`;


// FlatList 

export const ViewFlatList = styled.View``;

export const FlatList = styled.FlatList``;

// Conteudo FlatList

export const ViewItem = styled.TouchableOpacity`
    background-color: rgba(0,0,0,0.05);
    margin-top: 10px; 
    width: 90%;
    border-radius: 10px;
    margin-left: 5%;
    height: 65px;
`;

export const TextTitle = styled.Text`
    color: rgba(0,0,0,0.6);
    font-size: 22px;
    padding-left: 10%;
    margin-top: 3%;
`;

