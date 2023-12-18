import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { launchImageLibrary, launchCamera, ImageLibraryOptions, Callback, MediaType, ImagePickerResponse } from 'react-native-image-picker';
import { NavigationProp } from '@react-navigation/native';
import { TouchableHighlight, StatusBar, Image, Text, TextInput, View } from 'react-native';
import styles from './Styles';

const imgCamera = require('./img/cameraIcon2.png');

const RegistrarUsuario = ({ navigation }: { navigation: NavigationProp<any> }) => {
  // Validar campos

  const siguienteFormulario = () => {
    navigation.navigate('RegistroDatosUsuarios', {
      selectedImage: selectedImage,
      username: username,
      password: password,
      email: email,
      name: name,
      description: description
    })
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
        onPress={siguienteFormulario}
      >
        <Text style={styles.createText}>SIGUIENTE</Text>
      </TouchableHighlight>
    </KeyboardAwareScrollView>
  );
};

export default RegistrarUsuario;