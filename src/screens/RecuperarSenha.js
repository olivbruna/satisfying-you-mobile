import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { TextInput, Button } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#372775',
    secondary: 'gray',
  },
};

const RecuperarSenha = () => {
  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handlePress = () => {
    if (email.includes('@')) {
      setInvalidEmail(false);
    } else {
      setInvalidEmail(true);
    }
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.backgroundView}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            label="Email"
            value={email}
            onChangeText={text => {
              setEmail(text);
              setInvalidEmail(false);
            }}
          />

          {invalidEmail && <Text style={styles.invalidText}>E-mail parece ser inválido</Text>}

          <Button
            style={styles.recoverButton}
            mode="contained"
            onPress={handlePress}>
            <Text style={styles.recoverButtonLabel}>Recuperar senha</Text>
          </Button>
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: '#372775',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
  },
  invalidText: {
    color: '#FD7979',
    marginBottom: 10,
  },
  recoverButton: {
    backgroundColor: '#37BD6D',
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
    marginTop: 15,
  },
  recoverButtonLabel: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
  },
});

export default RecuperarSenha;
