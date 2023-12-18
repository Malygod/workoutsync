import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { Double, Float } from 'react-native/Libraries/Types/CodegenTypes';

interface Usuario {
  idUsuario: number;
  nickname: string;
  correo: string;
  contrasenia: string;
  descripcion: string;
  ingreso: string;
  nacimiento: string;
  altura: number;
  peso: Float;
  nivel: number;
  image: string;
  path: string;
}


const UsuariosScreen = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [ingreso, setIngreso] = useState(new Date());
  const [nacimiento, setNacimiento] = useState(new Date());
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [nivel, setNivel] = useState('');
  const [image, setImage] = useState('');
  const [path, setPath] = useState('');

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const obtenerUsuarios = async () => {
    try {
      const response = await fetch('http://192.168.59.238:3000/api/usuarios/getUsuarios');
      const data = await response.json();
      console.log(data);
      const usuariosData = data as Usuario[];
      setUsuarios(usuariosData);
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    }
  };

  const registrarUsuario = async () => {
    try {
      const response = await fetch('http://192.168.145.238:3000/api/usuarios/createUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          p_opcion: 'INSERTAR', // Opción para indicar que se desea insertar un nuevo usuario
          p_nickname: nombre, // Reemplaza 'nombre' con la variable que almacena el valor del campo Nombre en el formulario
          p_correo: email, // Reemplaza 'email' con la variable que almacena el valor del campo Correo en el formulario
          p_contrasenia: password, // Reemplaza 'password' con la variable que almacena el valor del campo Contraseña en el formulario
          p_descripcion: descripcion, // Agrega la variable correspondiente para el campo Descripción en el formulario
          p_nacimiento: null, // Agrega la variable correspondiente para el campo Nacimiento en el formulario
          p_altura: parseInt(altura), // Agrega la variable correspondiente para el campo Altura en el formulario
          p_peso: parseFloat(peso), // Agrega la variable correspondiente para el campo Peso en el formulario
          p_nivel: parseInt(nivel), // Agrega la variable correspondiente para el campo Nivel en el formulario
          p_image: null, // Agrega la variable correspondiente para el campo Imagen en el formulario
          p_path: null, // Agrega la variable correspondiente para el campo Ruta en el formulario
        }),
      });
      const data = await response.json();
      console.log('Respuesta del servidor:', data);
      // Realizar acciones adicionales después de registrar el usuario, si es necesario
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titleStyle}>Registro Usuario</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Nombre"
          placeholderTextColor="lightgrey"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Correo"
          placeholderTextColor="lightgrey"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Contraseña"
          placeholderTextColor="lightgrey"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Descripción"
          placeholderTextColor="lightgrey"
          value={descripcion}
          onChangeText={setDescripcion}
        />

        <TextInput
          style={styles.inputText}
          placeholder="Altura"
          placeholderTextColor="lightgrey"
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Peso"
          placeholderTextColor="lightgrey"
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Nivel"
          placeholderTextColor="lightgrey"
          keyboardType="numeric"
          value={nivel}
          onChangeText={setNivel}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={registrarUsuario}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
      <Text style={styles.titleStyle}>Lista de Usuarios</Text>
      <ScrollView horizontal>
        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <Text style={styles.columnHeader}>ID</Text>
            <Text style={styles.columnHeader}>Nickname</Text>
            <Text style={styles.columnHeader}>Correo</Text>
            <Text style={styles.columnHeader}>Contraseña</Text>
            <Text style={styles.columnHeader}>Descripción</Text>
            <Text style={styles.columnHeader}>Ingreso</Text>
            <Text style={styles.columnHeader}>Nacimiento</Text>
            <Text style={styles.columnHeader}>Altura</Text>
            <Text style={styles.columnHeader}>Peso</Text>
            <Text style={styles.columnHeader}>Nivel</Text>
            <Text style={styles.columnHeader}>Image</Text>
            <Text style={styles.columnHeader}>Path</Text>
            <Text style={styles.columnHeader}>Acciones</Text>
          </View>
          {usuarios.map((item) => (
            <View style={styles.tableRow} key={item.idUsuario}>
              <Text style={styles.columnData}>{item.idUsuario}</Text>
              <Text style={styles.columnData}>{item.nickname}</Text>
              <Text style={styles.columnData}>{item.correo}</Text>
              <Text style={styles.columnData}>******</Text>
              <Text style={styles.columnData}>{item.descripcion}</Text>
              <Text style={styles.columnData}>{item.ingreso}</Text>
              <Text style={styles.columnData}>{item.nacimiento}</Text>
              <Text style={styles.columnData}>{item.altura}</Text>
              <Text style={styles.columnData}>{item.peso}</Text>
              <Text style={styles.columnData}>{item.nivel}</Text>
              <Text style={styles.columnData}>{item.image}</Text>
              <Text style={styles.columnData}>{item.path}</Text>
              <Text style={styles.columnData}>Acciones</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default UsuariosScreen;

