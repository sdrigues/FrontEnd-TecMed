import React, { useState, useEffect } from 'react';
import {
    Container,

    TitleView,
    BtnHome,
    Descricao,

    ViewTop,
    TextInput,

    ViewFlatList,
    FlatList,

    ViewItem,
    TextTitle,


} from './styles';
import api from '../../../services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Produto({ navigation }) {
    const [data, setData] = useState();
    const [temp, setTemp] = useState();

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await api.get('/products');
        const { docs } = response.data;

        setData(docs);
        setTemp(docs);
    }

    const searchFilterFunction = text => {
        const newData = temp.filter(item => {
            //ao descomentar a linha substituir o title pelo campo que deseja buscar
            const itemData = `${item.title.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });

        setData(newData);
    };

    const renderItem = ({ item }) => (
        <ViewItem onPress={() => navigation.navigate('EmitirGuia', {
            solicitante: item.title,
            idSolicitante: item._id,
        })}>
            <TextTitle>{item.title}</TextTitle>
        </ViewItem>
    );

    return (
        <Container>

            <TitleView>
                <BtnHome onPress={() => navigation.navigate('EmitirGuia')}>
                    <Icon name="keyboard-arrow-left" size={30} color="rgba(0,0,0,0.6)" />
                </BtnHome>
                <Descricao>Solicitantes</Descricao>
            </TitleView>

            <ViewTop>
                <TextInput placeholder="Buscar Cliente"
                    onChangeText={text => searchFilterFunction(text)}
                />
            </ViewTop>


            <ViewFlatList>
                <FlatList
                    style={{ marginTop: 15 }}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </ViewFlatList>

        </Container>
    );

}
