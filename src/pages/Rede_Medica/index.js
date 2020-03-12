import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';

import {
  Container,

  //Top
  TopView,
  BtnVoltar,
  Descricao,

  //title
  ViewTop,
  TextInput,

  //Conteudo
  FlatList,
  ViewFlatList,


  //conteudo FlatList

  //View Title
  ViewItem,
  ViewTitle,
  TextTitle,
  TextNomePrest,

  //View 1
  ViewConteudo,
  TextEnd,
  TextEndPrestador,

  //View 2
  TextTipoEspecialidade,
  TextEspecialidade,
  TextNum,
  TextNumPrest,

  //View 3
  TextCep,
  TextCepPrest,
  TextBairro,
  TextBairroPrest,
  TextCidade,
  TextCidadePrest,

  //View 4
  TextTel,
  TextTelPrest,
  TextCel,
  TextCelPrest,
} from './styles';

import api from '../../services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function RedeMedica({ navigation }) {
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
      const itemData = `${item.title.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    setData(newData);
  };
  const renderItem = ({ item }) => (
    <ViewItem>
      <ViewTitle>
        <TextTitle>Prestador:</TextTitle>
        <TextNomePrest>{item.title}</TextNomePrest>
      </ViewTitle>

      <ViewConteudo>
        <TextEspecialidade>Especialidade:</TextEspecialidade>
        <TextTipoEspecialidade>Oftalmologia{}</TextTipoEspecialidade>
      </ViewConteudo>

      <ViewConteudo>
        <TextEnd>Endereço:</TextEnd>
        <TextEndPrestador>Avenida Algusto da Cunha Silva{}</TextEndPrestador>

        <TextNum>N:</TextNum>
        <TextNumPrest>200</TextNumPrest>
      </ViewConteudo>


      <ViewConteudo>
        <TextCep>CEP:</TextCep>
        <TextCepPrest>18072-831{}</TextCepPrest>

        <TextBairro>Bairro:</TextBairro>
        <TextBairroPrest>Bom Jesus{}</TextBairroPrest>

        <TextCidade>Cidade:</TextCidade>
        <TextCidadePrest>Sorocaba{}</TextCidadePrest>
      </ViewConteudo>

      <ViewConteudo>
        <TextTel>Telefone:</TextTel>
        <TextTelPrest>(15) 3352-6168{}</TextTelPrest>

        <TextCel>Celular:</TextCel>
        <TextCelPrest>(15) 98134-4323</TextCelPrest>
      </ViewConteudo>

    </ViewItem>
  );
    return (
      <Container>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
        <TopView>
          <BtnVoltar onPress={() => navigation.navigate('Home')} >
            <Icon name="chevron-left" size={30} color="rgba(0,0,0,0.5)" />
          </BtnVoltar>
          <Descricao>Rede Credenciada</Descricao>
        </TopView>

        <ViewTop>
        <TextInput placeholder="Digite a especialidade ou o Médico" onChangeText={text => searchFilterFunction(text)} />
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
