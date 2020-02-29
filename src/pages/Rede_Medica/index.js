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


  ViewFlatList,
  Button,
  ViewTop,
  TextButton,
  TextInput,

  ViewTitle,
  TextNomePrest
} from './styles';

import api from '../../services/api';

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
          <TextTitle>Prestador:</TextTitle>
          <TextNomePrest>José da Silva Campos{}</TextNomePrest>
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

  render() {
    return (
      <Container>
          <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
          <Descricao>Rede Credenciada</Descricao>
        <ViewTop>
            <TextInput placeholder="Digite a especialidade ou o Médico" />
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
