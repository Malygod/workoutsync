import * as React from 'react';
import { useState } from 'react'; // Import the useState function from the react package
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { Image, Modal, StatusBar, Text, View, ScrollView, Dimensions, TouchableHighlight, Alert } from 'react-native';
import styles from './Styles';

type PerfilUsuarioRouteProp = RouteProp<{ Perfil: { data: any } }, 'Perfil'>;

const PerfilUsuario = ({ navigation, route }: { navigation: NavigationProp<any>, route: PerfilUsuarioRouteProp }) => {
    const user = route.params?.data.user;

    console.log('bio:', user.bio); // Imprime el valor de user.bio en la consola
    console.log('correo:', user.correo); // Imprime el valor de user.correo en la consola
    console.log('nickname:', user.nickname); // Imprime el valor de user.nickname en la consola
    console.log('nombre:', user.nombre); // Imprime el valor de user.nombre en la consola
    console.log('tipo', user.codTipo)
    console.log('userID:', user.userID); // Imprime el valor de user.userID en la consola
    console.log('img:', user.img); // Imprime el valor de user.img en la consola


    const imageUrl = `http://192.168.1.92:3000/api/usuario/userImages/${user.img}`;
    console.log(imageUrl);

    const backgroundImg = require('./img/Mikethesaiyan.jpg');
    const logoImg = require('./img/logoGrisNegro.jpg');
    const correr = require('./deportes/correr.jpg');
    const ciclismo = require('./deportes/ciclismo.jpg');
    const calistenia = require('./deportes/calistenia.jpg');

    const [modalVisible, setModalVisible] = useState(false);
    const [iconName, setIconName] = useState('bars');

    return (
        <View style={styles.viewStyle}>
            <ScrollView style={styles.dataView}>
                <View style={styles.iconView}>
                    <Image source={logoImg} style={styles.imgSearch}></Image>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>

                                <TouchableHighlight
                                    style={{ ...styles.openButton, backgroundColor: "black" }}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                        setIconName('bars');
                                    }}
                                >
                                    <Icon name="arrow-down" size={30} color={"white"} />
                                </TouchableHighlight>
                                <TouchableHighlight
                                    style={styles.openButton}
                                    onPress={() => {
                                        if (user.codTipo === 1) {
                                            navigation.navigate('SeleccionarDeporte');
                                        } else if (user.codTipo === 2) {
                                            navigation.navigate('AddService');
                                        } else {
                                            navigation.navigate('PantallaDefault');
                                        }
                                    }}
                                >
                                    <Text style={styles.modalText}>
                                        {user.codTipo === 1 ? 'Buscar deporte' : user.codTipo === 2 ? 'Agregar servicio' : 'Opción default'}
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                    <TouchableHighlight
                        style={styles.openButton}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                            setIconName(modalVisible ? 'bars' : 'arrow-down');
                        }}
                    >
                        <Icon name={iconName} size={30} color={"white"} />
                    </TouchableHighlight>
                </View>
                <View style={styles.imgTextView}>
                    <View style={styles.followCounterView}>
                        <Text style={styles.followText}>Followers</Text>
                        <Text style={styles.followCount}>300</Text>
                    </View>
                    <Image source={{ uri: imageUrl }} style={styles.imageDePerfil} />
                    <View style={styles.followCounterView}>
                        <Text style={styles.followText}>Following</Text>
                        <Text style={styles.followCount}>300</Text>
                    </View>
                </View>
                <View style={styles.usernameView}>
                    <Text style={styles.usernameText}>{user.nickname}</Text>
                </View>
                <View style={styles.userDescription}>
                    <Text style={styles.descriptionText}>{user.nombre}</Text>
                    <Text style={styles.descriptionText}>{user.bio}</Text>
                </View>
                <View style={styles.publicView}>
                    <Image source={ciclismo} style={styles.publicImg}></Image>
                    <Image source={correr} style={styles.publicImg}></Image>
                    <Image source={calistenia} style={styles.publicImg}></Image>
                </View>
            </ScrollView>
            <View style={styles.navBar}>
                <Icon name="home" size={25} color={"white"} />
                <Icon name="search" size={25} color={"white"} />
                <Icon name="plus" size={25} color={"white"} />
                <Icon name="heart" size={25} color={"white"} />
                <Image source={{ uri: imageUrl }} style={styles.imgSearch}></Image>
            </View>
        </View>
    );
};

export default PerfilUsuario;