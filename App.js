import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import NovaConta from './src/screens/NovaConta';
import RecuperarSenha from './src/screens/RecuperarSenha';
import Coleta from './src/screens/Coleta';
import Agradecimento from './src/screens/Agradecimento';

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerTintColor: 'white', headerStyle: { backgroundColor: '#372775' }, headerShadowVisible: false}}>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='NovaConta' component={NovaConta} options={{headerTitle: 'Nova Conta'}}/>
        <Stack.Screen name='RecuperarSenha' component={RecuperarSenha} options={{headerTitle: 'Recuperação de Senha'}}/>
        <Stack.Screen name='Coleta' component={Coleta} options={{headerTitle: ''}}/>
        <Stack.Screen name="Agradecimento" component={Agradecimento} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App
