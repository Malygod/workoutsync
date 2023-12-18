import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useEffect, useState, useRef } from 'react'; // Agrega useEffect y useRef a tus importaciones
import { NavigationProp } from '@react-navigation/native';
import { StatusBar, TouchableHighlight, Text, TextInput, View, Image, Alert, Animated, ImageBackground } from 'react-native';
import styles from './Styles';

const backgroundImg = require('./img/Mikethesaiyan.jpg');
const logoImg = require('./img/logoGrisNegro.jpg');

const IniciarSesion = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const vistaSeleccion = () => {
        navigation.navigate('SeleccionPerfil');
    };

    const verCRUD = () => {
        navigation.navigate('CRUD');
    };

    const logoOpacity = useRef(new Animated.Value(1)).current;
    const fadeAnim = useRef(new Animated.Value(0)).current; // Utiliza useRef para inicializar

    useEffect(() => {
        Animated.timing(logoOpacity, {
            toValue: 0,
            duration: 2500,
            useNativeDriver: true,
        }).start();
    }, []);

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2500,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    const [loginUsername, setUsername] = useState('');
    const [loginPassword, setPassword] = useState('');

    const handleLogin = async () => {
        const response = await fetch('http://192.168.1.92:3000/api/usuarios/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                loginUsername,
                loginPassword,
            }),
        });
        const data = await response.json();
        if (data.success) {
            console.log(data.user); // Aquí están los datos del usuario
            // Inicio de sesión exitoso
            if (data.user.codTipo === 1) {
                navigation.navigate('Perfil',
                    { data });
            } else if (data.user.codTipo === 2) {
                navigation.navigate('Perfil',
                    { data });
            }
        } else {
            // Error de inicio de sesión
            Alert.alert('Error', 'Inicio de sesión fallido');
        }
    };


    return (
        <KeyboardAwareScrollView style={styles.loginView} resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={true}>
            <StatusBar backgroundColor="black" />
            <Animated.Image source={logoImg} style={styles.backgroundLogin} />
            <Animated.Image source={backgroundImg} style={{ ...styles.loginIcon, opacity: fadeAnim }} />
            <Text style={styles.loginTitle}>WorkoutSync </Text>
            <Text style={styles.inputSmall}>Username</Text>
            <TextInput
                style={styles.loginInput}
                keyboardAppearance="dark"
                maxLength={25}
                placeholderTextColor={'grey'}
                placeholder="Malygod"
                value={loginUsername}
                onChangeText={setUsername}
            />
            <Text style={styles.inputSmall}>Password</Text>
            <TextInput
                style={styles.loginInput}
                keyboardAppearance="dark"
                maxLength={50}
                placeholderTextColor={'grey'}
                placeholder="∗∗∗∗∗∗∗∗∗"
                secureTextEntry
                value={loginPassword}
                onChangeText={setPassword}
            />
            <TouchableHighlight
                style={styles.loginBtn}
                activeOpacity={0.85}
                underlayColor={'black'}
                onPress={handleLogin}
            >
                <Text style={styles.btnTitle}>INGRESAR</Text>
            </TouchableHighlight>
            <Text style={styles.loginText} onPress={verCRUD}>
                ¿No has creado tu cuenta aún?
            </Text>
            <View style={styles.socialIcons}>
                <Icon name="google" size={22} color={"black"} style={styles.iconsStyle} />
                <Icon name="instagram" size={22} color={"black"} style={styles.iconsStyle} />
                <Icon name="twitter" size={22} color={"black"} style={styles.iconsStyle} />
            </View>
            <TouchableHighlight
                style={styles.createBtn2}
                activeOpacity={0.85}
                underlayColor={'white'}
                onPress={vistaSeleccion}
            >
                <Text style={styles.btnTitle2}>CREAR CUENTA</Text>
            </TouchableHighlight>
        </KeyboardAwareScrollView>
    );
};

export default IniciarSesion;