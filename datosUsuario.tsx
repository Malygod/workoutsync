import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { Slider } from '@miblanchard/react-native-slider';
import { TouchableHighlight, StatusBar, TouchableOpacity, Image, Text, TextInput, View, Alert } from 'react-native';
import DatePicker from 'react-native-date-picker';
import styles from './Styles';

type RootStackParamList = {
    RegistroDatosUsuarios: {
        selectedImage: string | null,
        username: string,
        password: string,
        email: string,
        name: string,
        description: string
    };
};

type Props = {
    route: RouteProp<RootStackParamList, 'RegistroDatosUsuarios'>;
    navigation: NavigationProp<any>;
};


const defaultUserImage = require('./img/defaultUserImage.jpg')
const calendarDatePicker = require('./img/calendarSelector.png')



const RegistroDatosUsuario = ({ route, navigation }: Props) => {

    const { selectedImage, username, password, email, name, description } = route.params;

    const [altura, setAltura] = useState<number>(0);
    const [peso, setPeso] = useState<number>(0);
    const [sliderValue, setSliderValue] = useState<number[]>([0]);
    const [date, setDate] = useState(new Date())

    const [open, setOpen] = useState(false)


    const registrarUsuario = async () => {
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
            formData.append('altura', altura.toString());
            formData.append('peso', peso.toString());
            formData.append('sliderValue', sliderValue.toString());
            formData.append('date', date.toISOString());

            console.log('Datos enviados al servidor:', {
                selectedImage,
                username,
                password,
                email,
                name,
                description,
                altura,
                peso,
                sliderValue,
                date: date.toISOString(),
            });

            const response = await fetch('http://192.168.1.92:3000/api/usuarios/createNewUser', {
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

    return (
        <KeyboardAwareScrollView style={styles.viewStyle}>
            <StatusBar backgroundColor="black" />
            <Text style={styles.registerTitle}>INGRESA TUS DATOS</Text>

            {selectedImage ? (
                <Image source={{ uri: selectedImage }}
                    style={styles.imageSelectSelected}
                    resizeMethod='resize'
                    resizeMode='cover' />
            ) : <Image source={defaultUserImage}
                style={styles.imageSelectSelected}
                resizeMethod='resize'
                resizeMode='cover' />
            }

            <Text style={styles.registerSmall}>Altura</Text>
            <TextInput
                style={styles.registerInput}
                keyboardAppearance='dark'
                keyboardType='numeric'
                maxLength={3}
                value={altura.toString()}
                onChangeText={text => setAltura(Number(text))}
            />
            <Text style={styles.registerSmall}>Peso</Text>
            <TextInput
                style={styles.registerInput}
                keyboardAppearance='dark'
                keyboardType='numeric'
                maxLength={4}
                value={peso.toString()}
                onChangeText={text => setPeso(Number(text))}
            />
            <Text style={styles.registerSmall}>Nivel</Text>
            <View style={styles.sliderContainer}>
                <Slider
                    step={1}
                    minimumValue={0}
                    maximumValue={3}
                    trackStyle={styles.sliderTrackStyle}
                    value={sliderValue}
                    onValueChange={(value) => setSliderValue(value)}
                />
                <Text style={{ color: 'white', alignSelf: 'center', margin: 0, padding: 0 }}>
                    {sliderValue[0] === 0 ? 'Sin experiencia' :
                        sliderValue[0] === 1 ? 'Principiante' :
                            sliderValue[0] === 2 ? 'Intermedio' :
                                sliderValue[0] === 3 ? 'Avanzado' : 'Dios'}
                </Text>
            </View>

            <TouchableOpacity style={styles.touchableDatePicker} activeOpacity={0.3} onPress={() => setOpen(true)} >
                <Image source={calendarDatePicker} style={styles.selectBirthDay} resizeMode='cover'></Image>
                <DatePicker
                    modal
                    theme='dark'
                    title={'Nacimiento'}
                    open={open}
                    mode={"date"}
                    date={date}
                    minimumDate={new Date("1935-01-01")}
                    maximumDate={new Date()}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </TouchableOpacity>

            <TouchableHighlight
                style={styles.createUser2}
                activeOpacity={0.85}
                underlayColor={'white'}
                onPress={registrarUsuario}
            >
                <Text style={styles.createText2}>CREAR CUENTA</Text>
            </TouchableHighlight>
        </KeyboardAwareScrollView>
    );
};

export default RegistroDatosUsuario;