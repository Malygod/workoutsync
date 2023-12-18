import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserData } from './types';
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import IniciarSesion from './iniciarSesion';
import UsuariosScreen from './UsuariosScreen';
import RegistrarUsuario from './registroUsuario';
import RegistroDatosUsuario from './datosUsuario';
import SeleccionUsuario from './seleccionarPerfil';
import SeleccionDeporte from './seleccionarDeporte';
import RegistrarProfesional from './registroProfesional';
import PerfilUsuario from './perfilUsuario';
import AgregarServicio from './agregarServicio'; // Import the missing component

type RootStackParamList = {
  Home: undefined;
  SeleccionPerfil: undefined;
  SeleccionarDeporte: undefined;
  RegistroUsuarioNormal: undefined;
  RegistroUsuarioProfesional: undefined;
  Perfil: {
    data: {
      user: UserData;
    };
  };
  PublicarServicio: undefined;
  AddService: undefined;
  CRUD: undefined;
  RegistroDatosUsuarios: { selectedImage: null, username: string, password: string, email: string, name: string, description: string };
};


type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'RegistroDatosUsuarios'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  route: NativeStackScreenProps<RootStackParamList, 'RegistroDatosUsuarios'>;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={IniciarSesion}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SeleccionarDeporte"
          component={SeleccionDeporte}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddService"
          component={AgregarServicio} // Use the imported component here
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SeleccionPerfil"
          component={SeleccionUsuario}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegistroUsuarioNormal"
          component={RegistrarUsuario}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegistroUsuarioProfesional"
          component={RegistrarProfesional}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CRUD"
          component={UsuariosScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegistroDatosUsuarios"
          component={RegistroDatosUsuario}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Perfil"
          component={PerfilUsuario}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;