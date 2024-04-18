import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [invalidEmail, setInvalidFields] = useState(false);

  const handleLogin = () => {
    if (!email || !email.includes('@')) {
      setInvalidFields(true);
    } else {
      setInvalidFields(false);
    }
  };

  const goToHome = () => {
    props.navigation.navigate('Drawer')
  }

  const goToNewAccount = () => {
    props.navigation.navigate('NovaConta')
  }

  const goToForgotPassword = () => {
    props.navigation.navigate('RecuperarSenha')
  }

  return (
    <PaperProvider theme={theme}>
      <View style={styles.backgroundView}>
        <View style={styles.container}>
          <Text style={styles.logoText}>Satisfying.you</Text>
          <Icon name="mood" size={60} color="#FFF" />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={text => {setEmail(text); setInvalidFields(false);}}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={text => {setSenha(text); setInvalidFields(false);}}
          />

          {invalidEmail && <Text style={styles.invalidText}>E-mail e/ou senha inválidos.</Text>}

          <Button
            style={styles.loginButton}
            mode="contained"
            onPress={handleLogin}>
            <Text style={styles.loginButtonLabel} onPress={goToHome}>Entrar</Text>
          </Button>

          <View style={styles.container2}>
            <Button
              style={styles.newAccountButton}
              mode="contained"
              onPress={goToNewAccount}>
              <Text style={styles.newAccountButtonLabel}>Criar minha conta</Text>
            </Button>
            <Button
              style={styles.forgotPasswordButton}
              mode="contained"
              onPress={goToForgotPassword}>
              <Text style={styles.forgotPasswordButtonLabel}>Esqueci minha senha</Text>
            </Button>
          </View>

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
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  logoText: {
    color: 'white',
    fontSize: 33,
    marginBottom: 10,
    fontFamily: 'AveriaLibre-Bold',
    paddingRight: 20,
  },
  formContainer: {
    width: '80%',
  },
  label: {
    color: 'white',
    fontSize: 20,
    marginBottom: 5,
    fontFamily: 'AveriaLibre-Regular',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 15,
    fontFamily: 'AveriaLibre-Regular',
  },
  loginButton: {
    backgroundColor: '#37BD6D',
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonLabel: {
    fontFamily: 'AveriaLibre-Bold',
    fontSize: 22,
  },

  container2: {
    marginTop: 45,
  },
  newAccountButton: {
    backgroundColor: '#419ED7',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  newAccountButtonLabel: {
    fontFamily: 'AveriaLibre-Bold',
    fontSize: 18,
  },
  forgotPasswordButton: {
    backgroundColor: '#B0CCDE',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  forgotPasswordButtonLabel: {
    fontFamily: 'AveriaLibre-Bold',
    fontSize: 18,
    color: 'white',
  },
  invalidText: {
    color: '#FD7979',
    marginBottom: 10,
  },
});

export default Login;