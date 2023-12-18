import * as React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { Image, StatusBar, TouchableHighlight, Text, View } from 'react-native';
import styles from './Styles';

const logoImg = require('./img/logoGrisNegro.jpg');


const SeleccionUsuario = ({ navigation }: { navigation: NavigationProp<any> }) => {

    const vistaRegistroNormal = () => {
        navigation.navigate('RegistroUsuarioNormal')
    }

    const vistaRegistroProfesional = () => {
        navigation.navigate('RegistroUsuarioProfesional')
    }

    return (

        <View style={styles.viewStyle}>
            <StatusBar backgroundColor="black" />
            <Image source={logoImg} style={styles.logoSelectStyle}></Image>
            <TouchableHighlight style={styles.createBtn3}
                activeOpacity={0.2}
                underlayColor={'black'}
                onPress={vistaRegistroNormal}>
                <Text style={styles.btnTitle3}>Normal</Text>
            </TouchableHighlight>

            <Text style={{ color: 'white', textAlign: 'center', alignSelf: 'center', borderColor: 'grey', marginVertical: 0, borderLeftWidth: 3, borderRightWidth: 3, height: 170, width: 65, backgroundColor: 'black' }}></Text>
            <TouchableHighlight style={styles.createBtn3}
                activeOpacity={0.2}
                underlayColor={'black'}
                onPress={vistaRegistroProfesional}>
                <Text style={styles.btnTitle3}>Profesional</Text>
            </TouchableHighlight>
            <Text style={styles.seleccionTitle}>ELIGE TU PERFIL PARA COMENZAR</Text>
        </View>
    );
};

export default SeleccionUsuario;