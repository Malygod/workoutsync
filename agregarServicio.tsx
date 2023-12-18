import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationProp } from '@react-navigation/native';
import { TouchableHighlight, StatusBar, Image, Text, TextInput, View, Alert } from 'react-native';
import styles from './Styles';


const AgregarServicio = ({ navigation }: { navigation: NavigationProp<any> }) => {


  const [username, setUsername] = useState('');



  return (
    <KeyboardAwareScrollView style={styles.viewStyle} resetScrollToCoords={{ x: 0, y: 0 }} contentContainerStyle={styles.container} scrollEnabled={false}>
      <StatusBar backgroundColor="black" />
      <Text style={styles.registerTitle}>AGREGAR SERVICIO</Text>
      <Text style={styles.registerSmall}>Nombre</Text>
      <TextInput
        style={styles.registerInput}
        keyboardAppearance='dark'
        maxLength={25}
        placeholder='Clases de yoga'
        placeholderTextColor={'darkgrey'}
        value={username}
        onChangeText={setUsername}
      />
      <TouchableHighlight style={styles.createUser}
        activeOpacity={0.85}
        underlayColor={'white'}
            onPress={() => {
                    navigation.navigate('Perfil');
            }}
        >
        <Text style={styles.createText}>SIGUIENTE</Text>
      </TouchableHighlight>
    </KeyboardAwareScrollView>
  );
};

export default AgregarServicio;