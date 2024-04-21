import React, { useState } from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { useRoute } from '@react-navigation/native';

const Agradecimento = (props) => {
    
  return (
        <View style={styles.container}>
           <Text style={styles.titulo}>Obrigado por participar da pesquisa!</Text>
           <Text style={styles.titulo} >Aguardamos você no próximo ano!</Text>
        </View>
  );
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: '#372775',
      color: '#FFFFFF',
      flex: 1,
      flexDirection: 'column',
      paddingHorizontal: '5%',
      width: '100%',
      height: 'auto',
      justifyContent: 'center',
      alignItems: 'center'
    },
  titulo: {
    color: '#FFFFFF',
    fontSize: 21,
    marginTop: 10,
    fontFamily: 'AveriaLibre-Regular'

  },
});

export default Agradecimento;