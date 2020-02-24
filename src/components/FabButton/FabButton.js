import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import ActionButton from 'react-native-action-button';
import Arrow from '../../assets/images/arrow.png';

export default class FabButton extends Component {

  render() {
    return (
      <View style={ styles.container }>
        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton buttonColor="#5EE0B6" hideShadow={true} >
          <ActionButton.Item buttonColor='#5EE0B6' title="New Task" onPress={() => {}}>
             <Image source={Arrow} style={styles.image} />
          </ActionButton.Item >
          <ActionButton.Item buttonColor='#5EE0B6'  title="Notifications" onPress={() => {}}>
          <Image source={Arrow} style={styles.image} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#5EE0B6' title="All Tasks" onPress={() => {}}>
          <Image source={Arrow} style={styles.image} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor: '#FFF',
  },
  image:{
      width: 30,
      height: 30,
  }
});