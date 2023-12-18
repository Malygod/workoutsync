import * as React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { Image, StatusBar, Text, View, ScrollView, Dimensions, TouchableHighlight } from 'react-native';
import styles from './Styles';


const { width: viewportWidth } = Dimensions.get('window');

const SeleccionDeporte = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const vistaPerfil = () => {
        navigation.navigate('RegistroUsuarioNormal');
    };

    const entries = [
        { title: 'Running', image: require('./deportes/correr.jpg'), description: 'Running es un ejercicio que implica correr a un ritmo constante, mejorando la salud cardiovascular, fortaleciendo los músculos y ayudando en la pérdida de peso.' },
        { title: 'Ciclismo', image: require('./deportes/ciclismo.jpg'), description: 'El ciclismo de ruta es un deporte que consiste en recorrer largas distancias en bicicleta por carreteras. Es una actividad que mejora la resistencia física, fortalece los músculos de las piernas y es excelente para la salud cardiovascular.' },
        { title: 'Gimnasio', image: require('./deportes/gym.jpg'), description: 'El entrenamiento con pesas es una actividad física que implica levantar pesas para fortalecer y tonificar los músculos, mejorar la resistencia y la salud ósea, y aumentar el metabolismo.' },
        { title: 'Calistenia', image: require('./deportes/calistenia.jpg'), description: 'La calistenia es un tipo de entrenamiento que utiliza el peso corporal para fortalecer y tonificar los músculos. Mejora la flexibilidad, la resistencia y la coordinación.' },
        { title: 'Descenso', image: require('./deportes/downhill.jpg'), description: 'El downhill o descenso es una modalidad de ciclismo de montaña que implica descender por terrenos empinados y accidentados a alta velocidad, requiere habilidades técnicas y es altamente adrenalínico.' },
        { title: 'Karate', image: require('./deportes/karate.jpg'), description: 'El karate es un arte marcial originario de Japón que se centra en golpes, patadas y defensas utilizando principalmente las manos y los pies. Mejora la disciplina, la concentración y la condición física.' },
        { title: 'Jogging', image: require('./deportes/jogging.jpg'), description: 'Jogging es una actividad física de bajo impacto que implica correr a un ritmo lento o moderado, mejorando la salud cardiovascular y la resistencia física..' },
        // Add more sports here
    ];

    return (
        <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={true}
        >
            {entries.map((entry, index) => (
                <View key={index} style={{ width: viewportWidth }}>
                    <Image source={entry.image} resizeMode='cover' style={styles.viewStyle2} />
                    <View style={styles.ViewContent}>
                        <Text style={styles.sportTitle}>{entry.title}</Text>
                        <Text style={styles.sportDescText}>{entry.description}</Text>
                        <TouchableHighlight
                            style={styles.workoutButton}
                            activeOpacity={0.1}
                            underlayColor={'black'}
                        >
                            <Text style={styles.workoutText}>¡Entrenar!</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

export default SeleccionDeporte;