import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home';
import Quemsomos from './views/Quemsomos';
import Login from './views/Login';
import Cadastro from './views/Cadastro';
import Consulta from './views/Consulta';
import { AuthProvider } from './context/AuthContext';



export default function App() {

  const Stack = createNativeStackNavigator();

  return (
  <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name="Quemsomos" component={Quemsomos} />
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="Cadastro" component={Cadastro} />
        <Stack.Screen options={{headerShown: false}} name="Consulta" component={Consulta} />
      </Stack.Navigator>
    </NavigationContainer>
  </AuthProvider>
  );
}
