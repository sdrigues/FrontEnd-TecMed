import React from 'react';
import {
    Container,
    Image,
    ViewTop,
    Title,
    TitleGuia,
    TextQrcode,
    ViewBody,
    ViewQrCode,
    BtnVoltar,
    TextBtnVoltar

} from './styles';
import QRCode from 'react-native-qrcode-svg';

import Logo from  '../../assets/images/Logo.jpg';

export default function QrcodeGuias({navigation, route}){
    const { ID } = route.params;
    return(
        <Container>
            <Image source={Logo} />
            <ViewTop>
                <Title>Guia</Title>
                    <TitleGuia>
                        {JSON.stringify(ID._id)}
                    </TitleGuia>
            </ViewTop>
            <ViewBody>
                <TextQrcode>Apresente esse QRCode ao Médico para validar sua consulta!!!</TextQrcode>
                <ViewQrCode>
                    <QRCode
                        value={JSON.stringify(ID._id)}
                        size={180}
                    />
                </ViewQrCode>
                <BtnVoltar onPress={() => navigation.pop()} >
                    <TextBtnVoltar>Voltar</TextBtnVoltar>
                </BtnVoltar>
            </ViewBody>
        </Container>
    );
}