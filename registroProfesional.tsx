import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { launchImageLibrary, launchCamera, ImageLibraryOptions, Callback, MediaType, ImagePickerResponse } from 'react-native-image-picker';
import { NavigationProp } from '@react-navigation/native';
import { TouchableHighlight, StatusBar, Image, Text, TextInput, View, Alert } from 'react-native';
import styles from './Styles';

const imgCamera = require('./img/cameraIcon2.png');

const RegistrarProfesional = ({ navigation }: { navigation: NavigationProp<any> }) => {
  // Validar campos

  const registrarNuevoProfesional = async () => {
    try {
        const formData = new FormData();
        formData.append('selectedImage', {
            uri: selectedImage,
            type: 'image/jpeg',
            name: 'selectedImage.jpg',
        });
        formData.append('username', username);
        formData.append('password', password);
        formData.append('email', email);
        formData.append('name', name);
        formData.append('description', description);

        console.log('Datos enviados al servidor:', {
            selectedImage,
            username,
            password,
            email,
            name,
            description,
        });

        const response = await fetch('http://192.168.1.92:3000/api/usuarios/createNewProfesional', {
            method: 'POST',
            body: formData,
            headers: {
                'content-type': 'multipart/form-data',
            },
        });
        const data = await response.json();
        console.log('Respuesta del servidor:', data);

        if (data.message) {
            Alert.alert(
                'Registro exitoso', // Título de la alerta
                data.message, // Mensaje de la alerta
                [
                    {
                        text: 'Aceptar',
                        onPress: () => navigation.navigate('Home') // Navega a la pantalla de inicio de sesión cuando se presiona "Aceptar"
                    }
                ]
            );
        }
        // Realizar acciones adicionales después de registrar el usuario, si es necesario
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
    }
};

  const [imageSelectStyle, setImageSelectStyle] = useState(styles.imageSelect);
  const [imageSelectedStle, setImageSelectedStyle] = useState(styles.cameraIcon);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  
  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    selectionLimit: 1,
  };

  const ImagePick = async () => {
    await launchImageLibrary(options, response => {
      if (response.assets && response.assets.length > 0) {
        const selectedAsset = response.assets[0];
        setSelectedImage(selectedAsset.uri);
        setImageSelectStyle(styles.imageSelectSelected);
        setImageSelectedStyle(styles.imageStyle);
      } else {
        setSelectedImage(null);
        setImageSelectStyle(styles.imageSelect);
        setImageSelectedStyle(styles.cameraIcon);
      }
    });
  };


  return (
    <KeyboardAwareScrollView style={styles.viewStyle} resetScrollToCoords={{ x: 0, y: 0 }} contentContainerStyle={styles.container} scrollEnabled={false}>
      <StatusBar backgroundColor="black" />
      <Text style={styles.registerTitle}>INGRESA TUS DATOS</Text>
      <TouchableHighlight
        onPress={ImagePick}
        underlayColor={'whitesmoke'}
        style={imageSelectStyle}>
        <Image
          source={selectedImage ? { uri: selectedImage } : imgCamera}
          style={imageSelectedStle}
          resizeMethod='resize'
          resizeMode='cover'
        ></Image>
      </TouchableHighlight>
      <Text style={styles.registerSmall}>Username</Text>
      <TextInput
        style={styles.registerInput}
        keyboardAppearance='dark'
        maxLength={25}
        placeholder='aesaiyan_'
        placeholderTextColor={'darkgrey'}
        value={username}
        onChangeText={setUsername}
      />
      <Text style={styles.registerSmall}>Password</Text>
      <TextInput
        style={styles.registerInput}
        keyboardAppearance='dark'
        maxLength={50}
        placeholder='∗∗∗∗∗∗∗∗∗'
        placeholderTextColor={'darkgrey'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}

      />
      <Text style={styles.registerSmall}>Email</Text>
      <TextInput
        style={styles.registerInput}
        keyboardAppearance='dark'
        maxLength={70}
        placeholder='notengo@nombre.com'
        placeholderTextColor={'darkgrey'}
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.registerSmall}>Name</Text>
      <TextInput
        style={styles.registerInput}
        keyboardAppearance='dark'
        maxLength={100}
        placeholder='Matias'
        placeholderTextColor={'darkgrey'}
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.registerSmall}>Bio</Text>
      <TextInput
        style={styles.registerInput}
        keyboardAppearance='dark'
        maxLength={255}
        placeholder='Escribe algo sobre ti'
        placeholderTextColor={'darkgrey'}
        value={description}
        onChangeText={setDescription}
      />
      <TouchableHighlight style={styles.createUser}
        activeOpacity={0.85}
        underlayColor={'white'}
        onPress={registrarNuevoProfesional}
      >
        <Text style={styles.createText}>SIGUIENTE</Text>
      </TouchableHighlight>
    </KeyboardAwareScrollView>
  );
};

export default RegistrarProfesional;