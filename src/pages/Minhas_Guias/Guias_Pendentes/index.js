import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import {
  Container, 
  Logo,
  Descricao,
  FlatList,
  TextTitle,
  ViewItem,
  ViewConteudo,
  TextCnpj,
  TextDtCad,
  TextPessoa,
  ViewFlatList,
  Button,
  ViewTop,
  TextButton,
  TextInput
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
        
      <TextTitle>{item.title}</TextTitle>
      <ViewConteudo>
        <TextCnpj>CNPJ/CPF: 12.345.678/0001-00</TextCnpj>
        <TextDtCad> Data Cadastro:</TextDtCad>
      </ViewConteudo>
      <ViewConteudo>
        <TextPessoa>Pessoa: Jurídico</TextPessoa> 
        <TextDtCad>{item.createdAt}</TextDtCad> 
      </ViewConteudo>
    </ViewItem>
  );

  render() {
    return (
      <Container>
          <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
          <Descricao>Listagem de Clientes</Descricao>
        <ViewTop>
            <TextInput placeholder="Buscar Clientes" />
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
