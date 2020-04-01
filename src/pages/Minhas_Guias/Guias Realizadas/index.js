import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';

import {
  Container,

  //topview
  TopView,
  Descricao,
  BtnVoltar,

  // input 
  ViewTop,
  TextInput,

  //conteudo
  ViewFlatList,
  FlatList,

  //View Title
  TextTitle,
  TextNGuia,
  ViewTitle,
  ViewItem,
  ViewConteudo,

  //View 1
  TextPrestador,
  TextNomePrestador,
  TextTipoGuia,
  TextGuia,

  //View 2
  TextTipoEspecialidade,
  TextEspecialidade,
  TextStatus,
  TextTipoStatus,

  //View 3
  TextData,
  TextDtCad,
  TextTipoDtConsultaEfetuada,
  TextDtConsultaEfetuada,

  
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../../services/api';

export default function GuiasEfetuadas({ navigation }) {
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
        <TextTitle>Guia: </TextTitle>
        <TextNGuia>{item.title}</TextNGuia>
      </ViewTitle>

      <ViewConteudo>
        <TextPrestador>Prestador:</TextPrestador>
        <TextNomePrestador>José da Silva Cunha{}</TextNomePrestador>
        <TextGuia>Tipo de guia:</TextGuia>
        <TextTipoGuia>Consulta{}</TextTipoGuia>
      </ViewConteudo>

      <ViewConteudo>
        <TextEspecialidade>Especialidade:</TextEspecialidade>
        <TextTipoEspecialidade>Oftalmologia{}</TextTipoEspecialidade>
        <TextStatus>Status:</TextStatus>
        <TextTipoStatus>Efetuada{}</TextTipoStatus>
      </ViewConteudo>


      <ViewConteudo>
        <TextDtCad>Data Consulta:</TextDtCad>
        <TextData>20-10-2020</TextData>

        <TextDtConsultaEfetuada>Data Realizada:</TextDtConsultaEfetuada>
        <TextTipoDtConsultaEfetuada>20-10-2020{}</TextTipoDtConsultaEfetuada>
      </ViewConteudo>
    </ViewItem>
  );

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <TopView>
        <BtnVoltar onPress={() => navigation.goBack()} >
          <Icon name="chevron-left" size={30} color="rgba(0,0,0,0.5)" />
        </BtnVoltar>
        <Descricao>Guias Efetuadas</Descricao>
      </TopView>

      <ViewTop>
      <TextInput placeholder="Buscar Guias" onChangeText={text => searchFilterFunction(text)} />
      </ViewTop>


      <ViewFlatList>
        <FlatList
          style={{ marginTop: 15 }}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.title}
        />
      </ViewFlatList>

    </Container>
  );

}
