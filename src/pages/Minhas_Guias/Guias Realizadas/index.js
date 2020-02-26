import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import {
  Container, 
  Descricao,
  FlatList,

  //View Title
  TextTitle,
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

  ViewFlatList,
  Button,
  ViewTop,
  TextButton,
  TextInput,

  ViewTitle,
  TextNGuia
} from './styles';

import api from '../../../services/api';

export default class App extends Component {
  state = {
    docs:[],
  };
  componentDidMount() {
    this.loadCliente();
  }

  loadCliente = async () => {
      const response = await api.get('/products');
      const { docs } = response.data;

      this.setState({ docs })
  }
  renderItem = ({ item }) => (
    <ViewItem>
        <ViewTitle>
          <TextTitle>Guia: </TextTitle>
          <TextNGuia>123456{}</TextNGuia>
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

  render() {
    return (
      <Container>
          <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
          <Descricao>Guias Efetuadas</Descricao>
        <ViewTop>
            <TextInput placeholder="Buscar Guias" />
            <Button>
                <TextButton>
                    +
                </TextButton>
            </Button>
        </ViewTop>
        
       
        <ViewFlatList>
          <FlatList
            style={{ marginTop: 15 }}
            data={this.state.docs}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
          />
        </ViewFlatList>
       
        </Container>
          );
  }
}
