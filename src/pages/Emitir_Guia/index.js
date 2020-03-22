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