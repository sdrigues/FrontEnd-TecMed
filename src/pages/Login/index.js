import React, { useEffect, useState }from 'react';
import {Animated, StatusBar} from 'react-native';
import { 
    Container,
    TitleLogo, 
    LogoImg,
    BoxInput,
    InputView,
    ViewButton,
    BtnCadastrar,
    TxtBtnCadastrar,
    BtnEntrar,
    ImgEntrar,
    ViewBtnEsqueceuSenha,
    BtnEsqueceuSenha,
    TxtBtnEsqueceuSenha

 } from './styles';


import logo from '../../assets/images/Logo.jpg';
import arrow from '../../assets/images/arrow.png';

export default function Login({ navigation }){
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 100 }));
    const [opacity] = useState(new Animated.Value(0));
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        Animated.parallel([
          Animated.spring(offset.y, {
            toValue: 0,
            speed: 4,
            bounciness: 25,
          }),
          Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
          }),
        ]).start();
      }, []);

      const verificaDados = () => {
        // if (email.length == 0) {
        //   alert('E-mail não inserido');
        // }
        // if (password.length == 0) {
        //   alert('senha não inserida');
        // }
        // if(password != '' && email != ''){
           navigation.navigate('Home');
        // }
      };

    return(
        <Container>
          <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
                <Animated.View
                    style={[{
                        opacity: opacity,
                        transform: [{ translateY: offset.y }],
                    },]}>
                    <TitleLogo>Tec & Med</TitleLogo>
                    <LogoImg source={logo} />
                      <InputView>
                        <BoxInput 
                          placeholder="E-mail"
                          onChangeText={email => setEmail(email)}
                          autoCorrect={false}
                          />
                      </InputView>

                      <InputView>
                        <BoxInput 
                          placeholder="Senha"
                          onChangeText={password => setPassword(password)}
                          autoCorrect={false}
                          />
                      </InputView>
                      <ViewButton>
                        <BtnCadastrar onPress={() => navigation.navigate('Cadastrar')}>
                          <TxtBtnCadastrar>
                            Cadastrar
                          </TxtBtnCadastrar>
                        </BtnCadastrar>

                        <BtnEntrar onPress={() => verificaDados()}>
                          <ImgEntrar source={arrow}/>
                        </BtnEntrar>
                      </ViewButton>

                    <ViewBtnEsqueceuSenha>
                      <BtnEsqueceuSenha>
                        <TxtBtnEsqueceuSenha>
                          Esqueceu Sua Senha?
                        </TxtBtnEsqueceuSenha>  
                      </BtnEsqueceuSenha>
                    </ViewBtnEsqueceuSenha>
                </Animated.View>
        </Container>
    );
}

