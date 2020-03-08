import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { AppRegistry, StyleSheet, View, Platform, Picker, ActivityIndicator, Button, Alert } from 'react-native';

export default function Project() {

    const [doc, setDoc] = useState('');
    const [PickerValueHolder, setPickerValueHolder] = useState('');

    useEffect(() => {
        loadCliente();
    }, []);

    const loadCliente = async () => {
        const response = await api.get('/products');
        const { docs } = response.data;

        setDoc(docs);
    }

    const GetPickerSelectedItemValue = () => {

        Alert.alert(PickerValueHolder);

    }


    return (

        <View style={styles.MainContainer}>

            <Picker
                selectedValue={doc}

                onValueChange={(itemValue, itemIndex) => setPickerValueHolder(itemValue) }>

                {doc.map((item, key) => (
                    <Picker.Item label={item.title} value={item.title} key={key} />)
                )}

            </Picker>

            <Button title="Click Here To Get Picker Selected Item Value" onPress={GetPickerSelectedItemValue()} />

        </View>

    );

}

const styles = StyleSheet.create({

    MainContainer: {

        justifyContent: 'center',
        flex: 1,
        margin: 10
    }

});