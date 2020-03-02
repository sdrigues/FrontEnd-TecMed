import React from 'react';
import {
    Container,
    ViewTop,
    ViewBody,
    
} from './styles';
import QRCode from 'react-native-qrcode-svg';

export default function QrcodeGuias({navigation, route}){
    const { ID } = route.params;
    return(
        <Container>
            <ViewTop>

            </ViewTop>
            <ViewBody>
                <QRCode
                    value={JSON.stringify(ID._id)}
                />
            </ViewBody>
            
        </Container>
    );
}